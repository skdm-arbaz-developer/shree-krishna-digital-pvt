import { Button } from "antd";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CaseStudyCard from "../CaseStudy/CaseStudyCard";
import "../../css/casestudy.css";
import FaqArrow from "../../assets/images/icons/faq-arrow.svg";
import FaqStart from "../../assets/images/icons/faq-star.svg";

export default function OurSuccessStorie() {
  const casestudy = [
    {
      img: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Real Estate",
      title: "Luxury Living Realty – SEO Transformation",
      desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
    },
    {
      img: "https://images.pexels.com/photos/4508641/pexels-photo-4508641.jpeg?auto=compress&cs=tinysrgb&w=1200",
      type: "Hospitality",
      title: "ResortEase – Application Development",
      desc: "Developed a booking and resort management app used by over 100+ resorts.",
    },
    {
      img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "E-Commerce",
      title: "UrbanCart – Digital Marketing Overhaul",
      desc: "Revamped performance marketing and email automation for a 5x ROI.",
    },
    {
      img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Education",
      title: "STEM Boost Academy – Website & CRM",
      desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
    },
    {
      img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Interior Design",
      title: "DecoraNest – Portfolio Website",
      desc: "Created a stylish web presence and social strategy for luxury interiors.",
    },
    {
      img: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Logistics",
      title: "FastTrack Movers – Branding & CRM Setup",
      desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
    },
    {
      img: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1200",
      type: "Healthcare",
      title: "CareWell Clinic – Google Ads & SEO",
      desc: "Scaled online appointments through local SEO and lead-gen landing pages.",
    },
    {
      img: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "IT Services",
      title: "TechNova – Corporate Website Redesign",
      desc: "Redesigned corporate site with animations, blogs, and case study sections.",
    },
    {
      img: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Travel",
      title: "WanderScape – Social Media Strategy",
      desc: "Built Instagram and YouTube presence from scratch, now at 80K+ followers.",
    },
    {
      img: "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Fashion",
      title: "StyleLoop – Shopify Store Optimization",
      desc: "Optimized product pages and checkout for a 45% increase in conversions.",
    },
  ];

  return (
    <section className="section relative section-dark">
      <img src={FaqArrow} className="absolute -top-10 left-0" />
      <img src={FaqStart} className="absolute top-0 right-0" />

      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-4">
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
          <div className="col-span-8">
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
              modules={[Navigation]}
              className="case-study"
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
