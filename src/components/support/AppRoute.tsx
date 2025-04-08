import { lazy, ReactNode } from "react";
import { RouteObject } from "react-router-dom";

// Navigation config
import NavigationLinks from "./NavigationLinks";
import WhyChooseUs from "../../pages/WhyChooseUs";

// Lazy-loaded components
const Home = lazy(() => import("../../pages/Home"));
const AboutUs = lazy(() => import("../../pages/AboutUs"));
const OurTeam = lazy(() => import("../../pages/OurTeam"));

interface RouteMap {
  [key: string]: ReactNode;
}

const componentMap: RouteMap = {
  "": <Home />, // 👈 for "/"
  aboutus: <AboutUs />,
  ourteam: <OurTeam />,
  whychooseus: <WhyChooseUs />,
};

const navigations =
  typeof NavigationLinks === "function" ? NavigationLinks() : NavigationLinks;

const dynamicRoutes: RouteObject[] = navigations.flatMap((nav) => {
  if (Array.isArray(nav.link)) {
    return nav.link
      .map((item) => {
        const path = item.link;
        const key = path.replace(/-/g, "").toLowerCase();
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
    const path = nav.link === "/" ? "" : nav.link.replace(/^\//, ""); // handle "/" correctly
    const key = path.replace(/-/g, "").toLowerCase();
    const component = componentMap[key];
    return component ? [{ path: nav.link, element: component }] : [];
  }
  return [];
});

// dynamicRoutes.push({
//   path: "*",
//   element: <NotFound />,
// });

export default dynamicRoutes;
