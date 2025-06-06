import { NavLink, useLocation } from "react-router-dom";
import "../../css/LandingPage.css";
import logo from "../../assets/images/logo-white.png";
import indiaIcon from "../../assets/images/icons/Icon/1.png";
import dubaiIcon from "../../assets/images/icons/Icon/2.png";
import australiaIcon from "../../assets/images/icons/Icon/3.png";
import usaIcon from "../../assets/images/icons/Icon/4.png";
import canadaIcon from "../../assets/images/icons/Icon/5.png";
import nepalIcon from "../../assets/images/icons/Icon/6.png";
import maldivesIcon from "../../assets/images/icons/Icon/7.png";
import unitedkingdomIcon from "../../assets/images/icons/Icon/8.png";
import malasiaIcon from "../../assets/images/icons/Icon/9.png";
import { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsList } from "react-icons/bs";

export default function ServiceViewHeader({ service }: any) {
  const [active, setActive] = useState(false);
  const [showNavList, setShowNavList] = useState(false);

  const navigation = [
    { title: "Home", link: "home" },
    { title: "Services", link: "services" },
    { title: "About Us", link: "about-us" },
    { title: "FAQ", link: "faq" },
    { title: "Testimonial", link: "testimonial" },
    { title: "Get In Touch", link: "get-in-touch" },
  ];

  const getIcons = (country: string) => {
    let icons;

    switch (country) {
      case "india":
        icons = indiaIcon;
        break;
      case "dubai":
        icons = dubaiIcon;
        break;
      case "australia":
        icons = australiaIcon;
        break;
      case "usa":
        icons = usaIcon;
        break;
      case "canada":
        icons = canadaIcon;
        break;
      case "nepal":
        icons = nepalIcon;
        break;
      case "maldives":
        icons = maldivesIcon;
        break;
      case "united-kingdom":
        icons = unitedkingdomIcon;
        break;
      case "malasia":
        icons = malasiaIcon;
        break;
      default:
        icons = indiaIcon;
        break;
    }

    return icons;
  };

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  return (
    <>
      <header className="landng-page-header">
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <NavLink to={"/" + service?.type} className="logo">
            <img src={logo} />
          </NavLink>
          <div className={`navigation ${showNavList ? "active" : ""}`}>
            <ul>
              {navigation.map((val, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setShowNavList(false);
                  }}
                  style={{ cursor: "pointer" }}
                >
                  <NavLink to={"/" + service?.type} className="logo">
                    {val?.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block">
            <div className="callbutton">
              <div className="call-icon">
                <img src={getIcons(service?.type)} />
              </div>
              <div className="phone">
                <span>CALL ANYTIME</span>
                <br />
                <NavLink to={"tel:+917021390953"}>
                  +91&nbsp;702&nbsp;139&nbsp;0953
                </NavLink>
              </div>
            </div>
          </div>

          <div
            className="toggleButton cursor-pointer"
            onClick={() => setShowNavList((prev) => !prev)}
          >
            {showNavList ? (
              <IoCloseSharp style={{ fontSize: "2rem" }} />
            ) : (
              <BsList style={{ fontSize: "2rem" }} />
            )}
          </div>
        </div>
      </header>

      <div className={`header-second ${active ? "active" : ""}`}>
        <header className="landng-page-header">
          <div className="container mx-auto px-0 sm:px-5 xl:px-0">
            <NavLink to={"/" + service?.type} className="logo">
              <img src={logo} />
            </NavLink>
            <div className={`navigation ${showNavList ? "active" : ""}`}>
              <ul>
                {navigation.map((val, index) => (
                  <li key={index} style={{ cursor: "pointer" }}>
                    <NavLink to={"/" + service?.type} className="logo">
                      <span>{val?.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="callbutton">
                <div className="call-icon">
                  <img src={getIcons(service?.type)} />
                </div>
                <div className="phone">
                  <span>CALL ANYTIME</span>
                  <br />
                  <NavLink to={"tel:+917021390953"}>
                    +91&nbsp;702&nbsp;139&nbsp;0953
                  </NavLink>
                </div>
              </div>
            </div>

            <div
              className="toggleButton cursor-pointer"
              onClick={() => setShowNavList((prev) => !prev)}
            >
              {showNavList ? (
                <IoCloseSharp style={{ fontSize: "2rem" }} />
              ) : (
                <BsList style={{ fontSize: "2rem" }} />
              )}
            </div>
          </div>
        </header>
      </div>
    </>
  );
}
