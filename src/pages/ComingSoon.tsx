import "../css/coming.css";
import bgdefault from "../assets/images/banners/bg-default.png";
import logo from "../assets/images/logo-white.png";
import Header from "../components/layout/Header";
import { useEffect, useState } from "react";

export default function ComingSoon() {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { enable: true, speed: 2 },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
          },
        },
      });
    }
  }, []);

  const calculateTimeLeft = () => {
    const difference =
      new Date("2025-06-01T18:00:00").getTime() - new Date().getTime();
    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);
      if (!updatedTime) clearInterval(timer);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className="page-cover">
        <Header />

        <div
          className="cover-bg pos-abs full-size bg-img"
          data-image-src={bgdefault}
        />
        <div
          id="particles-js"
          className="cover-bg pos-abs full-size bg-color"
        />
      </div>

      <div className="pane-when pt-30" id="s-when">
        <div className="content clearfix">
          {/* Header */}
          <header className="header">
            <p>
              Our page <br />
              Will be available in
            </p>
          </header>
          {/* Clock */}
          <div className="clock clock-countdown">
            <div
              className="site-config"
              data-date="02/02/2026 00:00:00"
              data-date-timezone={+0}
            />
            <div className="big">
              <div className="digit">
                <span className="days">{timeLeft?.days}</span>
                <span className="txt">days</span>
              </div>
            </div>
            <div className="medium clearfix">
              <span className="hours">{timeLeft?.hours}</span>
              <span className="unit">:</span>
              <span className="minutes">{timeLeft?.minutes}</span>
            </div>
            <div className="small">
              <span className="seconds">{timeLeft?.seconds}</span>
              <span className="thin"> sec</span>
            </div>
          </div>
        </div>
      </div>

      <main
        className="page-main fullpage-wrapper"
        id="mainpage"
        style={{
          height: "100%",
          position: "relative",
          top: 0,
          touchAction: "none",
        }}
      >
        {/* Begin of home page */}
        <div
          className="section page-home page page-cent fp-section active fp-completely"
          data-section="home"
          data-anchor="home"
          style={{ height: 812 }}
        >
          <h3 className="s-title">under development</h3>

          {/* Content */}
          <section className="content">
            <header className="header">
              {/* You can use text instead of logo, just uncomment below */}
              {/*<div class="h-left">
							<h2>New <strong>Company</strong></h2>
						</div>*/}
              <div className="p-title">
                <img className="h-logo" src={logo} alt="Logo" />
                {/*							<img class="h-logo" src="img/logo_dark.png" alt="Logo">*/}
              </div>
              <div className="h-right">
                <h3>
                  Shree&nbsp;Krishna&nbsp;Digital <br />
                  Solution&nbsp;Pvt&nbsp;Ltd
                </h3>
                <h4 className="subhead">
                  <a href="#register">Available here soon</a>
                </h4>
                <p>
                  +91 70213 90958
                  <br />
                  shreemarketing09@gmail.com
                  <br />
                  <span>
                    Number 102/B, Office, MOHID HEIGHTS 1st, Andheri, Mumbai,
                    Maharashtra 400053
                  </span>
                </p>
              </div>
            </header>
          </section>
          {/* Arrows scroll down/up */}
        </div>
      </main>
    </>
  );
}
