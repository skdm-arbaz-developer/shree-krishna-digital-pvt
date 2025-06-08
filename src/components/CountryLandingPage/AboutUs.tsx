import aboutus from "../../assets/images/resources/about-us-country.png";

export default function AboutUs({ data, aboutRef }: any) {
  

  return (
    <> 
      <section className="section about-section" ref={aboutRef}>
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="md:grid md:grid-cols-2">
            <div className="about-image">
              <img className="grayscale-100 hover:grayscale-0" src={aboutus} alt={data?.altTag}/>
            </div>
            <div className="text-column">
              <div className="inner">
                <div className="sec-title">
                  <h2>
                    {data?.aboutSection?.title} <span className="dot">.</span>
                  </h2>
                  <div className="lower-text">
                    {data?.aboutSection?.desc?.map((val: any, index: number) => (
                      <p key={index}>{val}</p>
                    ))}
                  </div>
                </div>
                <div className="text">
                  {data?.aboutSection?.descSecond?.map(
                    (val: any, index: number) => (
                      <p key={index}>{val}</p>
                    )
                  )}
                </div>
                <div className="text clearfix">
                  <ul>
                    {data?.aboutSection?.points?.map(
                      (val: any, index: number) => (
                        <li key={index}>{val}</li>
                      )
                    )}
                  </ul>
                  <div className="since">
                    <span className="txt">
                      Since <br />
                      2018
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
    </>
  );
}