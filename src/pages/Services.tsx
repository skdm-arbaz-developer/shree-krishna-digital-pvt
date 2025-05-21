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
// import { Swiper, SwiperSlide } from "swiper/react";
import "../css/services.css";

export default function Services() {
  const [form] = Form.useForm();
  const { pathname } = useLocation();
  const data = services.find((val) => val.slug === pathname);

  return (
    data && (
      <>
        <CommanBanner
          image={data?.banner}
          title={data?.title}
          desc={data?.shortdesc}
        />

        {data.description && (
          <section
            className={`section relative section-${data?.description?.mode}`}
          >
            <img src={SvgIcon} className="absolute top-0 right-0" />

            <div className="container mx-auto">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title">{data?.description?.title}</h2>
                <p className="section-content">
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
          </section>
        )}

        {data.package && (
          <section className={`section section-${data?.package?.mode}`}>
            <div className="container mx-auto">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title">{data?.package?.title}</h2>
                <p className="section-content max-w-200">
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

            <div className="container mx-auto">
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
            <div className="container mx-auto">
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
              </div>
            </div>
          </section>
        )}
        {/* {data?.ourworks && (
          <section className={`section section-${data?.ourworks?.mode}`}>
            <div className="container mx-auto">
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

            <div className="container mx-auto">
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
            <div className="container mx-auto">
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
                                    {val?.placeholder} {val?.icon}
                                  </Button>
                                )}
                              </Form.Item>
                            </div>
                          )
                        )}
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

// const OurWork = ({ data }: any) => (
//   <div className="work-section">
//     <div className="grid grid-cols-7 gap-15">
//       <div className="col-span-4">
//         <div className="videoFrame">
//           <iframe
//             width={"100%"}
//             height={400}
//             src={data?.link}
//             title="YouTube video player"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             referrerPolicy="strict-origin-when-cross-origin"
//           />
//         </div>
//       </div>
//       <div className="col-span-3">
//         <strong>SEO Enhance</strong>
//         <h3>{data?.title}</h3>
//         <p>{data?.desc?.para}</p>
//         <Collapse
//           bordered={false}
//           expandIconPosition="right"
//           defaultActiveKey={["1"]}
//           style={{ background: "transparent", padding: 0 }}
//           items={[
//             {
//               key: "1",
//               label: <h5>Rank Keywords</h5>,
//               children: (
//                 <div className="flex flex-col">
//                   {data?.desc?.keywords?.map((val: string, index: number) => (
//                     <NavLink key={index} to="#">
//                       {index + 1})&nbsp;{val}
//                     </NavLink>
//                   ))}
//                 </div>
//               ),
//             },
//           ]}
//         />
//       </div>
//     </div>
//   </div>
// );
