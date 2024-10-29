import React from 'react'
import { FaCheck } from "react-icons/fa6";

const ItList = ( { text } ) => {
    return (
        <div className='flex gap-[13px] items-center ' >
            <div className=' py-[3px] px-[3px] text-[12px] bg-[#004AAD] rounded-[100%] text-white flex ' >
                <FaCheck />
            </div>
            <span className=' font-[600] ' > {text} </span>
        </div>
    )
}

export default ItList