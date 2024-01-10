'use client'

import { redirect } from "next/navigation"

export default function Hero() {
    async function submitFunction(formData){
        const InputData = await formData.get('username')
        redirect('/account?username=' + InputData)
    }
    return(
        <main className="max-w-7xl mx-auto bg-gray-200 pt-20 px-10">
            <div className="flex flex-col gap-3">
                <h2 className="text-[35px] font-semibold text-gray-500">Everything you are. In<br></br>one, simple link in bio.</h2>
                <form className="flex flex-row" action={submitFunction}>
                    <input 
                    type="text" 
                    name="username" 
                    id="username" 
                    placeholder='Search Your Username'
                    className="outline-none  px-3 py-3 "
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4">Check Now</button>
                </form>
            </div>
        </main>
    )
}