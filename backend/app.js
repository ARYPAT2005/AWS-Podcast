const express = require('express');
const app = express();
const { CognitoIdentityProviderClient, SignUpCommand, ConfirmSignUpCommand, InitiateAuthCommand } = require("@aws-sdk/client-cognito-identity-provider");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
const CLIENT_ID = process.env.CLIENT_ID;

app.use(express.json());
const authenticateJWT = async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
};
app.post("/signup", async (req, res) => {
    const { username, email, password } = req.body;
    const params = {
        ClientId: CLIENT_ID,
        Username: username,
        Password: password,
        UserAttributes: [
            { Name: "email", Value: "arypat2005@gmail.com" }
          ]
    };
    const command = new SignUpCommand(params);
    try {
        const data = await client.send(command);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.post("/confirm-signup", async (req, res) => {
    const { username, code } = req.body;
    const params = {
        ClientId: CLIENT_ID,
        Username: username,
        ConfirmationCode: code,
    };
    try {
        const command = new ConfirmSignUpCommand(params)
        const data = await client.send(command);
        res.json(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const params = {
        ClientId: CLIENT_ID,
        AuthFlow: "USER_PASSWORD_AUTH",
        AuthParameters: {
            USERNAME: username,
            PASSWORD: password,
        },
    };
    try {
        const command = new InitiateAuthCommand(params);
        const data = await client.send(command);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.get("/protected", authenticateJWT, (req, res) => {
    res.json({ message: "Protected route", user: req.user });
});
app.post("/logout", async (req, res) => {
    const { accessToken } = req.body;
    const params = {
        AccessToken: accessToken
    };
    try {
        const data = await client.globalSignOut(params);
        res.json(data);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}); 
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});