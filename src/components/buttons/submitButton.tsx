import { useFormStatus } from "react-dom"

export function SubmitButton ({children}:any){
    const {pending} = useFormStatus()
    return(
        <main>
            <button type="submit" className="bg-blue-600 px-12 py-3 rounded-full text-white font-semibold text-xl mt-0">
                {!pending ? children : `Saving...` }
            </button>
        </main>
    )
}