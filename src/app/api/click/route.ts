import { Event } from "@/models/eventSchema"
import mongoose from "mongoose"

export async function POST(req : any){
    const url = new URL(req.url)
    const PageName =  url.searchParams.get('page')
    const clickLinked =  url.searchParams.get('url')
    await mongoose.connect(process.env.MONGODB_URL! as string)
    await Event.create({type : 'click' , page : PageName , uri : clickLinked})
    return Response.json({
        message : true
    })
}