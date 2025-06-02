import { useState } from "react";
import FilterSection from "../components/CaseStudy/FilterSection";
import CommanBanner from "../components/support/CommanBanner";
import "../css/casestudy.css";
import CaseStudyCard from "../components/CaseStudy/CaseStudyCard";
import SvgIcon from "../assets/images/icons/home-about-right.svg";

export default function CaseStudy() {
  const [selectServices, setSelectServices] = useState("All");
  const [selectIndustrie, setSelectIndustrie] = useState("All");

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
    <>
      <CommanBanner
        title="Case Study"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, maxime, porro, quae perferendis odit dolorem eveniet odio saepe inventore repudiandae non repellendus commodi a corporis? Consequuntur aspernatur officia vero dolores!"
        image="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200"
      />

      <section className="section relative">
        <img src={SvgIcon} className="absolute top-0 right-0" />

        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="grid grid-cols-12 gap-7">
            <div className="col-span-3">
              <FilterSection
                selectIndustrie={selectIndustrie}
                setSelectIndustrie={setSelectIndustrie}
                selectServices={selectServices}
                setSelectServices={setSelectServices}
              />
            </div>
            <div className="col-span-9">
              <div className="grid grid-cols-12 gap-7">
                {casestudy.map((val, index) => (
                  <div className="col-span-4" key={index}>
                    <CaseStudyCard data={val} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
