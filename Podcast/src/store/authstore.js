import { create } from "zustand";
import axios from "axios";
import { jwtDecode } from 'jwt-decode';
import { nanoid } from 'nanoid';
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
const BUCKET_NAME = "awspodcastphotovideos";

const s3 = new S3Client({
    region: "us-east-1",
    // credentials: {
    //     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    //     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    // }
  });
const setCookie = (name, value, days = 7) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
};

const getCookie = (name) => {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};

const deleteCookie = (name) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

export const useAuthStore = create((set, get) => ({
    user: null,
    email: null,
    isAuthenticated: false,
    signup: async (values) => {
        const {email, password, username} = values
        try {
            const response = await axios.post(
                "https://u02i1lwka8.execute-api.us-east-1.amazonaws.com/dev/signup",
                {
                    "route": "/signup",
                    username,
                    email,
                    password
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );              
            const data = response.data;
            set( {user: username , email: email });
            console.log("Signup successful:", data);
            return data;
        } catch (error) {
            console.error("Signup error:", error.response?.data || error.message);
            throw error;
        }
    },
    verifyCode: async (values) => {
        const {username, code } = values
        try {
            const response = await axios.post(
                "https://u02i1lwka8.execute-api.us-east-1.amazonaws.com/dev/signup",
                {
                    "route": "/confirm-signup",
                    username,
                    code
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );              
            const data = response.data;
            console.log("Verification successful:", data);
            return data;
        } catch (error) {
            console.error("Verification error:", error.response?.data || error.message);
            throw error;
        }
    },
    login: async (values) => {
        const {username, password } = values
        try {
            const response = await axios.post(
                "https://u02i1lwka8.execute-api.us-east-1.amazonaws.com/dev/signup",
                {
                    "route": "/login",
                    username,
                    password
                },
                {
                  headers: {
                    "Content-Type": "application/json",
                  },
                }
              );              
            const data = response.data;
            console.log("Login success:", data);
            
            if (data.body && data.body.AuthenticationResult && data.body.AuthenticationResult.AccessToken) {
                const accessToken = data.body.AuthenticationResult.AccessToken;
                
                
                setCookie('accessToken', accessToken, 1);
                
                set({ 
                    user: username, 
                    isAuthenticated: true,
                    accessToken: accessToken 
                });
                
                console.log("Access token stored in cookie:", accessToken);
            }
            
            return data;
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message);
            throw error;
        }
    },
    logout: () => {
        deleteCookie('accessToken');
        
        set({ 
            user: null, 
            email: null, 
            isAuthenticated: false,
            accessToken: null 
        });
        
        console.log("Logged out and cookies cleared");
    },
    checkAuth: () => {
        const accessToken = getCookie('accessToken');
        console.log("Token",accessToken)
        if (accessToken) {
            try {
                const decoded = jwtDecode(accessToken);
                set({user: decoded.username})
                const now = Date.now() / 1000;
    
                if (decoded.exp && decoded.exp > now) {
                    set({ isAuthenticated: true, accessToken });
                    return true;
                } else {
                    console.warn("Access token expired");
                    deleteCookie('accessToken');
                    return false;
                }
            } catch (e) {
                console.error("Invalid token:", e.message);
                deleteCookie('accessToken');
                return false;
            }
        }
        return false;
    },
    podcastMaker: async (values) => {
        console.log("podcastMaker values:", values);
        const { title, description, publishedAt, videoFile, photo } = values;
        const vidID = nanoid();
        const username = get().user;
    
        console.log("Attempting DynamoDB write...");
        try {
            const videoKey = `videos/${vidID}.mp4`;
            const photoKey = `thumbnails/${vidID}.jpg`;

            const dbResponse = await axios.post("https://u02i1lwka8.execute-api.us-east-1.amazonaws.com/dev/dynamoDBData", {
                user: username,
                vidID,            
                title,           
                description,
                publishedAt,
                videoKey,         
                photoKey,
                videoContentType: videoFile.type,
                photoContentType: photo.type,         
            });
            console.log("Video File Type:", videoFile.type);
            // console.log("Content-Type in PutObjectCommand:", videoContentType);
            console.log("Photo File Type:", photo.type);    
            console.log("DBRESPONSE:",dbResponse.data)
            const { videoUploadUrl, photoUploadUrl } = dbResponse.data;
            console.log("Video:",videoUploadUrl)
            console.log("Photo",photoUploadUrl)
            console.log("📹 Video MIME type:", videoFile?.type);
            console.log("🖼️ Photo MIME type:", photo?.type);

            const sentVideo = await fetch(videoUploadUrl, {
                method: 'PUT',
                body: videoFile,
                headers: {
                  'Content-Type': videoFile.type,
                  "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
                },
            });
            console.log("sentVid", sentVideo);
            if (!sentVideo.ok) {
                const errText = await sentVideo.text();
                throw new Error("Video upload failed: " + errText);
              }
            const sentPhoto = await fetch(photoUploadUrl, {
                method: 'PUT',
                body: photo,
                headers: {
                  'Content-Type': photo.type,
                  "x-amz-content-sha256": "UNSIGNED-PAYLOAD",
                },
            });
            if (!sentPhoto.ok) {
                const errText = await sentPhoto.text();
                throw new Error("Photo upload failed: " + errText);
              }
            console.log("sentPhoto", sentPhoto);

            return dbResponse.data;
        } catch (error) {
            console.error('Upload failed:', error);
            throw error;
        }
    },
    getData: async () => {
        try {
            const response = await axios.get("https://u02i1lwka8.execute-api.us-east-1.amazonaws.com/dev/getData");
            const data = response.data;
            console.log("Fetched Data", data);
            return data
        } catch (error) {
            console.error("Failed to fetch data:", error.response?.data || error.message);
            throw error;
        }
        
    }
}));