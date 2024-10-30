import React from 'react'
import "../styles/index.css"
import ItList from './atoms/ItList'
import Image from 'next/image'

const AboutClothing = () => {
    return (
        <>
            <div className='container flex w-[100%] mt-[40px] mb-[100px] '>
                <div className="left w-[50%] flex justify-center items-center ">
                    <Image width={400} height={400} className=' w-[70%] ' src="/images/4.png" alt="" />
                </div>
                <div className="right w-[50%] flex flex-col gap-[20px] ">
                    <h3 className=' text-[30px] font-[700] text-[#EE782F]  ' >Unleashing Style with Quality Craftsmanship</h3>
                    <p>GENROAR Clothing brings you high-quality, stylish apparel designed for comfort and durability. Our collection combines modern trends with premium materials to create pieces that reflect individuality and confidence. Step up your style game with GENROAR’s unique clothing range.</p>
                    <ul className='flex flex-col gap-[10px]' >
                        <ItList text='Premium Quality Fabrics' />
                        <ItList text='Modern, Stylish Designs' />
                        <ItList text='Comfort-Focused Fit' />
                        <ItList text='Durable and Trendy' />
                        <ItList text='Designed for Every Lifestyle' />
                    </ul>
                </div>

            </div>
        </>
    )
}

export default AboutClothing