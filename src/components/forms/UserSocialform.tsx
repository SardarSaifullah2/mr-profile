'use client'

import { useState } from "react"
import { SubmitButton } from "../buttons/submitButton"
import { ProfileFormData } from "@/actions/profileDataCollection" 
import { ProfileButton } from "@/actions/profileDataCollection" 
import toast from "react-hot-toast"

export function UserSocialForm({PageData}){
    const [gmail , setGmail] = useState(PageData.gmail ||'')
    const [instagram , setInstagram] = useState(PageData.instagram ||'')
    const [linkedin , setLinkedin] = useState(PageData.linkedin ||'')
    const [facebook , setFacebook] = useState(PageData.facebook ||'')

    async function submit(formData) {
        const result = await ProfileButton(formData)
        if(result === true){
            toast.success('Saved!')
        }
        else{
            toast.error('Error , Not Saved!')
        }
       
    }
    return(
        <div className="py-[30px]">
            <h3 className="text-xl text-gray-500 text-center my-[10px] font-semibold uppercase">Social Detail</h3>
            <form action={submit} className="grid grid-cols-2 gap-8 pt-8">
                <div className="flex flex-col gap-2">
                    <label className='uppercase text-gray-500 text-sm'>
                        gmail
                    </label>
                    <input type="text" placeholder="demo@domain.com" name="gmail" value={gmail} onChange={ev=> setGmail(ev.target.value)} className="w-full outline-none px-5 rounded-xl py-2 text-black/80"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className='uppercase text-gray-500 text-sm'>
                        facebook
                    </label>
                    <input type="text" placeholder="demo@domain.com" name="facebook" value={facebook} onChange={ev=> setFacebook(ev.target.value)} className="w-full outline-none px-5 rounded-xl py-2 text-black/80"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className='uppercase text-gray-500 text-sm'>
                        Instagram
                    </label>
                    <input type="text" placeholder="demo@domain.com" name="instagram" value={instagram} onChange={ev=> setInstagram(ev.target.value)} className="w-full outline-none px-5 rounded-xl py-2 text-black/80"/>
                </div>
                <div className="flex flex-col gap-2">
                    <label className='uppercase text-gray-500 text-sm'>
                        linkedin
                    </label>
                    <input type="text" placeholder="demo@domain.com" name="linkedin" value={linkedin} onChange={ev=> setLinkedin(ev.target.value)} className="w-full outline-none px-5 rounded-xl py-2 text-black/80"/>
                </div>
                <SubmitButton>
                    <span>Save</span>
                </SubmitButton>
            </form>
        </div>
    )
}