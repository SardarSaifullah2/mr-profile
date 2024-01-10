import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'
import nextAuth from "next-auth";  
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/config/config";

export const authOptions = {
    adapter : MongoDBAdapter(clientPromise) ,
    secret:process.env.NEXT_AUTH_SECRET ,
    providers:[
        GithubProvider({
           clientId : process.env.GITHUB_CLIENT_ID as string ,
           clientSecret : process.env.GITHUB_CLIENT_SECRET as string
        }),
        GoogleProvider({
           clientId : process.env.GOOGLE_CLIENT_ID as string ,
           clientSecret : process.env.GOOGLE_CLIENT_SECRET as string
        })
    ]
}
const handler = nextAuth(authOptions)

export {handler as GET, handler as POST}