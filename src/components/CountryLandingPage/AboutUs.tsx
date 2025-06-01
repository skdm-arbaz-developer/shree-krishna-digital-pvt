import aboutus from "../../assets/images/resources/about-us-country.png";

export default function AboutUs({ aboutRef }: any) {
  return (
    <section className="section about-section" ref={aboutRef}>
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-2">
          <div className="about-image">
            <img className="grayscale-100 hover:grayscale-0" src={aboutus} />
          </div>
          <div className="text-column">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  We’re the best agency <br />
                  in downtown <span className="dot">.</span>
                </h2>
                <div className="lower-text">
                  We are committed to providing our customers with exceptional
                  service while offering our employees the best training.
                </div>
              </div>
              <div className="text">
                <p>
                  Lorem Ipsum is simply dummy text of free available in market
                  the printing and typesetting industry has been the industry's
                  standard dummy text ever.
                </p>
              </div>
              <div className="text clearfix">
                <ul>
                  <li>Suspe ndisse suscipit sagittis leo.</li>
                  <li>Entum estibulum dignissim posuere.</li>
                  <li>If you are going to use a passage.</li>
                </ul>
                <div className="since">
                  <span className="txt">
                    Since <br />
                    2008
                  </span>
                </div>
              </div>
              {/* <div className="link-box mt-10">
                <NavLink to="/about-us" className="theme-btn btn-style-one">
                  <i className="btn-curve" />
                  <span className="btn-title">Discover More</span>
                </NavLink>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
