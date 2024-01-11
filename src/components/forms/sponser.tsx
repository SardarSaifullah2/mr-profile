'use client'
import { useState } from "react"
import { SubmitButton } from "../buttons/submitButton"
import { sponserData } from "@/actions/profileDataCollection"
import toast from "react-hot-toast"

export type SponserState = {
     title : string ;
     link : string ;
 }
export function SponserForm({PageData} : any){
    const [sponser , setSponser] = useState<any>(PageData.sponser[0] ||{title : "" , link : ""})
    async function submit(){
        const result = await sponserData(sponser)
        if(result === true){
            toast.success('saved successfully')
        }else{
            toast.error('Error')
        }
    }
    return(
        <main>
            <h3  className="text-xl text-gray-500 text-center my-[10px] font-semibold uppercase">Sponser</h3>
            <form action={submit} >
                <div className="grid grid-cols-2 gap-6 place-items-center w-full py-8">
                    <div className="flex flex-col gap-2 w-full">
                    <label className='uppercase text-gray-500 text-sm'>Title</label>
                        <input 
                            type='text' 
                            value={sponser.title} 
                            placeholder="enter you title"
                            onChange={ev => setSponser((prev : any) =>({...prev , title: ev.target.value}))}
                            className="outline-none px-5 rounded-xl py-2 text-black/80 w-full"
                        />
                    </div>
                
                    <div className="flex flex-col gap-2 w-full">
                    <label className='uppercase text-gray-500 text-sm'>Link</label>
                    <input 
                        type="text" 
                        value={sponser.link} 
                        placeholder="enter you link"
                        onChange={ev => setSponser((prev :any) =>( {...prev , link: ev.target.value}))}
                        className="outline-none px-5 rounded-xl py-2 text-black/80"
                    />
                    </div>
                </div>
                <SubmitButton>
                    <span>Save</span>
                </SubmitButton>
            </form>
        </main>
    )
}