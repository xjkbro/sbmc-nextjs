import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


function header() {
  return (
    <>
      <div className="h-24 fixed w-full flex justify-around items-center p-5 bg-white">
        <div className="flex gap-8 float-left">
            <Link className="flex gap-2" href="/">
                <Image src="/sun.png" width={64} height={64} alt="Picture of the author" />
                <div className="font-bold text-[32px]">SOUTHBAYMATHCIRCLE</div>
            </Link>
        </div>
        <div className="flex gap-8 float-right">
            <Link className="font-semibold uppercase hover:underline" href="/">Home</Link>
            <Link className="font-semibold uppercase hover:underline" href="/events">About Us</Link>
            <Link className="font-semibold uppercase hover:underline" href="/events">News</Link>
            <Link className="font-semibold uppercase hover:underline" href="/events">Programs</Link>
            <Link className="font-semibold uppercase hover:underline" href="/events">Tournament</Link>
            <Link className="font-semibold uppercase hover:underline" href="/events">Leadership</Link>
            <Link className="font-semibold uppercase hover:underline" href="/events">Sponsors</Link>
        </div>
      </div>
      <div className="h-24"></div>
    </>
  )
}

export default header