import './globals.css'
import SideBar from '../components/SideBar'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <head />
      <body>
        <div className='flex'>
          <SideBar /><div className='bg-slate-400 flex-1'>{children}
          </div ></div></body>
    </html>
  )
}
