'use server'
import { Page } from "@/models/profileDataSchema"
import mongoose from "mongoose"
import Session from "@/config/session"


type Links = {
    key : number ;
    title : string ;
    link : string;
}
type Sponser = {
    title : string ;
    link : string;
}
import { SponserState } from "@/components/forms/sponser"





export async function ProfileData(formData : FormData) {
    const user =await Session()
    const username = formData.get('username')
    if(user){
        const email = user?.email
        await mongoose.connect(process.env.MONGODB_URL!  as string)
        const checkUser = await Page.findOne({uri : username})
        if(checkUser){
            return false
        }
        else{
            await Page.create({
                 owner : email , uri : username , profileImg : user?.image
            })
            return true
        }
    }
   
}

export async function ProfileFormData(formData : FormData){
    const user =await Session()
    if(user){
        const email = user.email
        await mongoose.connect(process.env.MONGODB_URL!  as string)
        const checkUser = await Page.findOne({owner : email})
        if(checkUser){
            const formValue = ['displayName' , 'bio' , 'color' ,'location' , 'profileImg' , 'jobTitle']
            const formFillValue: Record<string, string>[] = [];
             for (const field of formValue ){
                formFillValue.push({ [field]: formData.get(field) as string })
            }
           try {
            await Object.assign(checkUser , formFillValue)
            await checkUser.save()
            return true
           } catch (error) {
             console.log(error)
             return false
           }
        }
        else{
          return false
        }
    }

}

export async function ProfileButton(formData : FormData){
    const user =await Session()
    if(user){
        const email = user.email
        await mongoose.connect(process.env.MONGODB_URL!  as string)
        const checkUser = await Page.findOne({owner : email})
        if(checkUser){
            const formValue = [ 'gmail' , 'instagram' , 'facebook' , 'linkedin']
            const formFillValue: Record<string, string>[] = [];
             for (const field of formValue ){
                formFillValue.push({ [field]: formData.get(field) as string })
            }
           try {
            await Object.assign(checkUser , formFillValue)
            await checkUser.save()
            return true 

           } catch (error)  {
             console.log(error)
             return false
           }
        }
        else{
            return false
        }
    }
}


export async function UseFullLinkData(links : Links[]){
    const user =await Session()
    console.log(links)
    if(user){
        const email = user.email
        await mongoose.connect(process.env.MONGODB_URL!  as string)
        const checkUser = await Page.findOne({owner : email})
        if(checkUser){
            checkUser.customsLinks = links
            await checkUser.save()
            return true
        }
        return false
    }
    return false
}
export async function sponserData(sponser : any){
    const user =await Session()
    if(user){
        const email = user.email
        await mongoose.connect(process.env.MONGODB_URL!  as string)
        const checkUser = await Page.findOne({owner : email})
        if(checkUser){
            checkUser.sponser = sponser
            await checkUser.save()
            return true
        }
        return false
    }
    return false
}