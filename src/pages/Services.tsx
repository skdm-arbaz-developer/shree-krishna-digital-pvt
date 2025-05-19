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
          </section>
        )}

        {data.package && (
          <section className={`section section-${data?.package?.mode}`}>
            <div className="container mx-auto">
              <div className="section-body flex flex-col items-center">
                <h2 className="section-title text-center">
                  {data?.package?.title}
                </h2>
                <p className="section-content text-center max-w-200">
                  {data?.package?.shortdesc}
                </p>
              </div>

              <div className="section-details mt-10">
                <div className="grid grid-cols-3 gap-10">
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
          </section>
        )}
      </>
    )
  );
}

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

const PackageCard = ({ detail }: any) => (
  <div
    className={`package-card  p-12 cursor-pointer ${
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
