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
      link: "/about",
    },
    {
      title: "Events",
      link: "/events",
    },
    {
      title: <>Privacy&nbsp;Policy</>,
      link: "/privacy",
    },

    {
      title: "Partnerships",
      link: "/partnerships",
    },
    {
      title: "News",
      link: "/news",
    },

    {
      title: <>Contact&nbsp;Us</>,
      link: "/contact",
    },
  ];
  return (
    <>
      <GetInTouch />
      <footer>
        <div className="container mx-auto">
          <div className="md:grid md:grid-cols-3 gap-20">
            <div className="footer-brand">
              <img src={logo} />
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Facilis eveniet earum vero! Magni architecto natus aliquam
                commodi? Fugit, voluptates autem illum aliquam, quasi inventore
                ab temporibus provident aut quisquam praesentium.
              </p>
            </div>
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
                  {countries?.map((val, index) => (
                    <div key={index} className="contact flex items-center">
                      <FaAngleDoubleRight />
                      <NavLink to={val?.url}>{val?.title}</NavLink>
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
                      <p>+91 70213 90958</p>
                    </div>
                  </div>
                </div>
                <div className="contact">
                  <div className="grid grid-cols-10">
                    <div className="col-span-1">
                      <FaRegEnvelope />
                    </div>
                    <div className="col-span-9">
                      <p>shreemarketing09@gmail.com</p>
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
                  <NavLink to="#" className="icon">
                    <FiFacebook />
                  </NavLink>
                </div>
                <div className="col-span-2">
                  <NavLink to="#" className="icon">
                    <CiLinkedin />
                  </NavLink>
                </div>
                <div className="col-span-2">
                  <NavLink to="#" className="icon">
                    <FaInstagram />
                  </NavLink>
                </div>
                <div className="col-span-2">
                  <NavLink to="#" className="icon">
                    <BsWhatsapp />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-links flex justify-center items-center flex-col px-4 py-6">
            <div className="devider w-full h-px bg-gray-300" />

            <div className="flex flex-wrap justify-center items-center gap-3 mt-4 text-center">
              {links.map((link, index) => (
                <div key={index} className="flex items-center">
                  <NavLink
                    className="footer-link text-sm md:text-base text-white hover:text-black transition"
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
          </div>
        </div>
      </footer>
    </>
  );
}
