import {
  Button,
  Checkbox,
  ConfigProvider,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
} from "antd";
import { useState } from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import "../../css/servey.css";
import logo from "../../assets/images/logo.png";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { BsSendArrowUpFill } from "react-icons/bs";
import { BiBriefcase, BiEnvelope, BiPhone, BiUserCircle } from "react-icons/bi";
import banner from "../../assets/images/banners/enquiry-banner.jpeg";

interface SelectedData {
  service: string[] | null;
  business: string | null;
  budget: string | null;
  planing: string | null;
}

export default function EnquiryForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [form] = Form.useForm();
  const [selectedData, setSelectedData] = useState<SelectedData>({
    service: [],
    business: null,
    budget: null,
    planing: null,
  });

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const steps = [
    {
      step: 1,
      question: "What services are you interested in?",
      type: "checkbox",
      options: [
        "Social Media Marketing",
        "Search Engine Optimization (SEO)",
        "Google My Business (GMB)",
        "Website Development",
        "Mobile Application Development",
        "CRM Solutions",
        "Not Sure / Need Guidance",
      ],
    },
    {
      step: 2,
      question: "What is your business type?",
      type: "radio",
      options: [
        "Local Business",
        "E-commerce",
        "Startup",
        "Service-based Company",
        "Other",
      ],
    },
    {
      step: 3,
      question: "What is your monthly marketing budget?",
      type: "radio",
      options: [
        "Less than ₹10,000",
        "₹10,000 – ₹25,000",
        "₹25,000 – ₹50,000",
        "₹50,000+",
        "I don't have a fixed budget yet",
      ],
    },
    {
      step: 4,
      question: "How soon are you planning to start?",
      type: "radio",
      options: [
        "Immediately",
        "Within 1 month",
        "Within 3 months",
        "Just exploring options",
      ],
    },
    {
      step: 5,
      question: "How can we contact you?",
      type: "form",
      fields: [
        {
          label: "Full Name",
          name: "fullName",
          type: "text",
          class: "col-span-2",
          icon: <BiUserCircle />,
          required: true,
        },
        {
          label: "Phone Number",
          name: "phone",
          type: "tel",
          required: true,
          icon: <BiPhone />,
        },
        {
          label: "Email Address",
          name: "email",
          type: "email",
          required: true,
          icon: <BiEnvelope />,
        },
        {
          label: "Company Name",
          name: "company",
          type: "text",
          class: "col-span-2",
          required: false,
          icon: <BiBriefcase />,
        },
      ],
    },
    {
      step: 6,
      question: "Confirmation",
      type: "message",
      message:
        "✅ Thank you for your interest! Our team will contact you shortly with a customized digital growth plan.",
    },
  ];

  const handleSubmit = ({ value }: any) => {
    console.log(value);
  };

  const handleRadioChange = (value: string) => {
    setSelectedData((prev) => ({
      ...prev,
      business: active === 2 ? value : prev.business,
      budget: active === 3 ? value : prev.budget,
      planing: active === 4 ? value : prev.planing,
    }));
  };

  return (
    <>
      <Button onClick={showModal} className="comman-button enquiry-button">
        <span className="hidden xl:block">Get Quoate</span>
        <MdOutlineSupportAgent />
      </Button>
      <Modal
        width={900}
        centered
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
      >
        <div className="survay-form">
          <div className="survay-header">
            <img src={banner} alt="Survey Popup" />

            <div className="survey-content">
              <img src={logo} alt="Compnay Logo" />
              <h2>Get Your Free Digital Marketing Assessment</h2>
            </div>
          </div>

          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#e98c14",
                colorPrimaryBorder: "#e98c14",
                colorPrimaryHover: "#e98c14",
              },
            }}
          >
            {steps
              .filter((val) => val.step === active)
              .map((val, index) => (
                <div key={index} className="survey-question">
                  <h4>Q. {val?.question}</h4>
                  <Divider />
                  {val.type === "checkbox" ? (
                    <Checkbox.Group
                      value={selectedData?.service ?? []}
                      onChange={(value) =>
                        setSelectedData((prev) => ({ ...prev, service: value }))
                      }
                      style={{ width: "100%" }}
                    >
                      <div className="grid grid-cols-2 gap-5">
                        {val?.options?.map((val) => (
                          <Checkbox value={val}>{val}</Checkbox>
                        ))}
                      </div>
                    </Checkbox.Group>
                  ) : val?.type === "radio" ? (
                    <Radio.Group
                      onChange={(e) => handleRadioChange(e.target.value)}
                      value={
                        active === 2
                          ? selectedData.business
                          : active === 3
                          ? selectedData.budget
                          : selectedData.planing
                      }
                    >
                      <div className="grid grid-cols-2 gap-5">
                        {val?.options?.map((option, index) => (
                          <Radio key={index} value={option}>
                            {option}
                          </Radio>
                        ))}
                      </div>
                    </Radio.Group>
                  ) : (
                    <Form layout="vertical" form={form} onFinish={handleSubmit}>
                      <div className="grid grid-cols-2 gap-x-5">
                        {val?.fields?.map((valData, index) => (
                          <Form.Item
                            label={valData?.label}
                            name={valData?.name}
                            rules={[{ required: valData?.required }]}
                            key={index}
                            className={valData?.class}
                          >
                            <Input
                              type={valData?.type}
                              prefix={valData?.icon}
                              placeholder={valData?.label}
                            />
                          </Form.Item>
                        ))}
                      </div>
                    </Form>
                  )}
                </div>
              ))}
          </ConfigProvider>

          <div className="button-list">
            {active !== 1 ? (
              <Button
                icon={<FaArrowAltCircleLeft />}
                onClick={() => setActive((prev) => prev - 1)}
              >
                Previous
              </Button>
            ) : (
              <span></span>
            )}

            {active !== 5 ? (
              <Button
                disabled={
                  active === 1
                    ? selectedData.service?.length === 0
                    : active === 2
                    ? selectedData.business === null
                    : active === 3
                    ? selectedData.budget === null
                    : active === 4
                    ? selectedData.planing === null
                    : false
                }
                onClick={() => setActive((prev) => prev + 1)}
              >
                Next&nbsp;
                <FaArrowAltCircleRight />
              </Button>
            ) : (
              <Button onClick={() => form.submit()} className="success">
                Submit <BsSendArrowUpFill />
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}
