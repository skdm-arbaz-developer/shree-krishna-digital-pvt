import { Button } from "antd";
import AboutUsImage from "../../assets/images/resources/home-about-us.png";
import SvgIcon from "../../assets/images/icons/home-about-right.svg";
import { BsArrowRight } from "react-icons/bs";
import "../../css/home/about.css";
import { NavLink } from "react-router-dom";

export default function AboutUs() {
  return (
    <section className="section section-gray home-about-us">
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="grid lg:grid-cols-2">
          <div className="home-about-image">
            <img src={AboutUsImage} alt="Digital Marketing Company In Mumbai" />
          </div>
          <div className="section-body lg:px-10 flex flex-col justify-center">
            <h2 className="section-title">About Us</h2>
            <p className="section-content">
             Founded in 2018 in Andheri, Mumbai, Shree Krishna Digital Solutions Pvt. Ltd.
              Marketing is dedicated to helping businesses grow through
              innovative, data-driven strategies. As an award-winning agency, we
              specialize in digital marketing, logo design, and website
              development. Our goal is to create impactful campaigns that
              deliver measurable results and give businesses a competitive edge
              in the digital landscape.
            </p>
            <NavLink to="/digital-marketing-company-mumbai">
              <Button
                className="comman-button mt-7 justify-between"
                style={{ maxWidth: 170 }}
              >
                Know More <BsArrowRight />
              </Button>
            </NavLink>
          </div>
        </div>
      </div>
      <img src={SvgIcon} className="absolute top-0 right-0" alt="Digital Marketing Company In Mumbai" />
    </section>
  );
}
