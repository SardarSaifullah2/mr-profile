'use server'

import SocailLinks from "@/components/socialLinks"
import { FindUriDb } from "@/config/libs/connectDb"
import Image from "next/image"
import Link from "next/link"
import { UsefulLinkComponent } from "@/components/usefullLinks"
import Views from "@/config/libs/view"
export default async function UserSideData(props : any){
    const uri = props.params.uri
    const PageData =  await FindUriDb(uri)
    const {color , displayName , location , profileImg , bio,customsLinks , jobTitle , sponser } = PageData
    
    // Uri check (whether it is in our database or not)
    if(!PageData){
        return(
            <div>Nothing is here</div>
        )
    }
    else{
      // The view count will increase upon page reload.
        await Views(uri)
        // view  end 
    }
    return(
        <div>
   
        <div className="width-full min-h-[100vh] py-10" style={{background:color}}>
            <div className="max-w-[600px] mx-auto bg-white/30 flex flex-col items-center py-10 px-6 rounded-xl justify-center"> 
                <div className="flex flex-col items-center gap-2 w-full">
                    <Image src={profileImg} width={150} height={150} className="w-[120px] h-[120px] rounded-[50%] " alt="profile_image"></Image>
                    <div className="text-center">
                        <h4 className="text-[8px] font-semibold bg-gray-300 px-2 py-1 uppercase w-fit mx-auto rounded-md">{jobTitle}</h4>
                      <h2 className="text-[30px] font-bold">{displayName}</h2>
                      <h5 className="text-[14px] font-medium">{location}</h5>
                    </div>
                    <SocailLinks Data = {PageData}/>
                    <div className="text-center px-3 text-[14px] mt-2">
                      {bio}
                    </div>
                    {/* useful links */}
                    <div className="w-full">
                      <h3 className="text-center py-3 capitalize font-bold text-[16px]">UseFul Links</h3>
                    
                      <div className="w-[80%] flex flex-col gap-3 items-center justify-center mx-auto">
                        <UsefulLinkComponent Data={customsLinks} uri = {uri}/>
                      </div>
                      <h3 className="text-center py-3 capitalize font-bold text-[16px]">Support</h3>
                      
                      <div className="w-[80%] flex flex-col gap-3 items-center justify-center mx-auto">
                        {
                          sponser?.title ?  <Link href={sponser?.link} className='w-full'>                   
                          <article className="bg-black text-white rounded-xl w-full text-center px-3 py-3 text-[15px] font-medium">{sponser?.title}</article>
                        </Link> : ""
                        }
                       
                      </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
        
    )
}