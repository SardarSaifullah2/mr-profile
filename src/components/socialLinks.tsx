'use client'
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
export default function SocailLinks({Data} : any){
    
    return(
        <div className="flex gap-2">
        <div className="bg-white p-2 rounded-[50%]">      
        <Link href={`mailto:${Data?.owner}`}>
        
            <MdAlternateEmail className="text-[20px] text-black"/>
        </Link>
        </div>
        {
            Data?.gmail  &&  <div className="bg-white p-2 rounded-[50%]  ">
                <Link href={Data?.gmail} target="_blank">
                    <FaGithub className="text-[20px] text-black"/>
                </Link>
          </div>
        }
        {
            Data?.facebook  &&  <div className="bg-white p-2 rounded-[50%]  ">
                <Link href={Data?.facebook} target="_blank">
                    <FaFacebook className="text-[20px] text-black"/>
                </Link>
          </div>
        }
        {
            Data?.Instagram  &&  <div className="bg-white p-2 rounded-[50%]  ">
                <Link href={Data?.instagram} target="_blank">
                    <FaInstagram className="text-[20px] text-black"/>
                </Link>
          </div>
        }
      </div>
    )
}