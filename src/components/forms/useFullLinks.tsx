'use client'
import { useState } from "react"
import { FaCirclePlus, FaTrash } from "react-icons/fa6";
import { SubmitButton } from "../buttons/submitButton";
import { UseFullLinkData } from "@/actions/profileDataCollection";
import toast from "react-hot-toast";
export function UseFullLinks({PageData}){
    const [links , setLinks] = useState(PageData?.customsLinks || [])
    async function AddLink(ev){
        ev.preventDefault();
        setLinks(prevsLink => {
            return [...prevsLink , {key: Date.now().toString() , title : '' , link : ''} ]
        })
    }
    async function changeText(key , ev , field){
        setLinks(prevsLinks => prevsLinks.map(item => item.key === key ? {...item , [field] : ev.target.value} : item))    
    }

    async function deleteHandle(key){
        const filterLinks = links.filter(item => item.key !== key)
        setLinks(filterLinks)
    }
    async function submit(){
        let arry = []
        for (let i = 0; i < links.length; i++){
            const item = links[i]
            
            
            if(item.title.trim().length !== 0){
                if(item.link.trim().length !== 0){
                    if(item.link.startsWith('https') || item.link.startsWith('http') ){
                        arry.push(item)
                    }
                    else{
                        toast.error('You did not fill Link')
                        return
                    }
                }
            }else{
                toast.error('we have deleted your empty feilds')
            }
        }
        setLinks(arry)       
        console.log(links)
        const result = await UseFullLinkData(arry)
            if(result === true){
                toast.success('save successfully!!!!')
            }else{
                toast.error('Not Saved ! something wents wrong')
            }

    }

    
    return(
        <div className="py-4">
            <h3 className="text-xl text-gray-500 text-center my-[10px] font-semibold uppercase">UseFull Links</h3>
            <div className="w-[100%] flex items-end justify-end">
                <button className="text-blue-600 flex flex-row gap-2 items-center border border-blue-600 px-4 py-2 rounded-full hover:bg-white hover:border-white transition duration-500" onClick={ev => AddLink(ev)}>
                    <FaCirclePlus/>
                    Add Link
                </button>
            </div>
            <form action={submit}>
                {
                    links?.map((item,index) =>{
                    return(
                        <div key={item.index}  className="grid grid-cols-2 gap-8 pt-3">
                            <div className="flex flex-col gap-2">
                                <label className="uppercase text-gray-500 text-sm">Label</label>
                                <input type='text' value={item.title} onChange={ev => changeText(item.key , ev , 'title')} className="w-full outline-none px-5 rounded-xl py-2 text-black/80" required/>
                               
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="uppercase text-gray-500 text-sm">Link</label>
                                <span className="flex justify-between items-center gap-3">
                                    <input type='text' value={item.link} onChange={ev => changeText(item.key , ev ,'link')} className="w-full outline-none px-5 rounded-xl py-2 text-black/80" />
                                    <FaTrash className="text-blue-600 hover:text-gray-700 rounded-full" onClick={() => deleteHandle(item.key)}  required/>
                                </span>
                            </div>
                          
                        </div>
                    )
                    })
                }
                {links ? <div className="mt-6"><SubmitButton><span>save</span></SubmitButton></div> : ""}
            </form>
        </div>
    )
}