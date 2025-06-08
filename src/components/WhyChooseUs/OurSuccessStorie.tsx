import { Button } from "antd";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CaseStudyCard from "../CaseStudy/CaseStudyCard";
import "../../css/casestudy.css";
import "../../css/home/industry.css";
import FaqArrow from "../../assets/images/icons/faq-arrow.svg";
import FaqStart from "../../assets/images/icons/faq-star.svg";
import RealEstate from "../../assets/images/resources/Real-Estate.jpg";
import Hospitality from "../../assets/images/resources/Hospitality.jpeg";
import ECommerce from "../../assets/images/resources/E-Commerce.jpg";
import Education from "../../assets/images/resources/Education.jpg";
import InteriorDesign from "../../assets/images/resources/Interior-Design.jpg";
import Logistics from "../../assets/images/resources/Logistics.jpg";
import Healthcare from "../../assets/images/resources/Healthcare.jpg";
import ITServices from "../../assets/images/resources/IT Services.jpg";
import Travel from "../../assets/images/resources/Travel.jpeg";
import Fashion from "../../assets/images/resources/Fashion.jpg";

export default function OurSuccessStorie() {
  const casestudy = [
    {
      img: RealEstate,
      altTag:"Digital Marketing For Real Estate In Mumbai",
      type: "Real Estate",
      title: "Luxury Living Realty – SEO Transformation",
      desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
    },
    {
      img: Hospitality,
      altTag:"Digital Marketing For Hospitility & Caterers In Mumbai",
      type: "Hospitality",
      title: "ResortEase – Application Development",
      desc: "Developed a booking and resort management app used by over 100+ resorts.",
    },
    {
      img: ECommerce,
      altTag:"Web Developement In India",
      type: "E-Commerce",
      title: "UrbanCart – Digital Marketing Overhaul",
      desc: "Revamped performance marketing and email automation for a 5x ROI.",
    },
    {
      img: Education,
      altTag:"Digital Marketing For Education In Mumbai",
      type: "Education",
      title: "STEM Boost Academy – Website & CRM",
      desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
    },
    {
      img: InteriorDesign,
      altTag:"Digital Marketing For Interior Designer In Mumbai",
      type: "Interior Design",
      title: "DecoraNest – Portfolio Website",
      desc: "Created a stylish web presence and social strategy for luxury interiors.",
    },
    {
      img: Logistics,
      altTag:"CRM Development Company In Mumbai",
      type: "Logistics",
      title: "FastTrack Movers – Branding & CRM Setup",
      desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
    },
    {
      img: Healthcare,
      altTag:"Digital Marketing For Healthcare In Mumbai",
      type: "Healthcare",
      title: "CareWell Clinic – Google Ads & SEO",
      desc: "Scaled online appointments through local SEO and lead-gen landing pages.",
    },
    {
      img: ITServices,
      altTag:"Top Digital Marketing Company In Mumbai",
      type: "IT Services",
      title: "TechNova – Corporate Website Redesign",
      desc: "Redesigned corporate site with animations, blogs, and case study sections.",
    },
    {
      img: Travel,
      altTag:"PR Agency In Mumbai",
      type: "Travel",
      title: "WanderScape – Social Media Strategy",
      desc: "Built Instagram and YouTube presence from scratch, now at 80K+ followers.",
    },
    {
      img: Fashion,
      altTag:"Digital Marketing For Spa & Salon In Mumbai",
      type: "Fashion",
      title: "StyleLoop – Shopify Store Optimization",
      desc: "Optimized product pages and checkout for a 45% increase in conversions.",
    },
  ];

  return (
    <section className="section relative section-dark">
      <img src={FaqArrow} className="absolute -top-10 left-0" alt="Digital Marketing For Spa & Salon"/>
      <img src={FaqStart} className="absolute top-0 right-0" alt="Best Digital Marketing For Spa & Salon In Mumbai"/>

      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="lg:grid lg:grid-cols-12">
          <div className="lg:col-span-4 mb-10 lg:mb-0">
            <div className="section-body">
              <h2 className="section-title">Our Success Stories</h2>
              <p className="section-content">
                Explore how we’ve helped businesses achieve remarkable results.
              </p>
              <Button
                className="comman-button mt-5"
                style={{ color: "#fff", borderColor: "#fff" }}
              >
                View All Stories <HiOutlineArrowLongRight />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Swiper
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
              }}
              spaceBetween={20}
              modules={[Navigation]}
              className="industry-swiper"
            >
              {casestudy.map((val) => (
                <SwiperSlide>
                  <CaseStudyCard data={val} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
