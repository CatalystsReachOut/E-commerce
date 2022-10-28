import React from 'react'
import img1 from "../../assets/images/Hero.svg"
import ButtonGradient from '../Button/ButtonGradient'

const Banner = ({ scrollToProducts }) => {
    return (
        <div>
            <header className="bg-Primary10 dark:bg-[#F4F9F4] py-[195px] flex flex-col">
                <div className="container  mx-auto ">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h2 className="text-Medium+/Title/xxLarge text-black"><span className="banner-txt  whitespace-nowrap">Cold Pressed Oil </span> <br /> made like the olden times
                                </h2>

                                <p className="text-Medium+/Paragraph/Large text-Neutral70 mt-[8px]">We press seeds in wooden machines to extract pure edible oil.
                                    It’s exactly like the olden times, just replaced animals with motors.</p>
                                <div className="flex flex-col mt-[24px] ">
                                    <ButtonGradient  onClick={scrollToProducts} title={"See Products"} />
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                            <img className="w-[95%] " src={img1} alt="email illustration vector art" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Banner