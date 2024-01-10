'use server'
import { Page } from "@/models/profileDataSchema"
import mongoose from "mongoose"
import Session from "@/config/session"

export async function ProfileData(formData) {
    const user =await Session()
    const username = formData.get('username')
    if(user){
        const email = user?.email
        await mongoose.connect(process.env.MONGODB_URL!)
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

export async function ProfileFormData(formData){
    const user =await Session()
    if(user){
        const email = user.email
        await mongoose.connect(process.env.MONGODB_URL!)
        const checkUser = await Page.findOne({owner : email})
        if(checkUser){
            const formValue = ['displayName' , 'bio' , 'color' ,'location' , 'profileImg' , 'jobTitle']
            const formFillValue = []
             for (const field of formValue ){
                formFillValue[field] = formData.get(field)
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

export async function ProfileButton(formData){
    const user =await Session()
    if(user){
        const email = user.email
        await mongoose.connect(process.env.MONGODB_URL!)
        const checkUser = await Page.findOne({owner : email})
        if(checkUser){
            const formValue = [ 'gmail' , 'instagram' , 'facebook' , 'linkedin']
            const formFillValue = []
             for (const field of formValue ){
                formFillValue[field] = formData.get(field)
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


export async function UseFullLinkData(links){
    const user =await Session()
    console.log(links)
    if(user){
        const email = user.email
        await mongoose.connect(process.env.MONGODB_URL!)
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
export async function sponserData(sponser){
    const user =await Session()
    if(user){
        const email = user.email
        await mongoose.connect(process.env.MONGODB_URL!)
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