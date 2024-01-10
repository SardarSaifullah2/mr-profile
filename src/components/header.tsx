'use server'
import Link from "next/link";
import { LoginButton } from "./buttons/loginButton";
import Session from "@/config/session";

export default  async function Header() {
    
    const user = await Session()

    return(
        <header className="bg-gray-300 h-[80px] flex flex-row items-center justify-between px-6">
            <div className="flex items-center gap-10">
                <Link href={'/'} className="font-semibold text-md text-black">Mr.Profile</Link>

                <nav>
                    <Link href={'/account'} className="text-sm">Account</Link>
                </nav>

            </div>

            <div className="flex flex-row gap-4 items-center ">
                {user ? <h2 className="uppercase text-xs text-gray-600"><span className="font-bold text-black/50">Hello</span> , {user?.name}</h2> : ""}
                <LoginButton user = {user}/>
            </div>

        </header>
    )
}