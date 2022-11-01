import React from 'react'
import img1 from "../../assets/images/Hero.svg"
import ButtonGradient from '../Button/ButtonGradient'
import imgMob from "../../assets/images/BannerMob.svg"

const Banner = ({ scrollToProducts, showBreak }) => {
    return (
        <div>
            <header className="bg-Primary10 dark:bg-[#F4F9F4] py-[40px] md:py-[120px] flex flex-col">
                <div className="container  mx-auto ">
                    <div className="items-center lg:flex">
                        <div className="w-full lg:w-1/2">
                            <div className="lg:max-w-lg">
                                <h2 className="md:text-Medium+/Title/xxLarge text-black text-Small/Title/xxLarge"><span className="banner-txt">Cold Pressed Oil </span>
                                    {
                                        showBreak ? <br /> : null
                                    }
                                    made like the olden times
                                </h2>

                                <p className="md:text-Medium+/Paragraph/Large text-Small/Paragraph/Large text-Neutral70 mt-[8px]">We press seeds in wooden machines to extract pure edible oil.
                                    <br />
                                    It’s exactly like the olden times, just replaced animals with motors.</p>
                                <div className="flex flex-col mt-[24px] ">
                                    <ButtonGradient onClick={scrollToProducts} title={"See Products"} />
                                </div>
                            </div>
                        </div>
                        <div className="flex mt-[24px] md:mt-0 items-center justify-center md:w-full  lg:mt-0 lg:w-1/2">
                            <img className="w-[100%] hidden md:block" src={img1} alt="email illustration vector art" />
                            <img className='w-[100%] sm:hidden block ' src={imgMob} alt="" />

                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Banner