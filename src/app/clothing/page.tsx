import { Metadata } from "next";
import ClothingBanner from "@/components/Clothing/Banner";

export const metadata: Metadata = {
  title: " GENROAR Group | GENROAR Clothing ",
  description: "Educating Innovators, Leading Tomorrow’s Success.",
};

const Clothing = () => {
  return (
    <>
      <ClothingBanner />
    </>
  );
};

export default Clothing;
