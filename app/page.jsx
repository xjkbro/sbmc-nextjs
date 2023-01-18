import Image from 'next/image'
// import { Inter } from '@next/font/google'
import styles from './page.module.css'
import bg from '../public/background-home.jpg'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
        <div className="h-[50vh] bg-fixed bg-center bg-cover homescreen-parallax">
            <div className="h-[40vh] flex flex-col justify-center items-center">
                <div className="font-bold text-[48px]">MATH FOR THE FUTURE</div>
                <div className="font-bold text-[24px] w-[500px] text-center">MENTORING AND VOLUNTEERING SERVICES FOR SOUTH BAY STUDENTS</div>
            </div>
        </div>
        {/* <div style={{
            backgroundImage: `url(${bg.src})`,
            width: '100vw',
            height: '100vh',
            }}>asd</div> */}
        {/* <Image src="/background-home.jpg" fill="true" ></Image> */}
        <div className="flex justify-center gap-8">
            <div className="h-64 w-64 flex justify-center items-center rounded-full relative -top-32 hover:scale-[1.02] transition-all drop-shadow bg-gradient-to-b from-yellow-300 to-yellow-500">asdasd</div>
            <div className="h-64 w-64 flex justify-center items-center rounded-full relative -top-32 hover:scale-[1.02] transition-all drop-shadow bg-gradient-to-b from-cyan-500 to-blue-600">asdasd</div>
            <div className="h-64 w-64 flex justify-center items-center rounded-full relative -top-32 hover:scale-[1.02] transition-all drop-shadow bg-gradient-to-b from-teal-500 to-green-600">asdasd</div>
        </div>
        <div className="h-96">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa cumque officia magni quos? Nihil, asperiores eius quaerat, perspiciatis odit quibusdam, eos dolorum ea facere facilis porro iste. Consequatur, ab quisquam?</div>
        {/* <main className={styles.main}>
        <div className={styles.description}>
            <p>
            Get started by editing&nbsp;
            <code className={styles.code}>app/page.jsx</code>
            </p>
            <div>
            <a
                href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                By{' '}
                <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
                />
            </a>
            </div>
        </div>

        <div className={styles.center}>
            <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
            />
            <div className={styles.thirteen}>
            <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
            </div>
        </div>

        <div className={styles.grid}>
            <a
            href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={inter.className}>
                Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Find in-depth information about Next.js features and API.
            </p>
            </a>

            <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={inter.className}>
                Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Explore the Next.js 13 playground.</p>
            </a>

            <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2 className={inter.className}>
                Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
            </a>
        </div>
        </main> */}
      
    </>
  )
}
