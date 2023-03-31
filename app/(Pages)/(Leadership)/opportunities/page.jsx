import Link from "next/link";
export const metadata = {
    title: "Opportunities"
}
export default function Opportunities() {
  return (
    <>
      <div className="h-[30vh] bg-fixed bg-bottom bg-[length:140%] mix-blend-multiply subpage-parallax">
        <div className="h-[27vh] flex flex-col justify-center items-center">
          <div className="font-bold text-[56px] text-yellow-300 font-roboto-slab">
            Leadership Opportunities
          </div>
        </div>
      </div>
        {/*  */}
      <div className="flex flex-col justify-center my-24">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-teal-600 uppercase text-center text-[42px] w-[720px] font-bold font-roboto-slab">
            Leadership Opportunities
          </div>
        </div>
        <p className="text-[20px] mt-4 text-justify w-[1280px] mx-auto">
        High School Student Board. High school students who volunteer 25 hours or more per year at SBMC can apply for a position on the student board. Please email <Link className="text-teal-500 underline" href="mailto:info@southbaymathcircle.org">info@southbaymathcircle.org</Link> if you are interested in joining. Student board members are required to purchase an SBMC t-shirt. Student board members are responsible for the running of the SBMC mentoring sessions.
        </p>
        <p className="text-[20px] mt-4 text-justify w-[1280px] mx-auto">
        While a student board position is a lot of work, our student board members gained valuable leadership experiences that serve them in the future. We are proud that all of our former high school student board members attend or attended 4-year colleges including but not limited to UPenn, Harvard, Stanford, USC, UC Berkeley, UC Irvine, UCSB, UC Riverside, UC San Diego, Cal State Long Beach, and many more.
        </p>
      </div>
    </>
  );
}
