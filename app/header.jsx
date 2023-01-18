import React from 'react'
import Link from 'next/link';
import Image from 'next/image';


function Header() {
  return (
    <>
        <div className="h-24 fixed w-full flex justify-around items-center p-5 bg-white bg-opacity-70 z-[5]">
            <div className="flex gap-8 float-left">
                <Link className="flex gap-2" href="/">
                    <Image src="/sun.png" width={64} height={64} alt="Picture of the author" />
                    <div className="font-bold text-[32px] font-roboto-slab">SOUTHBAYMATHCIRCLE</div>
                </Link>
            </div>
            <div className="flex gap-8 float-right">
                <Link className="px-4 py-4 font-semibold uppercase hover:underline" href="/">Home</Link>
                {/* <Link className="font-semibold uppercase " href="/events">About Us</Link>
                <Link className="font-semibold uppercase hover:underline" href="/events">News</Link>
                <Link className="font-semibold uppercase hover:underline" href="/events">Programs</Link>
                <Link className="font-semibold uppercase hover:underline" href="/events">Tournament</Link>
                <Link className="font-semibold uppercase hover:underline" href="/events">Leadership</Link> */}
                <div className="relative group" id="AboutUs">
                    <Link className="flex flex-row items-center w-full hover:underline px-4 py-4 font-semibold uppercase bg-transparent" href="/about-us">
                        About Us
                    </Link>
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-[200px]">
                        <div className="bg-white shadow-lg bg-gray-700 bg-opacity-70 text-white ">
                            <div className="grid grid-cols-1 md:grid-cols-1">
                            <Link className="block p-2 hover:bg-gray-700" href="/about-us">About Us</Link>
                            <Link className="block p-2 hover:bg-gray-700" href="/faq">FAQ</Link>
                            <Link className="block p-2 hover:bg-gray-700" href="/sign-up">Sign-Up</Link>
                            <Link className="block p-2 hover:bg-gray-700" href="/contact-us">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>      
                <Link className="px-4 py-4 font-semibold uppercase hover:underline" href="/news">News</Link>
                <div className="relative group" id="Programs">
                    <Link className="flex flex-row items-center w-full hover:underline px-4 py-4 font-semibold uppercase bg-transparent" href="/programs">
                        Programs
                    </Link>
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-[200px]">
                        <div className="bg-white shadow-lg bg-gray-700 bg-opacity-70 text-white ">
                            <div className="grid grid-cols-1 md:grid-cols-1">
                                <Link className="block p-2 hover:bg-gray-700" href="/programs">Programs</Link>
                                <Link className="block p-2 hover:bg-gray-700" href="/program-gallery">Gallery</Link>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="relative group" id="Tournament">
                    <Link className="flex flex-row items-center w-full hover:underline px-4 py-4 font-semibold uppercase bg-transparent" href="/tournament-information">
                        Tournament
                    </Link>
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-[200px]">
                        <div className="bg-white shadow-lg bg-gray-700 bg-opacity-70 text-white ">
                            <div className="grid grid-cols-1 md:grid-cols-1">
                                <Link className="block p-2 hover:bg-gray-700" href="/tournament-information">Information</Link>
                                <Link className="block p-2 hover:bg-gray-700" href="/tournament-awards">Awards</Link>
                                <Link className="block p-2 hover:bg-gray-700" href="/tournament-gallery">Gallery</Link>
                            </div>
                        </div>
                    </div>
                </div>  
                <div className="relative group" id="Leadership">
                    <Link className="flex flex-row items-center w-full hover:underline px-4 py-4 font-semibold uppercase bg-transparent" href="#">
                        Leadership
                    </Link>
                    <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-[200px]">
                        <div className="bg-white shadow-lg bg-gray-700 bg-opacity-70 text-white ">
                            <div className="grid grid-cols-1 md:grid-cols-1">
                                <Link className="block p-2 hover:bg-gray-700" href="/opportunities">Opportunities</Link>
                                <Link className="block p-2 hover:bg-gray-700" href="/board-members">Board Members</Link>
                                <Link className="block p-2 hover:bg-gray-700" href="/mentors">Mentors</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link className="px-4 py-4 font-semibold uppercase hover:underline" href="/events">Sponsors</Link>
                
            </div>
        </div>
        <div className="h-24 bg-opacity-90"></div>
    </>
  )
}

export default Header