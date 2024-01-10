import AccountHeader from "@/components/accountHeader"
import '../globals.css'
import { Toaster } from "react-hot-toast"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Toaster></Toaster>
          <main className="flex gap-2">
          <aside>
            <AccountHeader/>
          </aside>
          <div className='w-full'>
            {children}
          </div>

          </main>
      </body>
    </html>
  )
}