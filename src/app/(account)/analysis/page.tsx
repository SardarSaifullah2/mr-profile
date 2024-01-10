import { ConnectDb } from "@/config/libs/connectDb"
import { Event } from "@/models/eventSchema"
import mongoose from "mongoose"

export default async function Analysis(){
    await mongoose.connect(process.env.MONGODB_URL as string)
    const PageDate = await ConnectDb()
    const { uri } = PageDate
    const evet = await Event.aggregate([
        {
            '$match' :{
                type : "view" ,
                uri : uri
            }
        } , {
            '$count' : 'viewT'
        }
    ])
    const TodayViews = await Event.aggregate([
        {
            '$match' :{
                type : "view" ,
                uri : uri
            }
        } , {
            '$group' :{
                _id:{
                    format : "%Y-%m-%d" , 
                    Date : new Date()
                },
                count :{$sum : 1}
            }
        }
    ])
    const Cevet = await Event.aggregate([
        {
            '$match' :{
                type : "click" ,
                page : uri
            }
        } , {
            '$count' : 'viewTs'
        }
    ])
    const CTodayViews = await Event.aggregate([
        {
            '$match' :{
                type : "click" ,
                page : uri
            }
        } , {
            '$group' :{
                _id:{
                    format : "%Y-%m-%d" , 
                    Date : new Date()
                },
                count :{$sum : 1}
            }
        }
    ])
    const Tviews = evet[0].viewT
    
    const Tclick = Cevet[0].viewTs
    const CTodayCount = CTodayViews[0].count
    const TodayCount = TodayViews[0].count
    return(
        <main className="py-12 px-10">    
            <div className="grid grid-cols-3 gap-5">
                <div className="bg-white p-10 rounded-xl text-xl font-semibold text-gray-500">Today Click : {CTodayCount}</div>
                <div className="bg-white p-10 rounded-xl text-xl font-semibold text-gray-500">Today Views : {TodayCount}</div>
                <div className="bg-white p-10 rounded-xl text-xl font-semibold text-gray-500">Total Click :{Tclick} </div>
                <div className="bg-white p-10 rounded-xl text-xl font-semibold text-gray-500">Total Views : {Tviews}</div>   
            </div>
        </main>
    )
}