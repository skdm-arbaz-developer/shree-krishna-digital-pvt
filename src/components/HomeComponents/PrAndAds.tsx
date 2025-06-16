import { Button } from "antd";
import { BsArrowRight } from "react-icons/bs";
import "../../css/home/prads.css";
import { NavLink } from "react-router-dom";

export default function PrAndAds() {
  return (
    <section className="section section-gray">
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="section-body">
          <div className="lg:flex justify-between">
            <h2 className="section-title">
              We Help you to, Make PR & Advertisment
            </h2>
            <NavLink to="/pr-agency-mumbai">
              <Button className="comman-button mt-5">
                Know More <BsArrowRight />
              </Button>
            </NavLink>
          </div>
          <p className="section-content mt-5 lg:mt-0">
            We are a leading PR and advertising agency, dedicated to helping
            businesses build their brand, connect with their audience, and
            achieve their marketing goals. Our team of experts specializes in
            creating tailored strategies that drive results and elevate your
            brand's presence in the market.
          </p>
        </div>
        <div className="ads-video mt-5">
          <div className="lg:grid lg:grid-cols-3 lg:gap-5">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/755873395?h=2808c87a1c"
              width="100%"
              height="100%"
              className="col-span-2 min-h-[250px]"
            />

            <div className="video-group">
              <iframe
                title="second adevertisment"
                src="https://player.vimeo.com/video/755873578?h=6fddfdfe2b"
                width="100%"
                height="250"
              />
              <iframe
                title="third adevertisment"
                src="https://player.vimeo.com/video/768409096?h=6fddfdfe2b"
                width="100%"
                height="250"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
