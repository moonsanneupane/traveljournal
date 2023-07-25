import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div>
      <div className='navbar'>
      <Image src="/internet.svg" alt="Internet Logo" width={24} height={24} />
      <p>my travel journal.</p>
      </div>
    </div>
  )
}
