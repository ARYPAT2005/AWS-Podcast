# <img width="200" height="104" alt="image" src="https://github.com/user-attachments/assets/2c21c836-76e5-44cc-8750-298f52b98439" />

Podverse is a modern, feature-rich podcast platform designed to make discovering, streaming, and managing podcasts effortless. Whether you're a host or a listener, Podverse offers a clean, responsive interface for sharing and enjoying audio content. Upload episodes, explore curated shows, and tune in seamlessly—PodStream makes podcasting simple and engaging.

## AWS Cloud Architecture Overview:
- Leveraged **AWS Lambda** for scalable, event-driven backend processing to smoothly handle fluctuating traffic
- Employed **AWS DynamoDB** as a high-performance NoSQL database for storing podcast metadata and tracking uploads
- Utilized **AWS S3** with partitioned storage to efficiently manage and deliver podcast files and media assets
- Hosted frontend and backend applications on **AWS EC2** to ensure reliability and flexibility
- Implemented **AWS Cognito** for robust, scalable user authentication and authorization
  
## Tech Stack

| Layer        | Tools & Services                                   |
| :----------- | :------------------------------------------------  |
| Frontend     | React, Next.js, Tailwind CSS, Shadcn               |
| Backend      | API Gateway + AWS Lambda                           |
| Storage      | AWS S3 (videos and thumbnails), DynamoDB (metadata)|
| Auth         | AWS Cognito                                        |
| Hosting      | AWS EC2                                            |
| Media Upload | Utilized S3 pre-signed URLs                        |

## Features
- Dark Mode: Comfortable viewing with light/dark theme toggle
- Smart Search: Quickly find podcasts, episodes, or topics using keyword-based search
- Video Metadata: Support for titles, descriptions, and thumbnails
- User Authentication: Secure signup and login powered by AWS Cognito
- Video Uploading: Upload podcast videos and audio files securely using S3 pre-signed URLs

## Video


## Screenshots
<figure style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/0fc1790e-7570-485b-911f-8d7dcb652f3e" alt="Homepage" style="width: 60%; display: block; margin: auto;" />
</figure>

<figure style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/ce7b3a08-9fa2-43af-8558-e0022df02adf" alt="Signup Page" style="width: 60%; display: block; margin: auto;" />
</figure>

<figure style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/68b0f490-5be4-43e8-88cb-8c5d7892bc00" alt="Login Page" style="width: 60%; display: block; margin: auto;" />
</figure>

<figure style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/4232c17f-87a6-4524-bfac-9d72a4478961" alt="Page Preview" style="width: 60%; display: block; margin: auto;"/>
</figure>

<figure style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/3af404f2-4392-464b-81c4-fda004532ede" alt="Upload Page" style="width: 60%; display: block; margin: auto;" />
</figure>

## AWS Screenshots

Lambda Functions used:
<img width="853" height="227" alt="image" src="https://github.com/user-attachments/assets/2798f8b2-80b5-417c-9d0b-e95dbc657849" />

API Gateway:
<img width="1059" height="438" alt="image" src="https://github.com/user-attachments/assets/fffdbe10-b338-419e-b3ca-6d81a22dd958" />


Amazon S3 Bucket Used:
<img width="1069" height="293" alt="image" src="https://github.com/user-attachments/assets/aaffa5b3-d716-415f-952d-619724d826f5" />
<img width="1041" height="327" alt="image" src="https://github.com/user-attachments/assets/10bcc4c6-261a-448f-a73f-c9a71ba78f19" />
<img width="1044" height="332" alt="image" src="https://github.com/user-attachments/assets/fe974ccf-1a63-4734-b0dd-68109f725c81" />



DynamoDB metadata:
<img width="1060" height="170" alt="image" src="https://github.com/user-attachments/assets/e523555f-cecf-4dea-af5f-d62fdf14b314" />
<img width="792" height="216" alt="image" src="https://github.com/user-attachments/assets/1ccb27d1-05a8-4749-94a0-1d93d8b15776" />



















