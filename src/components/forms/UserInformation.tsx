'use client'

import { ProfileFormData } from "@/actions/profileDataCollection";
import { useState } from "react"
import { IoIosColorPalette } from "react-icons/io";
import { SubmitButton } from "../buttons/submitButton";
import { BiSolidEditAlt } from "react-icons/bi";

import Image from "next/image";
import toast from "react-hot-toast";
export default function UserInformation({PageData} : any) {
    const [ color , setColor ] = useState(PageData.color || '')
    const [displayName ,  setDisplayname] = useState(PageData.displayName || '')
    const [location ,  setLocation] = useState(PageData.location || '')
    const [bio ,  setBio] = useState(PageData.bio || '') 
    const [jobTitle ,  setJobTitle] = useState(PageData.jobTitle || '') 
    const [porfileImg , setProfileImg] = useState(PageData.profileImg)

    const ProfileInformation = [
        {
            label : 'display name' , name : 'displayName' , placeholder : 'John Ex' , value : displayName , callFun : setDisplayname
        },
        {
            label : 'location' , name : 'location' , placeholder : 'eiffel tower , paries london' , value : location , callFun : setLocation
        },
        {
            label : 'jobTitle' , name : 'jobTitle' , placeholder : `i'm john ex a full-stack developer` , value : jobTitle , callFun : setJobTitle
        },
    ]
     async function submit(formData : FormData) {
        const result = await ProfileFormData(formData)
        if(result === true){
            toast.success('Saved!')
        }
        else{
            toast.error('Error , Not Saved!')
        }
    }
    async function uploadHandle(ev){
        const file = ev?.target?.files?.[0]
        if(file){
            const data = new FormData
            data.set('file' , file)
            fetch('/api/upload' , {
                method : "POST" ,
                body: data
            })
            .then((res) => res.json())
            .then(r => setProfileImg(r.link))
        }
    }
    return(
        <main className="w-full">
            <form action={submit} className="w-full">
                <div className="bg-gray-400 w-full h-[400px] rounded-2xl flex items-center justify-center" style={{background:color}}>                    
                    <label className="flex gap-1 items-center bg-blue-600 hover:bg-white rounded-full text-white hover:text-blue-600 transition duration-500 w-fit h-fit px-3 py-2">
                            <IoIosColorPalette className="text-2xl"/>
                            <h4 className="text-md font-semibold">Change Color</h4>
                            <input 
                                type="color"
                                name="color" 
                                id="color" 
                                onChange={ev => setColor(ev.target.value)}
                                className="absolute opacity-0"
                                value={color}
                            />
                    </label>
                </div>
                <div className="flex flex-col gap-3 py-10">
                <div className="w-[150px] mx-auto relative  -top-36 ">
                    <label>
                        <Image src={porfileImg} width={100} height={100} alt="profileImage" className="rounded-full absolute top-0 min-w-[150px] min-h-[150px] object-center border-8 border-white"/>
                        <BiSolidEditAlt className="absolute text-4xl p-2 bg-white text-blue-500 rounded-full"/>
                        <input type="file" className="hidden" onChange={ev => uploadHandle(ev)}></input>
                        <input type="hidden" name="profileImg" value={porfileImg}></input>
                    </label>                      
                </div>
                <h3 className="text-center">Public Detail</h3> 

                    {ProfileInformation?.map(input =>{
                        return(
                            <div className="flex flex-col gap-2" key={input.name}>
                                <label className='uppercase text-gray-500 text-sm'>{input.label}</label>
                                <input 
                                    type="text" 
                                    name={input.name} 
                                    id={input.name} 
                                    placeholder={input.placeholder} 
                                    value={input.value} 
                                    className="outline-none px-5 rounded-xl py-2 text-black/80"
                                    onChange={ev => input.callFun(ev.target.value) }
                                />
                            </div>
                        )
                    })}
                    <label>Bio</label>
                    <textarea placeholder="write your bio" name="bio" value={bio} onChange={ev => setBio(ev.target.value)} className="outline-none px-5 rounded-xl py-2 text-black/80 resize-none h-[200px] "></textarea>
                </div>
                <SubmitButton>
                    <span>Save</span>
                </SubmitButton>
            </form>
        </main>

    )
}
