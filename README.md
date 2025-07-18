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
<figure>
  <img width="1280" height="631" src="https://github.com/user-attachments/assets/694c4f65-7709-43a0-b5a6-46ad965b7ee7" alt="Homepage after user login">
  <figcaption><strong>Figure 1.</strong>Homepage</figcaption>
</figure>









