'use client'

import { ProfileData } from "@/actions/profileDataCollection"
import { useRouter } from "next/navigation"

export default function GrapUsername({searchUsername}) {
    const router = useRouter()
    async function formActionHandle(formData){
        const result = await ProfileData(formData)
        if(result === true) {
            router.push(`/account?createdUser=${formData.get('username')}`)
        }
    }
    return(
    <form action={formActionHandle} className="w-full">
        <div className="w-[100%] h-[100vh] flex flex-col items-center justify-center gap-3">
            <input 
            type="text" 
            name="username"
            placeholder="This is a placeholder" 
            defaultValue={searchUsername}
            className="outline-none  px-3 py-3 bg-gray-300 w-[350px] "
            />
            <button type="submit" className="w-[350px] bg-blue-600 p-3 text-white">Submit Now</button>
            </div>
    </form>
    )
}