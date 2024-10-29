import React from 'react'
import "../styles/index.css"
import ItList from './atoms/ItList'

const HomeIt = () => {
  return (
    <>
    <div className=" w-[100%] explore explore-right text-center mb-[80px] "> <h2 className=' text-[35px] font-[600] ' >Explore GENROAR Universe</h2> </div>
      <div className='container flex w-[100%] '>
        <div className="left w-[50%] flex justify-center items-center ">
          <img className=' w-[70%] ' src="/images/learning.png" alt="" />
        </div>
        <div className="right w-[50%] flex flex-col gap-[20px] ">
          <h3 className=' text-[30px] font-[700] text-[#EE782F]  ' >Innovative IT Solutions for a Digital Tomorrow</h3>
          <p> At GENROAR IT Services, we deliver tailored IT solutions that empower businesses to thrive in a digital landscape. Our expert team is committed to enhancing operational efficiency through innovative web and software development. Partner with us to elevate your technology and drive growth.</p>
          <ul className='flex flex-col gap-[10px]' >
            <ItList text='Custom Software Development' />
            <ItList text='Cloud Computing Solutions' />
            <ItList text='IT Support Services' />
            <ItList text='Cybersecurity Protection' />
            <ItList text='Responsive Web Design' />
          </ul>
        </div>
      </div>
    </>
  )
}

export default HomeIt