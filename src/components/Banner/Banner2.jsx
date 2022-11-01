import React, { useEffect } from 'react'
import './Banner.scss'
import img from './../../assets/images/Sparkle.svg'
import ButtonGradient from '../Button/ButtonGradient'
import ButtonOutline from '../Button/ButtonOutline'
import { useState } from 'react'

const Banner2 = ({ className, scrollToProducts, cart, cartCount, onOpen }) => {

    const [otherCount, setOtherCount] = useState(0);

    useEffect(() => {
        if (cart[2]) {
            let count = 0;
            for (var i = 0; i < cart.length; i++) {
                count += cart[i].count
            }

            setOtherCount(count)
        }
    }, [])


    return (
        <div className={`${className} min-h-[250px] banner2 md:py-[64px] md:px-[48px] px-[16px] py-[32px] rounded-[8px]`}>
            <div className="container flex sm:flex-nowrap gap-5 flex-wrap-reverse justify-between items-center h-full">
                <div className=''>
                    <div className=''>
                        <p className='text-Small/Title/xLarge md:text-Medium+/Title/xLarge text-Neutral10'>Proceed with {cartCount} item in your bag</p></div>

                    <div className="flex">

                        <p>
                            {
                                cart[0] ? <span className='text-Small/Paragraph/Large md:text-Medium+/Paragraph/Large mt-[9px] text-Neutral50 '>{cart[0].name} {cart[0].quantity} x {cart[0].count} </span> : null
                            }

                            {
                                cart[1] ? <span className='text-Small/Paragraph/Large md:text-Medium+/Paragraph/Large mt-[9px] text-Neutral50 '>, {cart[1].name} {cart[1].quantity} x {cart[1].count} </span> : null
                            }


                            <br />
                            {
                                cart[2] ?
                                    <span className='text-Small/Paragraph/Large md:text-Medium+/Paragraph/Large mt-[9px] text-Neutral50'>and {otherCount}  more items </span>
                                    : null
                            }

                        </p>
                    </div>
                    <div className='flex sm:flex-nowrap flex-wrap gap-5 mt-[30px] '>
                        <ButtonGradient onClick={onOpen} title={'View Bag & Continue'} className='text-Medium+/Label/Large-Strong w-[100%] md:w-auto' />
                        {/* <ButtonOutline  title={''} color={'#FFFFFF'} className={''} /> */}
                        <button onClick={scrollToProducts} className={`w-[100%] md:w-auto border border-Neutral10 text-Neutral10 text-text-Medium+/Label/Medium-Strong md:text-Medium+/Label/Large-Strong md:py-[16px] md:px-[24px] py-[14px] px-[16px]  w-[fit-content] rounded-[8px] rounded-lg flex justify-center gap-2 items-center `}>
                            Keep Shopping
                        </button>

                    </div>
                </div>
                <div className='bg-Yellow10 rounded-full md:min-h-[188px] md:min-w-[188px] min-h-[120px] min-w-[120px] aspect-square flex items-center justify-center'>
                    <img src={img} className="md:w-[105px] w-[80px]" alt="banner1" />
                </div>
            </div>
        </div>
    )
}

export default Banner2