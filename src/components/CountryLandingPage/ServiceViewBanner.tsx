import { NavLink } from "react-router-dom";
import "../../css/LandingPage.css";

export default function ServiceViewBanner({ data, aboutCountry }: any) {
  return (
    <section className="page-banner">
      <div
        className="image-layer"
        style={{ backgroundImage: 'url("' + data?.bannerImage + '")' }}
      />
      <div className="banner-inner">
        <div className="auto-container">
          <div className="inner-container clearfix">
            <h1 className="lg:text-2xl">{data?.title}</h1>
            <div className="page-nav-country mt-10">
              <ul className="bread-crumb clearfix">
                <li>
                  <NavLink
                    to={"/" + aboutCountry?.type}
                    className="nuxt-link-active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="active">{data?.title}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
