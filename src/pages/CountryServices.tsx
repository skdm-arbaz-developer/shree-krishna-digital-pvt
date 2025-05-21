import { NavLink, useLocation } from "react-router-dom";
import CommanBanner from "../components/support/CommanBanner";
import countries from "../components/support/Countries";
import { useEffect, useState } from "react";

interface Service {
  banner: string;
  title: string;
  url: string;
  shortdesc: string;
  desc: string[];
}

interface Country {
  title: string;
  desc: string;
  url: string;
  banner: string; // assuming it's a URL or image path
  services: Service[]; // array of service objects
}

export default function CountryServices() {
  const location = useLocation();
  const [service, setService] = useState<Country | undefined>();

  useEffect(() => {
    const url = location?.pathname;
    const data = countries?.find((val) => val?.url === url);
    setService(data);
  }, [location]);

  return (
    service && (
      <>
        <CommanBanner
          image={service?.banner}
          title={service?.title}
          desc={service?.desc}
        />

        <section className="section">
          <div className="container mx-auto">
            <div className="section-body flex justify-center flex-col items-center">
              <h2 className="section-title">
                Services We Served At {service?.title}
              </h2>
              <p className="section-content text-center max-w-lvh">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatum eveniet in deserunt. Non ratione vitae earum eaque
                impedit aspernatur similique! Pariatur, consectetur totam quas
                exercitationem et placeat voluptas omnis commodi?
              </p>
            </div>

            <div className="service-list mt-10">
              <div className="grid grid-cols-3 gap-10">
                {service?.services?.map((val, index) => (
                  <ServiceCard data={val} key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  );
}

const ServiceCard = ({ data }: any) => (
  <NavLink to={data?.url} className="country-services">
    <img
      style={{
        width: "100%",
        maxHeight: 220,
        objectFit: "cover",
        objectPosition: "center",
        borderRadius:10
      }}
      src={data?.banner}
    />
    <h5 style={{ fontSize: "1.2rem", fontWeight: "bold", marginTop:10 }}>{data?.title}</h5>
    <p style={{ fontSize: ".9rem" }}>{data?.shortdesc}</p>
  </NavLink>
);
