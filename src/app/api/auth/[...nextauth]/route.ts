import NextAuth from "next-auth";  
import { authOptions } from "./authOption";


const handler = NextAuth(authOptions : AuthOptions)

export {handler as GET, handler as POST}