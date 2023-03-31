import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTrophy,
    faPenToSquare,
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Roboto_Slab } from "@next/font/google";
const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: ["500", "600", "700", "900"],
});

export default function Introduction() {
    return (
        <>
            <div className="h-[80vh] bg-fixed bg-center bg-cover homescreen-parallax">
                <div className="flex flex-col items-center justify-center h-full backdrop-brightness-75">
                    <div
                        className={
                            "font-bold text-6xl w-5/6  text-center md:text-center md:text-[5rem] text-yellow-400 " +
                            robotoSlab.className
                        }
                    >
                        MATH <br className="md:hidden" /> FOR THE{" "}
                        <br className="md:hidden" /> FUTURE
                    </div>
                    <div className="font-bold text-2xl w-5/6 md:text-[24px] text-center md:text-center text-white">
                        MENTORING AND VOLUNTEERING SERVICES FOR SOUTH BAY
                        STUDENTS
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-8 mt-12 md:flex-row md:mt-0">
                <Link
                    href="/tournament-information"
                    className="h-72 md:w-72 w-11/12 text-white flex flex-col justify-center items-center rounded-xl md:rounded-full relative md:-top-36 hover:scale-[1.02] transition-all drop-shadow bg-gradient-to-b from-yellow-400 to-yellow-600"
                >
                    <span
                        className={
                            "drop-shadow uppercase text-[26px] font-bold text-center " +
                            robotoSlab.className
                        }
                    >
                        Math <br />
                        Tournament
                    </span>
                    <FontAwesomeIcon
                        className="py-1"
                        icon={faTrophy}
                        style={{ fontSize: 72, color: "white" }}
                    />
                    <span className="font-semibold uppercase drop-shadow">
                        November 12, 2022
                    </span>
                </Link>
                <Link
                    href="/sign-up"
                    className="h-72 md:w-72 w-11/12 text-white flex flex-col justify-center items-center rounded-xl md:rounded-full relative md:-top-36 hover:scale-[1.02] transition-all drop-shadow bg-gradient-to-b from-cyan-500 to-blue-600"
                >
                    <span
                        className={
                            "drop-shadow uppercase text-[26px] font-bold " +
                            robotoSlab.className
                        }
                    >
                        Register
                    </span>
                    <FontAwesomeIcon
                        className="py-1"
                        icon={faPenToSquare}
                        style={{ fontSize: 72, color: "white" }}
                    />
                    <span className="w-48 font-semibold text-center uppercase drop-shadow">
                        Sign up today to be a mentor or student
                    </span>
                </Link>
                <Link
                    href="/contact-us"
                    className="h-72 md:w-72 w-11/12 text-white flex flex-col justify-center items-center rounded-xl md:rounded-full relative md:-top-36 hover:scale-[1.02] transition-all drop-shadow bg-gradient-to-b from-teal-500 to-green-600"
                >
                    <span
                        className={
                            "drop-shadow uppercase text-[26px] font-bold " +
                            robotoSlab.className
                        }
                    >
                        Contact
                    </span>
                    <FontAwesomeIcon
                        className="py-1"
                        icon={faEnvelope}
                        style={{ fontSize: 72, color: "white" }}
                    />
                    <span className="w-48 font-semibold text-center uppercase drop-shadow">
                        Need to get ahold of us?
                    </span>
                </Link>
            </div>
        </>
    );
}
