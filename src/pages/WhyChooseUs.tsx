import { lazy } from "react";
import CommanBanner from "../components/support/CommanBanner";
import OurSuccessStorie from "../components/WhyChooseUs/OurSuccessStorie";
const Brands = lazy(() => import("../components/WhyChooseUs/Brands"));
const WhyChoosePoints = lazy(
  () => import("../components/WhyChooseUs/WhyChoosePoints")
);
const OutProccess = lazy(() => import("../components/WhyChooseUs/OutProccess"));

export default function WhyChooseUs() {
  return (
    <>
      <CommanBanner
        image="https://images.pexels.com/photos/4960341/pexels-photo-4960341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
