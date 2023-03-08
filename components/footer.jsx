import Link from 'next/link'


function Footer() {
  return (
        <footer className="h-[10vh] bg-white bg-opacity-90 text-black">
                <div className="w-[1280px] mx-auto py-10">
                    <span className="flex flex-col items-center text-sm mt-28 md:flex-row md:justify-between">
                        <span className="order-2 mt-8 md:order-1 md:mt-0"> &copy; South Bay Math Circle, 2023. </span>
                        <span className="order-1 md:order-2">
                            <Link href="#" className="px-2">About us</Link>
                            <Link href="#" className="px-2 border-l">Contact us</Link>
                            <Link href="#" className="px-2 border-l">Privacy Policy</Link>
                        </span>
                    </span>
                </div>
        </footer>
  )
}

export default Footer