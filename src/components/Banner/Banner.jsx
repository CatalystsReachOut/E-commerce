import React from 'react'
import img1 from "../../assets/images/bannerimg.png"
import ButtonGradient from '../Button/ButtonGradient'

const Banner = ({scrollToProducts}) => {
    return (
        <div>
            <header className="bg-[#F4F9F4] px-12 dark:bg-[#F4F9F4] min-h-screen flex flex-col justify-center">
                <div className="container px-6 py-16 mx-auto ">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h2 className="text-5xl  banner-txt font-semibold text-gray-800 dark:text-white lg:text-5xl"><span className="">Cold Pressed Oil </span>
                                </h2>
                                <h2 className='text-black font-semibold lg:text-5xl font-medium'>made like the olden times</h2>
                                <p className="mt-4 text-[#433B39] dark:text-[#433B39]">We press seeds in wooden machines to extract pure edible oil.
                                    It’s exactly like the olden times, just replaced animals with motors.</p>
                                <div className="flex flex-col mt-8 space-y-3 lg:space-y-0 lg:flex-row">
                                    <ButtonGradient onClick={scrollToProducts} title={"See products"}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-full h-full max-w-md" src={img1} alt="email illustration vector art" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Banner