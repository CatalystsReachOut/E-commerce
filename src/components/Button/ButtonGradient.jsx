import React from 'react'

const ButtonGradient = ({className,onClick,title}) => {
    return (
        <button onClick={onClick} className={`w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white highlighted-color uppercase transition-colors duration-300 transform  rounded-lg lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500 ${className}`}>
            {title}
        </button>
    )
}

export default ButtonGradient