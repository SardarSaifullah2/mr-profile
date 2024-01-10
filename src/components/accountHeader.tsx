import { ConnectDb } from "@/config/libs/connectDb";
import Session from "@/config/session";
import Image from "next/image";

export default async function AccountHeader(){
    const user = await Session()

    return(
        <div className="w-[300px] min-h-[100vh] h-full bg-gray-300 border-l border-gray-500 flex justify-center ">
            <div className="flex flex-col gap-3 items-center py-6 px-3 fixed">
                <Image src={user?.image} width={150} height={150} className="rounded-full" alt="userImage"></Image> 
                <h2 
                    className="text-2xl font-semibold text-black/80 capitalize"
                >
                    {user?.name}
                </h2>
               <nav className="pt-5">
                    <ul className="flex flex-col items-center gap-4">
                        <li>
                            <a href={`/account?user=${user?.name}`} className="font-semibold  text-gray-500 text-md">
                                Dashboard    
                            </a>
                        </li>
                        <li>
                            <a href={`/analysis?user=${user?.name}`} className="font-semibold  text-gray-500 text-md">
                                Analysis    
                            </a>
                        </li>
                    </ul>
               </nav>

            </div>
        </div>
    )
}