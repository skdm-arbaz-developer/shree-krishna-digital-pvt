import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import dynamicRoutes from "./components/support/AppRoute";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CaseStudyView from "./pages/CaseStudyView";
import Services from "./pages/Services";
import services from "./components/support/ServicesArrayList";
import NotFound from "./pages/404";
import BlogView from "./pages/BlogView";
import industries from "./components/support/IndustryArrayList";
import Industries from "./pages/Industries";
import countries from "./components/support/Countries";
// import CountryServices from "./pages/CountryServices";
// import CountryServiceView from "./pages/CountryServiceView";
import ComingSoon from "./pages/ComingSoon";
import CountryServices from "./pages/CountryServices";
import CountryServiceView from "./pages/CountryServiceView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {dynamicRoutes.map((route, idx) => (
          <Route
            key={idx}
            path={route.path}
            element={
              <>
                <Header />
                {route.element}
                <Footer />
              </>
            }
          />
        ))}
        <Route
          path="/case-study-view/:id"
          element={
            <>
              <Header />
              <CaseStudyView />
              <Footer />
            </>
          }
        />
        <Route
          path="/blog-view/:id"
          element={
            <>
              <Header />
              <BlogView />
              <Footer />
            </>
          }
        />
        {services.map((val, index) => (
          <Route
            path={val.slug}
            key={index}
            element={
              <>
                <Header />
                <Services />
                <Footer />
              </>
            }
          />
        ))}
        {industries.map((val, index) => (
          <Route
            path={val.slug}
            key={index}
            element={
              <>
                <Header />
                <Industries />
                <Footer />
              </>
            }
          />
        ))}

        {countries?.map((val) =>
          val?.services?.map((val, index) => (
            <Route
              path={val.link}
              key={index}
              element={
                <>
                  {/* <Header /> */}
                  <CountryServiceView />
                  {/* <Footer /> */}
                </>
              }
            />
          ))
        )}

        {countries?.map((val, index) => (
          <Route
            path={val.url}
            key={index}
            element={
              <>
                <CountryServices />
                <Footer />
              </>
            }
          />
        ))}
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
