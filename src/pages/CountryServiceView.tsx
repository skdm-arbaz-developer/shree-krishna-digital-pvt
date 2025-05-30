import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import countries from "../components/support/Countries";
import CommanBanner from "../components/support/CommanBanner";

interface Service {
  icon: string;
  title: string;
  link: string;
  shortdesc: string;
  desc: string[];
  bannerImage: string;
}


export default function CountryServiceView() {
  const location = useLocation();
  const [data, setData] = useState<Service | undefined>();

  useEffect(() => {
    const matchedService = countries
      ?.flatMap((country) => country.services)
      ?.find((service) => service.link === location?.pathname);

    setData(matchedService);
  }, [location]);
  
  return (
    data && (
      <>
        <CommanBanner
          image={data?.bannerImage}
          title={data?.title}
          desc={data?.shortdesc}
        />
      </>
    )
  );
}
