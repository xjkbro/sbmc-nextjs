import Link from 'next/link'
import React from 'react'



function Footer() {
  return (
    <>
        <div className="h-[10vh] bg-white bg-opacity-90">
                <div className="w-[1280px] mx-auto py-10">
                    {/* <div className="text-center">
                        <h3 className="text-3xl mb-3"> Download our fitness app </h3>
                        <p> Stay fit. All day, every day. </p>
                        <div className="flex justify-center my-10">
                            <div className="flex items-center border w-auto rounded-lg px-4 py-2 w-52 mx-2">
                                <div className="text-left ml-3">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="mt-28 flex flex-col md:flex-row md:justify-between items-center text-sm">
                        <p className="order-2 md:order-1 mt-8 md:mt-0"> &copy; South Bay Math Circle, 2023. </p>
                        <div className="order-1 md:order-2">
                            <Link href="#" className="px-2">About us</Link>
                            <Link href="#" className="px-2 border-l">Contact us</Link>
                            <Link href="#" className="px-2 border-l">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
        </div>
    </>
  )
}

export default Footer