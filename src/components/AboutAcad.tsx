import React from 'react'
import ItList from './atoms/ItList'
import Image from 'next/image'

const AboutAcad = () => {
    return (
        <div className='container flex w-[100%] mt-[40px] mb-[100px] '>
            <div className="left w-[50%] flex justify-center items-center ">
                <Image width={400} height={400} className=' w-[70%] ' src="/images/learning2.png" alt="" />
            </div>
            <div className="right w-[50%] flex flex-col gap-[20px] ">
                <h3 className=' text-[30px] font-[700] text-[#EE782F]  ' >Empowering Future Innovators in Web and IT</h3>
                <p>At GENROAR Academy, we equip aspiring developers and IT professionals with the skills they need to succeed in a digital world. Our hands-on courses in web development and IT are designed to foster creativity, critical thinking, and technical expertise. Join us to build your career in technology with guidance from industry experts.</p>
                <ul className='flex flex-col gap-[10px]' >
                    <ItList text='Hands-on Learning' />
                    <ItList text='Expert-Led Courses' />
                    <ItList text='Career-Focused Curriculum' />
                    <ItList text='Comprehensive Web & IT Skills' />
                    <ItList text='Flexible Learning Options' />
                </ul>
            </div>

        </div>
    )
}

export default AboutAcad