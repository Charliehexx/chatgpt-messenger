import Image from 'next/image'
import { SunIcon } from '@heroicons/react/24/outline'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-white h-screen px-2">
      <h1 className='text-5xl  font-bold mb-20'>hello chatgpt</h1>
      <div>
        <div className='flex flex-col items-center justify-center mb-5'>
          <SunIcon className='h-6 w-6 text-black' />
          <h2> Examples</h2>
        </div>
        <div className='space-y-2'>
          <p className='infoText'>Explain something to me

          </p>
          <p className='infoText'>Difference between dog and cat

          </p>
          <p className='infoText'>What is the creator name of chatgpt
          </p>
        </div>
      </div>
    </div >


  )
}
