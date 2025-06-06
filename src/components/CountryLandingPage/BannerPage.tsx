import "../../css/LandingPage.css";
import { NavLink } from "react-router-dom";

import indiaCurles from "../../assets/images/icons/Curles/1.png";
import dubaiCurles from "../../assets/images/icons/Curles/2.png";
import australiaCurles from "../../assets/images/icons/Curles/3.png";
import usaCurles from "../../assets/images/icons/Curles/4.png";
import canadaCurles from "../../assets/images/icons/Curles/5.png";
import nepalCurles from "../../assets/images/icons/Curles/6.png";
import maldivesCurles from "../../assets/images/icons/Curles/7.png";
import unitedkingdomCurles from "../../assets/images/icons/Curles/8.png";
import malasiaCurles from "../../assets/images/icons/Curles/9.png";

import indiaSideCurve from "../../assets/images/icons/SideCurve/1.png";
import dubaiSideCurve from "../../assets/images/icons/SideCurve/2.png";
import australiaSideCurve from "../../assets/images/icons/SideCurve/3.png";
import usaSideCurve from "../../assets/images/icons/SideCurve/4.png";
import canadaSideCurve from "../../assets/images/icons/SideCurve/5.png";
import nepalSideCurve from "../../assets/images/icons/SideCurve/6.png";
import maldivesSideCurve from "../../assets/images/icons/SideCurve/7.png";
import unitedkingdomSideCurve from "../../assets/images/icons/SideCurve/8.png";
import malasiaSideCurve from "../../assets/images/icons/SideCurve/9.png";

export default function BannerPage({
  service,
  homeRef,
  handleClick
}: any) {
  const getIcons = (country: string, type: string) => {
    let icons;
    let curles;
    let curves;

    switch (country) {
      case "india":
        curles = indiaCurles;
        curves = indiaSideCurve;
        break;
      case "dubai":
        curles = dubaiCurles;
        curves = dubaiSideCurve;
        break;
      case "australia":
        curles = australiaCurles;
        curves = australiaSideCurve;
        break;
      case "usa":
        curles = usaCurles;
        curves = usaSideCurve;
        break;
      case "canada":
        curles = canadaCurles;
        curves = canadaSideCurve;
        break;
      case "nepal":
        curles = nepalCurles;
        curves = nepalSideCurve;
        break;
      case "maldives":
        curles = maldivesCurles;
        curves = maldivesSideCurve;
        break;
      case "united-kingdom":
        curles = unitedkingdomCurles;
        curves = unitedkingdomSideCurve;
        break;
      case "malasia":
        curles = malasiaCurles;
        curves = malasiaSideCurve;
        break;
      default:
        curles = indiaCurles;
        curves = indiaSideCurve;
        break;
    }

    return type === "icon" ? icons : type === "curles" ? curles : curves;
  };

  return (
    <div className="relative overflow-hidden" ref={homeRef}>
      <img
        className="absolute z-1 top-0 left-0 hidden md:block"
        src={getIcons(service?.type, "curles")}
      />
      <img
        className="absolute z-1 right-0 top-0 bottom-0 hidden md:block"
        src="https://linoor-nuxt.netlify.app/images/main-slider/right-white-curve.png"
      />
      <img
        className="absolute z-1 right-0 bottom-0 hidden md:block"
        src={getIcons(service?.type, "curves")}
      />
      <div
        className="landing-banner"
        style={{ backgroundImage: `url(${service?.banner})` }}
      ></div>
      <div className="landing-banner-content z-20 px-5">
        <h1>Best Digital Marketing Compnay in {service?.title}</h1>
        <h2 style={{maxWidth:700}}>{service?.bannerTitle}</h2>
        <button onClick={handleClick}>
          <i className="btn-curve"></i> <span>Discover More</span>
        </button>
      </div>

      <div className="socil-details hidden md:block">
        <div className="base-inner">
          <div className="socila-links">
            <ul>
              <li>
                <NavLink to="https://www.instagram.com/shreekrishna_digitalsolutions/">
                  INSTAGRAM
                </NavLink>
              </li>
              <li>
                <NavLink to="https://www.facebook.com/shree.krishnadigitalsolutions/">
                  FACEBOOK
                </NavLink>
              </li>
              <li>
                <NavLink to="https://api.whatsapp.com/send/?phone=%2B917021390953&text=Hello%2C%20I%27m%20interested%20in%20your%20digital%20marketing%20services.%20Please%20share%20more%20details%20about%20how%20you%20can%20help%20grow%20my%20business%20online.&type=phone_number&app_absent=0">
                  WHATSAPP
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="opening-list">
            <ul>
              <li>Mon - Fri</li>
              <li>10AM - 7PM</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
