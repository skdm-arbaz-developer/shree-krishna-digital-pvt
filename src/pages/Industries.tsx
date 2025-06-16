import { NavLink, useLocation } from "react-router-dom";
import CommanBanner from "../components/support/CommanBanner";
import industries from "../components/support/IndustryArrayList";
import { Avatar, Button, Collapse, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FaAngleRight, FaMinus, FaPlus, FaUser } from "react-icons/fa6";
import "../css/home/logoscroll.css";
import { BsQuote } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "../css/home/testimonial.css";
import FaqArrow from "../assets/images/icons/faq-arrow.svg";
import FaqStart from "../assets/images/icons/faq-star.svg";
import SvgIcon from "../assets/images/icons/home-about-right.svg";
import "../css/casestudy.css";
import "../css/home/industry.css";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Industries() {
  const { pathname } = useLocation();
  const data = industries.find((val) => val?.slug === pathname);
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  interface ContactFormValues {
    name: string;
    email: string;
    message: string;
    phone: string;
    industry: string;
  }

  useEffect(() => {
    form.setFieldsValue({ industry: data?.title });
  }, [pathname]);

  const handleSubmit = async (value: ContactFormValues) => {
    setIsSubmitting(true); // Disable button and show loading state

    const mailBody = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Enquiry Lead - Shree Krishna Digital PVT</title>
        </head>
        <body>
            <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#eee;padding:20px;color:#fff;box-shadow:0,0,0,2px #808080">
                <h2 style="color:#000">SKD - New Website Enquiry</h2>
                <p style="color:#000">Hello Team,</p>
                <p style="color:#000">A new enquiry has been generated from the website with the following details:</p>
                <table cellpadding="5" style="margin:0;width:100%;color:#000;border-collapse:collapse;">
                    <tr><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;"><strong>Full Name:</strong></td><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;">${
                      value.name || "N/A"
                    }</td></tr>
                    <tr><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;"><strong>Email:</strong></td><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;">${
                      value.email || "N/A"
                    }</td></tr>
                    <tr><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;"><strong>Phone No:</strong></td><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;">${
                      value.phone || "N/A"
                    }</td></tr>
                    <tr><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;"><strong>Interested Industry:</strong></td><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;">${
                      value.industry || "N/A"
                    }</td></tr>
                    <tr><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;"><strong>Message:</strong></td><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;">${
                      value.message || "N/A"
                    }</td></tr>
                </table>
                <p style="text-align:left;color:#000;">Best regards,<br>Shree Krishna Digital Pvt. Ltd.</p>
            </div>
        </body>
        </html>
      `;

    try {
      const response = await axios.post(
        "https://skdm.in/server/v1/send_lead_mail.php",
        {
          toEmail: "shreekrishnadigitalsolution@gmail.com",
          fromEmail: "skdmlead@gmail.com",
          bccMail: "skdmlead@gmail.com",
          mailSubject: "New Customer Lead from Shree Krishna Digital Website",
          mailBody: mailBody,
          accountName: "skdm",
          accountLeadSource: "https://skdm.in.in/",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      // Assuming your PHP script returns a simple string like "success" or similar upon success.
      // Adjust this condition based on your actual PHP backend response.
      if (response?.data) {
        alert(
          "Your form has been submitted successfully! Our team will contact you soon."
        );
      }
    } catch (error) {
      console.error("Axios Error:", error);
      alert(
        "There was a network error submitting your form. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
      form.resetFields();
      form.setFieldsValue({ industry: data?.title });
    }
  };

  return (
    data && (
      <>
        <Helmet>
          <title>{data?.metaTitle}</title>
          <meta name="description" content={data?.metaDes} />
          <meta
            name="keywords"
            content="Best Digital Marketing Agency In Mumbai,Digital Marketing Company In Mumbai,Digital Marketing Experts In Mumbai,Top Digital Marketing Services In Mumbai,Life At Digital Marketing Agency In Mumbai,Digital Marketing In Mumbai,Top Digital Marketing Company In Mumbai,Internet Marketing Service In Mumbai,Digital Marketing In Mumbai,Best SEO Company In Mumbai,Social Media Marketing Agency In Mumbai,Google My Business listing service,PPC Agency Mumbai,PR Agency In Mumbai,Web Development Company In Mumbai,App Development Company In Mumbai,CRM Development Company In Mumbai,Digital Marketing For Healthcare In Mumbai,Digital Marketing For Hospitility & Caterers In Mumbai,Digital Marketing For Real Estate In Mumbai,Digital Marketing For Resort & Villas In Mumbai,Digital Marketing For Interior Designer In Mumbai,Digital Marketing For Spa & Salon In Mumbai,Digital Marketing For Education In Mumbai,Digital Marketing For Real Life Style In Mumbai,Best Digital Marketing Agency In Mumbai ,Online Marketing Near Mumbai,Search Engine Optimization in India,Social Media Marketing in India,Google My Business in India,Pay Per Click Marketing In India,Web Developement In India,Application Development In India,Search Engine Optimization in Australia,Social Media Marketing in Australia,GMB Optimization Service in Australia,Pay Per Click Marketing in Australia,Web Developement in Australia,Application Development in Australia,Search Engine Optimization in Canada,Social Media Marketing in Canada,GMB Optimization Service in Canada,Pay Per Click Marketing in Canada,Web Developement in Canada,Application Development in Canada,Search Engine Optimization in Malaysia,Social Media Marketing in Malaysia,GMB Optimization Service in Malaysia,Pay Per Click Marketing in Malaysia,Web Developement in Malaysia,Application Development in Malaysia,Search Engine Optimization in Nepal ,Social Media Marketing in Nepal ,GMB Optimization Service in Nepal,Pay Per Click Marketing in Nepal,Web Developement in Nepal,Application Development in Nepal,Search Engine Optimization in Dubai,Social Media Marketing in Dubai,GMB Optimization Service in Dubai ,Pay Per Click Marketing in Dubai,Web Developement in Dubai,Application Development in Dubai,Search Engine Optimization in USA,Social Media Marketing in USA,GMB Optimization Service in USA,Pay Per Click Marketing in USA,Web Developement in USA,Application Development in USA,Search Engine Optimization in United Kingdom,Social Media Marketing in United Kingdom,GMB Optimization Service in United Kingdom ,Pay Per Click Marketing in United Kingdom,Web Developement in United Kingdom,Application Development in United Kingdom,Search Engine Optimization in Maldives,Social Media Marketing in Maldives,GMB Optimization Service in Maldives,Pay Per Click Marketing in Maldives,Web Developement in Maldives,Application Development in Maldives"
          />
          <link rel="canonical" href={data?.canonical} />
          <meta httpEquiv="cache-control" content="no-cache" />
          <meta httpEquiv="expires" content="0" />
          <meta httpEquiv="pragma" content="no-cache" />
          <meta property="og:title" content={data?.title} />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://skdm.in/" />
          <meta property="og:description" content={data?.metaDes} />
          <meta
            property="og:image"
            content="https://skdm.in/assets/logo-C6brZTHT.png"
          />
        </Helmet>
        <CommanBanner
          image={data?.banner}
          title={data?.title}
          keyword={data?.keyword}
          desc={data?.shortdesc}
        />
        {data.description && (
          <section className={`section section-${data?.description?.mode}`}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title md:text-center">
                  {data?.description?.title}
                </h2>
                <p className="section-content md:text-center ">
                  {data?.description?.shortdesc}
                </p>
              </div>

              <div className="section-details mt-10">
                <div className="grid lg:grid-cols-2 gap-10">
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
            <img src={SvgIcon} alt="circle Arraow" className="absolute top-0 right-0" />
          </section>
        )}

        {/* {data?.clients && (
          <section className="section section-gray">
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex justify-center items-center flex-col">
                <h2 className="section-title md:text-center">
                  {data?.clients?.title}
                </h2>
                <p
                  className="section-content md:text-center"
                  style={{ maxWidth: 900 }}
                >
                  {data?.clients?.shortdesc}
                </p>
              </div>

              <Swiper
                slidesPerView={7}
                spaceBetween={30}
                freeMode={true}
                autoplay={true}
                loop={true}
                modules={[FreeMode, Autoplay]}
                className="mt-30"
              >
                {data?.clients?.list?.map((val, index) => (
                  <SwiperSlide className="h-full">
                    <div className="logo-list">
                      <img key={index} src={val} />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        )} */}
        {data.whychoose && (
          <section
            className={`relative section section-${data?.whychoose?.mode}`}
            style={{ paddingBottom: "100px" }}
          >
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title md:text-center">
                  {data?.whychoose?.title}
                </h2>
                <p className="section-content md:text-center ">
                  {data?.whychoose?.shortdesc}
                </p>
              </div>
              <div className="section-detail mt-20">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {data?.whychoose?.whychoosepoints?.map((val, index) => (
                    <WhyChooseCard detail={val} index={index} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        {/* {data?.casestudy && (
          <section className={"section section-" + data?.casestudy?.mode}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-6 lg:col-span-4">
                  <div className="section-body">
                    <h2 className="section-title">Our Success Stories</h2>
                    <p className="section-content">
                      Explore how we’ve helped businesses achieve remarkable
                      results.
                    </p>
                    <NavLink to="/case-study">
                      {" "}
                      <Button
                        className="comman-button mt-5"
                        style={{ color: "#fff", borderColor: "#fff" }}
                      >
                        View All Stories <HiOutlineArrowLongRight />
                      </Button>
                    </NavLink>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 lg:col-span-8">
                  <Swiper
                    navigation={true}
                    spaceBetween={20}
                    breakpoints={{
                      640: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      990: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                      },
                      1024: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                    }}
                    modules={[Navigation]}
                    className="industry-swiper mt-10 md:mt-0"
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
        )} */}

        {data?.ourworks && (
          <section className={`section section-${data?.ourworks?.mode}`}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title md:text-center">
                  {data?.ourworks?.title}
                </h2>
                <p className="section-content md:text-center max-w-200">
                  {data?.ourworks?.shortdesc}
                </p>
              </div>
              <Swiper
                navigation={true}
                spaceBetween={20}
                modules={[Navigation]}
                className="industry-swiper mt-20"
              >
                {data?.ourworks?.worklist?.map((val, index) => (
                  <SwiperSlide>
                    <OurWork data={val} key={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        )}

        {data.testimonial && (
          <section className="section section-dark mb-110 relative">
            <img src={FaqArrow} alt="Testimonial Arraow" className="absolute -top-10 left-0" />
            <img src={FaqStart} alt="Arrow Testimonial" className="absolute top-0 right-0" />

            <div className="container mx-auto px-0 sm:px-5 xl:px-0 relative">
              <div className="section-body flex flex-col md:items-center pb-50">
                <h2 className="section-title md:text-center">
                  {data?.testimonial?.title}
                </h2>
                <p className="section-content md:text-center ">
                  {data?.testimonial?.shortdesc}
                </p>
              </div>

              <div className="testimonial-list mt-40">
                <Swiper
                  spaceBetween={20}
                  breakpoints={{
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 1,
                      spaceBetween: 25,
                    },
                    1024: {
                      slidesPerView: 2,
                      spaceBetween: 25,
                    },
                    1224: {
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

        {data.faq && (
          <section className={`section section-${data?.faq?.mode}`}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col md:items-center">
                <h2 className="section-title md:text-center">
                  {data?.faq?.title}
                </h2>
                <p className="section-content md:text-center max-w-200">
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
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body">
                <h2 className="section-title md:text-center">
                  {data?.contact?.title}
                </h2>
                <p className="section-content md:text-center max-w-200">
                  {data?.contact?.shortdesc}
                </p>
              </div>

              <div className="section-detail mt-15">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 lg:col-span-6 block lg:hidden">
                    <div className="image-detail">
                      <img
                        className="w-full h-full"
                        src={data?.contact?.image}
                      />
                    </div>
                  </div>
                  <div className="col-span-12 lg:col-span-6">
                    <Form layout="vertical" form={form} onFinish={handleSubmit}>
                      <div className="grid grid-cols-12">
                        {data?.contact?.form?.map((val: any, index) => (
                          <div key={index} className={val?.class}>
                            <Form.Item
                              name={val?.name !== "" && val?.name}
                              rules={[{ required: true }]}
                              label={val?.label}
                            >
                              {val.formType === "input" ? (
                                <Input
                                  className="formInput"
                                  type={val?.inputType}
                                  prefix={val?.icon}
                                  placeholder={val?.placeholder}
                                  disabled={val?.label === "Industry"}
                                />
                              ) : val.formType === "textarea" ? (
                                <TextArea
                                  rows={5}
                                  placeholder={val?.placeholder}
                                />
                              ) : (
                                <Button
                                  loading={isSubmitting}
                                  htmlType="submit"
                                  className="comman-button"
                                >
                                  {val?.placeholder} {val?.icon}
                                </Button>
                              )}
                            </Form.Item>
                          </div>
                        ))}
                      </div>
                    </Form>
                  </div>

                  <div className="col-span-12 lg:col-span-6 hidden lg:block">
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
            <img src={SvgIcon} alt="Shree Krishna Digital" className="absolute top-0 right-0" />
          </section>
        )}

        {data?.schemaData && (
          <>
            <Helmet>
              <script type="application/ld+json">
                {JSON.stringify(data?.schemaData)}
              </script>
            </Helmet>
          </>
        )}
      </>
    )
  );
}

const FAQ = ({ detail }: any) => (
  <div className="faq-list mt-15">
    <div className="grid grid-cols-12">
      <div className="faq-image col-span-12 lg:col-span-7">
        <img src={detail?.image} alt={detail?.list[0]?.question} />
      </div>
      <div className="faq-content mt-5 lg:mt-0 col-span-12 lg:col-span-5 flex items-start justify-start">
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

const WhyChooseCard = ({ detail, index }: any) => (
  <div className="whychoosecard flex flex-col items-start" key={index}>
    <div className="image-list w-full h-[250px] object-cover rounded-xl overflow-hidden">
      <img
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
        src={detail?.image}
      />
    </div>
    <h5 className="py-2" style={{ fontSize: "1.4rem" }}>
      {detail?.title}
    </h5>
    <p>{detail?.desc}</p>
  </div>
);

const TestimonialCard = ({ review, name, company }: any) => (
  <div className="testimonial-card h-100">
    <div className="review">
      <BsQuote />
      <p>{review}</p>
    </div>
    <div className="writer-detail pt-10">
      <Avatar size={50} shape="circle" icon={<FaUser />} />
      <div className="contact-details pl-5">
        <h5>{name}</h5>
        <p>{company}</p>
      </div>
    </div>
  </div>
);

const OurWork = ({ data }: any) => (
  <div className="work-section">
    <div className="grid grid-cols-7 lg:gap-15">
      <div className="col-span-12 lg:col-span-4">
        <div className="videoFrame mb-5 lg:mb-0 flex items-center">
          <img style={{ maxWidth: 400, margin: "auto" }} alt={data?.title} src={data?.image} />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3">
        <strong>Service</strong>
        <h3 className="mb-5">{data?.title}</h3>
        <p>{data?.desc?.para}</p>

        <NavLink to={data?.link} className="mt-10">
          <Button className="comman-button mt-10">
            Know More&nbsp;
            <FaAngleRight />
          </Button>
        </NavLink>
      </div>
    </div>
  </div>
);
