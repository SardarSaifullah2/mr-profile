import mongoose ,{Schema} from "mongoose";


const profileData = new Schema({
    owner : {
        type : String ,
        required : true ,
    },
    uri :{
        type : String,
        required : true , 
    },
    displayName:{
        type : String ,
    },
    location:{
        type : String ,
    },
    jobTitle:{
        type : String ,
        default : ""
    },
    bio:{
        type : String ,
    },
    color : {
        type : String , 
        default : '#fff'
    },
    profileImg : {
        type : String ,
    },
    gmail : {
        type : String ,
    },
    linkedin : {
        type : String 
    },
    instagram : {
        type : String
    } , 
    facebook : {
        type : String
    } ,
    customsLinks : {
        type : Object ,
        default : []
    } , 
    sponser : {
        type : Object , 
        default : {}
     }
})

export const Page = mongoose.models.Page || mongoose.model('Page' , profileData) 
