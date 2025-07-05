import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

const s3Client = new S3Client({
    region: "us-east-1",
});

async function uploadToS3() {
    try {
        const putObjectCommand = new PutObjectCommand({
            Bucket: "awspodcastphotovideos",
            Key: "test.txt",
            Body: "Hello, world!",
        });

        const response = await s3Client.send(putObjectCommand);
        console.log("File uploaded successfully!");
        console.log("Response:", response);
        return response;
    } catch (error) {
        console.error("Error uploading to S3:", error);
        throw error;
    }
}


uploadToS3()
    .then(() => {
        console.log("S3 upload completed successfully");
    })
    .catch((error) => {
        console.error("S3 upload failed:", error);
        process.exit(1);
    });