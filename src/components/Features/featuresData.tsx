import { Feature } from "@/types/feature";
import { FaTshirt } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import { SiHtmlacademy } from "react-icons/si";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <FaTshirt className=" text-[40px] " />
    ),
    title: "Elevate Your Style",
    paragraph:
      "Discover fashion that speaks to individuality. GENROAR Clothing offers premium, modern designs that blend creativity with timeless quality. Express yourself through our carefully crafted collections that redefine style",
  },
  {
    id: 1,
    icon: (
      <GrTechnology className=" text-[40px] " />
    ),
    title: "Innovate with Technology",
    paragraph:
      "Empower your business with cutting-edge digital solutions. GENROAR IT Services delivers innovative technology tailored to your needs, from web and mobile development to advanced AI integration. Transform your ideas into reality.",
  },
  {
    id: 1,
    icon: (
      <SiHtmlacademy className=" text-[40px] " />
    ),
    title: "Empower Your Future",
    paragraph:
      "Unlock your potential with GENROAR Academy. We provide forward-thinking education that equips you with the skills and knowledge to succeed in an ever-evolving world. Shape your future with us.",
  },
];
export default featuresData;
