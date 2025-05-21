import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import countries from "../components/support/Countries";
import CommanBanner from "../components/support/CommanBanner";

interface Service {
  banner: string;
  title: string;
  url: string;
  shortdesc: string;
  desc: string[];
}

export default function CountryServiceView() {
  const location = useLocation();
  const [data, setData] = useState<Service | undefined>();

  useEffect(() => {
    const matchedService = countries
      ?.flatMap((country) => country.services)
      ?.find((service) => service.url === location?.pathname);

    setData(matchedService);
  }, [location]);
  return (
    data && (
      <>
        <CommanBanner
          image={data?.banner}
          title={data?.title}
          desc={data?.shortdesc}
        />
      </>
    )
  );
}
