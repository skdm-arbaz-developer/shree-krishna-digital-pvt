import { useLocation } from "react-router-dom";
import CommanBanner from "../components/support/CommanBanner";
import industries from "../components/support/IndustryArrayList";
import { Avatar, Button, Collapse, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FaMinus, FaPlus, FaUser } from "react-icons/fa6";
import "../css/home/logoscroll.css";
import { BsQuote } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../css/home/testimonial.css";
import FaqArrow from "../assets/images/icons/faq-arrow.svg";
import FaqStart from "../assets/images/icons/faq-star.svg";
import SvgIcon from "../assets/images/icons/home-about-right.svg";
import circle from "../assets/images/icons/service-home.svg";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import CaseStudyCard from "../components/CaseStudy/CaseStudyCard";

export default function Industries() {
  const { pathname } = useLocation();
  const data = industries.find((val) => val?.slug === pathname);
  const [form] = Form.useForm();

  return (
    data && (
      <>
        <CommanBanner
          image={data?.banner}
          title={data?.title}
          desc={data?.shortdesc}
        />
        {data.description && (
          <section className={`section section-${data?.description?.mode}`}>
            <div className="container mx-auto">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title text-center">
                  {data?.description?.title}
                </h2>
                <p className="section-content text-center ">
                  {data?.description?.shortdesc}
                </p>
              </div>

              <div className="section-details mt-10">
                <div className="grid grid-cols-2 gap-10">
                  <div className="descption-image">
                    <img
                      style={{ width: "100%", height: "100%" }}
                      src={data?.description?.image}
                    />
                  </div>
                  <div className="section-detail-content">
                    {data?.description?.desc.map((val, index) => (
                      <p className="mb-5" key={index}>
                        {val}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <img src={SvgIcon} className="absolute top-0 right-0" />
          </section>
        )}

        {data?.clients && (
          <section className="section section-gray">
            <div className="container mx-auto">
              <div className="section-body flex justify-center items-center flex-col">
                <h2 className="section-title text-center">
                  {data?.clients?.title}
                </h2>
                <p
                  className="section-content text-center"
                  style={{ maxWidth: 900 }}
                >
                  {data?.clients?.shortdesc}
                </p>
              </div>

              <div className="logo-list mt-20">
                <div className="logo-scroll">
                  {data?.clients?.list?.map((val, index) => (
                    <img key={index} src={val} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

       

        {data.testimonial && (
          <section className="section section-dark mb-110 relative">
            <img src={FaqArrow} className="absolute -top-10 left-0" />
            <img src={FaqStart} className="absolute top-0 right-0" />

            <div className="container mx-auto relative">
              <div className="section-body flex flex-col items-center pb-50">
                <h2 className="section-title text-center">
                  {data?.testimonial?.title}
                </h2>
                <p className="section-content text-center ">
                  {data?.testimonial?.shortdesc}
                </p>
              </div>

              <div className="testimonial-list mt-40">
                <Swiper
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 25,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    },
                  }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  navigation={true}
                  modules={[Navigation, Pagination]}
                  className="industry-swiper"
                >
                  {data?.testimonial?.review?.map((val, index) => (
                    <SwiperSlide className="pb-20" key={index}>
                      <TestimonialCard
                        review={val.review}
                        name={val.name}
                        company={val.company}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>
        )}
        
         {data?.casestudy && (
          <section className={"section section-"+ data?.casestudy?.mode}>
            <div className="container mx-auto">
              <div className="grid grid-cols-12">
                <div className="col-span-4">
                  <div className="section-body">
                    <h2 className="section-title">Our Success Stories</h2>
                    <p className="section-content">
                      Explore how we’ve helped businesses achieve remarkable
                      results.
                    </p>
                    <Button
                      className="comman-button mt-5"
                      style={{ color: "#fff", borderColor: "#fff" }}
                    >
                      View All Stories <HiOutlineArrowLongRight />
                    </Button>
                  </div>
                </div>
                <div className="col-span-8">
                  <Swiper
                    navigation={true}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
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
                    modules={[Navigation]}
                    className="case-study"
                  >
                    {data?.casestudy?.list?.map((val) => (
                      <SwiperSlide>
                        <CaseStudyCard data={val} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        )}
        {data.whychoose && (
          <section
            className={`section relative section-${data?.whychoose?.mode}`}
          >
            <img src={FaqArrow} className="absolute -top-10 left-0" />
            <img src={FaqStart} className="absolute top-0 right-0" />
            <div className="container mx-auto">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title text-center">
                  {data?.whychoose?.title}
                </h2>
                <p className="section-content text-center max-w-200">
                  {data?.whychoose?.shortdesc}
                </p>
              </div>

              <div className="section-detail mt-20">
                {data?.whychoose?.whychoosepoints?.map((val, index) => (
                  <WhyChooseSection detail={val} index={index} key={index} />
                ))}
              </div>
            </div>

            <img
              src={circle}
              alt="circle"
              className="absolute bottom-10 right-20"
            />
          </section>
        )}

        {data.faq && (
          <section className={`section section-${data?.faq?.mode}`}>
            <div className="container mx-auto">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title text-center">
                  {data?.faq?.title}
                </h2>
                <p className="section-content text-center max-w-200">
                  {data?.faq?.shortdesc}
                </p>
              </div>

              <div className="section-detail">
                <FAQ detail={data?.faq} />
              </div>
            </div>
          </section>
        )}

        {data.contact && (
          <section
            className={`section relative section-${data?.contact?.mode}`}
          >
            <div className="container mx-auto">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title text-center">
                  {data?.contact?.title}
                </h2>
                <p className="section-content text-center max-w-200">
                  {data?.contact?.shortdesc}
                </p>
              </div>

              <div className="section-detail mt-15">
                <div className="grid grid-cols-12">
                  <div className="col-span-6">
                    <Form layout="vertical" form={form}>
                      <div className="grid grid-cols-12">
                        {data?.contact?.form?.map(
                          (
                            val: {
                              label: string;
                              placeholder: string;
                              formType: string;
                              inputType: string;
                              class: string;
                              icon: React.ReactNode;
                            },
                            index
                          ) => (
                            <div key={index} className={val?.class}>
                              <Form.Item label={val?.label}>
                                {val.formType === "input" ? (
                                  <Input
                                    className="formInput"
                                    type={val?.inputType}
                                    prefix={val?.icon}
                                    placeholder={val?.placeholder}
                                  />
                                ) : val.formType === "textarea" ? (
                                  <TextArea
                                    rows={5}
                                    placeholder={val?.placeholder}
                                  />
                                ) : (
                                  <Button className="comman-button">
                                    {val?.icon}
                                    {val?.placeholder}
                                  </Button>
                                )}
                              </Form.Item>
                            </div>
                          )
                        )}
                      </div>
                    </Form>
                  </div>
                  <div className="col-span-6">
                    <div className="image-detail">
                      <img
                        className="w-full h-full"
                        src={data?.contact?.image}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img src={SvgIcon} className="absolute top-0 right-0" />
          </section>
        )}
      </>
    )
  );
}

const FAQ = ({ detail }: any) => (
  <div className="faq-list mt-15">
    <div className="grid grid-cols-12">
      <div className="faq-image col-span-7">
        <img src={detail?.image} />
      </div>
      <div className="faq-content col-span-5 flex items-start justify-start">
        <Collapse
          accordion
          style={{ width: "100%", border: "unset", background: "transparent" }}
          expandIcon={({ isActive }) => (isActive ? <FaMinus /> : <FaPlus />)}
          expandIconPosition="end"
          items={detail?.list?.map(
            (
              val: {
                question: string;
                answer: { para: string; list: []; note: string };
              },
              index: number
            ) => ({
              label: (
                <h4 className="text-gray-950" style={{ fontSize: "1rem" }}>
                  {index + 1}) {val.question}
                </h4>
              ),
              key: `${index + 1}`,
              children: (
                <div>
                  <p className="mb-2">{val?.answer?.para}</p>
                  <ul style={{ listStyle: "initial", paddingLeft: 30 }}>
                    {val?.answer?.list?.map((val, index) => (
                      <li key={index}>{val}</li>
                    ))}
                  </ul>
                  <strong>{val?.answer?.note}</strong>
                </div>
              ),
            })
          )}
        />
      </div>
    </div>
  </div>
);

const WhyChooseSection = ({ detail, index }: any) => (
  <div className="grid grid-cols-3 gap-10 mb-15">
    {index % 2 === 0 ? (
      <div className="descption-image">
        <img
          className="rounded-2xl"
          style={{
            width: "100%",
            height: "100%",
            maxHeight: 250,
            objectFit: "cover",
          }}
          src={detail?.image}
        />
      </div>
    ) : null}

    <div className="section-detail-content col-span-2">
      <h5 className="text-white text-3xl mb-3">{detail?.title}</h5>
      <p className="mb-5 text-white font-extralight">{detail?.desc}</p>
    </div>

    {index % 2 !== 0 ? (
      <div className="descption-image">
        <img
          className="rounded-2xl"
          style={{
            width: "100%",
            height: "100%",
            maxHeight: 250,
            objectFit: "cover",
          }}
          src={detail?.image}
        />
      </div>
    ) : null}
  </div>
);

const TestimonialCard = ({ review, name, company }: any) => (
  <div className="testimonial-card">
    <div className="review">
      <BsQuote />
      <p>{review}</p>
    </div>
    <div className="writer-detail">
      <Avatar size={50} shape="circle" icon={<FaUser />} />
      <div className="contact-detail">
        <h5>{name}</h5>
        <p>{company}</p>
      </div>
    </div>
  </div>
);
