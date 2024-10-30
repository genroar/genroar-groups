import Link from "next/link";
import "../../styles/index.css"
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative banner h-[100vh] z-10 overflow-hidden pb-16  md:pb-[120px]  xl:pb-[160px] xl:pt-[130px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container relative z-20"> {/* Higher z-index ensures it stays above the overlay */}
          <div className=" flex flex-wrap">
            <div className="w-full flex justify-between items-center px-4">
              <div className=" max-w-[800px] text-left w-[70%] ">
                <h1 className="mb-5 text-xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Empowering Your Dreams Through Innovation
                </h1>
                <p className="max-w-[600px] pb-[20px]  " >Welcome to GENROAR_GROUPS  where innovation and excellence unite. Explore our diverse services in clothing IT and education, designed to empower your journey. Together lets craft a brighter future!</p>
                <button className="px-[30px] py-[15px] rounded-[10px] hover:bg-[#32539b] bg-[#ee782f] text-white duration-[0.3s] text-[17px] " >Contact Us</button>
              </div>
              <div className="banenr-rght w-[40%] ">
                <Image width={405} height={400} className="w-[100%]" src="/images/2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

