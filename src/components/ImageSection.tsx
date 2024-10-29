import React from 'react'
import Image from 'next/image'

const ImageSection = () => {
    return (
        <div className='mt-[100px] mb-[40px] flex flex-col gap-[50px] px-[5%] h w-[100%]  ' >
            <h2 className=' text-center text-[35px] font-[600] ' >Explore GENROAR Universe</h2>
            <Image width={1080} height={500} className='w-[100%]  rounded-[30px] ' src="/images/groups2.png" alt="" />
        </div>
    )
}

export default ImageSection