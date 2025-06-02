import { lazy } from "react";
import AboutBanner from "../assets/images/banners/about-banner.jpeg";
const AboutUsComp = lazy(
  () => import("../components/AboutComponent/AboutUsComp")
);
const Counter = lazy(() => import("../components/HomeComponents/Counter"));
const OurJourney = lazy(
  () => import("../components/AboutComponent/OurJourney")
);
const MissionVission = lazy(
  () => import("../components/AboutComponent/MissionVission")
);
const CommanBanner = lazy(() => import("../components/support/CommanBanner"));
import "../css/aboutpage.css";

export default function AboutUs() {
  return (
    <>
      <CommanBanner
        image={AboutBanner}
        title="About Us"
        desc="Shree Krishna Digital Solutions Pvt Ltd stands as a top-tier
              digital marketing company in Mumbai, offering complete digital
              services under one roof. We help brands grow online with clarity,
              innovation, and marketing that brings results."
      />
      <AboutUsComp />
      <Counter />
      <OurJourney />
      <MissionVission />
    </>
  );
}
