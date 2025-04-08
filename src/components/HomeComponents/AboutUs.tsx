import { Button } from "antd";
import AboutUsImage from "../../assets/images/resources/home-about-us.png";
import SvgIcon from "../../assets/images/icons/home-about-right.svg";
import { BsArrowRight } from "react-icons/bs";
import "../../css/home/about.css";

export default function AboutUs() {
  return (
    <section className="section section-gray home-about-us">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="home-about-image">
            <img src={AboutUsImage} />
          </div>
          <div className="section-body px-10 flex flex-col justify-center">
            <h2 className="section-title">About Us</h2>
            <p className="section-content">
              About Us Founded in 2018 in Andheri, Mumbai, Shree Krishna Digital
              Marketing is dedicated to helping businesses grow through
              innovative, data-driven strategies. As an award-winning agency, we
              specialize in digital marketing, logo design, and website
              development. Our goal is to create impactful campaigns that
              deliver measurable results and give businesses a competitive edge
              in the digital landscape.
            </p>
            <Button className="comman-button mt-7 justify-between" style={{maxWidth:170}}>Know More <BsArrowRight /></Button>
          </div>
        </div>
      </div>
      <img src={SvgIcon} className="absolute top-0 right-0" />
    </section>
  );
}
