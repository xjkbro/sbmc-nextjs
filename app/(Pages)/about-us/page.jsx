export default function AboutUs() {
  return (
    <>
      <div className="h-[30vh] bg-fixed bg-bottom bg-[length:140%] mix-blend-multiply subpage-parallax">
        <div className="h-[27vh] flex flex-col justify-center items-center">
          <div className="font-bold text-[56px] text-yellow-300 font-roboto-slab">
            About Us
          </div>
        </div>
      </div>
        {/*  */}
      <div className="my-24 flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center text-center">
          <div className="text-teal-600 uppercase text-center text-[42px] w-[720px] font-bold font-roboto-slab">
            Welcome to the <br /> South Bay Math Circle
          </div>
        </div>
        <div className="mt-8 uppercase text-[28px] text-center font-bold">
          Our Organization
        </div>
        <p className="text-[20px] mt-4 text-justify w-[1280px] mx-auto">
          South Bay Math Circle is a student run, non-profit community service
          organization. South Bay Math Circle is a free competitive math program
          focusing on the problem-solving skills that lead students to success
          in both academics and the real world. Our goal is to create a strong
          foundation for kids to increase critical thinking and motivate kids to
          excel in various math competitions. Our program starts from 3rd grade
          to 8th grade. High school students are encouraged to sign up to be
          mentors.
        </p>
        <div className="mt-8 uppercase text-[28px] text-center font-bold">
          Our Story
        </div>
        <p className="text-[20px] mt-4 text-justify w-[1280px] mx-auto">
          The South Bay Math Circle was founded in 2016 by Laura Gong. Laura is
          a math lover and student at Palos Verdes School district. As young
          mathematician, Laura realized the drought of local math resources for
          younger students in the South Bay area. Moreover, many of her
          classmates and peers had the drive to participate in various math
          competitions but needed guidance that was not readily available.
          Seeing the need for the community and wanting to share her experiences
          and knowledge, Laura and a group of dedicated high school students
          initiated their own group- South Bay Math Circle. Above all, Laura and
          South Bay Math Circle realized the importance of making math fun.
        </p>
        <p className="text-[20px] mt-4 text-justify w-[1280px] mx-auto">

          As SBMC gained traction, its need for growth became crystal clear.
          Therefore, Zack Foltz, Aksh Garg, and Collin Shiang worked on
          establishing tax-deductible donation forms. Through months of hard
          work, and support from the adult board, they successfully established
          SBMC as a 501(c)3.
        </p>
        <p className="text-[20px] mt-4 text-justify w-[1280px] mx-auto">
          COVID-19 attempted to blow out SBMC's glimmering spirit. We acquired
          dozens of virtual rooms to ensure student-teacher ratios essential to
          SBMC. With a safe online media via G-suite for nonprofits, an
          effective platform to sustain SBMC, its mentors' team developed over
          500 pages of a new online curriculum.
        </p>
      </div>
    </>
  );
}
