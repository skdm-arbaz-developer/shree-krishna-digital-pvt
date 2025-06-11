import { useLocation } from "react-router-dom";
import services from "../components/support/ServicesArrayList";
import CommanBanner from "../components/support/CommanBanner";
import { FaCheck, FaIndianRupeeSign, FaMinus, FaPlus } from "react-icons/fa6";
import { Button, Collapse, Form, Input } from "antd";
import "../css/home/faq.css";
import TextArea from "antd/es/input/TextArea";
import FaqArrow from "../assets/images/icons/faq-arrow.svg";
import FaqStart from "../assets/images/icons/faq-star.svg";
import SvgIcon from "../assets/images/icons/home-about-right.svg";
import circle from "../assets/images/icons/service-home.svg";
import "../css/services.css";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Services() {
  const [form] = Form.useForm();
  const { pathname } = useLocation();
  const data = services.find((val) => val.slug === pathname);
  const [isSubmitting, setIsSubmitting] = useState(false);

  interface ContactFormValues {
    name: string;
    email: string;
    message: string;
    phone: string;
    service: string;
  }

  useEffect(() => {
    form.setFieldsValue({ service: data?.title });
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
                  <tr><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;"><strong>Interested Services:</strong></td><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;">${
                    value.service || "N/A"
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
      form.setFieldsValue({ service: data?.title });
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

        {data.description &&
          (console.log("data.schemaData", data.schemaData),
          (
            <>
              <section
                className={`section relative section-${data?.description?.mode}`}
              >
                <img
                  src={SvgIcon}
                  alt={data?.description?.title}
                  className="absolute top-0 right-0"
                />

                <div className="container mx-auto px-0 sm:px-5 xl:px-0">
                  <div className="section-body flex flex-col items-center">
                    <h2 className="section-title max-w-[900px] md:text-center">
                      {data?.description?.title}
                    </h2>
                    <p className="section-content md:text-center">
                      {data?.description?.shortdesc}
                    </p>
                  </div>

                  <div className="section-details mt-10">
                    <div className="grid lg:grid-cols-2 gap-10">
                      {data?.description?.imagePostion !== "right" ? (
                        <div className="descption-image">
                          <img
                            alt={data?.description?.title}
                            style={{ width: "100%", height: "100%" }}
                            src={data?.description?.image}
                            className="rounded-2xl"
                          />
                        </div>
                      ) : (
                        <div className="block lg:hidden descption-image">
                          <img
                            alt={data?.description?.title}
                            style={{ width: "100%", height: "100%" }}
                            src={data?.description?.image}
                            className="rounded-2xl"
                          />
                        </div>
                      )}

                      <div className="section-detail-content">
                        {data?.description?.desc.map((val, index) => (
                          <p className="mb-5" key={index}>
                            {val}
                          </p>
                        ))}

                        {data?.description?.subtitle && (
                          <h5 style={{ fontSize: "1.4rem" }}>
                            {data?.description?.subtitle}
                          </h5>
                        )}

                        {data?.description?.subdesc.map((val, index) => (
                          <p className="my-3" key={index}>
                            {val}
                          </p>
                        ))}

                        {data?.description?.pointStyle !== "card" &&
                          data?.description?.points?.map((val, index) => (
                            <div
                              className="service-card flex items-center my-5"
                              key={index}
                            >
                              {val?.icon && (
                                <div
                                  className="icon"
                                  style={{
                                    borderWidth: 2,
                                    width: 50,
                                    height: 50,
                                  }}
                                >
                                  {val?.icon}
                                </div>
                              )}
                              <div className="card-content">
                                <span style={{ fontSize: ".8rem" }}>
                                  {val?.subtitle}
                                </span>
                                <h5 className="text-gray-950 text-xl">
                                  {val?.title}
                                </h5>
                                <p className="text-gray-500">{val?.desc}</p>
                              </div>
                            </div>
                          ))}
                      </div>

                      {data?.description?.imagePostion === "right" && (
                        <div className="hidden lg:block descption-image">
                          <img
                            alt={data?.description?.title}
                            style={{
                              width: "100%",
                              height: "100%",
                              maxWidth: 500,
                            }}
                            src={data?.description?.image}
                            className="rounded-2xl"
                          />
                        </div>
                      )}
                    </div>
                    <div className="card-list mt-10">
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {data?.description?.points?.map((val, index) => (
                          <div className="card shadow p-5" key={index}>
                            <div className="icon">{val?.icon}</div>
                            <h5
                              style={{ fontSize: "1.2rem", margin: "10px 0" }}
                            >
                              {val?.title}
                            </h5>
                            <p style={{ fontSize: ".85rem" }}>{val?.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                  __html: JSON.stringify(data.schemaData),
                }}
              />
            </>
          ))}

        {data.descriptionSecond && (
          <section
            className={`section relative section-${data?.descriptionSecond?.mode}`}
          >
            <img
              src={SvgIcon}
              alt={data?.descriptionSecond?.title}
              className="absolute top-0 right-0"
            />

            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title max-w-[900px] md:text-center">
                  {data?.descriptionSecond?.title}
                </h2>
                <p className="section-content md:text-center">
                  {data?.descriptionSecond?.shortdesc}
                </p>
              </div>

              <div className="section-details mt-10">
                <div className="grid lg:grid-cols-2 gap-10">
                  {data?.descriptionSecond?.imagePostion !== "right" ? (
                    <div className="descption-image">
                      <img
                        alt={data?.descriptionSecond?.title}
                        style={{ width: "100%", height: "100%" }}
                        src={data?.descriptionSecond?.image}
                        className="rounded-2xl"
                      />
                    </div>
                  ) : (
                    <div className="block lg:hidden descption-image">
                      <img
                        alt={data?.descriptionSecond?.title}
                        style={{ width: "100%", height: "100%" }}
                        src={data?.descriptionSecond?.image}
                        className="rounded-2xl"
                      />
                    </div>
                  )}

                  <div className="section-detail-content">
                    {data?.descriptionSecond?.desc.map((val, index) => (
                      <p className="mb-5" key={index}>
                        {val}
                      </p>
                    ))}

                    {data?.descriptionSecond?.subtitle && (
                      <h5 style={{ fontSize: "1.4rem" }}>
                        {data?.descriptionSecond?.subtitle}
                      </h5>
                    )}

                    {data?.descriptionSecond?.subdesc.map((val, index) => (
                      <p className="my-3" key={index}>
                        {val}
                      </p>
                    ))}

                    {data?.descriptionSecond?.points?.map((val, index) => (
                      <div
                        className="service-card flex items-center my-5"
                        key={index}
                      >
                        <div
                          className="icon"
                          style={{
                            borderWidth: 2,
                            width: 50,
                            height: 50,
                            minWidth: 50,
                            minHeight: 50,
                          }}
                        >
                          {val?.icon}
                        </div>
                        <div className="card-content">
                          <span style={{ fontSize: ".8rem" }}>
                            {val?.subtitle}
                          </span>
                          <h5 className="text-gray-950 text-xl">
                            {val?.title}
                          </h5>
                          <p className="text-gray-500">{val?.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {data?.descriptionSecond?.imagePostion === "right" && (
                    <div className="hidden lg:block descption-image">
                      <img
                        alt={data?.descriptionSecond?.title}
                        style={{ width: "100%", height: "100%", maxWidth: 500 }}
                        src={data?.descriptionSecond?.image}
                        className="rounded-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {data?.workimages && (
          <section className={`section section-${data?.workimages?.mode}`}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title md:text-center max-w-[900px]">
                  {data?.workimages?.title}
                </h2>
                <p className="section-content max-w-200 text-center">
                  {data?.workimages?.shortdesc}
                </p>
              </div>

              <div className="section-details mt-10">
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-10">
                  {data?.workimages?.images?.map((val, index) => (
                    <div className="work-image-card" key={index}>
                      <h5 className="mb-5 max-w-[500px]">{val?.title}</h5>
                      <img
                        src={val?.image}
                        alt={`Work Image ${index + 1}`}
                        className="rounded-2xl"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {data?.services && (
          <section className={`section section-${data?.services?.mode}`}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title text">{data?.services?.title}</h2>
                <p className="section-content md:text-center max-w-200">
                  {data?.services?.shortdesc}
                </p>
              </div>

              <div className="section-content">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                  {data?.services?.list?.map((val, index) => (
                    <div className="service-card py-5 lg:p-5" key={index}>
                      <div className="icon" style={{ borderWidth: 2 }}>
                        <FaCheck
                          className="text-4xl"
                          style={{ color: "var(--primary-color)" }}
                        />
                      </div>
                      <div className="card-content">
                        <h5
                          className={`${
                            data?.services?.mode === "dark"
                              ? "text-white"
                              : "text-gray-950"
                          }  text-xl mt-3`}
                        >
                          {val?.title}
                        </h5>
                        <p className="text-gray-500">{val?.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {data.package && (
          <section className={`section section-${data?.package?.mode}`}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col lg:items-center">
                <h2 className="section-title">{data?.package?.title}</h2>
                <p className="section-content max-w-200 lg:text-center">
                  {data?.package?.shortdesc}
                </p>
              </div>

              <div className="section-details mt-10">
                <div className="lg:grid lg:grid-cols-3 gap-10">
                  {data?.package?.packagelist?.map((val, index) => (
                    <PackageCard key={index} detail={val} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {data?.platform && (
          <section className={`section section-${data?.platform?.mode}`}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col lg:items-center">
                <h2 className="section-title lg:text-center">
                  {data?.platform?.title}
                </h2>
                <p className="section-content lg:text-center max-w-200">
                  {data?.platform?.shortdesc}
                </p>
              </div>
              <div className="section-detail mt-20">
                <div className="grid md:grid-cols-3 gap-10 items-center justify-center">
                  <div className="social-list">
                    {data?.platform?.list?.slice(0, 3).map((val) => (
                      <div className="platform-card mb-10 flex flex-col items-center">
                        <img
                          src={val?.icon}
                          alt={val?.name}
                          style={{ maxWidth: 50 }}
                        />
                        <h5 className="text-gray-950 text-xl mt-3 text-center">
                          {val?.name}
                        </h5>
                        <p className="text-gray-500 text-center">{val?.desc}</p>
                      </div>
                    ))}
                  </div>
                  <img src={data?.platform?.image} alt="" />
                  <div className="social-list">
                    {data?.platform?.list?.slice(3, 6).map((val) => (
                      <div className="platform-card mb-10 flex flex-col items-center">
                        <img
                          src={val?.icon}
                          alt={val?.name}
                          style={{ maxWidth: 50 }}
                        />
                        <h5 className="text-gray-950 text-xl mt-3 text-center">
                          {val?.name}
                        </h5>
                        <p className="text-gray-500 text-center">{val?.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {data.benefitsSecond && (
          <section
            className={`section relative section-${data?.benefitsSecond?.mode}`}
          >
            <img
              src={SvgIcon}
              alt={data?.benefitsSecond?.title}
              className="absolute top-0 right-0"
            />

            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col lg:items-center">
                <h2 className="section-title lg:text-center">
                  {data?.benefitsSecond?.title}
                </h2>
                <p className="section-content lg:text-center">
                  {data?.benefitsSecond?.shortdesc}
                </p>
              </div>

              <div className="section-details mt-10">
                <div className="lg:grid lg:grid-cols-3 gap-10">
                  {data?.benefitsSecond?.imagePostion !== "right" && (
                    <div className="descption-image">
                      <img
                        alt={data?.benefitsSecond?.title}
                        style={{ width: "100%", height: "100%" }}
                        src={data?.benefitsSecond?.image}
                        className="rounded-2xl"
                      />
                    </div>
                  )}

                  <div
                    className={`section-detail-content col-span-2 ${
                      data?.benefitsSecond?.mode === "dark"
                        ? "text-white"
                        : "text-gray-950"
                    }`}
                  >
                    {data?.benefitsSecond?.desc.map((val, index) => (
                      <p className="mb-5" key={index}>
                        {val}
                      </p>
                    ))}
                    <ul>
                      {data?.benefitsSecond?.points.map((val, index) => (
                        <li className="my-3" key={index}>
                          {val}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {data?.benefitsSecond?.imagePostion === "right" && (
                    <div className="descption-image">
                      <img
                        alt={data?.benefitsSecond?.title}
                        style={{ width: "100%", height: "100%" }}
                        src={data?.benefitsSecond?.image}
                        className="rounded-2xl"
                      />
                    </div>
                  )}
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
            <img
              src={circle}
              alt="circle"
              className="absolute bottom-10 right-20"
            />

            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title">{data?.whychoose?.title}</h2>
                <p className="section-content max-w-200">
                  {data?.whychoose?.shortdesc}
                </p>
              </div>

              <div className="section-detail mt-20">
                {data?.whychoose?.whychoosepoints?.map((val, index) => (
                  <WhyChooseSection detail={val} index={index} key={index} />
                ))}
              </div>
            </div>
          </section>
        )}

        {data.enhance && (
          <section className={`section section-${data?.enhance?.mode}`}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title text-center">
                  {data?.enhance?.title}
                </h2>
                <p className="section-content text-center max-w-200">
                  {data?.enhance?.shortdesc}
                </p>

                <p className="section-content text-center max-w-200 mt-10">
                  {data?.enhance?.desc}
                </p>

                {data?.enhance?.image && <img src={data?.enhance?.image} />}
              </div>
            </div>
          </section>
        )}

        {/* {data?.ourworks && (
          <section className={`section section-${data?.ourworks?.mode}`}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title text-center">
                  {data?.ourworks?.title}
                </h2>
                <p className="section-content text-center max-w-200">
                  {data?.ourworks?.shortdesc}
                </p>
              </div>
              <Swiper className="mySwiper mt-20">
                {data?.ourworks?.worklist?.map((val, index) => (
                  <SwiperSlide>
                    <OurWork data={val} key={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        )} */}

        {data.benefits && (
          <section
            className={`section relative section-${data?.benefits?.mode}`}
          >
            <img src={FaqArrow} className="absolute -top-10 left-0" />
            <img src={FaqStart} className="absolute top-0 right-0" />
            <img
              src={circle}
              alt="circle"
              className="absolute bottom-10 right-20"
            />

            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title">{data?.benefits?.title}</h2>
                <p className="section-content max-w-200">
                  {data?.benefits?.shortdesc}
                </p>
              </div>

              <div className="section-detail mt-20">
                {data?.benefits?.whychoosepoints?.map((val, index) => (
                  <BenefitsSection detail={val} index={index} key={index} />
                ))}
              </div>
            </div>
          </section>
        )}

        {data.faq && (
          <section className={`section section-${data?.faq?.mode}`}>
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title text-center">
                  {data?.faq?.title}
                </h2>
                <p className="section-content sm:text-center max-w-200">
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
            <img src={SvgIcon} className="absolute top-0 right-0" />
            <div className="container mx-auto px-0 sm:px-5 xl:px-0">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title text-center">
                  {data?.contact?.title}
                </h2>
                <p className="section-content text-center max-w-200">
                  Have any query about our services or solutions? Our expert
                  team is here to guide and support you. Let’s discuss now!
                </p>
              </div>

              <div className="section-detail mt-15">
                <div className="lg:grid lg:grid-cols-12">
                  <div className="lg:col-span-6 block lg:hidden">
                    <div className="image-detail">
                      <img
                        className="w-full h-full"
                        src={data?.contact?.image}
                      />
                    </div>
                  </div>
                  <div className="lg:col-span-6">
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
                                  disabled={val?.label === "Service"}
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
                  <div className="lg:col-span-6 hidden lg:block">
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

const WhyChooseSection = ({ detail, index }: any) => (
  <div className="sm:grid sm:grid-cols-3 gap-10 mb-15">
    {index % 2 === 0 ? (
      <div className="descption-image">
        <img
          className="rounded-2xl sm:max-h-[250px]"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={detail?.image}
        />
      </div>
    ) : (
      <div className="descption-image block sm:hidden">
        <img
          className="rounded-2xl sm:max-h-[250px]"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={detail?.image}
        />
      </div>
    )}

    <div className="section-detail-content col-span-2 mt-5 sm:mt-0">
      <h5 className="text-white text-2xl md:text-3xl mb-3">{detail?.title}</h5>
      <p className="mb-5 text-gray-300 font-extralight">{detail?.desc}</p>
    </div>

    {index % 2 !== 0 ? (
      <div className="descption-image hidden sm:block">
        <img
          className="rounded-2xl sm:max-h-[250px]"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={detail?.image}
        />
      </div>
    ) : null}
  </div>
);

const BenefitsSection = ({ detail, index }: any) => (
  <div className="sm:grid sm:grid-cols-3 gap-10 mb-15">
    {index % 2 === 0 ? (
      <div className="descption-image">
        <img
          className="rounded-2xl sm:max-h-[250px]"
          style={{
            width: "100%",
            height: "100%",
            maxHeight: 250,
            objectFit: "cover",
          }}
          src={detail?.image}
        />
      </div>
    ) : (
      <div className="descption-image block sm:hidden">
        <img
          className="rounded-2xl sm:max-h-[250px]"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
          src={detail?.image}
        />
      </div>
    )}

    <div className="section-detail-content col-span-2 mt-5 sm:mt-0">
      <h5 className="text-2xl md:text-3xl mb-3">{detail?.title}</h5>
      <p className="mb-5 text-gray-500 font-extralight">{detail?.desc}</p>
    </div>

    {index % 2 !== 0 ? (
      <div className="descption-image hidden sm:block">
        <img
          className="rounded-2xl sm:max-h-[250px]"
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

const PackageCard = ({ detail }: any) => (
  <div
    className={`package-card  p-12 cursor-pointer mt-5 lg:mt-0 ${
      detail.status === "active" ? "bg-violet-950" : "bg-white"
    }`}
  >
    <div className="package-top mb-5">
      <strong
        className={`${
          detail.status === "active" ? "text-white" : "text-gray-950"
        }`}
      >
        {detail?.title}
      </strong>
      <div className="pricing flex items-end my-5">
        <h3 className="flex items-center mr-2">
          <FaIndianRupeeSign
            className={`text-3xl ${
              detail.status === "active" ? "text-white" : "text-gray-950"
            }`}
          />
          <span
            className={`text-5xl ${
              detail.status === "active" ? "text-white" : "text-gray-950"
            }`}
          >
            {detail?.price}
          </span>
        </h3>
        <span
          className={`${
            detail.status === "active" ? "text-white" : "text-gray-950"
          }`}
        >
          / {detail?.period}
        </span>
      </div>
      <p
        className={`${
          detail.status === "active" ? "text-white" : "text-gray-500"
        }`}
        style={{ fontSize: ".9rem" }}
      >
        {detail?.shortdesc}
      </p>
    </div>
    <div className="package-middle">
      <ul>
        {detail?.features?.map((val: string, index: number) => (
          <li className="flex items-center mb-2" key={index}>
            <span
              className={`mr-2 rounded-sm w-4 h-4 flex items-center justify-center p-1 ${
                detail.status === "active" ? "bg-white" : "bg-gray-300"
              }`}
            >
              <FaCheck className="text-green-700" />
            </span>
            <p
              className={` text-md ${
                detail.status === "active" ? "text-white" : "text-gray-900"
              }`}
            >
              {val}
            </p>
          </li>
        ))}
      </ul>
    </div>
    <div className="package-bottom mt-10">
      <button
        className={`w-full border-1 p-3 cursor-pointer ${
          detail.status === "active"
            ? "border-white text-white hover:bg-white hover:text-violet-950 transition-colors"
            : "text-violet-950 border-violet-950 hover:bg-violet-950 hover:text-white transition-colors"
        }`}
      >
        Choose Plan
      </button>
    </div>
  </div>
);

const FAQ = ({ detail }: any) => (
  <div className="faq-list mt-15">
    <div className="lg:grid lg:grid-cols-12">
      <div className="faq-image lg:col-span-7">
        <img src={detail?.image} />
      </div>
      <div className="faq-content lg:col-span-5 flex items-start justify-start mt-10">
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
