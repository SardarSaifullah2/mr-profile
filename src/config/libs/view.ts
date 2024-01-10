import { Event } from "@/models/eventSchema";
import mongoose from "mongoose";

export default async function Views(uri) {
    await mongoose.connect(process.env.MONGODB_URL! as string)
    const EventData = await Event.create({type : 'view' , page : uri , uri : uri})
}