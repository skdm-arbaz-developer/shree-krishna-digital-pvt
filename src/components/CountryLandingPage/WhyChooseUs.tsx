export default function WhyChooseUs() {
  return (
    <>
      <section className="facts-section">
        <div
          className="image-layer"
          style={{
            backgroundImage:
              "url(https://linoor-nuxt.netlify.app/images/background/image-1.jpg)",
          }}
        />
        <div className="auto-container">
          <div className="inner-container">
            <div className="fact-counter">
              <div className="grid grid-cols-4 clearfix">
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box">
                        <span className="count-text">
                          <span>8,705</span>
                        </span>
                      </div>
                      <div className="counter-title">Projects Completed</div>
                    </div>
                  </div>
                </div>
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box alternate">
                        <span className="count-text">
                          <span>480</span>
                        </span>
                      </div>
                      <div className="counter-title">Active clients</div>
                    </div>
                  </div>
                </div>
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box">
                        <span className="count-text">
                          <span>626</span>
                        </span>
                      </div>
                      <div className="counter-title">cups of coffee</div>
                    </div>
                  </div>
                </div>
                <div className="column counter-column col-lg-3 col-md-6 col-sm-12">
                  <div className="inner">
                    <div className="content">
                      <div className="count-outer count-box">
                        <span className="count-text">
                          <span>9,704</span>
                        </span>
                      </div>
                      <div className="counter-title">happy clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <div className="container mx-auto">
          <div className="outer-container">
            <div className="grid grid-cols-12 clearfix">
              <div className="left-col xl:col-span-5 lg:col-span-6 col-span-12">
                <div className="inner">
                  <div className="col-header">
                    <div className="header-inner">
                      <span>
                        We’re Committed To Deliver High Quality Projects .
                      </span>
                    </div>
                  </div>
                  <div className="features">
                    <div className="feature">
                      <div className="count">
                        <span>01</span>
                      </div>
                      <h5>TOTAL DESIGN FREEDOM FOR EVERYONE</h5>
                      <div className="sub-text">core features</div>
                    </div>
                    <div className="feature">
                      <div className="count">
                        <span>02</span>
                      </div>
                      <h5>BASIC RULES OF RUNNING WEB AGENCY</h5>
                      <div className="sub-text">core features</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-col xl:col-span-7 lg:col-span-6 col-span-12">
                <div className="inner">
                  <div className="sec-title">
                    <h2>
                      We’re trusted by more <br />
                      than 6260 clients
                      <span className="dot">.</span>
                    </h2>
                    <div className="lower-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, simply free text by injected humour, or
                      randomised.
                    </div>
                  </div>
                  <div className="featured-block-two clearfix">
                    <div className="image">
                      <img src="https://linoor-nuxt.netlify.app/images/resource/featured-image-5.jpg" alt="" />
                    </div>
                    <div className="text">
                      <ul>
                        <li> Suspe ndisse sagittis leo.</li>
                        <li>Entum estibulum is posuere.</li>
                        <li>If you are going to use passage.</li>
                        <li>Lorem Ipsum on the tend to repeat.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
