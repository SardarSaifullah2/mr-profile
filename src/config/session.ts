import { authOptions } from "@/app/api/auth/[...nextauth]/authOption";
import { getServerSession } from "next-auth";

export default async function Session(){
    const session = await getServerSession(authOptions)
    const user = session?.user
    return user
}