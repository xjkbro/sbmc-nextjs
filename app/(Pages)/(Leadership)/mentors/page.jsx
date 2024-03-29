"use client";

import { useState } from "react";
export const metadata = {
    title: "Mentors"
}
export default function Mentors() {
    const [mentorList, setMentorList] = useState([
        {
            name: "Vanya Agrawal",
            text: "Hello, my name is Vanya Agrawal, and I am currently a junior taking Pre-Calculus Honors at Palos Verdes High School. For me, math has been an important influence on who I am today, and I love the simple, straightforward way math applies to all aspects of our lives and nature. At South Bay Math Circle, I enjoy teaching elementary school students at SBMC because they are always incredibly inspiring and eager to learn. I am grateful to SBMC for providing students the opportunity to gain a passion for math and am looking forward to helping students grow and improve!",
        },
        {
            name: "Max Colomer",
            text: "Hi, my name is Max Colomer and I am a senior at Palos Verdes High School taking advanced calculus. I like learning math because I see it as a way to learn how to think about complex problems as well as a tool to solve real world challenges. I like teaching at the elementary math level as it allows me to help younger kids feel excited about math and the opportunities it provides.",
        },
        {
            name: "Christopher Duroiu",
            text: "Hello, my name is Christopher Duroiu and I am a senior at Del Norte High School. I am currently taking AP Statistics and I love math / problem solving for the creativity and ingenuity it requires. I can teach any elementary and middle school level of math and I enjoy teaching math because it is an incredibly useful tool, I believe everybody should know. I look forward to helping anybody in need with their problem-solving skills!",
        },
        {
            name: "Kate Espedido",
            text: "Hi! My name is Kate Espedido, and I’m a sophomore at Peninsula High School, currently taking Algebra 2. I’ve been interested in math ever since I was a kid because there’s never only one way to solve a problem—it’s challenging but fun at the same time! I’m working with 3rd and 4th graders, and I like teaching the students lessons they’ll be able to use in the real world while still finding a way to enjoy it. I’m excited to be working with you all!",
        },
        {
            name: "Alfina Eull",
            text: "Hi! My name is Alfina Eull and I am a senior at Da Vinci Connect High School taking Calculus II. I like math because it involves logical thinking and problem solving, and it also includes foundational skills for science which is my main passion. I teach the elementary school level at SBMC, and I like teaching math because it helps my skills stay sharp while also helping others develop their own skills.",
        },
        {
            name: "Arnav Garg",
            text: "My name is Arnav Garg. I am a 7th grader in Ridgecrest intermediate taking geometry honors math this year. I have always had a passion for math since I was a kid. From spending long hours studying math to winning my first competition, I enjoyed math every step of the way. At SBMC, I am excited to help other elementary school students embark on a similar journey. I teach elementary and middle school (6th grade).",
        },
        {
            name: "Andy Gu",
            text: "Hello, my name is Andy Gu and I am currently a Junior taking Advanced Calculus at Peninsula High School. Math has always been an important subject for me, and I love to both learn and teach math. I like to participate in math competitions, and I have always enjoyed solving hard problems. I mainly teach at the middle school level at SBMC and I enjoy teaching because they enjoy math as much as I do. I am grateful to be a mentor at SBMC and I am looking forward to having a great year!",
        },
        {
            name: "Kevin Han",
            text: "What's up everyone? My name is Kevin Han. I'm an 8th grader at Ridgecrest Intermediate School. I take Algebra 2 H at Peninsula High School. I like math because in most complex math problems, there is usually a clever shortcut that you might have never been able to think of. It just blows my mind that there is still more math to learn after reading through so many solutions on a single problem. I teach middle school levels at SBMC. I like teaching fellow learners as everyone has a unique way of thinking about things and I want to experience all the different perspectives of math. I joined SBMC when I was in 3rd grade and had no clue about the world of competition math. SBMC introduced me to a whole new way of thinking about math. I want to share all the different concepts I've learned in over the years with SBMC. Can't wait to mentor y'all.",
        },
        {
            name: "Cynthia Ho",
            text: "Hi, my name is Cynthia and I am currently a Senior at Palos Verdes High School taking Advanced Calculus. Math is my favorite subject because there are numerous methods to get one correct answer. Finding the solution to a challenging math problem is really satisfying, making all the efforts worthwhile. I aim to lead others to the same rewarding feeling by teaching middle schoolers competitive math strategies gathered from my own experience.",
        },
        {
            name: "Bennett Hong",
            text: "Hello, my name is Bennett Hong and I will be taking Algebra 2 Honors as a freshman at PVHS. I personally love how in math there are multiple ways to solve a single problem. I can relate well to kids because I have 2 younger siblings in elementary school. I hope to inspire children so they follow me in my passion for math.",
        },
        {
            name: "Parth Ingle",
            text: "Hello, my name is Parth Ingle. I am currently a sophomore at Palos Verdes Peninsula High School and taking Algebra 2 Honors. Mathematics is one of my favorite subjects because it encourages logical reasoning and mental rigor which helps students have better problem-solving skills. I teach elementary school level students at SBMC and enjoy teaching at SBMC because it provides students with the opportunity to develop and improve their overall understanding of math. I look forward to meeting new students and helping them improve their math skills!",
        },
        {
            name: "Lauren Jung",
            text: "My name is Lauren Jung. I am a junior at Palos Verdes Peninsula High School. I am currently taking AP Calculus BC. I like math because there is almost always a definite answer at the end, instead of an open-minded answer. The most enjoyable thing about math is that some questions may seem extremely difficult, but when I am able to solve them, it brings me excitement. I also did not realize there was so much more to learn about math until I learned the concepts in Calculus AB. When I was in middle school, I took sessions at SBMC where I learned quicker solving methods and overall math at an in-depth level. At SBMC, I usually teach elementary levels as part of the SBMC Board. I love teaching at SBMC because I get to meet many talented students that have high potential. I am always happy to see the students exponentially growing their mathematical knowledge.",
        },
        {
            name: "Victoria Jung",
            text: "Hello! My name is Victoria Jung! I am currently a sophomore at Peninsula High School, taking Pre Calculus Honors. Math is one of my favorite subjects, because there is always something new to learn. I teach math to elementary school students. I like teaching math through SBMC so I can help elementary students enjoy math the way that I do!",
        },
        {
            name: "Audrey Lu",
            text: "Hi, I’m Audrey Lu, and I’m a senior taking AP Statistics at Palos Verdes Peninsula High School. I love math because it can make seemingly impossible problems feasible! I teach middle school students at SBMC and have really enjoyed helping them understand new math concepts. I am looking forward to another year of mentoring for SBMC!",
        },
        {
            name: "Eric Lu",
            text: "Eric Lu is a sophomore taking AP Calc BC at Peninsula High School. He enjoys the satisfaction of solving a difficult math problem through an elegant solution. The useful real-world applications of math continue to amaze him. Eric is excited to share his passion and teach elementary school students at SBMC.",
        },
        {
            name: "Mihir Mehta",
            text: "Hi, my name is Mihir and I am currently a senior at Palos Verdes Peninsula High School taking AP Calculus BC. My favorite subject is math because it is thought-provoking and has many real-world applications. I teach middle school level math and I look forward to meeting you all.",
        },
        {
            name: "Aryan Morshedi-Meibodi",
            text: "Hello there! I am Aryan Morshedi-Meibodi, a 9th grader attending Peninsula High School. Currently, I study Algebra 2 Honors as a math course and am thrilled to have the opportunity to teach you all the wonders of math. I currently teach the upper elementary level here at the South Bay Math Circle, which means I spend most of my time teaching fifth graders. I am excited to meet all of you and guide you through the fascinating patterns of math. I love being able to help others succeed in their academics, which is why I love my role here at SBMC. I am also interested in puns, aviation, tennis, and playing the piano.",
        },
        {
            name: "Rishikesh Muppana",
            text: "Hello, my name is Rishikesh (Rishi) Muppana. I am a rising sophomore at Palos Verdes Peninsula High School. I will be taking Precalculus Honors. Geometry is my favorite part of math. I love math because the ideas are very interesting to me. I have experience teaching math, piano, and spoken English, and it is my second year as a mentor at SBMC. I think my favorite part about mentoring this year will be getting kids interested in math. When I'm not doing math, I'm usually either programming up something or practicing piano. My favorite composers are Chopin, Liszt, and Xenakis.",
        },
        {
            name: "Sofia Neumann",
            text: "Hi! My name is Sofia Neumann and I am currently a Senior at Peninsula High School and am taking regular Calculus this year. Math is one of my favorite and strongest subjects as there is always one right answer to the problems. I love helping others through SBMC because I get to see a cloud lift from their mind as they learn new skills. I teach elementary and middle school math levels and I am so excited to be a part of the new generation's math journey!",
        },
        {
            name: "Isaac Nguyen",
            text: "Hi! I'm Isaac Nguyen and I am currently a senior at Palos Verdes Peninsula High School enrolled in AP Calculus BC. Math is my favorite subject because the process of learning how to solve a new problem and reaching the answer is such a gratifying experience. Here at SBMC, I love the learning atmosphere we have and the collaboration between mentors and students. I teach 5th and 6th graders and I am so excited for an awesome year!",
        },
        {
            name: "Harley Qiu",
            text: "Hi! My name is Harley Qiu. I am a rising junior at Penn High. I will be taking AP Calculus BC once the school year begins. I enjoy math because it is hidden in, and can be applied in real-life situations, and there will almost always be a concrete, correct answer. I have participated in many math competitions, including the AMC 8 and 10, ASMA, CAML, and AIME. I teach all levels of math at South Bay Math Circle, and I enjoy teaching those who have the same passion for math as me. I look forward to another year mentoring at SBMC!",
        },
        {
            name: "Angel Shen",
            text: "Hi everyone! My name is Angel Shen, and I'm a junior at Palos Verdes High School taking AP Calculus BC. Math has always been one of my favorite subjects because of its countless applications in our daily lives. At SBMC, I love helping students of all grade levels strengthen their critical thinking and problem-solving skills. Looking forward to another year with you all!",
        },
        {
            name: "Navraj Singh",
            text: "Hello, my name is Navraj Singh. I am a sophomore at Peninsula High School and I am currently taking Pre-Calculus. I like math because there is no set way to solve a problem and I am free to use any method to get my answer. I am teaching middle school levels as I love to work with people close to my age. I like teaching at SBMC as I have been with them for many years and really enjoy the environment.",
        },
        {
            name: "Deetya Srivatsavaya",
            text: "Hello, my name is Deetya Srivatsavaya and I am an incoming sophomore at Palos Verdes Peninsula High School. This year I will be taking AP Calculus BC. I have been taking part in math competitions since elementary school, and I’m so excited that now I can help others through their competitive math journey as well! I love math because it really helped me improve my problem-solving skills. I teach at the middle school level here at SBMC, and I love how positive and encouraging all the mentors here are. I hope to meet you soon!",
        },
        {
            name: "Jeremy Su",
            text: "Hi, my name is Jeremy Su and I am currently a senior at Palos Verdes Peninsula High School taking Advanced Calculus. I enjoy math because of both its practical applications in real world scenarios and the creativity that can be used in coming up with a solution. I mostly teach at the middle school level at SBMC because I especially enjoy helping students discover solutions to difficult problems which I once had trouble with.",
        },
        {
            name: "Kyra Tang",
            text: "Hi! My name is Kyra Tang and I am an 8th grader at Palos Verdes Intermediate School. I am currently taking Algebra 2 Honors. I like math because I find satisfaction seeing a complicated problem turn into a simple solution. I also find the beauty and complexity of math very fascinating. I like teaching at SBMC because I enjoy sharing my knowledge and tricks to others. Aside from math, I enjoy playing tennis and practicing violin. Can't wait to see you all!",
        },
        {
            name: "Hana Wright",
            text: "My name is Hana Wright. I am in 11th grade at Palos Verdes High School. I am currently enrolled in AP Calculus A/B. I like how math has one solution and once you learn how to solve one type of problem you can apply the same rules to other problems like it. For example, once you know how to use long division, you can use it on any set of numbers and solve it correctly. I have never worked at SBMC before, but I do tutor my sister in math. She is learning fourth/fifth-grade level math to try and test into the accelerated class. I like working with children because they have open mindsets about most things because they are so young. For example, most people my age have already decided if they are good at math, which impacts their ability to learn since they don't believe in themselves, but it seems that most kids don't have deep-rooted self-doubt yet, which makes them more fun to teach.",
        },
        {
            name: "Calista Yeh",
            text: "My name is Calista Yeh and I am a rising 8th grader taking Geometry Honors at Ridgecrest Intermediate. Math is fun because it is useful and it encourages analytical and logical reasoning. I will be teaching at the elementary level at SBMC this year and I look forward to learning and solving some math problems with you all.",
        },
        {
            name: "Nikki Yeh",
            text: "Hello, my name is Nikki Yeh. I am a rising junior at Peninsula High School and will be taking AP Calculus BC. I like math because it fosters and strengthens critical thinking and reasoning. I teach elementary levels at SBMC and I look forward to helping and mentoring students!",
        },
        {
            name: "Allison Yu",
            text: "Hi! My name is Allison Yu and I am a tenth grader at PV High taking AP Calculus BC. Math is fascinating because there are so many clever ways to arrive at one solution. At SBMC, I teach middle school students. I love helping students expand their problem-solving skills and seeing their hard work and determination. I'm excited for another great year together!",
        },
    ]);
    return (
        <>
            <div className="h-[30vh] bg-fixed bg-bottom bg-[length:140%] mix-blend-multiply subpage-parallax">
                <div className="h-[27vh] flex flex-col justify-center items-center">
                    <div className="font-bold text-[56px] text-yellow-300 font-roboto-slab">
                        Mentors
                    </div>
                </div>
            </div>
            {/*  */}
            {mentorList.map((mentor, i) => {
                return (
                    <div key={i} className="flex flex-col justify-center my-24">
                        <div className="w-[1368px] mx-auto mt-8 text-[24px] font-bold text-teal-600 font-roboto-slab">
                            {mentor.name}
                        </div>
                        <p className="text-[20px] mt-4 text-justify w-[1280px] mx-auto">
                            {mentor.text}
                        </p>
                    </div>
                );
            })}
        </>
    );
}
