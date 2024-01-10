import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URL as string
if (!uri) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"')
}

const options = {}

let client: MongoClient;
let clientPromise: Promise<MongoClient>

client = new MongoClient(uri, options)
clientPromise = client.connect()



export default clientPromise