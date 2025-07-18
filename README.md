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
- Video metadata (titles, descriptions, thumbnails)
- User authentication

## Video


## Screenshots
<figure style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/0fc1790e-7570-485b-911f-8d7dcb652f3e" alt="Homepage" style="width: 40%; display: block; margin: auto;" />
</figure>

<figure style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/ce7b3a08-9fa2-43af-8558-e0022df02adf" alt="Signup Page" style="width: 40%; display: block; margin: auto;" />
</figure>

<figure style="text-align: center;">
  <img src="https://github.com/user-attachments/assets/68b0f490-5be4-43e8-88cb-8c5d7892bc00" alt="Login Page" style="width: 40%; display: block; margin: auto;" />
</figure>

<figure style="text-align: center;">
  <img width="1270" height="669" alt="Podcasts" src="https://github.com/user-attachments/assets/efe30858-c8c6-4461-8457-c4794c800544" style="width: 40%; display: block; margin: auto;/>
</figure>














