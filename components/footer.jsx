import Link from 'next/link'
import React from 'react'



function Footer() {
  return (
    <>
        <div className="h-[10vh] bg-white bg-opacity-90 text-black">
                <div className="w-[1280px] mx-auto py-10">
                    {/* <div className="text-center">
                        <h3 className="mb-3 text-3xl"> Download our fitness app </h3>
                        <p> Stay fit. All day, every day. </p>
                        <div className="flex justify-center my-10">
                            <div className="flex items-center w-auto px-4 py-2 mx-2 border rounded-lg w-52">
                                <div className="ml-3 text-left">
                                    <p className='text-xs text-gray-200'>Download on </p>
                                    <p className="text-sm md:text-base"> Google Play Store </p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="flex flex-col items-center text-sm mt-28 md:flex-row md:justify-between">
                        <p className="order-2 mt-8 md:order-1 md:mt-0"> &copy; South Bay Math Circle, 2023. </p>
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