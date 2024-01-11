import { MongoDBAdapter, MongoDBAdapterOptions } from "@auth/mongodb-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from 'next-auth/providers/google'
import clientPromise from "@/config/config";
import  { Adapter } from 'next-auth/adapters'

const option :MongoDBAdapterOptions = {
}
export const authOptions = {
    secret:process.env.NEXT_AUTH_SECRET  as string,
    adapter : MongoDBAdapter(clientPromise) as Adapter,
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