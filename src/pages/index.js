import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Card from '@/components/Card'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
     <Card />
   </div>
  )
}

{/* <div className='flex flex-row bg-red-500 text-[10px] md:text-[100px] m-[20px]' >Hello
<Link href="/about" className="bg-white border-2 hover:bg-black hover:text-white rounded text-[100px]">About</Link>
</div> */}