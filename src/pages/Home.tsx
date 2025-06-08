import { Helmet } from "react-helmet";
import AboutUs from "../components/HomeComponents/AboutUs";
import Banner from "../components/HomeComponents/Banner";
import Blog from "../components/HomeComponents/Blog";
import CompanyVideo from "../components/HomeComponents/CompanyVideo";
import Counter from "../components/HomeComponents/Counter";
import FrequentylAskQ from "../components/HomeComponents/FrequentylAskQ";
import Industries from "../components/HomeComponents/Industries";
// import LogoScrolling from "../components/HomeComponents/LogoScrolling";
import OurServices from "../components/HomeComponents/OurServices";
import PrAndAds from "../components/HomeComponents/PrAndAds";
import Testimonial from "../components/HomeComponents/Testimonial";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Best Digital Marketing Agency in Mumbai | Shree Krishna Digital</title>
        <meta name="description" content="Looking for the best digital marketing agency in Mumbai? We offer expert SEO, social media, PPC, and branding solutions to grow your business online." />
        <meta name="keywords" content="Best Digital Marketing Agency In Mumbai,Digital Marketing Company In Mumbai,Digital Marketing Experts In Mumbai,Top Digital Marketing Services In Mumbai,Life At Digital Marketing Agency In Mumbai,Digital Marketing In Mumbai,Top Digital Marketing Company In Mumbai,Internet Marketing Service In Mumbai,Digital Marketing In Mumbai,Best SEO Company In Mumbai,Social Media Marketing Agency In Mumbai,Google My Business listing service,PPC Agency Mumbai,PR Agency In Mumbai,Web Development Company In Mumbai,App Development Company In Mumbai,CRM Development Company In Mumbai,Digital Marketing For Healthcare In Mumbai,Digital Marketing For Hospitility & Caterers In Mumbai,Digital Marketing For Real Estate In Mumbai,Digital Marketing For Resort & Villas In Mumbai,Digital Marketing For Interior Designer In Mumbai,Digital Marketing For Spa & Salon In Mumbai,Digital Marketing For Education In Mumbai,Digital Marketing For Real Life Style In Mumbai,Best Digital Marketing Agency In Mumbai ,Online Marketing Near Mumbai,Search Engine Optimization in India,Social Media Marketing in India,Google My Business in India,Pay Per Click Marketing In India,Web Developement In India,Application Development In India,Search Engine Optimization in Australia,Social Media Marketing in Australia,GMB Optimization Service in Australia,Pay Per Click Marketing in Australia,Web Developement in Australia,Application Development in Australia,Search Engine Optimization in Canada,Social Media Marketing in Canada,GMB Optimization Service in Canada,Pay Per Click Marketing in Canada,Web Developement in Canada,Application Development in Canada,Search Engine Optimization in Malaysia,Social Media Marketing in Malaysia,GMB Optimization Service in Malaysia,Pay Per Click Marketing in Malaysia,Web Developement in Malaysia,Application Development in Malaysia,Search Engine Optimization in Nepal ,Social Media Marketing in Nepal ,GMB Optimization Service in Nepal,Pay Per Click Marketing in Nepal,Web Developement in Nepal,Application Development in Nepal,Search Engine Optimization in Dubai,Social Media Marketing in Dubai,GMB Optimization Service in Dubai ,Pay Per Click Marketing in Dubai,Web Developement in Dubai,Application Development in Dubai,Search Engine Optimization in USA,Social Media Marketing in USA,GMB Optimization Service in USA,Pay Per Click Marketing in USA,Web Developement in USA,Application Development in USA,Search Engine Optimization in United Kingdom,Social Media Marketing in United Kingdom,GMB Optimization Service in United Kingdom ,Pay Per Click Marketing in United Kingdom,Web Developement in United Kingdom,Application Development in United Kingdom,Search Engine Optimization in Maldives,Social Media Marketing in Maldives,GMB Optimization Service in Maldives,Pay Per Click Marketing in Maldives,Web Developement in Maldives,Application Development in Maldives" />
        <link rel="canonical" href="https://skdm.in/" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta property="og:title" content="Best Digital Marketing Agency in Mumbai | Shree Krishna Digital" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skdm.in/" />
        <meta property="og:description" content="Looking for the best digital marketing agency in Mumbai? We offer expert SEO, social media, PPC, and branding solutions to grow your business online. " />
        <meta property="og:image" content="https://katariashubli.com/static/media/kartaria%20logo.61ab17e04111050f3cc9.png" />
      </Helmet>
      <Banner />
      <CompanyVideo />
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
