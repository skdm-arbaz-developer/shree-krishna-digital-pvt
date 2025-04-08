import { Button } from "antd";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CaseStudyCard from "../CaseStudy/CaseStudyCard";

export default function OurSuccessStorie() {
  return (
    <section className="section section-dark">
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="col-span-3">
            <div className="section-body">
              <h2 className="section-title">Our Success Stories</h2>
              <p className="section-content">
                Explore how we’ve helped businesses achieve remarkable results.
              </p>
              <Button
                className="comman-button mt-5"
                style={{ color: "#fff", borderColor: "#fff" }}
              >
                View All Stories <HiOutlineArrowLongRight />
              </Button>
            </div>
          </div>
          <div className="col-span-9">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <CaseStudyCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
