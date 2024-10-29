import Breadcrumb from '@/components/Common/Breadcrumb'
import React from 'react'
import Link from 'next/link'
import { FaExternalLinkAlt } from "react-icons/fa";

const ItServeicesBanner = () => {
  return (
    <section
    id="home"
    className="relative banner h-[100vh] z-10 overflow-hidden pb-16  md:pb-[120px]  xl:pb-[160px] xl:pt-[130px] 2xl:pb-[200px] 2xl:pt-[210px]"
  >
    <div className="container relative z-20"> {/* Higher z-index ensures it stays above the overlay */}
      <div className=" flex flex-wrap">
        <div className="w-full flex justify-between items-center px-4">
          <div className=" max-w-[800px] text-left w-[70%] ">
            <h1 className="mb-5 text-xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
            Empowering Businesses with Cutting-Edge IT Solutions
            </h1>
            <p className="max-w-[600px] pb-[30px]  " >GENROAR IT Services provides innovative technology solutions that enhance operational efficiency and drive growth. Our expert team specializes in custom software development, web solutions, and robust IT support, ensuring your business thrives in a digital world.</p>
            <Link href='https://it.genroar.com/' className="px-[30px] py-[15px] mt-[20px] rounded-[10px] hover:bg-[#32539b] bg-[#ee782f] text-white duration-[0.3s] text-[17px] " >Visit Site</Link>
          </div>
          <div className="banenr-rght w-[40%] ">
            <img className="w-[100%]" src="/images/it.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ItServeicesBanner