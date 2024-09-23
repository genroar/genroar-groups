import { Metadata } from "next";
import AcademyBanner from "../../components/Academy/Banner";

export const metadata: Metadata = {
  title: " GENROAR Group | GENROAR Academy ",
  description: "Educating Innovators, Leading Tomorrow’s Success.",
  // other metadata
};

const Academy = () => {
  return (
    <>
      <AcademyBanner />
    </>
  );
};

export default Academy;
