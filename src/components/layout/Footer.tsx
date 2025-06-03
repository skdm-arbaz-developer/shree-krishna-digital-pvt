import logo from "../../assets/images/logo-white.png";
import "../../css/layout/footer.css";
import { LuPhone } from "react-icons/lu";
import { FaRegEnvelope } from "react-icons/fa6";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";
import { FaAngleDoubleRight, FaInstagram } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import GetInTouch from "../HomeComponents/GetInTouch";
import countries from "../support/Countries";

export default function Footer() {
  // const counts = [
  //   {
  //     title: "Happy Clients",
  //     count: 100,
  //   },
  //   {
  //     title: "Projects Completed",
  //     count: 200,
  //   },
  //   {
  //     title: "Awards Won",
  //     count: 50,
  //   },
  //   {
  //     title: "Years of Experience",
  //     count: 10,
  //   },
  //   {
  //     title: "Team Members",
  //     count: 20,
  //   },
  //   { title: "Associates Partners", count: 10 },
  // ];

  const links = [
    {
      title: <>About&nbsp;Us</>,
      link: "/about-us",
    },
    {
      title: <>Our&nbsp;Team</>,
      link: "/our-team",
    },
    {
      title: <>Privacy&nbsp;Policy</>,
      link: "/privacy-policy",
    },

    {
      title: "Careers",
      link: "/career",
    },
    {
      title: "Blogs",
      link: "/blogs",
    },

    {
      title: <>Contact&nbsp;Us</>,
      link: "/contact-us",
    },
  ];

  const hideCity = [
    "Sydney",
    "Adelaide",
    "Perth",
    "New York",
    "Chicago",
    "San Francisco",
  ];

  return (
    <>
      <GetInTouch />
      <footer>
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="md:grid md:grid-cols-3 gap-20">
            <NavLink to="/" className="footer-brand">
              <img src={logo} />
              <p>
                Shree Marketing is a leading digital marketing agency
                specializing in innovative strategies to elevate your brand's
                online presence. Our expert team is dedicated to delivering
                results-driven solutions tailored to your unique business needs.
              </p>
            </NavLink>
            {/* <div className="footer-growth">
              <div className="grid grid-cols-2">
                {counts.map((count, index) => (
                  <div className="count" key={index}>
                    <h5>{count.count} +</h5>
                    <p>{count.title}</p>
                  </div>
                ))}
              </div>
            </div> */}
            <div className="footer-contact">
              <h3>Countries</h3>
              <div className="contact-list">
                <div className="grid grid-cols-2">
                  {countries
                    ?.filter(
                      (val) =>
                        typeof val?.title === "string" &&
                        !hideCity.includes(val.title)
                    )
                    .map((val, index) => (
                      <div key={index} className="contact flex items-center">
                        <FaAngleDoubleRight />
                        <NavLink
                          style={{ textTransform: "capitalize" }}
                          to={val?.url}
                        >
                          {val?.title}
                        </NavLink>
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="footer-contact">
              <h3>Get in touch</h3>
              <div className="contact-list">
                <div className="contact">
                  <div className="grid grid-cols-10">
                    <div className="col-span-1">
                      <LuPhone />
                    </div>
                    <div className="col-span-9">
                      <p>+91 70213 90953</p>
                    </div>
                  </div>
                </div>
                <div className="contact">
                  <div className="grid grid-cols-10">
                    <div className="col-span-1">
                      <FaRegEnvelope />
                    </div>
                    <div className="col-span-9">
                      <p>shreekrishnadigital09@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="contact">
                  <div className="grid grid-cols-10">
                    <div className="col-span-1">
                      <HiOutlineLocationMarker />
                    </div>
                    <div className="col-span-9">
                      <p>
                        Number 102/B, Office, MOHID HEIGHTS 1st, Andheri,
                        Mumbai, Maharashtra 400053
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-8">
                <div className="col-span-2">
                  <NavLink
                    to="https://www.facebook.com/shree.krishnadigitalsolutions/"
                    target="_blank"
                    className="icon"
                  >
                    <FiFacebook />
                  </NavLink>
                </div>
                <div className="col-span-2">
                  <NavLink
                    to="https://www.linkedin.com/company/shree-krishna-digital-marketing/?originalSubdomain=in"
                    target="_blank"
                    className="icon"
                  >
                    <CiLinkedin />
                  </NavLink>
                </div>
                <div className="col-span-2">
                  <NavLink
                    to="https://www.instagram.com/shreekrishna_digitalsolutions/"
                    target="_blank"
                    className="icon"
                  >
                    <FaInstagram />
                  </NavLink>
                </div>
                <div className="col-span-2">
                  <NavLink
                    to="https://api.whatsapp.com/send/?phone=%2B917021390953&text=Hello%2C%20I'm%20interested%20in%20your%20digital%20marketing%20services.%20Please%20share%20more%20details%20about%20how%20you%20can%20help%20grow%20my%20business%20online.&type=phone_number&app_absent=0"
                    className="icon"
                  >
                    <BsWhatsapp />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links flex-col px-4 py-6">
            <div className="devider w-full h-px bg-gray-300" />
            <div className="flex justify-between items-center flex-col lg:flex-row mt-4">
              <div className="flex flex-wrap justify-center items-center gap-3 text-center">
                {links.map((link, index) => (
                  <div key={index} className="flex items-center">
                    <NavLink
                      className="footer-link text-sm md:text-base text-white hover:text-gray-400 transition"
                      to={link.link}
                    >
                      {link.title}
                    </NavLink>
                    {index !== links.length - 1 && (
                      <span className="footer-line mx-2 text-white hidden sm:inline">
                        |
                      </span>
                    )}
                  </div>
                ))}
              </div>
              <div className="company mt-5 lg:mt-0 text-center">
                Reserved By &copy;&nbsp;Shree Krishna Digital Solutions Pvt Ltd
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
