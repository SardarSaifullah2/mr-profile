import nextAuth from "next-auth";  
import { authOptions } from "./authOption";


const handler = nextAuth(authOptions)

export {handler as GET, handler as POST}