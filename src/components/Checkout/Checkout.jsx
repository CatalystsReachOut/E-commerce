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
import { BsBag} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
import CheckoutItems from './CheckoutItems'
import ButtonGradient from '../Button/ButtonGradient'


const Checkout = () => {
        const { isOpen, onOpen, onClose } = useDisclosure()
        return (
          <>
            <Button onClick={onOpen}>Open Modal</Button>
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay className='opacity-50 bg-[#F4F9F4]'/>
              <ModalContent className='bg-[#FFFFFF] p-8 shadow sm:max-w-[80vw] max-w-[95vw] m-auto my-auto mt-4'>
                <ModalHeader className='flex justify-between'><div className='text-2xl font-bold'> Place an Order </div> <ModalCloseButton className='text-[#726C6B]'/></ModalHeader>
                
                <ModalBody>
                    <div>
                        <div className='lg:w-[25%] gap-[12px] w-[80%] my-4 flex justify-between items-center'>
                            <div className='bg-[#D8940E] text-[#FFFFFF] p-2 rounded-full aspect-square flex justify-center items-center'>
                                <BsBag/>
                            </div>
                            <div className='h-[1px] bg-[#D0CECE] w-full'></div>
                            <div className='p-2 rounded-full aspect-square flex justify-center items-center border border-[#726C6B] text-[#726C6B]'>
                                <GoLocation/>
                            </div>
                        </div>
                        <div className='mt-6 border p-4 rounded-lg shadow'>
                            <CheckoutItems/>
                            <CheckoutItems/>
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
                        <ButtonGradient title={'Add Shipping Details'}/>
                    </div>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
        )
}

export default Checkout