import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
} from '@chakra-ui/react'
import { BsBag } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import CheckoutItems from './CheckoutItems'
import ButtonGradient from '../Button/ButtonGradient'
import { useState } from 'react'
import ButtonOutline from '../Button/ButtonOutline'
import Input from '../Input/Input'
import img from './../../assets/images/BeerBottle.png'
import party from './../../assets/images/party.png'
import Bag from "../../assets/images/ToteSimple.svg"
import Location from "../../assets/images/MapPinOutline.svg"
import LocationWhite from "../../assets/images/MapPinOutlinedWhite.svg"
import EmptyCart from "../../assets/images/cartImg.svg"
import { useRef } from 'react';





const Checkout = ({ isOpen, onOpen, onClose, cart, setCart, scrollToProducts }) => {

    const [step, setStep] = useState(1)

    const [sum, setSum] = useState(() => {
        let s = 0

        cart.map(data => {
            s += data.count * parseFloat(data.price)
        })

        return s
    })

    const addQuantity = (id) => {
        console.log(id)

        setCart(prev => {
            const newState = prev?.map(data => {
                if (data.id == id) {
                    return { ...data, count: data.count + 1 }
                }
                return data
            }
            )

            return newState;
        })

    }

    const removeQuantity = (id) => {


        setCart(prev => {

            if (prev.find(data => data.id == id && data.count == 1)) {
                const newState = prev?.filter(data => {
                    if (data.id == id) {
                        if (data.count == 1) {
                            return
                        }
                    }
                    return data
                })

                return newState
            } else {
                const newState = prev?.map(data => {
                    if (data.id == id) {
                        return { ...data, count: data.count - 1 }
                    }
                    return data
                })

                return newState
            }


        })
    }

    const [formDetails, setFormDetails] = useState({
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        pincode: ''
    });

    const [errTxt, setErrTxt] = useState({
        pincode: '',
        phone: ''
    });

    const handleChange = (e) => {
        const {
            name, value
        } = e.target;

        setFormDetails(prev => ({
            ...prev,
            [name]: value
        }))


        if (name == "phone" && (value.length == 10 || value.length == 0)) {
            setErrTxt(prev => ({ ...prev, "phone": '' }))
        } else if (name == "phone") {
            setErrTxt(prev => ({ ...prev, "phone": 'Contact number needs to be 10 digits' }))
        }

        if (name == "pincode" && (value.length == 6 || value.length == 0)) {
            setErrTxt(prev => ({ ...prev, "pincode": '' }))
        } else if (name == "pincode") {
            setErrTxt(prev => ({ ...prev, "pincode": 'Pincode needs to be 6 digits' }))
        }
    }

    const [toast, setToast] = useState({
        state: false,
        text: ''
    })

    const delay = ms => new Promise(res => setTimeout(res, ms));


    const addProduct = async (text) => {
        setToast(prev => ({ ...prev, text: text, state: true }))
        await delay(1500);
        setToast(prev => ({ ...prev, state: false }))
    }


    const validate = () => {

        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        if (!formDetails.first_name || !formDetails.address || formDetails?.phone.length != 10 || formDetails?.pincode.length != 6) {
            return addProduct('Please fill all the details')
        }

        if (!validateEmail(formDetails.email)) {
            return addProduct('Email not valid')
        }

        setStep(3);
        window.scrollTo(0, 0)
    }


    const refSection = useRef(null);


    return (
        <>
            <div ref={refSection}>

                <>{
                    toast?.state ?
                        <div className={`fixed h-[100vh] w-[100vw] flex z-[1000]`}>
                            <div className='animate-fade w-[fit-content] z-[1000] p-[16px] bg-[#222222] rounded-[8px] mx-auto bottom-[90%] mt-auto relative text-[#fff] text-Medium+/Paragraph/Medium'>{toast?.text}</div>
                        </div>
                        : null
                }</>

                <Modal isOpen={isOpen} blockScrollOnMount={false} scrollBehavior={'scroll'} onClose={onClose}>
                    <ModalOverlay style={{
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 59
                        // opacity: "50%"
                    }} />
                    <div className='z-[60] fixed md:top-[10%]  md:py-4'>
                        {
                            step == 1
                                ? <>
                                    {
                                        cart.length == 0 ?

                                            <ModalContent className='bg-[#FFFFFF] md:my-[5vh] rounded-[8px] md:max-h-[90vh]  overflow-y-scroll scrollbarNew  md:max-w-[70%] max-w-[100%] mx-auto  md:p-[32px] px-[16px] py-[30px] '
                                                style={{
                                                    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)',
                                                    scrollPaddingleft: '10px'
                                                }}
                                            >
                                                <ModalHeader className='flex justify-between'><div className='w-[100%]'></div> <ModalCloseButton className='text-[#726C6B]' /></ModalHeader>


                                                <ModalBody className='my-auto' >
                                                    <div className=' text-Small/Title/Large md:text-Medium+/Title/Large text-center text-Neutral80 md:w-[60%] w-[100%] mx-auto'> Your bag is empty, please add products to continue </div>
                                                    <div className='w-[100%] md:mt-[48px] mt-[24px] mx-auto flex'>
                                                        <img src={EmptyCart} alt="" className='md:h-[220px] h-[150px]  mx-auto' />
                                                    </div>
                                                    <div className='w-full mt-[48px] flex  sm:flex-row gap-3 flex-col justify-between'>

                                                        <button onClick={() => { onClose(); scrollToProducts() }} className={`flex gap-[12px] text-Medium+/Label/Large-Strong py-[16px] px-[24px] hover:bg-PrimaryHue highlighted-color text-Neutral10 mx-auto md:w-[fit-content] w-[100%] justify-center grad-btn rounded-[8px] `}>
                                                            See Products
                                                        </button>
                                                    </div>
                                                </ModalBody>

                                                {/* <ModalFooter className='mt-[48px]'>
                                                    
                                                </ModalFooter> */}
                                            </ModalContent>
                                            :
                                            <ModalContent className='bg-[#FFFFFF] md:my-[5vh] rounded-[8px] md:max-h-[90vh]  overflow-y-scroll scrollbarNew  md:max-w-[70%] max-w-[100%] mx-auto  md:p-[32px] px-[16px] py-[30px] '
                                                style={{
                                                    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)',
                                                    scrollPaddingleft: '10px'
                                                }}
                                            >
                                                <ModalHeader className='flex justify-between'><div className='text-Small/Title/Small md:text-Medium+/Title/Small text-Neutral80'> Place an Order </div> <ModalCloseButton className='text-[#726C6B]' /></ModalHeader>

                                                <ModalBody>
                                                    <div>
                                                        <div className='lg:w-[25%] gap-[12px] w-[80%] md:pt-[52px] pt-[30px] flex justify-between items-center'>
                                                            <div className='flex flex-col items-center'>

                                                                <div className='bg-Yellow70 p-2 rounded-full aspect-square flex justify-center items-center h-[40px] w-[40px]'>
                                                                    <img src={Bag} alt="" />
                                                                </div>
                                                                <p className='text-Small/Label/Medium md:text-Medium+/Label/Medium text-[#271F1D] mt-[7px]'>Bag</p>
                                                            </div>
                                                            <div className='h-[1px] mt-[-20px] bg-[#D0CECE] w-full'></div>
                                                            <div className='flex flex-col items-center justify-center'>
                                                                <div className='p-2 h-[40px] w-[40px] rounded-full aspect-square flex justify-center items-center border border-[#726C6B] text-[#726C6B]'>
                                                                    <img src={Location} alt="" />
                                                                </div>
                                                                <p className='text-Small/Label/Medium md:text-Medium+/Label/Medium text-Neutral60 mt-[7px]'>Shipping</p>


                                                            </div>
                                                        </div>
                                                        <div className='md:mt-[48px] mt-[24px] border-[1px]  rounded-[8px] border-Neutral40 '>

                                                            <div
                                                                className='max-h-[25vh] md:p-[24px] p-[16px] overflow-y-scroll scrollbarNew'
                                                            >
                                                                {cart && cart.map((data, key) => {
                                                                    return <CheckoutItems addQuantity={addQuantity} removeQuantity={removeQuantity} item={data} />

                                                                })}
                                                            </div>


                                                            <div className="mt-[20px] md:mx-[24px] mx-[16px]  mb-[24px] p-[16px] bg-Neutral20 flex justify-between items-center  rounded-[4px]">
                                                                <div className='text-Small/Label/Large md:text-Medium+/Label/Large text-Neutral60'>
                                                                    Total
                                                                </div>
                                                                <div className='flex gap-[4px]  rounded-[4px] items-center'>

                                                                    <span className='text-Small/Label/Medium md:text-Medium+/Label/Medium'>₹</span> <span className='text-Small/Title/Small md:text-Medium+/Title/Small text-Neutral80'>{sum}.00</span>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </ModalBody>

                                                <ModalFooter className='md:mt-[48px] mt-[24px]'>
                                                    <div className='w-full flex sm:flex-row gap-[16px] flex-col justify-between'>

                                                        <button className='text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium flex justify-center items-center p-[16px] bg-Primary10 rounded-[4px] cursor-default text-[#3C3C3C]' >
                                                            You can order now & pay directly on delivery
                                                        </button>
                                                        <button onClick={() => setStep(2)} className={`flex gap-[12px] text-Medium+/Label/Medium-Strong w-[100%] md:w-auto md:text-Medium+/Label/Large-Strong py-[16px] px-[24px] hover:bg-PrimaryHue highlighted-color text-Neutral10 w-[fit-content] grad-btn rounded-[8px] justify-center items-center `}>
                                                            <img src={LocationWhite} alt="" />  Add Shipping Details
                                                        </button>
                                                    </div>
                                                </ModalFooter>
                                            </ModalContent>

                                    }
                                </>

                                :
                                step == 2
                                    ?
                                    <ModalContent className='bg-[#FFFFFF] md:my-[5vh] rounded-[8px] md:max-h-[90vh]  overflow-y-scroll scrollbarNew  md:max-w-[70%] max-w-[100%] mx-auto bottom-0  md:p-[32px] px-[16px] py-[30px] '>
                                        <ModalHeader className='flex justify-between'><div className='text-Small/Title/Small md:text-Medium+/Title/Small text-Neutral80'> Place an Order </div> <ModalCloseButton className='text-[#726C6B]' /></ModalHeader>

                                        <ModalBody>
                                            <div>
                                                <div className='lg:w-[25%] gap-[12px] w-[80%] md:pt-[52px] pt-[30px] flex justify-between items-center'>
                                                    <div className='flex flex-col items-center'>

                                                        <div className='bg-Primary70 p-2 rounded-full aspect-square flex justify-center items-center h-[40px] w-[40px]'>
                                                            <img src={Bag} alt="" />
                                                        </div>
                                                        <p className='md:text-Medium+/Label/Medium text-Small/Label/Medium text-Primary70 mt-[7px]'>Bag</p>
                                                    </div>
                                                    <div className='h-[1px] mt-[-20px] bg-[#D0CECE] w-full'></div>
                                                    <div className='flex flex-col items-center'>
                                                        <div className='p-2 h-[40px] w-[40px] rounded-full aspect-square flex justify-center bg-Yellow70 items-center  text-[#726C6B]'>
                                                            <img src={LocationWhite} alt="" />
                                                        </div>
                                                        <p className='md:text-Medium+/Label/Medium text-Small/Label/Medium text-Neutral60 mt-[7px]'>Shipping</p>


                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="md:mt-[48px] mt-[24px] grid grid-cols-2 sm:gap-10 gap-[8px]">
                                                        <div className="col-span-1">
                                                            <Input
                                                                title={'First Name'}
                                                                name={'first_name'}
                                                                value={formDetails?.first_name}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="col-span-1">
                                                            <Input
                                                                title={'Last Name'}
                                                                name={'last_name'}
                                                                value={formDetails?.last_name}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 mt-[8px] sm:gap-[10px] gap-[8px]">
                                                        <div className="md:col-span-1 col-span-2">
                                                            <Input
                                                                title={'Email'}
                                                                name={'email'}
                                                                value={formDetails?.email}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="md:col-span-1 col-span-2">
                                                            <div>
                                                                <label className='text-Small/Label/Small md:text-Medium+/Label/Small text-Neutral60' >Contact Number</label>
                                                                <div className="grid grid-cols-8 gap-[10px]">

                                                                    <div className='col-span-2 md:col-span-1 mt-1 h-[45px] px-2 py-1 bg-white border  border-Neutral40 placeholder-Neutral40  block w-full rounded-md sm:text-sm focus:ring-1 flex'>
                                                                        <p className='m-auto text-Small/Paragraph/Medium md:text-[16px]'>+91</p>
                                                                    </div>

                                                                    {/* <input
                                                                        type="text"
                                                                        className='sm:col-span-1 col-span-3 h-[45px] text-lg mt-1 px-2 py-1 bg-white border  border-Neutral40 placeholder-Neutral40 focus:outline-none focus:border-[#228B22] focus:ring-[#228B22] block w-full rounded-md sm:text-sm focus:ring-1'
                                                                        value={'+91'}
                                                                    /> */}
                                                                    <div className='col-span-6 md:col-span-7 relative'>
                                                                        <input
                                                                            type="number"
                                                                            className='md:col-span-7 col-span-5 h-[45px] sm:text-lg mt-1 sm:px-2 px-1 py-1 border  border-Neutral40 placeholder-Neutral40 focus:outline-none focus:border-[#228B22] focus:ring-[#228B22] block w-full rounded-md sm:text-sm focus:ring-1'
                                                                            name='phone'
                                                                            value={formDetails?.phone}
                                                                            onChange={handleChange}
                                                                        />
                                                                        <p className='absolute whitespace-nowrap right-0 text-Medium+/Paragraph/xSmall text-Danger80 mt-[4px]'>{errTxt?.phone}</p>
                                                                    </div>



                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-4 mt-[8px] sm:gap-10 gap-[8px]">
                                                        <div className="col-span-4 md:col-span-3">
                                                            <Input
                                                                title={'Address (We only deliver in Bhopal currently)'}
                                                                name='address'
                                                                value={formDetails?.address}
                                                                onChange={handleChange}
                                                            />
                                                        </div>
                                                        <div className="md:col-span-1 col-span-2">
                                                            <label className='text-Small/Label/Small md:text-Medium+/Label/Small text-Neutral60 whitespace-nowrap right-0' >Pin Code</label>

                                                            <input
                                                                type="number"
                                                                className='sm:col-span-7 col-span-3 h-[45px] sm:text-lg mt-1 sm:px-2 px-1 py-1 border  border-Neutral40 placeholder-Neutral40 focus:outline-none focus:border-[#228B22] focus:ring-[#228B22] block w-full rounded-md sm:text-sm focus:ring-1'
                                                                name='pincode'
                                                                value={formDetails?.pincode}
                                                                onChange={handleChange}
                                                            />
                                                            <p className='absolute text-Medium+/Paragraph/xSmall text-Danger80 mt-[4px]'>{errTxt?.pincode}</p>





                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ModalBody>

                                        <ModalFooter className='mt-[48px]'>
                                            <div className='w-full flex sm:flex-row gap-[16px] flex-col justify-between'>

                                                <button className='text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium flex justify-center items-center p-[16px] bg-Primary10 rounded-[4px] cursor-default text-[#3C3C3C]' >
                                                    You can order now & pay directly on delivery
                                                </button>
                                                <div className='flex sm:flex-row flex-col  md:m-0 gap-[16px] '>
                                                    <ButtonOutline onClick={() => { setStep(1) }} title={'Back to Bag'} color={'#228B22'} textColor={'#228B22'} className={'text-Primary60 border-Primary60 text-Medium+/Label/Large-Strong hover:bg-Primary10 w-[100%] md:w-auto'} />
                                                    <ButtonGradient title={'Place Order'} className={'w-[100%] md:w-auto'} onClick={() => { validate() }} />
                                                </div>
                                            </div>
                                        </ModalFooter>

                                        {/* <ModalFooter className='mt-3 '>
                                        <div className='w-full flex gap-3 sm:flex-row flex-col justify-between'>

                                            <button className='sm:px-6 px-2 py-2.5 rounded-lg flex justify-center items-center bg-[#F4F9F4] text-[#3C3C3C] sm:text-base text-sm' onClick={onClose}>
                                                You can order now & pay directly on delivery
                                            </button>
                                            <div className='flex sm:flex-row flex-col gap-3 max-h-[50px]'>
                                                <ButtonOutline onClick={() => { setStep(1) }} title={'Back to Bag'} color={'#228B22'} textColor={'#228B22'} className={'sm:text-base text-sm sm:px-6 py-2 px-2'} />
                                                <ButtonGradient title={'Add Shipping Details'} className={'min-w-[240px] px-2 sm:text-base text-sm sm:px-6 px-2'} onClick={() => { setStep(3) }} />
                                            </div>
                                        </div>
                                    </ModalFooter> */}
                                    </ModalContent>
                                    :
                                    <ModalContent className='bg-[#FFFFFF] md:my-[5vh] rounded-[8px] md:max-h-[90vh]  overflow-y-scroll scrollbarNew  md:max-w-[70%] max-w-[100%] mx-auto max-h-auto  p-[32px] '>
                                        <ModalHeader className='flex justify-between'><div className='text-Medium+/Title/Small text-Neutral80'> Order Summary </div> <ModalCloseButton className='text-[#726C6B]' /></ModalHeader>

                                        <ModalBody>
                                            <div className='md:mt-[52px] mt-[20px]'>
                                                <div className="sm:grid flex flex-wrap-reverse gap-[48px] grid-cols-2">
                                                    <div className="col-span-1 flex flex-col gap-5 border-[1px] border-Neutral40 rounded-[8px] md:p-[24px] p-[16px] ">

                                                        <div className='max-h-[30vh] pt-3 overflow-y-scroll scrollbarNew'>



                                                            {
                                                                cart && cart.map((data, key) => (
                                                                    <div className='flex relative mb-[24px] gap-5'>
                                                                        <div className="h-[24px] w-[24px] rounded-full bg-[#0E390E] absolute translate-x-[55px] -translate-y-[10px] flex items-center justify-center text-[white] font-bold text-sm"> {data.count}</div>
                                                                        <div className='md:w-[108px]  md:h-[108px] w-[75px]  h-[75px] rounded-sm aspect-square flex  items-center justify-center '>
                                                                            <img src={data.image} alt="item" className='w-[100%]' />
                                                                        </div>
                                                                        <div>

                                                                            <div className='text-Small/Label/Large-Strong md:text-Medium+/Label/Large-Strong text-Neutral80'>
                                                                                {data.name}
                                                                            </div>
                                                                            <div className='mt-[4px] text-Small/Label/Medium md:text-Medium+/Paragraph/Medium text-Neutral60'>
                                                                                {data.quantity}
                                                                            </div>
                                                                            <div className='mt-[16px] flex gap-[4px]'>
                                                                                <span className='text-Small/Label/Medium md:text-Medium+/Label/Medium'>₹</span> <span className='text-Small/Title/Small md:text-Medium+/Title/Small'>{data.price}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }

                                                        </div>

                                                        <div className="mt-[10px] p-[16px] bg-Neutral20 flex justify-between items-center px-3 rounded-[4px]">
                                                            <div className='text-Small/Label/Large md:text-Medium+/Label/Large text-Neutral60'>
                                                                Total
                                                            </div>
                                                            <div className='flex gap-[4px]  rounded-[4px] items-center'>

                                                                <span className='text-Small/Label/Large md:text-Medium+/Label/Medium'>₹</span> <span className='text-Small/Title/Medium md:text-Medium+/Title/Small text-Neutral80'>{sum}.00</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-span-1">
                                                        <div className='gradient-2 h-[72px] w-[72px] rounded-full flex items-center justify-center'>
                                                            <img src={party} alt="" />
                                                        </div>
                                                        <h2 className="text-Small/Title/Medium md:text-Medium+/Title/Medium text-Primary80 mt-[24px]">
                                                            Thank you {formDetails?.first_name} for taking a step towards a healthy lifestyle
                                                        </h2>
                                                        <p className='text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium text-Neutral70 mt-[4px] md:mt-[8px]'>Your order has been received and will be shipped to <span className='text-Medium+/Paragraph/Medium-Strong break-all'>{formDetails?.address}</span> shortly. </p>
                                                        <p className='text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium text-Neutral70 mt-[8px] md:mt-[16px]'>You can check <span className='text-Medium+/Paragraph/Medium-Strong'>{formDetails?.email}</span> for confirmation email.</p>
                                                        <p className='text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium text-Neutral70 mt-[8px] md:mt-[16px]'>We’ll call you on <span className='text-Medium+/Paragraph/Medium-Strong'>{formDetails?.phone}</span> before delivery.</p>

                                                    </div>
                                                </div>

                                            </div>
                                        </ModalBody>

                                        <ModalFooter className='md:mt-[64px] mt-[20px] '>

                                            <div className='w-full flex sm:flex-row gap-3 flex-col justify-between'>

                                                <button className='text-Small/Paragraph/Medium md:text-Medium+/Paragraph/Medium flex justify-center items-center p-[16px] bg-Neutral20 rounded-[4px] text-Neutral70 flex-col  md:flex-row' onClick={onClose}>
                                                    Something is off? Call us on <br /> <span className='text-Small/Paragraph/Medium-Strong md:text-Medium+/Paragraph/Medium-Strong'> +91 6261 867 936</span>
                                                </button>
                                                <div className='flex sm:flex-row flex-col gap-3 '>
                                                    <ButtonGradient title={'Got it'} className={'md:w-auto w-[100%]'} onClick={() => {
                                                        onClose(); setCart([]) 
                                                        // window.scrollTo({
                                                        //     top: refSection.current.offsetTop,
                                                        //     behavior: 'smooth'
                                                        // });
                                                    }} />
                                                </div>
                                            </div>

                                        </ModalFooter>
                                    </ModalContent>
                        }

                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Checkout