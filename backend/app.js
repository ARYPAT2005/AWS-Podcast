const { 
    CognitoIdentityProviderClient, 
    SignUpCommand, 
    ConfirmSignUpCommand, 
    InitiateAuthCommand, 
    GlobalSignOutCommand 
  } = require("@aws-sdk/client-cognito-identity-provider");
  
  const client = new CognitoIdentityProviderClient({ region: "us-east-1" });
  const CLIENT_ID = process.env.CLIENT_ID;
  
  exports.handler = async (event) => {
    const { path, httpMethod, body } = event;
  
    if (httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method Not Allowed" }),
        headers: { "Content-Type": "application/json" }
      };
    }
  
    let data;
    try {
      data = JSON.parse(body);
    } catch {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Invalid JSON" }),
        headers: { "Content-Type": "application/json" }
      };
    }
  
    try {
      switch (path) {
        case "/signup":
          const signUpCommand = new SignUpCommand({
            ClientId: CLIENT_ID,
            Username: data.username,
            Password: data.password,
            UserAttributes: [
              { Name: "email", Value: data.email }
            ]
          });
          const signUpData = await client.send(signUpCommand);
          return {
            statusCode: 200,
            body: JSON.stringify(signUpData),
            headers: { "Content-Type": "application/json" }
          };
  
        case "/confirm-signup":
          const confirmCommand = new ConfirmSignUpCommand({
            ClientId: CLIENT_ID,
            Username: data.username,
            ConfirmationCode: data.code
          });
          const confirmData = await client.send(confirmCommand);
          return {
            statusCode: 200,
            body: JSON.stringify(confirmData),
            headers: { "Content-Type": "application/json" }
          };
  
        case "/login":
          const loginCommand = new InitiateAuthCommand({
            ClientId: CLIENT_ID,
            AuthFlow: "USER_PASSWORD_AUTH",
            AuthParameters: {
              USERNAME: data.username,
              PASSWORD: data.password
            }
          });
          const loginData = await client.send(loginCommand);
          return {
            statusCode: 200,
            body: JSON.stringify(loginData),
            headers: { "Content-Type": "application/json" }
          };
  
        case "/logout":
          const logoutCommand = new GlobalSignOutCommand({
            AccessToken: data.accessToken
          });
          const logoutData = await client.send(logoutCommand);
          return {
            statusCode: 200,
            body: JSON.stringify(logoutData),
            headers: { "Content-Type": "application/json" }
          };
  
        default:
          return {
            statusCode: 404,
            body: JSON.stringify({ message: "Route not found" }),
            headers: { "Content-Type": "application/json" }
          };
      }
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: err.message }),
        headers: { "Content-Type": "application/json" }
      };
    }
  };
  