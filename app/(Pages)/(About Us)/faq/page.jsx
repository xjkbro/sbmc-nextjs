import Container from "@/components/Container";
import SubpageTitle from "@/components/SubpageTitle";
import Link from "next/link";
export const metadata = {
    title: "FAQs"
}
export default function FAQ() {
    return (
        <>
            <SubpageTitle title={"FAQs"} />
            {/*  */}
            <Container>
                <div className="flex flex-col justify-center my-24">
                    {/*  */}
                    <div className=" mx-auto mt-8 text-[24px] font-bold text-teal-600 font-roboto-slab">
                        Q. What is South Bay Math Circle?
                    </div>
                    <p className="text-[20px] mt-4 text-justify  mx-auto">
                        South Bay Math Circle is a student run, nonprofit club
                        that gives all elementary and middle school students an
                        opportunity to expand their knowledge in the math field.
                        The curriculum taught will be competition-based math
                        usually not taught in school. This includes theorems and
                        fun brain teasers. Through creative mentoring, students
                        will have a blast learning math and develop critical
                        thinking skills.
                    </p>
                    <div className=" mx-auto mt-8 text-[24px] font-bold text-teal-600 font-roboto-slab">
                        Q. What are the requirements to volunteer as a mentor?
                    </div>
                    <p className="text-[20px] mt-4 text-justify  mx-auto">
                        We would love for any 8th – 12 grade students to
                        volunteer. Visit our sign up page to get started!
                    </p>
                    <div className=" mx-auto mt-8 text-[24px] font-bold text-teal-600 font-roboto-slab">
                        Q. Who should attend?
                    </div>
                    <p className="text-[20px] mt-4 text-justify  mx-auto">
                        We accept anyone who is interested in math! South Bay
                        Math Circle is geared toward 4th to 8th grade students.
                        There will be 2 levels of math taught at SBMC. The
                        beginner level will be mainly geared toward 4th and 5th
                        grade students. The advanced level will be geared
                        towards 6th to 8th grade students. However, any student
                        can attend either or both sessions based on his or her
                        skill. Younger students will need prior approval to
                        attend.
                    </p>
                    <div className=" mx-auto mt-8 text-[24px] font-bold text-teal-600 font-roboto-slab">
                        Q. How do I sign up to be a student or a volunteer?
                    </div>
                    <p className="text-[20px] mt-4 text-justify  mx-auto">
                        Visit our sign up page{" "}
                        <Link
                            className="text-teal-500 underline"
                            href="/sign-up"
                        >
                            here
                        </Link>
                        . Also, please sign up for our mailing list. We will
                        send you information regarding classes, events and news.
                    </p>
                    <div className=" mx-auto mt-8 text-[24px] font-bold text-teal-600 font-roboto-slab">
                        Q. How do I donate?
                    </div>
                    <p className="text-[20px] mt-4 text-justify  mx-auto">
                        Click{" "}
                        <Link
                            className="text-teal-500 underline"
                            href="/donation"
                        >
                            here
                        </Link>{" "}
                        to go to our donation page which will lead you to
                        Paypal. We value any donations you are able to provide.
                        All donations will be used for printing, location
                        rentals, and supplies for students. Thank you again for
                        your interest and generosity.
                    </p>
                </div>
            </Container>
        </>
    );
}
