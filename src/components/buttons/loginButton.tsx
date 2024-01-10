'use client'
import { signIn , signOut} from "next-auth/react"

export const LoginButton = async({user}) =>{
    return(
        <>
            {
               user ? <button onClick={()=> signOut()} className="px-4 py-2 rounded-xl border border-gray-400 text-gray-600 text-md">LogOut</button> : <button onClick={()=>signIn()} className="px-4 py-2 rounded-xl border border-gray-400 text-gray-600 text-md">Login</button>
            }
        </>
    )
}