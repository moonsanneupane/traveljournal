import Image from 'next/image'
import React from 'react'

export default function Card() {
  return (
    <div>
      <Image src="/mountfuji.png" alt="Mount Fuji" width={125} height={168} />
      <Image src="locationicon.svg" alt="Location Logo" width={7} height={9.5} />
      <p>Japan</p>
      <a href="">View on Google Maps</a>
    </div>
  )
}
