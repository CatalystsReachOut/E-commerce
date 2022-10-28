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





const Checkout = ({ isOpen, onOpen, onClose, cart, setCart }) => {

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

    const [formDetails, setFormDetails] = useState();

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

        if (name == "phone" && formDetails.phone.length < 9 && formDetails.phone.length > 0 ) {
            setErrTxt(prev => ({ ...prev, "phone": 'Contact number needs to be 10 digits' }))
        }else if(name == "phone"){
            setErrTxt(prev => ({ ...prev, "phone": '' }))
        }

        if (name == "pincode" && formDetails.pincode.length < 5 ) {
            setErrTxt(prev => ({ ...prev, "pincode": 'Pincode needs to be 6 digits' }))
        }else if(name == "pincode"){
            setErrTxt(prev => ({ ...prev, "pincode": '' }))
        }
    }

    return (
        <>
            <div >


                <Modal isOpen={isOpen} blockScrollOnMount={false} scrollBehavior={'scroll'} onClose={onClose}>
                    <ModalOverlay style={{
                        background: 'rgba(0,0,0,0.5)',
                        zIndex: 59
                        // opacity: "50%"
                    }} />
                    <div className='z-[60] fixed top-[10%]  py-4'>
                        {
                            step == 1
                                ?
                                <ModalContent className='bg-[#FFFFFF] my-[5vh] rounded-[8px] max-h-[90vh] m-auto overflow-y-scroll scrollbarNew min-h-[90vh] max-w-[70%] mx-auto  m-auto p-[32px] '
                                    style={{
                                        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)',
                                        scrollPaddingleft: '10px'
                                    }}
                                >
                                    <ModalHeader className='flex justify-between'><div className='text-Medium+/Title/Small text-Neutral80'> Place an Order </div> <ModalCloseButton className='text-[#726C6B]' /></ModalHeader>

                                    <ModalBody>
                                        <div>
                                            <div className='lg:w-[25%] gap-[12px] w-[80%] pt-[52px] flex justify-between items-center'>
                                                <div className='flex flex-col items-center'>

                                                    <div className='bg-Yellow70 p-2 rounded-full aspect-square flex justify-center items-center h-[40px] w-[40px]'>
                                                        <img src={Bag} alt="" />
                                                    </div>
                                                    <p className='text-Medium+/Label/Medium text-[#271F1D] mt-[7px]'>Bag</p>
                                                </div>
                                                <div className='h-[1px] mt-[-20px] bg-[#D0CECE] w-full'></div>
                                                <div className='flex flex-col items-center'>
                                                    <div className='p-2 h-[40px] w-[40px] rounded-full aspect-square flex justify-center items-center border border-[#726C6B] text-[#726C6B]'>
                                                        <img src={Location} alt="" />
                                                    </div>
                                                    <p className='text-Medium+/Label/Medium text-Neutral60 mt-[7px]'>Shipping</p>


                                                </div>
                                            </div>
                                            <div className='mt-[48px] border-[1px]  rounded-[8px] border-Neutral40 '>

                                                <div
                                                    className='max-h-[25vh] p-[24px] overflow-y-scroll scrollbarNew'
                                                >
                                                    {cart && cart.map((data, key) => {
                                                        return <CheckoutItems addQuantity={addQuantity} removeQuantity={removeQuantity} item={data} />

                                                    })}
                                                </div>


                                                <div className="mt-[40px] mx-[24px] mb-[24px] p-[16px] bg-Neutral20 flex justify-between items-center px-3">
                                                    <div className='text-Medium+/Label/Large text-Neutral60'>
                                                        Total
                                                    </div>
                                                    <div className='flex gap-[4px]  rounded-[4px] items-center'>

                                                        <span className='text-Medium+/Label/Medium'>₹</span> <span className='text-Medium+/Title/Small text-Neutral80'>{sum}</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </ModalBody>

                                    <ModalFooter className='mt-[48px]'>
                                        <div className='w-full flex sm:flex-row gap-3 flex-col justify-between'>

                                            <button className='text-Medium+/Paragraph/Medium flex justify-center items-center p-[16px] bg-Primary10 rounded-[4px] text-[#3C3C3C]' onClick={onClose}>
                                                You can order now & pay directly on delivery
                                            </button>
                                            <button onClick={() => setStep(2)} className={`flex gap-[12px] text-Medium+/Label/Large-Strong py-[16px] px-[24px] hover:bg-PrimaryHue highlighted-color text-Neutral10 w-[fit-content] grad-btn rounded-[8px] `}>
                                                <img src={LocationWhite} alt="" />  Add Shipping Details
                                            </button>
                                        </div>
                                    </ModalFooter>
                                </ModalContent>
                                :
                                step == 2
                                    ?
                                    <ModalContent className='bg-[#FFFFFF] my-[5vh] rounded-[8px] max-h-[90vh] m-auto overflow-y-scroll scrollbarNew min-h-[90vh] max-w-[70%] mx-auto  m-auto p-[32px]'>
                                        <ModalHeader className='flex justify-between'><div className='text-Medium+/Title/Small text-Neutral80'> Place an Order </div> <ModalCloseButton className='text-[#726C6B]' /></ModalHeader>

                                        <ModalBody>
                                            <div>
                                                <div className='lg:w-[25%] gap-[12px] w-[80%] pt-[52px] flex justify-between items-center'>
                                                    <div className='flex flex-col items-center'>

                                                        <div className='bg-Primary70 p-2 rounded-full aspect-square flex justify-center items-center h-[40px] w-[40px]'>
                                                            <img src={Bag} alt="" />
                                                        </div>
                                                        <p className='text-Medium+/Label/Medium text-Primary70 mt-[7px]'>Bag</p>
                                                    </div>
                                                    <div className='h-[1px] mt-[-20px] bg-[#D0CECE] w-full'></div>
                                                    <div>
                                                        <div className='p-2 h-[40px] w-[40px] rounded-full aspect-square flex justify-center bg-Yellow70 items-center  text-[#726C6B]'>
                                                            <img src={LocationWhite} alt="" />
                                                        </div>
                                                        <p className='text-Medium+/Label/Medium text-Neutral60 mt-[7px]'>Shipping</p>


                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="mt-[48px] grid grid-cols-2 sm:gap-10 gap-4">
                                                        <div className="col-span-1">
                                                            <Input
                                                                title={'First Name'}
                                                            />
                                                        </div>
                                                        <div className="col-span-1">
                                                            <Input
                                                                title={'Last Name'}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-2 mt-5 sm:gap-10 gap-4">
                                                        <div className="col-span-1">
                                                            <Input
                                                                title={'Email'}
                                                            />
                                                        </div>
                                                        <div className="col-span-1">
                                                            <div>
                                                                <label className='text-Medium+/Label/Small text-Neutral60' >Contact Number</label>
                                                                <div className="grid grid-cols-8 gap-3">
                                                                    <input
                                                                        type="text"
                                                                        className='sm:col-span-1 col-span-3 h-[45px] text-lg mt-1 px-2 py-1 bg-white border  border-Neutral40 placeholder-Neutral40 focus:outline-none focus:border-[#228B22] focus:ring-[#228B22] block w-full rounded-md sm:text-sm focus:ring-1'
                                                                        value={'+91'}
                                                                    />
                                                                    <div className='col-span-7 relative'>
                                                                        <input
                                                                            type="number"
                                                                            className='sm:col-span-7 col-span-5 h-[45px] sm:text-lg mt-1 sm:px-2 px-1 py-1 border  border-Neutral40 placeholder-Neutral40 focus:outline-none focus:border-[#228B22] focus:ring-[#228B22] block w-full rounded-md sm:text-sm focus:ring-1'
                                                                            name='phone'
                                                                            value={formDetails?.phone}
                                                                            onChange={handleChange}
                                                                        />
                                                                        <p className='absolute text-Medium+/Paragraph/xSmall text-Danger80 mt-[4px]'>{errTxt?.phone}</p>
                                                                    </div>



                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-4 mt-5 sm:gap-10 gap-4">
                                                        <div className="col-span-3">
                                                            <Input
                                                                title={'Address Line 1'}
                                                            />
                                                        </div>
                                                        <div className="col-span-1">
                                                            <label className='text-Medium+/Label/Small text-Neutral60' >PinCode</label>

                                                            <input
                                                                type="number"
                                                                className='sm:col-span-7 col-span-5 h-[45px] sm:text-lg mt-1 sm:px-2 px-1 py-1 border  border-Neutral40 placeholder-Neutral40 focus:outline-none focus:border-[#228B22] focus:ring-[#228B22] block w-full rounded-md sm:text-sm focus:ring-1'
                                                                name='pincode'
                                                                value={formDetails?.pincode}
                                                                onChange={handleChange}
                                                                min={10}
                                                                
                                                            />
                                                            <p className='absolute text-Medium+/Paragraph/xSmall text-Danger80 mt-[4px]'>{errTxt?.pincode}</p>





                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ModalBody>

                                        <ModalFooter className='mt-[48px]'>
                                            <div className='w-full flex sm:flex-row gap-3 flex-col justify-between'>

                                                <button className='text-Medium+/Paragraph/Medium flex justify-center items-center p-[16px] bg-Primary10 rounded-[4px] text-[#3C3C3C]' onClick={onClose}>
                                                    You can order now & pay directly on delivery
                                                </button>
                                                <div className='flex sm:flex-row flex-col gap-3 '>
                                                    <ButtonOutline onClick={() => { setStep(1) }} title={'Back to Bag'} color={'#228B22'} textColor={'#228B22'} className={'text-Primary60 border-Primary60 text-Medium+/Label/Large-Strong hover:bg-Primary10'} />
                                                    <ButtonGradient title={'Place Order'} className={'min-w-[240px'} onClick={() => { setStep(3) }} />
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
                                    <ModalContent className='bg-[#FFFFFF] my-[5vh] rounded-[8px] max-h-[90vh] m-auto overflow-y-scroll scrollbarNew min-h-[90vh] max-w-[70%] mx-auto  m-auto p-[32px]'>
                                        <ModalHeader className='flex justify-between'><div className='text-Medium+/Title/Small text-Neutral80'> Order Summary </div> <ModalCloseButton className='text-[#726C6B]' /></ModalHeader>

                                        <ModalBody>
                                            <div className='mt-[52px]'>
                                                <div className="sm:grid flex flex-wrap-reverse gap-[48px] grid-cols-2">
                                                    <div className="col-span-1 flex flex-col gap-5 border-[1px] border-Neutral40 rounded-[8px] p-[24px] ">

                                                        <div className='max-h-[30vh] pt-3 overflow-y-scroll scrollbarNew'>



                                                            {
                                                                cart && cart.map((data, key) => (
                                                                    <div className='flex relative mb-[24px] gap-5'>
                                                                        <div className="h-[24px] w-[24px] rounded-full bg-[#0E390E] absolute translate-x-[90px] -translate-y-[10px] flex items-center justify-center text-[white] font-bold text-sm"> {data.count}</div>
                                                                        <div className='w-[108px]  h-[108px] rounded-sm aspect-square flex  items-center justify-center '>
                                                                            <img src={data.image} alt="item" className='w-[100%]' />
                                                                        </div>
                                                                        <div>

                                                                            <div className='text-Medium+/Label/Large-Strong text-Neutral80'>
                                                                                Cold Pressed Groundnut Oil
                                                                            </div>
                                                                            <div className='mt-[4px] text-Medium+/Paragraph/Medium text-Neutral60'>
                                                                                250mL
                                                                            </div>
                                                                            <div className='mt-[16px] flex gap-[4px]'>
                                                                                <span className='text-Medium+/Label/Medium'>₹</span> <span className='text-Medium+/Title/Small'>75.00</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                            }

                                                        </div>

                                                        <div className="mt-[40px] p-[16px] bg-Neutral20 flex justify-between items-center px-3">
                                                            <div className='text-Medium+/Label/Large text-Neutral60'>
                                                                Total
                                                            </div>
                                                            <div className='flex gap-[4px]  rounded-[4px] items-center'>

                                                                <span className='text-Medium+/Label/Medium'>₹</span> <span className='text-Medium+/Title/Small text-Neutral80'>{sum}</span>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="col-span-1">
                                                        <div className='gradient-2 h-[72px] w-[72px] rounded-full flex items-center justify-center'>
                                                            <img src={party} alt="" />
                                                        </div>
                                                        <div className="text-Medium+/Title/Medium text-Primary80 mt-[24px]">
                                                            We appreciate you for taking a step towards a healthy lifestyle
                                                        </div>
                                                        <div className="text-Medium+/Paragraph/Medium mt-[8px]">
                                                            Your order has been received and will be shipped shortly. <br />
                                                            We’ll call you before delivery.
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </ModalBody>

                                        <ModalFooter className='mt-[64px] '>
                                            <div className='w-full flex justify-end'>
                                                <ButtonGradient title={'Got it'} onClick={() => { onClose(); setCart([]) }} />
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