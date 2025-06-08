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
import { Helmet } from "react-helmet";

export default function AboutUs() {
  // Define schemaData outside the return statement
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Super Widget",
    image: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg"
    ],
    description: "A super widget that solves all your problems.",
    sku: "SW12345",
    brand: {
      "@type": "Brand",
      name: "WidgetCo"
    },
    offers: {
      "@type": "Offer",
      url: "https://example.com/product/super-widget",
      priceCurrency: "USD",
      price: "99.99",
      priceValidUntil: "2025-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock"
    }
  };
  return (
    <>
      <Helmet>
        <title>Digital Marketing Company in Mumbai | Shree Krishna Digital</title>
        <meta name="description" content="Discover the leading digital marketing company in Mumbai offering SEO, social media marketing, Google Ads, and complete online branding solutions." />
        <meta name="keywords" content="Best Digital Marketing Agency In Mumbai,Digital Marketing Company In Mumbai,Digital Marketing Experts In Mumbai,Top Digital Marketing Services In Mumbai,Life At Digital Marketing Agency In Mumbai,Digital Marketing In Mumbai,Top Digital Marketing Company In Mumbai,Internet Marketing Service In Mumbai,Digital Marketing In Mumbai,Best SEO Company In Mumbai,Social Media Marketing Agency In Mumbai,Google My Business listing service,PPC Agency Mumbai,PR Agency In Mumbai,Web Development Company In Mumbai,App Development Company In Mumbai,CRM Development Company In Mumbai,Digital Marketing For Healthcare In Mumbai,Digital Marketing For Hospitility & Caterers In Mumbai,Digital Marketing For Real Estate In Mumbai,Digital Marketing For Resort & Villas In Mumbai,Digital Marketing For Interior Designer In Mumbai,Digital Marketing For Spa & Salon In Mumbai,Digital Marketing For Education In Mumbai,Digital Marketing For Real Life Style In Mumbai,Best Digital Marketing Agency In Mumbai ,Online Marketing Near Mumbai,Search Engine Optimization in India,Social Media Marketing in India,Google My Business in India,Pay Per Click Marketing In India,Web Developement In India,Application Development In India,Search Engine Optimization in Australia,Social Media Marketing in Australia,GMB Optimization Service in Australia,Pay Per Click Marketing in Australia,Web Developement in Australia,Application Development in Australia,Search Engine Optimization in Canada,Social Media Marketing in Canada,GMB Optimization Service in Canada,Pay Per Click Marketing in Canada,Web Developement in Canada,Application Development in Canada,Search Engine Optimization in Malaysia,Social Media Marketing in Malaysia,GMB Optimization Service in Malaysia,Pay Per Click Marketing in Malaysia,Web Developement in Malaysia,Application Development in Malaysia,Search Engine Optimization in Nepal ,Social Media Marketing in Nepal ,GMB Optimization Service in Nepal,Pay Per Click Marketing in Nepal,Web Developement in Nepal,Application Development in Nepal,Search Engine Optimization in Dubai,Social Media Marketing in Dubai,GMB Optimization Service in Dubai ,Pay Per Click Marketing in Dubai,Web Developement in Dubai,Application Development in Dubai,Search Engine Optimization in USA,Social Media Marketing in USA,GMB Optimization Service in USA,Pay Per Click Marketing in USA,Web Developement in USA,Application Development in USA,Search Engine Optimization in United Kingdom,Social Media Marketing in United Kingdom,GMB Optimization Service in United Kingdom ,Pay Per Click Marketing in United Kingdom,Web Developement in United Kingdom,Application Development in United Kingdom,Search Engine Optimization in Maldives,Social Media Marketing in Maldives,GMB Optimization Service in Maldives,Pay Per Click Marketing in Maldives,Web Developement in Maldives,Application Development in Maldives" />
        <link rel="canonical" href="https://skdm.in/digital-marketing-company-mumbai" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta property="og:title" content="Digital Marketing Company in Mumbai | Shree Krishna Digital" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skdm.in/" />
        <meta property="og:description" content="Discover the leading digital marketing company in Mumbai offering SEO, social media marketing, Google Ads, and complete online branding solutions. " />
        <meta property="og:image" content="https://katariashubli.com/static/media/kartaria%20logo.61ab17e04111050f3cc9.png" />
      </Helmet>
      <CommanBanner
        image={AboutBanner}
        title="Digital Marketing Company In Mumbai"
        desc="Shree Krishna Digital Solutions Pvt Ltd stands as a top-tier
              digital marketing company in Mumbai, offering complete digital
              services under one roof. We help brands grow online with clarity,
              innovation, and marketing that brings results."
      />
      <AboutUsComp />
      <Counter />
      <OurJourney />
      <MissionVission />
      {/* Script tag for JSON-LD, placed within the fragment */}
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
    </>
  );
}
