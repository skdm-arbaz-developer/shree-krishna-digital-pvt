import { lazy } from "react";
import CommanBanner from "../components/support/CommanBanner";
import OurSuccessStorie from "../components/WhyChooseUs/OurSuccessStorie";
import whyus from "../assets/images/banners/whyus-banner.webp";
const Brands = lazy(() => import("../components/WhyChooseUs/Brands"));
const WhyChoosePoints = lazy(
  () => import("../components/WhyChooseUs/WhyChoosePoints")
);
const OutProccess = lazy(() => import("../components/WhyChooseUs/OutProccess"));

export default function WhyChooseUs() {
  return (
    <>
      <CommanBanner
        image={whyus}
        title="Why Choose Us"
        desc="We’ve partnered with trusted brands through dedication and results. Our team works with heart and focus, giving you real value and long-term support in every step."
      />
      <Brands />
      <WhyChoosePoints />
      <OurSuccessStorie />
      <OutProccess />
    </>
  );
}
