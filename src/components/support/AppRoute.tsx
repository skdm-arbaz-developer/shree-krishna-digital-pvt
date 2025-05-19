import { lazy, ReactNode } from "react";
import { RouteObject } from "react-router-dom";

// Navigation config
import NavigationLinks from "./NavigationLinks";

// Lazy-loaded components
const Home = lazy(() => import("../../pages/Home"));
const AboutUs = lazy(() => import("../../pages/AboutUs"));
const OurTeam = lazy(() => import("../../pages/OurTeam"));
const CaseStudy = lazy(() => import("../../pages/CaseStudy"));
const PrivacyPolicy = lazy(() => import("../../pages/PrivacyPolicy"));
const WhyChooseUs = lazy(() => import("../../pages/WhyChooseUs"));
const WhoWeArePrAdd = lazy(() => import("../../pages/WhoWeArePrAdd"));
const PortfolioPrAds = lazy(() => import("../../pages/PortfolioPrAds"));
const ContactUs = lazy(() => import("../../pages/ContactUs"));
const Career = lazy(() => import("../../pages/Career"));
const LifeAtSkd = lazy(() => import("../../pages/LifeAtSkd"));
const CaseStudyView = lazy(() => import("../../pages/CaseStudyView"));
const Blog = lazy(() => import("../../pages/Blog"));

interface RouteMap {
  [key: string]: ReactNode;
}

interface NavLinkItem {
  link: string;
  name: string;
  icon?: ReactNode;
  desc?: string;
}

interface NavigationType {
  name: string;
  icon?: ReactNode;
  link: string | NavLinkItem[];
}

const componentMap: RouteMap = {
  "": <Home />, // 👈 for "/"
  aboutus: <AboutUs />,
  ourteam: <OurTeam />,
  whychooseus: <WhyChooseUs />,
  casestudy: <CaseStudy />,
  privacypolicy: <PrivacyPolicy />,
  whowearepradvertising: <WhoWeArePrAdd />,
  ourportfolio: <PortfolioPrAds />,
  contactus: <ContactUs />,
  career: <Career />,
  lifeatskd: <LifeAtSkd />,
  casestudyview: <CaseStudyView />,
  blogs: <Blog />,
};

const navigations: NavigationType[] = NavigationLinks;

const dynamicRoutes: RouteObject[] = navigations.flatMap(
  (nav: NavigationType) => {
    if (Array.isArray(nav.link)) {
      return nav.link
        .map((item: NavLinkItem) => {
          const path = item.link.replace(/^\/+/, ""); // remove leading slashes
          const key = path.replace(/[-/]/g, "").toLowerCase();
          const component = componentMap[key];

          return component
            ? {
                path: `/${path}`,
                element: component,
              }
            : null;
        })
        .filter(Boolean) as RouteObject[];
    } else if (typeof nav.link === "string") {
      const path = nav.link === "/" ? "" : nav.link.replace(/^\/+/, "");
      const key = path.replace(/[-/]/g, "").toLowerCase();
      const component = componentMap[key];

      return component
        ? [
            {
              path: `/${path}`,
              element: component,
            },
          ]
        : [];
    }

    return [];
  }
);


// dynamicRoutes.push({
//   path: "*",
//   element: <NotFound />,
// });

export default dynamicRoutes;
