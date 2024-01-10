import mongoose from "mongoose"
import Session from "../session"
import { Page } from "@/models/profileDataSchema"
export async function ConnectDb(){
    const user = await Session()
    await mongoose.connect(process.env.MONGODB_URL!)
    const UserData = await Page.findOne({owner: user?.email})
    return UserData
}

export async function FindUriDb(uri){
    await mongoose.connect(process.env.MONGODB_URL!)
    const UserData = await Page.findOne({uri: uri})
    if(UserData){
        return UserData
    }
    else{
        return false
    }
}