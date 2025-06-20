import { FaAngleDown, FaBriefcase, FaServer } from "react-icons/fa6";
import Google from "../../assets/images/partners/Google.png";
import GoogleAds from "../../assets/images/partners/GoogleAds.png";
import Meta from "../../assets/images/partners/Meta.png";
import PhonePe from "../../assets/images/partners/PhonePe.png";
import Rayzorpay from "../../assets/images/partners/Rayzorpay.png";
import { FaHome } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdVideoCameraFront } from "react-icons/md";
import { PiOfficeChairFill } from "react-icons/pi";
import { LiaBloggerB } from "react-icons/lia";

const NavigationLinks = [
  {
    prefix: <FaHome color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Home",
    link: "/",
    desc: "",
  },
  {
    prefix: <FaBriefcase color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Company",
    desc: "",
    icon: <FaAngleDown />,
    link: [
      {
        name: "About Us",
        desc: "Shree Krishna Digital Solutions Pvt Ltd stands as a top-tier digital marketing company in Mumbai, offering complete digital services under one roof. We help brands grow online with clarity, innovation, and marketing that brings results.",
        link: "/digital-marketing-company-mumbai",
      },
      {
        name: "Our Team",
        desc: "At Shree Krishna Digital Solutions Pvt Ltd, our team is our biggest strength. We are developers, designers, marketers, and problem-solvers who work with one mission: your success.",
        link: "/digital-marketing-experts-mumbai",
      },
      {
        name: "Why Choose Us",
        desc: "We’ve partnered with trusted brands through dedication and results. Our team works with heart and focus, giving you real value and long-term support in every step.",
        link: "/top-digital-marketing-services-mumbai",
      },
      {
        name: "Life at SKD",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/life-at-digital-marketing-agency-mumbai",
      },
      // {
      //   name: "News",
      //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   link: "/coming-soon",
      // },

      // {
      //   name: "Case Study",
      //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   link: "/case-study",
      //   // link: "/coming-soon",
      // },
      {
        name: "Privacy Policy",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/privacy-policy",
      },
      {
        name: "Partnership",
        desc: "We are proud to partner with this brand, working together to drive innovation, achieve shared goals, and deliver impactful digital solutions that fuel mutual growth and success.",
        link: "#",
        logos: [Google, Meta, GoogleAds, Rayzorpay, PhonePe],
      },
    ],
  },
  {
    prefix: <FaServer color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Services",
    icon: <FaAngleDown />,
    desc: "We provide comprehensive digital solutions, including SEO, social media marketing, website development, branding, and content creation designed to elevate your online presence and deliver measurable results for your business growth.",
    link: [
      {
        name: "Search Engine Optimization",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/best-seo-company-mumbai",
      },
      {
        name: "Social Media Marketing",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/social-media-marketing-agency-mumbai",
        // link: "/coming-soon",
      },

      {
        name: "Google My Business",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/google-my-business-listing-service",
        // link: "/coming-soon",
      },
      {
        name: "Pay Per Click",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/ppc-agency-mumbai",
        // link: "/coming-soon",
      },
      {
        name: "Web Development",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/web-development-company-in-mumbai",
        // link: "/coming-soon",
      },
      {
        name: "Application Development",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/app-development-company-mumbai",
        // link: "/coming-soon",
      },
      // {
      //   name: "CRM Development",
      //   desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      //   // link: "/crm-development",
      //   link: "/coming-soon",
      // },
    ],
  },
  {
    prefix: <HiBuildingOffice2 color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Industries",
    icon: <FaAngleDown />,
    desc: "Reach your target audience effectively through precise local marketing, social campaigns, and optimized search visibility.",
    link: [
      {
        name: "Healthcare (Doctor & Hospital)",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/digital-marketing-for-healthcare-mumbai",
        // link: "/coming-soon",
      },
      {
        name: "Hospitality & Catering",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/digital-marketing-for-hospitality-and-caterers-mumbai",
        // link: "/coming-soon",
      },
      {
        name: "Real Estate",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/digital-marketing-for-real-estate-mumbai",
        // link: "/coming-soon",
      },
      {
        name: "Resorts & Villa",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/digital-marketing-for-resorts-and-villas-in-mumbai",
        // link: "/coming-soon",
      },

      {
        name: "Interior Designs",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/digital-marketing-for-interior-designer-mumbai",
        // link: "/coming-soon",
      },
      {
        name: "Spa & Salon",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/digital-marketing-for-spa-and-salon-mumbai",
        // link: "/coming-soon",
      },
      {
        name: "Education",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/digital-marketing-for-education-in-mumbai",
        // link: "/coming-soon",
      },
      {
        name: "Lifestyle",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/digital-marketing-for-real-lifestyle-mumbai",
        // link: "/coming-soon",
      },
    ],
  },
  {
    prefix: <MdVideoCameraFront color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "PR & Advertising",
    // icon: <FaAngleDown />,
    desc: "",
    link: "/pr-agency-mumbai",

    // link: [
    //   {
    //     name: "Who We Are",
    //     desc: "Get to know our team of seasoned PR professionals who craft compelling narratives and build brand reputation.",
    //     link: "/pr-advertising-company",
    //     // link: "/coming-soon",
    //   },
    //   {
    //     name: "Our Portfolio",
    //     desc: "Explore our past PR and advertising campaigns that have successfully elevated brands and driven engagement.",
    //     link: "/our-portfolio",
    //     // link: "/coming-soon",
    //   },
    // ],
  },
  {
    prefix: <PiOfficeChairFill color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Career",
    link: "/best-digital-marketing-agency-mumbai",
    desc: "",
  },
  {
    prefix: <LiaBloggerB color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Blogs",
    link: "/internet-marketing-mumbai",
    desc: "",
  },
  {
    prefix: <BiSolidPhoneCall color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Contact Us",
    link: "/online-marketing-near-mumbai",
    desc: "",
  },
];

export default NavigationLinks;
