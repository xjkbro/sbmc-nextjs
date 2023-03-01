"use client"
import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from '../styles/page.module.css'
import bg from '../public/background-home.jpg'
// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrophy, faPenToSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <div className="h-[60vh] bg-fixed bg-center bg-cover homescreen-parallax">
            <div className="h-[50vh] flex flex-col justify-center items-center">
                <div className="font-bold text-[48px] text-yellow-300 font-roboto-slab">MATH FOR THE FUTURE</div>
                <div className="font-bold text-[24px] w-[500px] text-center text-white">MENTORING AND VOLUNTEERING SERVICES FOR SOUTH BAY STUDENTS</div>
            </div>
        </div>
        <div className="flex justify-center gap-8">
            <Link
                href="/tournament-information" 
                className="h-72 w-72 text-white flex flex-col justify-center items-center rounded-full relative -top-36 hover:scale-[1.02] transition-all drop-shadow bg-gradient-to-b from-yellow-400 to-yellow-600">
                <span className="drop-shadow uppercase text-[26px] font-bold text-center font-roboto-slab">Math <br />Tournament</span>
                <FontAwesomeIcon
                    className="py-1"
                    icon={faTrophy}
                    style={{ fontSize: 72, color: "white" }}
                />
                <span className="font-semibold uppercase drop-shadow">November 12, 2022</span>
            </Link>
            <Link
                href="/sign-up" 
                className="h-72 w-72 text-white flex flex-col justify-center items-center rounded-full relative -top-36 hover:scale-[1.02] transition-all drop-shadow bg-gradient-to-b from-cyan-500 to-blue-600">
                <span className="drop-shadow uppercase text-[26px] font-bold font-roboto-slab">Register</span>
                <FontAwesomeIcon
                    className="py-1"
                    icon={faPenToSquare}
                    style={{ fontSize: 72, color: "white" }}
                />
                <span className="w-48 font-semibold text-center uppercase drop-shadow">Sign up today to be a mentor or student</span>
            </Link>
            <Link
                href="/contact-us" 
                className="h-72 w-72 text-white flex flex-col justify-center items-center rounded-full relative -top-36 hover:scale-[1.02] transition-all drop-shadow bg-gradient-to-b from-teal-500 to-green-600">
                <span className="drop-shadow uppercase text-[26px] font-bold font-roboto-slab">Contact</span>
                <FontAwesomeIcon
                    className="py-1"
                    icon={faEnvelope}
                    style={{ fontSize: 72, color: "white" }}
                />
                <span className="w-48 font-semibold text-center uppercase drop-shadow">Need to get ahold of us?</span>
            </Link>
        </div>
        <div className="flex flex-col justify-center my-24">
            <div className="flex flex-col justify-center text-center">
                <div className="uppercase text-[28px] font-bold">Welcome to</div>
                <div className="text-teal-600 uppercase text-[42px] font-bold font-roboto-slab">South Bay Math Circle</div>
            </div>
            <p className="mt-4 text-justify w-[1280px] mx-auto text-[20px]">Founded in 2016, South Bay Math Circle is a non-profit, enrichment program inspiring the next generation of future mathematicians. Our mission is to educate elementary and middle school students in mathematics not covered in the common classroom, as well as provide opportunities for older students to gain experience in community service and mentoring. We aim to enhance students&apos; problem solving and critical thinking skills with the help of our devoted high school volunteer mentors, who will guide their mentees in approaching the next steps of their curriculum.</p>
            <Link className="px-4 py-2 mx-auto mt-8 text-white transition-all bg-gray-900 rounded hover:bg-gray-700" href="/about-us">Learn More</Link>
        </div>
        
    </>
  )
}
