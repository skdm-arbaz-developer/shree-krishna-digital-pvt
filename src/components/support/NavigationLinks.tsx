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
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/about-us",
      },
      {
        name: "Our Team",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/our-team",
      },
      {
        name: "Why Choose Us",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/why-choose-us",
      },
      {
        name: "Life at SKD",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/life-at-skd",
      },
      {
        name: "News",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/news",
      },

      {
        name: "Case Study",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/case-study",
      },
      {
        name: "Privacy Policy",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/privacy-policy",
      },
      {
        name: "Partnership",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "#",
        logos: [Google, Meta, GoogleAds, Rayzorpay, PhonePe],
      },
    ],
  },
  {
    prefix: <FaServer color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Services",
    icon: <FaAngleDown />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident natus similique? Dolorem ad nobis voluptates. Placeat pariatur, delectus perferendis autem unde, ipsum deleniti veritatis facere rem laborum laudantium magnam.",
    link: [
      {
        name: "Search Engine Optimization",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/search-engine-optimization",
      },
      {
        name: "Social Media Marketing",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/social-media-marketing",
      },
      {
        name: "Google My Business",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/google-my-business",
      },
      {
        name: "Web Development",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/web-development",
      },
      {
        name: "Application Development",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/application-development",
      },
      {
        name: "CRM Development",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/crm-development",
      },
    ],
  },
  {
    prefix: <HiBuildingOffice2 color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Industries",
    icon: <FaAngleDown />,
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam provident natus similique? Dolorem ad nobis voluptates.",
    link: [
      {
        name: "Healthcare (Doctor & Hospital)",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/healthcare",
      },
      {
        name: "Hospitality & Catering",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/hospitality",
      },
      {
        name: "Real Estate",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/real-estate",
      },
      {
        name: "Resorts & Villa",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/resort-&-villa",
      },

      {
        name: "Interior Designs",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/interior-design",
      },
      {
        name: "Spa & Salon",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/spa-&-salon",
      },
      {
        name: "Education",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/education",
      },
      {
        name: "Lifestyle",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        link: "/lifestyle",
      },
    ],
  },
  {
    prefix: <MdVideoCameraFront color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "PR & Advertising",
    icon: <FaAngleDown />,
    desc: "",
    link: [
      {
        name: "Who We Are",
        desc: "Get to know our team of seasoned PR professionals who craft compelling narratives and build brand reputation.",
        link: "/who-we-are-pr-advertising",
      },
      {
        name: "Our Portfolio",
        desc: "Explore our past PR and advertising campaigns that have successfully elevated brands and driven engagement.",
        link: "/our-portfolio",
      },
    ],
  },
  {
    prefix: <PiOfficeChairFill color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Career",
    link: "/career",
    desc: "",
  },
  {
    prefix: <LiaBloggerB color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Blogs",
    link: "/blogs",
    desc: "",
  },
  {
    prefix: <BiSolidPhoneCall color="#e98c14" style={{ fontSize: "20px" }} />,
    name: "Contact Us",
    link: "/contact-us",
    desc: "",
  },
];

export default NavigationLinks;
