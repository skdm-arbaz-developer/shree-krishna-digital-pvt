import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import countries from "../components/support/Countries";
import ServiceViewBanner from "../components/CountryLandingPage/ServiceViewBanner";
import "../css/LandingPage.css";
import ServiceViewHeader from "../components/CountryLandingPage/ServiceViewHeader";
import ServiceViewSideBar from "../components/CountryLandingPage/ServiceViewSideBar";

interface Service {
  icon: string;
  title: string;
  link: string;
  shortdesc: string;
  desc: string[];
  bannerImage: string;
}

interface Country {
  title: string;
  desc: string;
  url: string;
  type: string;
  banner: string; // assuming it's a URL or image path
  services: Service[]; // array of service objects
}

export default function CountryServiceView() {
  const location = useLocation();
  const [data, setData] = useState<Service | undefined>();
  const [aboutCountry, setAboutCountry] = useState<Country | undefined>();

  useEffect(() => {
    const matchedService = countries
      ?.flatMap((country) => country.services)
      ?.find((service) => service.link === location?.pathname);

    const countryData = countries.find((country) =>
      country.services.some((service) => service.link === location?.pathname)
    );

    setData(matchedService);
    setAboutCountry(countryData);
  }, [location]);

  return (
    data && (
      <div className={`relative ${aboutCountry?.type}`}>
        <ServiceViewHeader service={aboutCountry} />
        <ServiceViewBanner aboutCountry={aboutCountry} data={data} />
        <div className="sidebar-page-container">
          <div className="container mx-auto">
            <div className="sm:grid grid-cols-12 gap-10">
              <div className="lg:col-span-7 col-span-12">
                <div className="service-details">
                  <div className="main-image image">
                    <img src={data?.bannerImage} alt="" />
                  </div>
                  <div className="text-content">
                    <h3>{data?.title}</h3>
                    <p>
                      Need something changed or is there something not quite
                      working the way you envisaged? Is your van a little old
                      and tired and need refreshing? Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>

                    <p>
                      Need something changed or is there something not quite
                      working the way you envisaged? Is your van a little old
                      and tired and need refreshing? Lorem Ipsum is simply dummy
                      text of the printing and typesetting industry. Lorem Ipsum
                      has been the industry's standard dummy text ever since the
                      1500s, when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                    <p className="last">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <ServiceViewSideBar aboutCountry={aboutCountry} data={data} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
