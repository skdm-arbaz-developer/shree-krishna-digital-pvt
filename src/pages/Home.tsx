import AboutUs from "../components/HomeComponents/AboutUs";
import Banner from "../components/HomeComponents/Banner";
import Blog from "../components/HomeComponents/Blog";
import Counter from "../components/HomeComponents/Counter";
import FrequentylAskQ from "../components/HomeComponents/FrequentylAskQ";
import Industries from "../components/HomeComponents/Industries";
import LogoScrolling from "../components/HomeComponents/LogoScrolling";
import OurServices from "../components/HomeComponents/OurServices";
import PrAndAds from "../components/HomeComponents/PrAndAds";
import Testimonial from "../components/HomeComponents/Testimonial";

export default function Home() {
  return (
    <>
      <Banner />
      <LogoScrolling />
      <AboutUs />
      <Counter />
      <OurServices />
      <Industries />
      <PrAndAds />
      <Testimonial />
      <FrequentylAskQ />
      <Blog />
      
    </>
  );
}
