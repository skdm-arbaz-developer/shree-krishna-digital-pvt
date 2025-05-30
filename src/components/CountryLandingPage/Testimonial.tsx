import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonial({ testimonialRef }: any) {
  return (
    // 
    <section className="testimonials-section" ref={testimonialRef}>
      <div className="container mx-auto">
        <div className="sec-title">
          <h2>
            Customer feedbacks <span className="dot">.</span>
          </h2>
        </div>
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="testi-block">
              <div className="inner">
                <div className="icon-test">
                  <span>“</span>
                </div>
                <div className="info">
                  <div className="image">
                    <a href="/team">
                      <img
                        src="https://linoor-nuxt.netlify.app/images/resource/author-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="name">Shirley Smith</div>
                  <div className="designation">Director</div>
                </div>
                <div className="text">
                  There are many variations of passages of lorem ipsum available
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testi-block">
              <div className="inner">
                <div className="icon-test">
                  <span>“</span>
                </div>
                <div className="info">
                  <div className="image">
                    <a href="/team">
                      <img
                        src="https://linoor-nuxt.netlify.app/images/resource/author-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="name">Shirley Smith</div>
                  <div className="designation">Director</div>
                </div>
                <div className="text">
                  There are many variations of passages of lorem ipsum available
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable.
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="testi-block">
              <div className="inner">
                <div className="icon-test">
                  <span>“</span>
                </div>
                <div className="info">
                  <div className="image">
                    <a href="/team">
                      <img
                        src="https://linoor-nuxt.netlify.app/images/resource/author-1.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="name">Shirley Smith</div>
                  <div className="designation">Director</div>
                </div>
                <div className="text">
                  There are many variations of passages of lorem ipsum available
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable.
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
