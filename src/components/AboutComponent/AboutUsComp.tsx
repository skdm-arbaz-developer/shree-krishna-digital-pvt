import AboutUsImage from "../../assets/images/resources/home-about-us.png";
import SvgIcon from "../../assets/images/icons/home-about-right.svg";
import { Divider } from "antd";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

export default function AboutUsComp() {
  return (
    <section className="section section-gray home-about-us">
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-2">
          <div className="home-about-image">
            <img src={AboutUsImage} />
          </div>
          <div className="section-body mt-5 lg:mt-0 lg:px-10 flex flex-col justify-center">
            <h2 className="section-title" style={{ fontSize: "2rem" }}>
              Empowering Businesses with Smart Marketing & Tech Solutions
            </h2>
            <p className="section-content">
              Shree Krishna Digital Marketing is a dynamic and versatile digital
              marketing agency that has been providing comprehensive solutions
              to businesses of all sizes and sectors since 2018. Based in
              Mumbai, we pride ourselves on being Andheri's most dynamic and
              adaptable online marketing powerhouse. Our data-driven approach
              and expertise in research and marketing help us create a
              competitive advantage for our clients across different industries.
              Our goal is to help businesses boost their online presence and
              thrive in the world of technology through effective marketing
              methods.
            </p>

            <Divider />

            <div className="contact-info sm:flex gap-20">
              <div className="about-contact">
                <h5 className="flex items-center gap-2">
                  <FaRegEnvelope /> Email
                </h5>
                <p>shreemarketing09@gmail.com</p>
              </div>
              <div className="about-contact mt-5 lg:mt-0">
                <h5 className="flex items-center gap-2">
                  <IoCallOutline /> Phone
                </h5>
                <p>+91 70213 90958</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={SvgIcon} className="absolute top-0 right-0" />
    </section>
  );
}
