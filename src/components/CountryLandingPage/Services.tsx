import { NavLink } from "react-router-dom";

export default function Services({ data, serviceRef }: any) {
  return (
    <section className="services-section" ref={serviceRef}>
      <div className="container mx-auto">
        <div className="sm:grid grid-cols-12 gap-10">
          <div className="title-block col-span-12 lg:col-span-6">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  We Shape the Perfect <br />
                  Solutions
                  <span className="dot">.</span>
                </h2>
                <div className="lower-text">
                  We are committed to providing our customers with exceptional
                  service while offering our employees the best training.
                </div>
              </div>
            </div>
          </div>
          {data?.services?.map((val: any, index: number) => (
            <NavLink
              to={val?.link}
              className="service-block sm:col-span-6 md:col-span-4 lg:col-span-3"
              key={index}
            >
              <div className="inner-box">
                <div className="bottom-curve" />
                <div className="icon-box">
                  <img className="max-w-[65px]" src={val?.icon} />
                </div>
                <h6>{val?.title}</h6>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
