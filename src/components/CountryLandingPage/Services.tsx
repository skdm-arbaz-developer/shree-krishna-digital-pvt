import { NavLink } from "react-router-dom";

export default function Services({ data, serviceRef }: any) {
  return (
    <section className="services-section" ref={serviceRef}>
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="sm:grid grid-cols-12 gap-10">
          <div className="title-block col-span-12 lg:col-span-6">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  {data?.serviceSection?.title}
                  <span className="dot">.</span>
                </h2>
                <div className="lower-text">{data?.serviceSection?.desc}</div>
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
                  <img className="max-w-[65px]" src={val?.icon} alt={val?.altTag}/>
                </div>
                <h6>{val?.title.replace(/ in [A-Za-z\s]+$/, "")}</h6>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
