import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import { BsBag } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import CheckoutItems from './CheckoutItems'
import ButtonGradient from '../Button/ButtonGradient'
import { useState } from 'react'
import ButtonOutline from '../Button/ButtonOutline'
import Input from '../Input/Input'
import img from './../../assets/images/item.png'
import party from './../../assets/images/party.png'


const Checkout = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [step, setStep] = useState(1)
    return (
        <>
            <Button onClick={onOpen}>Checkout</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay className='opacity-50 bg-[#F4F9F4]' />
                {
                    step == 1
                        ?
                        <ModalContent className='bg-[#FFFFFF] p-8 shadow sm:max-w-[80vw] max-w-[95vw] m-auto my-auto mt-4'>
                            <ModalHeader className='flex justify-between'><div className='text-2xl font-bold'> Place an Order </div> <ModalCloseButton className='text-[#726C6B]' /></ModalHeader>

                            <ModalBody>
                                <div>
                                    <div className='lg:w-[25%] gap-[12px] w-[80%] my-4 flex justify-between items-center'>
                                        <div className='bg-[#D8940E] text-[#FFFFFF] p-2 rounded-full aspect-square flex justify-center items-center'>
                                            <BsBag />
                                        </div>
                                        <div className='h-[1px] bg-[#D0CECE] w-full'></div>
                                        <div className='p-2 rounded-full aspect-square flex justify-center items-center border border-[#726C6B] text-[#726C6B]'>
                                            <GoLocation />
                                        </div>
                                    </div>
                                    <div className='mt-6 border p-4 rounded-lg shadow'>
                                        <CheckoutItems />
                                        <CheckoutItems />
                                        <div className="mt-5 h-[60px] bg-[#FAFAFA] flex justify-between items-center px-3">
                                            <div className='text-[#726C6B] text-lg'>
                                                Total
                                            </div>
                                            <div className='font-bold text-2xl'>
                                                ₹140.00
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </ModalBody>

                            <ModalFooter className='mt-3 '>
                                <div className='w-full flex justify-between'>

                                    <button className='px-6 py-2.5 rounded-lg flex justify-center items-center bg-[#F4F9F4] text-[#3C3C3C]' onClick={onClose}>
                                        You can order now & pay directly on delivery
                                    </button>
                                    <ButtonGradient onClick={() => { setStep(2) }} title={'Add Shipping Details'} />
                                </div>
                            </ModalFooter>
                        </ModalContent>
                        :
                        step == 2
                            ?
                            <ModalContent className='bg-[#FFFFFF] p-8 shadow sm:max-w-[80vw] max-w-[95vw] m-auto my-auto mt-4'>
                                <ModalHeader className='flex justify-between'><div className='text-2xl font-bold'> Place an Order </div> <ModalCloseButton className='text-[#726C6B]' /></ModalHeader>

                                <ModalBody>
                                    <div>
                                        <div className='lg:w-[25%] gap-[12px] w-[80%] my-4 flex justify-between items-center'>
                                            <div className='bg-[#186218] text-[#FFFFFF] p-2 rounded-full aspect-square flex justify-center items-center'>
                                                <BsBag />
                                            </div>
                                            <div className='h-[1px] bg-[#D0CECE] w-full'></div>
                                            <div className='bg-[#D8940E] text-[#FFFFFF] p-2 rounded-full aspect-square flex justify-center items-center'>
                                                <GoLocation />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="grid grid-cols-2 gap-10">
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
                                            <div className="grid grid-cols-2 mt-5 gap-10">
                                                <div className="col-span-1">
                                                    <Input
                                                        title={'Email'}
                                                    />
                                                </div>
                                                <div className="col-span-1">
                                                    <div>
                                                        <label className='text-[#726C6B] text-sm' >Contact Number</label>
                                                        <div className="grid grid-cols-8 gap-3">
                                                            <input
                                                                type="text"
                                                                className='col-span-1 h-[45px] text-lg mt-1 px-2 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#228B22] focus:ring-[#228B22] block w-full rounded-md sm:text-sm focus:ring-1'
                                                                defaultValue={'+91'}
                                                            />
                                                            <input
                                                                type="text"
                                                                className='col-span-7 h-[45px] text-lg mt-1 px-2 py-1 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-[#228B22] focus:ring-[#228B22] block w-full rounded-md sm:text-sm focus:ring-1'
                                                            />

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-4 mt-5 gap-10">
                                                <div className="col-span-3">
                                                    <Input
                                                        title={'Address Line 1'}
                                                    />
                                                </div>
                                                <div className="col-span-1">
                                                    <Input
                                                        title={'Pin Code'}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-6 border p-4 rounded-lg shadow'>
                                            <div className="mt-5 h-[60px] bg-[#FAFAFA] flex justify-between items-center px-3">
                                                <div className='text-[#726C6B] text-lg'>
                                                    Total
                                                </div>
                                                <div className='font-bold text-2xl'>
                                                    ₹140.00
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </ModalBody>

                                <ModalFooter className='mt-3 '>
                                    <div className='w-full flex justify-between'>

                                        <button className='px-6 py-2.5 rounded-lg flex justify-center items-center bg-[#F4F9F4] text-[#3C3C3C]' onClick={onClose}>
                                            You can order now & pay directly on delivery
                                        </button>
                                        <div className='flex gap-3 max-h-[50px]'>
                                            <ButtonOutline onClick={() => { setStep(1) }} title={'Back to Bag'} color={'#228B22'} textColor={'#228B22'} />
                                            <ButtonGradient title={'Add Shipping Details'} className={'min-w-[240px] px-2'} onClick={() => { setStep(3) }} />
                                        </div>
                                    </div>
                                </ModalFooter>
                            </ModalContent>
                            :
                            <ModalContent className='bg-[#FFFFFF] p-8 shadow sm:max-w-[80vw] max-w-[95vw] m-auto my-auto mt-4'>
                                <ModalHeader className='flex justify-between'><div className='text-2xl font-bold'> Order Summary </div> <ModalCloseButton className='text-[#726C6B]' /></ModalHeader>

                                <ModalBody>
                                    <div className='mt-3'>
                                        <div className="grid grid-cols-2">
                                            <div className="col-span-1 flex flex-col gap-5">
                                                <div className='flex gap-5'>
                                                    <div className="h-[20px] w-[20px] rounded-full bg-[#0E390E] absolute translate-x-[90px] -translate-y-[10px] flex items-center justify-center text-[white] font-bold text-sm"> 1 </div>
                                                    <div className=' w-[100px] h-[100px] rounded-sm aspect-square flex p-8 items-center justify-center bg-[#F7F5EB]'>
                                                        <img src={img} alt="item" className='w-[50%]' />
                                                    </div>
                                                    <div>

                                                        <div className='text-lg font-bold'>
                                                            Cold Pressed Groundnut Oil
                                                        </div>
                                                        <div className='text-base'>
                                                            250mL
                                                        </div>
                                                        <div className='text-xl font-extrabold'>
                                                            ₹75.00
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex gap-5'>
                                                    <div className="h-[20px] w-[20px] rounded-full bg-[#0E390E] absolute translate-x-[90px] -translate-y-[10px] flex items-center justify-center text-[white] font-bold text-sm"> 1 </div>
                                                    <div className=' w-[100px] h-[100px] rounded-sm aspect-square flex p-8 items-center justify-center bg-[#F7F5EB]'>
                                                        <img src={img} alt="item" className='w-[50%]' />
                                                    </div>
                                                    <div>

                                                        <div className='text-lg font-bold'>
                                                            Cold Pressed Groundnut Oil
                                                        </div>
                                                        <div className='text-base'>
                                                            250mL
                                                        </div>
                                                        <div className='text-xl font-extrabold'>
                                                            ₹75.00
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mt-3 h-[50px] bg-[#FAFAFA] rounded-sm w-full flex justify-between items-center px-3'>
                                                    <div className='text-lg text-[#726C6B]'>Total</div>
                                                    <div className='text-[#140A08] text-xl font-bold'>
                                                        ₹75.00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-span-1">
                                                <div className='gradient-2 h-[70px] w-[70px] rounded-full flex items-center justify-center'>
                                                    <img src={party} alt="" />
                                                </div>
                                                <div className="mt-3 text-3xl font-bold">
                                                    We appreciate you for taking a step towards a healthy lifestyle
                                                </div>
                                                <div className="mt-2 font-normal">
                                                    Your order has been received and will be shipped shortly. <br />
                                                    We’ll call you before delivery.
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </ModalBody>

                                <ModalFooter className='mt-3 '>
                                    <div className='w-full flex justify-end'>
                                        <ButtonGradient title={'Got it'} onClick={() => { setStep(1) }} className={' px-2'} />
                                    </div>
                                </ModalFooter>
                            </ModalContent>
                }

            </Modal>
        </>
    )
}

export default Checkout