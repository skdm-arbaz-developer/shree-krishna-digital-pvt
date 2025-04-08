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
const CommanBanner = lazy(
  () => import("../components/support/CommanBanner")
);
import "../css/aboutpage.css";


export default function AboutUs() {
  return (
    <>
      <CommanBanner
        image={AboutBanner}
        title="About Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sequi dolorum earum vel! Vero ullam quidem laudantium, mollitia quos ad repudiandae veritatis cumque doloribus consequuntur repellat quibusdam nulla odio dicta."
      />
      <AboutUsComp />
      <Counter />
      <OurJourney />
      <MissionVission />
    </>
  );
}
