import { Button } from "antd";
import { BsArrowRight } from "react-icons/bs";
import "../../css/home/prads.css";
import { NavLink } from "react-router-dom";

export default function PrAndAds() {
  return (
    <section className="section section-gray">
      <div className="container mx-auto">
        <div className="section-body">
          <div className="lg:flex justify-between">
            <h2 className="section-title">We Help to, Make PR & Ads</h2>
            <NavLink to="/who-we-are-pr-advertising">
              <Button className="comman-button mt-5">
                Know More <BsArrowRight />
              </Button>
            </NavLink>
          </div>
          <p className="section-content mt-5 lg:mt-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            quibusdam fuga tenetur neque soluta facere! Ipsa esse sint dolorum
            quidem magni unde qui exercitationem inventore. Voluptas fugiat nam
            maxime non! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Sapiente quibusdam fuga tenetur neque soluta facere! Ipsa esse sint
            dolorum quidem magni unde qui exercitationem inventore. Voluptas
            fugiat nam maxime non!
          </p>
        </div>
        <div className="ads-video mt-5">
          <div className="grid lg:grid-cols-3 gap-y-5 lg:gap-5">
            <video
              className="first col-span-2"
              poster="https://www.coca-cola.com/content/dam/onexp/in/en/brands/thums-up/updated-banners/tu_srk-toofan-glass-size-1440x810-v3.jpg"
              controls
            >
              <source />
            </video>
            <div className="video-group">
              <video
                controls
                poster="https://static.vecteezy.com/system/resources/previews/005/741/476/non_2x/gentle-cleaning-shampoo-or-skin-care-product-ads-with-bottle-banner-ad-for-beauty-products-wooden-surface-in-front-of-window-and-curtain-on-background-for-natural-product-display-design-vector.jpg"
              >
                <source />
              </video>
              <video
                className="mt-5"
                controls
                poster="https://i.ytimg.com/vi/bzPJXza4_EM/maxresdefault.jpg"
              >
                <source />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
