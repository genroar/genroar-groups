import HomeIt from "@/components/HomeIt";
import ItServeicesBanner from "@/components/itservice/Banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: " GENROAR Group | GENROAR Clothing ",
  description: "Educating Innovators, Leading Tomorrow’s Success.",
};

const ItServeices = () => {
  return (
    <>
      <ItServeicesBanner />
      <HomeIt />
    </>
  );
};

export default ItServeices;
