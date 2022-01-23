import { v4 } from 'uuid';
import { S3 } from 'aws-sdk';

// creating s3 client
const s3Client = new S3();

//before deploying we have to give this lambda the permition to list otherwise we will get an Access Denied error
async function handler(event: any, context: any) {
    const buckets = await s3Client.listBuckets().promise();
    console.log('GOT AN EVENT:');
    console.log(event);

    return {
        statusCode: 200,
        body: "Here are your buckets: " + JSON.stringify(buckets.Buckets)
    }
}

export { handler }