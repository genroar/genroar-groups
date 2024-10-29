import { Metadata } from "next";
import ClothingBanner from "@/components/Clothing/Banner";
import AboutClothing from "@/components/AboutClothing";
import AboutBanner from "@/components/About/AboutBanner";

export const metadata: Metadata = {
  title: " GENROAR Group | GENROAR Clothing ",
  description: "Educating Innovators, Leading Tomorrow’s Success.",
};

const Clothing = () => {
  return (
    <>
      <ClothingBanner />
      <AboutClothing />
    </>
  );
};

export default Clothing;
