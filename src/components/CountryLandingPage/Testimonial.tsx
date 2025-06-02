import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Testimonial({ data, testimonialRef }: any) {
  return (
    //
    <section className="testimonials-section" ref={testimonialRef}>
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
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
          {data?.faq?.map((val: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="testi-block">
                <div className="inner">
                  <div className="icon-test">
                    <span>“</span>
                  </div>
                  <div className="info">
                    <div className="image">
                      <a href="/team">
                        <img
                          src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="name">{val?.name}</div>
                    {/* <div className="designation">Director</div> */}
                  </div>
                  <div className="text">{val?.review}</div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
