import Link from "next/link";
import Container from "@/components/Container";
import Introduction from "@/components/Introduction";

import { Roboto_Slab } from "@next/font/google";
const robotoSlab = Roboto_Slab({
    subsets: ["latin"],
    weight: ["500", "600", "700", "900"],
});

export default function Home() {
    return (
        <>
            <Introduction />
            <Container>
                <div className="flex flex-col justify-center my-24">
                    <div className="flex flex-col justify-center text-center">
                        <div className="uppercase text-[28px] font-bold">
                            Welcome to
                        </div>
                        <div
                            className={
                                "text-teal-600 uppercase text-[42px] font-bold " +
                                robotoSlab.className
                            }
                        >
                            South Bay Math Circle
                        </div>
                    </div>
                    <p className="mt-4 text-justify mx-1 md:w-full md:mx-auto text-[20px]">
                        Founded in 2016, South Bay Math Circle is a non-profit,
                        enrichment program inspiring the next generation of
                        future mathematicians. Our mission is to educate
                        elementary and middle school students in mathematics not
                        covered in the common classroom, as well as provide
                        opportunities for older students to gain experience in
                        community service and mentoring. We aim to enhance
                        students&apos; problem solving and critical thinking
                        skills with the help of our devoted high school
                        volunteer mentors, who will guide their mentees in
                        approaching the next steps of their curriculum.
                    </p>
                    <Link
                        className="px-4 py-2 mx-auto mt-8 text-white transition-all bg-gray-900 rounded hover:bg-gray-700"
                        href="/about-us"
                    >
                        Learn More
                    </Link>
                </div>
            </Container>
        </>
    );
}
