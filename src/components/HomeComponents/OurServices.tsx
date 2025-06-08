import OurServiceImage from "../../assets/images/resources/home-our-service.png";
// import arrow from "../../assets/images/icons/service-arrow-home.svg";
import "../../css/home/ourservices.css";
import { NavLink } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import circle from "../../assets/images/icons/service-home.svg";

export default function OurServices() {
  const services = [
    {
      title: "Website Development",
      link: "/web-development",
    },
    {
      title: "App Development",
      link: "/application-development",
    },
    // {
    //   title: "CRM Development",
    //   link: "/crm-development",
    // },
    {
      title: "SEO Optimization",
      link: "/search-engine-optimization",
    },
    {
      title: "Social Media Marketing",
      link: "/social-media-marketing",
    },
    {
      title: "Pay Per Click",
      link: "/pay-per-click",
    },
    {
      title: "PR and Ads Marketing",
      link: "/pr-agency-mumbai",
    },
  ];
  return (
    <section className="section section-dark">
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="grid lg:grid-cols-2">
          <div className="section-body lg:px-10">
            <h2 className="section-title">The Services, We Provide</h2>
            <p className="section-content mb-10">
              We provide a comprehensive range of solutions designed to address
              your unique business challenges and drive meaningful growth.
            </p>
            <div className="home-service-image">
              <img src={OurServiceImage} alt="Our Services" />
            </div>
          </div>
          <div className="home-service relative md:px-10">
            <ul>
              {services.map((val, index) => (
                <li key={index}>
                  <NavLink to={val.link}>{val.title}</NavLink>
                  <BsArrowRight />
                </li>
              ))}
            </ul>
            {/* <img
              src={arrow}
              alt="arrow"
              className="absolute visible lg:invisible w-[100px] top-15 left-0"
            /> */}
          </div>
        </div>
      </div>
      {/* <img
        src={arrow}
        alt="arrow"
        className="absolute invisible lg:visible w-[200px] top-1/5 left-1/3"
      /> */}
      <img src={circle} alt="circle" className="absolute bottom-10 right-20" />
    </section>
  );
}
