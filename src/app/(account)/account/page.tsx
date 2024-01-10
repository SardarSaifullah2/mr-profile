'use server'

import { ConnectDb } from "@/config/libs/connectDb"
import GrapUsername from "@/components/grapUsername"
import Session from "@/config/session"
import { redirect } from "next/navigation"
import UserInformation from "@/components/forms/UserInformation"
import { UserSocialForm } from "@/components/forms/UserSocialform"
import { UseFullLinks } from "@/components/forms/useFullLinks"
import { SponserForm } from "@/components/forms/sponser"


export default async function Page({searchParams}){
   const PageData = await ConnectDb()
   const user = await Session()
   const uri = PageData?.uri
   const searchUsername = searchParams?.username
  
   if(!user){
    return(
        redirect('/api/auth/signin?callbackUrl=http%3A%2F%2Flocalhost%3A3000%2F')
    )
   }

   if(!uri){
    return(
        <div>
             <GrapUsername searchUsername = {searchUsername}/>          
        </div>
    )
   }
    return(
        <div className="px-11 py-10">
            <UserInformation PageData = {PageData}/>
            <UserSocialForm PageData = {PageData}/>
            <UseFullLinks PageData = {PageData}/>
            <SponserForm PageData = {PageData} />
        </div>
    )
}