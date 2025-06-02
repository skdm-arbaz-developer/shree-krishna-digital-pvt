import AboutUsImage from "../../assets/images/resources/home-about-us.png";
import SvgIcon from "../../assets/images/icons/home-about-right.svg";
import { Divider } from "antd";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

export default function AboutUsComp() {
  return (
    <section className="section section-gray home-about-us">
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="lg:grid lg:grid-cols-2">
          <div className="home-about-image">
            <img src={AboutUsImage} />
          </div>
          <div className="section-body mt-5 lg:mt-0 lg:px-10 flex flex-col justify-center">
            <h2 className="section-title" style={{ fontSize: "2rem" }}>
              Empowering Businesses with Smart Marketing & Tech Solutions
            </h2>
            <p className="section-content">
              Shree Krishna Digital Solutions Pvt Ltd empowers your business in the digital space. We offer
              website, app, and CRM development along with expert services in
              SEO, PPC, graphic design, and social media marketing. From the
              healthcare sector to resorts and startups, we’ve helped brands
              achieve real growth online. Our team believes in delivering
              measurable results through creativity and strategy. We don’t just
              build campaigns
            </p>
            <p>
              We build trust, visibility, and growth with a digital marketing
              company in Mumbai; your goals become our digital mission every
              single time.
            </p>

            <Divider />

            <div className="contact-info sm:flex gap-20">
              <div className="about-contact">
                <h5 className="flex items-center gap-2">
                  <FaRegEnvelope /> Email
                </h5>
                <p>shreekrishnadigital09@gmail.com</p>
              </div>
              <div className="about-contact mt-5 lg:mt-0">
                <h5 className="flex items-center gap-2">
                  <IoCallOutline /> Phone
                </h5>
                <p>+91 70213 90953</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={SvgIcon} className="absolute top-0 right-0" />
    </section>
  );
}
