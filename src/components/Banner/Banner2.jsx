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
        <div className={`${className} min-h-[250px] banner2 p-8 rounded-lg`}>
            <div className="container flex sm:flex-nowrap gap-5 flex-wrap-reverse justify-between items-center h-full">
                <div className=''>
                    <div className='text-Medium+/Title/xLarge text-Neutral10'>Proceed with {cartCount} item in your bag</div>

                    <div className="flex">
                        {
                            cart[0] ? <div className='text-Medium+/Paragraph/Large mt-[9px] text-Neutral50 '>{cart[0].name} {cart[0].quantity} x {cart[0].count} </div> : null
                        }

                        {
                            cart[1] ? <div className='text-Medium+/Paragraph/Large mt-[9px] text-Neutral50 '>, {cart[1].name} {cart[1].quantity} x {cart[1].count} </div> : null
                        }

                    </div>


                    {
                        cart[2] ?
                            <div className='text-Medium+/Paragraph/Large mt-[9px] text-Neutral50'>and {otherCount}  more items </div>
                            : null
                    }
                    <div className='flex sm:flex-nowrap flex-wrap gap-5 mt-[30px] '>
                        <ButtonGradient onClick={onOpen} title={'View Bag & Continue'} className='text-Medium+/Label/Large-Strong' />
                        <ButtonOutline onClick={scrollToProducts} title={'Keep Shopping'} color={'#FFFFFF'} className={'border-Neutral10 text-Neutral10 text-Medium+/Label/Large-Strong'} />
                    </div>
                </div>
                <div className='bg-Yellow10 rounded-full min-h-[188px] min-w-[188px] aspect-square flex items-center justify-center'>
                    <img src={img} alt="banner1" />
                </div>
            </div>
        </div>
    )
}

export default Banner2