import CountUp from "react-countup";
import FeaturedImage5 from "../../assets/images/resources/featured-image-5.jpg"
import img1 from "../../assets/images/resources/image-1.jpg"

export default function WhyChooseUs({ data }: any) {
  const counters = [
     {
      digit: 6,
      title: "Years Experience",
    },
    {
      digit: 5000,
      title: "Project Completed",
    },
    {
      digit: 3000,
      title: "Satisfied Clients",
    },

    {
      digit: 10,
      title: "Paid Leads Generated",
    },
  ];

  return (
    <>
      <section className="facts-section">
        <div
          className="image-layer"
          style={{
            backgroundImage:
              `url(${img1})`,
          }}
        />
        <div className="auto-container">
          <div className="inner-container">
            <div className="fact-counter">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 clearfix">
                {counters.map((val: any, index: number) => (
                  <div className="column counter-column" key={index}>
                    <CountUp
                      enableScrollSpy
                      start={0}
                      end={val.digit}
                      scrollSpyDelay={1000}
                      delay={10000}
                    >
                      {({ countUpRef }) => (
                        <div className="inner">
                          <div className="content">
                            <div className="count-outer count-box">
                              <span className="count-text">
                                <span ref={countUpRef} />
                                &nbsp;
                                {val?.title === "Paid Leads Generated" &&
                                  "Lakh"}
                                +
                              </span>
                            </div>
                            <div className="counter-title">{val?.title}</div>
                          </div>
                        </div>
                      )}
                    </CountUp>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted-section">
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="outer-container">
            <div className="grid grid-cols-12 clearfix">
              <div className="left-col xl:col-span-5 lg:col-span-6 col-span-12">
                <div className="inner">
                  <div className="col-header">
                    <div className="header-inner">
                      <span>{data?.whychooseSection?.titleLeft}</span>
                    </div>
                  </div>
                  <div className="features">
                    {data?.whychooseSection?.pointLeft?.map(
                      (val: any, index: number) => (
                        <div className="feature" key={index}>
                          <div className="count">
                            <span>0{index + 1}</span>
                          </div>
                          <h5>{val?.subtitle}</h5>
                          <div className="sub-text">{val?.title}</div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="right-col xl:col-span-7 lg:col-span-6 col-span-12">
                <div className="inner">
                  <div className="sec-title">
                    <h2>
                      {data?.whychooseSection?.titleRight}
                      <span className="dot">.</span>
                    </h2>
                    <div className="lower-text">
                      {data?.whychooseSection?.desc}
                    </div>
                  </div>
                  <div className="featured-block-two clearfix">
                    <div className="image">
                      <img
                        src={FeaturedImage5}
                        alt=""
                      />
                    </div>
                    <div className="text">
                      <ul>
                        {data?.whychooseSection?.pointsRight?.map(
                          (val: string, index: number) => (
                            <li key={index}> {val}</li>
                          )
                        )}
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
