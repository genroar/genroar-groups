import AboutBanner from "@/components/About/AboutBanner";
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Hero from "@/components/banner";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Hero />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
