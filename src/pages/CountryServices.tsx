import { useLocation } from "react-router-dom";
import countries from "../components/support/Countries";
import { useEffect, useRef, useState } from "react";
import BannerPage from "../components/CountryLandingPage/BannerPage";
import Header from "../components/CountryLandingPage/Header";
import Services from "../components/CountryLandingPage/Services";
import AboutUs from "../components/CountryLandingPage/AboutUs";
import WhyChooseUs from "../components/CountryLandingPage/WhyChooseUs";
import FAQ from "../components/CountryLandingPage/FAQ";
import Promotion from "../components/CountryLandingPage/Promotion";
import Testimonial from "../components/CountryLandingPage/Testimonial";
import GetInTouch from "../components/CountryLandingPage/GetInTouch";

interface Service {
  icon: string;
  title: string;
  link: string;
  shortdesc: string;
  desc: string[];
  bannerImage: string;
}

interface Country {
  title: string;
  desc: string;
  url: string;
  type: string;
  banner: string; // assuming it's a URL or image path
  services: Service[]; // array of service objects
}

export default function CountryServices() {
  const location = useLocation();
  const [service, setService] = useState<Country | undefined>();
  const [activeSection, setActiveSection] = useState("home");
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const testimonialRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const url = location?.pathname;
    const data = countries?.find((val) => val?.url === url);
    setService(data);
  }, [location]);

  useEffect(() => {
    if (activeSection === "home" && homeRef.current) {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (activeSection === "services" && serviceRef.current) {
      serviceRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (activeSection === "about-us" && aboutRef.current) {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (activeSection === "testimonial" && testimonialRef.current) {
      testimonialRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (activeSection === "faq" && faqRef.current) {
      faqRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (activeSection === "get-in-touch" && contactRef.current) {
      contactRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.log("no data");
    }
  }, [activeSection]);

  return (
    service && (
      <div className={`relative ${service?.type}`}>
        <Header
          setActiveSection={setActiveSection}
          activeSection={activeSection}
          service={service}
        />
        <BannerPage homeRef={homeRef} setActiveSection={setActiveSection} service={service} />
        <Services data={service} serviceRef={serviceRef} />
        <AboutUs aboutRef={aboutRef} />
        <WhyChooseUs />
        <FAQ faqRef={faqRef} />
        <Promotion />
        <Testimonial testimonialRef={testimonialRef} />
        <GetInTouch contactRef={contactRef} />
      </div>
    )
  );
}
