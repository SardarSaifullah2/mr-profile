'use client'
import Link from "next/link"
export function UsefulLinkComponent({Data , uri}){
    return(
        <>
            {
                     Data?.map((item , index) =>{
                      return(
                        <div className="w-full" key={index} >
                          <article className="bg-black text-white rounded-xl w-full text-center px-4 py-3 text-[15px] font-medium hover:bg-white hover:text-black transition duration-1000">
                            <Link href={item.link} ping={'http://localhost:3000/api/click?url='+ item.link+'&page='+uri} target="_blank">
                              {item.title}
                            </Link>
                          </article>
                        </div>
                      )
                      })
                    }
        </>
    )
}

