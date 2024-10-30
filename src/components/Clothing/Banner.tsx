import Image from "next/image"
import Link from "next/link"
// genroar-com-195085.hostingersite.com old website

const ClothingBanner = () => {
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
            Unleashing Style with Quality and Comfort
            </h1>
            <p className="max-w-[600px] pb-[30px]  " >GENROAR Clothing offers a unique collection of stylish apparel crafted from premium materials. Our designs blend modern trends with comfort, ensuring you look and feel great in every outfit, whether for casual wear or special occasions.</p>
            <button className="px-[30px] py-[15px] rounded-[10px] hover:bg-[#32539b] bg-[#ee782f] text-white duration-[0.3s] text-[17px] " >Comming soon</button>
          </div>
          <div className="banenr-rght w-[40%] ">
            <Image width={400} height={400} className="w-[100%]" src="/images/clothing.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ClothingBanner