import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3'
import uniqid from 'uniqid'
export async function POST(req) {
    const formdata = await req.formData()
    console.log(formdata)
    const file = await formdata.get('file')
    console.log(file)
    const random = uniqid()
    const ext = await file.name.split('.').pop()
    const filename = random +'.'+ ext
    console.log(filename)
    const chunks = []
    for await (const chunk of file.stream()){
        chunks.push(chunk)
    } 
   const region = process.env.AWS_BUCKET_Region as string 
    const s3 = new S3Client({
        region ,
        credentials:{
            accessKeyId : process.env.S3_ACCESS_KEY as string ,
            secretAccessKey :process.env.S3_SECRET_KEY as string
        }
    })

    const Bucket = process.env.AWS_BUCKET_NAME as string 
    await s3.send( new PutObjectCommand({
        Bucket ,
        Key : filename ,
        ACL: 'public-read',
        Body : Buffer.concat(chunks),
        ContentType: file.type,
    }))

    const link = `https://${Bucket}.s3.${region}.amazonaws.com/${filename}`

    console.log(link)
    return Response.json({
        message: "true" ,
        link
    })
}