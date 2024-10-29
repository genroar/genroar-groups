import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import AboutClothing from "@/components/AboutClothing";
import Hero from "@/components/banner";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import HomeIt from "@/components/HomeIt";
import ImageSection from "@/components/ImageSection";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "GENROAR-GROUPS",
  description: "Inspiring Innovation, Empowering Future Leaders",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Video />
      <Brands />
      <ImageSection />
      <AboutSectionTwo />
      <Testimonials />
      <Contact />
    </>
  );
}
