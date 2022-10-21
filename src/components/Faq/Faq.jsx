import React from 'react'
import Accordian from '../Accordian/Accordian'

const Faq = () => {
  return (
    <div className='FAQ'>
        <div className="grid sm:grid-cols-2 grid-cols-1">
            <div className="col-span-1">
                <div className='text-5xl font-semibold mb-6'>
                    Frequently <br /> Asked Questions
                </div>
                <div className='text-lg text-[#433B39] text-lg'>
                    Everything you need to know about the Parampara Cold Pressed Oil. 
                </div>
            </div>
            <div className="col-span-1">
                <Accordian/>
            </div>
        </div>
    </div>
  )
}

export default Faq