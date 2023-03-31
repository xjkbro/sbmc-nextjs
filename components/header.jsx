"use client";
import { faPaypal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Image from "next/image";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

import { Roboto_Slab } from "@next/font/google";
import { AnimatePresence, motion } from "framer-motion";
const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: ["700", "900"],
});
const navlinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "News", path: "/news" },
    { name: "Programs", path: "/programs" },
    { name: "Tournaments", path: "/tournament" },
    { name: "Leadership", path: "/leadership" },
    { name: "Sponsors", path: "/sponsors" },
];

function Header({ overlay, setOverlay }) {
    return (
        <>
            <div className="h-24 fixed w-full hidden md:flex justify-around items-center p-5 bg-white shadow-md z-[5]">
                <div className="flex gap-8">
                    <Link
                        className="flex items-center justify-center gap-2"
                        href="/"
                    >
                        <Image
                            src="/sun.png"
                            width={64}
                            height={64}
                            alt="Picture of the author"
                        />
                        <span
                            className={
                                "text-[2vw] font-black " + robotoSlab.className
                            }
                        >
                            SOUTHBAYMATHCIRCLE
                        </span>
                    </Link>
                </div>
                <div className="flex items-center h-8 gap-4">
                    <Link
                        className="px-4 py-4 font-semibold uppercase hover:underline"
                        href="/"
                    >
                        Home
                    </Link>
                    <div className="relative group" id="AboutUs">
                        <Link
                            className="flex flex-row items-center w-full px-4 py-4 font-semibold uppercase bg-transparent hover:underline whitespace-nowrap"
                            href="/about-us"
                        >
                            About Us
                        </Link>
                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-[200px]">
                            <div className="text-white bg-white shadow-lg bg-opacity-70 ">
                                <div className="grid grid-cols-1 text-black md:grid-cols-1 ">
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/about-us"
                                    >
                                        About Us
                                    </Link>
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/faq"
                                    >
                                        FAQ
                                    </Link>
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/sign-up"
                                    >
                                        Sign-Up
                                    </Link>
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/contact-us"
                                    >
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        className="px-4 py-4 font-semibold uppercase hover:underline"
                        href="/news"
                    >
                        News
                    </Link>
                    <div className="relative group" id="Programs">
                        <Link
                            className="flex flex-row items-center w-full px-4 py-4 font-semibold uppercase bg-transparent hover:underline"
                            href="/programs"
                        >
                            Programs
                        </Link>
                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-[200px]">
                            <div className="text-white bg-white shadow-lg bg-opacity-70 ">
                                <div className="grid grid-cols-1 text-black md:grid-cols-1">
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/programs"
                                    >
                                        Programs
                                    </Link>
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/program-gallery"
                                    >
                                        Gallery
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group" id="Tournament">
                        <Link
                            className="flex flex-row items-center w-full px-4 py-4 font-semibold uppercase bg-transparent hover:underline"
                            href="/tournament-information"
                        >
                            Tournament
                        </Link>
                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-[200px]">
                            <div className="text-white bg-white shadow-lg bg-opacity-70 ">
                                <div className="grid grid-cols-1 text-black md:grid-cols-1">
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/tournament-information"
                                    >
                                        Information
                                    </Link>
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/tournament-awards"
                                    >
                                        Awards
                                    </Link>
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/tournament-gallery"
                                    >
                                        Gallery
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative group" id="Leadership">
                        <Link
                            className="flex flex-row items-center w-full px-4 py-4 font-semibold uppercase bg-transparent hover:underline"
                            href="#"
                        >
                            Leadership
                        </Link>
                        <div className="absolute z-10 hidden bg-grey-200 group-hover:block w-[200px]">
                            <div className="text-white bg-white shadow-lg bg-opacity-70 ">
                                <div className="grid grid-cols-1 text-black md:grid-cols-1">
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/opportunities"
                                    >
                                        Opportunities
                                    </Link>
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/board-members"
                                    >
                                        Board Members
                                    </Link>
                                    <Link
                                        className="block p-2 hover:bg-gray-700 hover:text-white"
                                        href="/mentors"
                                    >
                                        Mentors
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link
                        className="px-4 py-4 font-semibold uppercase hover:underline"
                        href="/events"
                    >
                        Sponsors
                    </Link>
                    {/* <Link
                        className="px-8 py-2 font-semibold uppercase transition-all bg-yellow-300 border-yellow-700 rounded-full shadow-md hover:bg-yellow-400 whitespace-nowrap"
                        href="https://www.paypal.com/donate?token=UBoQdIlienz2T_B7Y9aISzFIYlMd92hMduGiwFa7GeaBf6qrQSSTj5sdmFpj6P8Y5feCjvik3d8IjgJq"
                    >
                        Donation{" "}
                        <FontAwesomeIcon className="px-1" icon={faPaypal} />
                    </Link> */}
                </div>
            </div>
            <div className="h-24 fixed w-full flex md:hidden justify-between items-center p-5 bg-white shadow-md z-[5]">
                <div className="flex flex-col justify-center">
                    <Link className="flex" href="/">
                        <Image
                            src="/sun.png"
                            width={48}
                            height={48}
                            alt="Picture of the author"
                        />
                    </Link>
                    <span
                        className={
                            "text-[20px] font-black " + robotoSlab.className
                        }
                    >
                        SBMC
                    </span>
                </div>
                {/* <FontAwesomeIcon icon={faBars} className="w-12 h-12" /> */}
                <button
                    className="md:block"
                    onClick={() => setOverlay(!overlay)}
                >
                    {" "}
                    <FontAwesomeIcon
                        className="w-8 h-8 text-black"
                        icon={faBars}
                    />{" "}
                </button>
            </div>
            <AnimatePresence>
                {overlay && (
                    <motion.div
                        initial={{ opacity: 0, x: -500 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -500 }}
                        transition={{ duration: 0.5 }}
                        className={
                            overlay
                                ? "flex fixed top-0 left-0 justify-center w-screen h-screen bg-white z-10 align-center"
                                : ""
                        }
                    >
                        <ul className="flex flex-col justify-center text-center gap-x-8 md:gap-12">
                            {navlinks.map((item, i) => (
                                <li
                                    key={i}
                                    className="text-xl font-light hover:text-sixth"
                                    onClick={() => setOverlay(false)}
                                >
                                    <Link href={item.path}>{item.name}</Link>
                                </li>
                            ))}

                            <li className="my-2">
                                <button
                                    className="w-8 h-8 md:block"
                                    onClick={() => setOverlay(false)}
                                >
                                    <FontAwesomeIcon icon={faX} />
                                </button>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
            {/* <div className="h-24 bg-opacity-90"></div> */}
        </>
    );
}

export default Header;
