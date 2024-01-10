import mongoose, { model, models } from "mongoose";
const EventSchema = new mongoose.Schema({
    type : {
        type : String 
    } ,
    page : {
        type : String , 
    } ,
    uri : {
        type : String ,
    }
}, {
    timestamps : true 
})
export const Event = models.Event || model('Event' , EventSchema)