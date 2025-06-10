import {
  Button,
  Checkbox,
  ConfigProvider,
  Divider,
  Form,
  Input,
  Modal,
  Radio,
  Typography,
} from "antd";
import { useState } from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import "../../css/servey.css";
import logo from "../../assets/images/logo.png";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { BsSendArrowUpFill } from "react-icons/bs";
import { BiBriefcase, BiEnvelope, BiPhone, BiUserCircle } from "react-icons/bi";
import banner from "../../assets/images/banners/enquiry-banner.jpeg";
import axios from "axios"; // Ensure axios is installed: npm install axios or yarn add axios

interface SelectedData {
  service: string[] | null;
  business: string | null;
  budget: string | null;
  planing: string | null;
}

export default function EnquiryForm({ text }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState(1);
  const [form] = Form.useForm();
  const [selectedData, setSelectedData] = useState<SelectedData>({
    service: [],
    business: null,
    budget: null,
    planing: null,
  });
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submit button loading

  const showModal = () => {
    setIsModalOpen(true);
    // Reset form and active step when opening the modal
    form.resetFields();
    setActive(1);
    setSelectedData({
      service: [],
      business: null,
      budget: null,
      planing: null,
    });
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
      step: 5, // This is now the final step for submission
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
  ];

  const handleSubmit = async (values: any) => {
    setIsSubmitting(true); // Disable button and show loading state

    // Combine all collected data for logging and sending
    const allFormData = {
      ...selectedData, // Includes service, business, budget, planing
      contactDetails: {
        fullName: values.fullName,
        phone: values.phone,
        email: values.email,
        company: values.company,
      },
    };
    console.log("All Form Data for Submission:", allFormData);

    const mailBody = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Enquiry Lead - Shree Krishna Digital PVT</title>
      </head>
      <body>
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background-color:#000;padding:20px;color:#fff;">
              <h2 style="color:#fff">1Five - New Website Enquiry</h2>
              <p style="color:#fff">Hello Team,</p>
              <p style="color:#fff">A new enquiry has been generated from the website with the following details:</p>
              <table cellpadding="5" style="margin:0;width:100%;color:#fff;border-collapse:collapse;">
                  <tr><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;"><strong>Full Name:</strong></td><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;">${allFormData.contactDetails.fullName || 'N/A'}</td></tr>
                  <tr><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;"><strong>Email:</strong></td><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;">${allFormData.contactDetails.email || 'N/A'}</td></tr>
                  <tr><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;"><strong>Phone No:</strong></td><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;">${allFormData.contactDetails.phone || 'N/A'}</td></tr>
                  <tr><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;"><strong>Company Name:</strong></td><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;">${allFormData.contactDetails.company || 'N/A'}</td></tr>
                  <tr><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;"><strong>Interested Services:</strong></td><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;">${allFormData.service?.join(', ') || 'N/A'}</td></tr>
                  <tr><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;"><strong>Business Type:</strong></td><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;">${allFormData.business || 'N/A'}</td></tr>
                  <tr><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;"><strong>Monthly Budget:</strong></td><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;">${allFormData.budget || 'N/A'}</td></tr>
                  <tr><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;"><strong>Planning to Start:</strong></td><td style="text-align:left;color:#fff;padding:8px;border:1px solid #333;">${allFormData.planing || 'N/A'}</td></tr>
              </table>
              <p style="text-align:left;color:#fff;">Best regards,<br>Your Website Team at Shree Krishna Digital PVT</p>
          </div>
      </body>
      </html>
    `;

    try {
      const response = await axios.post(
        "https://skdm.in/server/v1/send_lead_mail.php",
        {
          toEmail: "daddu.tamhankar01@gmail.com",
          fromEmail: "daddu.tamhankar01@gmail.com",
          bccMail: "skdmlead@gmail.com",
          mailSubject: "New Customer Lead from 1Five Website",
          mailBody: mailBody,
          accountName: "1five",
          accountLeadSource: "https://skdm.in.in/",
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      );

      console.log("Axios Response:", response.data);

      // Assuming your PHP script returns a simple string like "success" or similar upon success.
      // Adjust this condition based on your actual PHP backend response.
      if (response.data && typeof response.data === 'string' && response.data.includes("success")) {
        alert("Your form has been submitted successfully! Our team will contact you soon.");
        setIsModalOpen(false); // Close the modal on successful submission
      } else {
        alert("There was an issue submitting your form. Please try again.");
        console.error("Submission failed with data:", response.data);
      }
    } catch (error) {
      console.error("Axios Error:", error);
      alert("There was a network error submitting your form. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false); // Re-enable button
      form.resetFields(); // Reset contact form fields
      setActive(1); // Reset to the first survey question
      setSelectedData({ // Clear previously selected survey data
        service: [],
        business: null,
        budget: null,
        planing: null,
      });
    }
  };

  const handleRadioChange = (e: any) => {
    const value = e.target.value;
    setSelectedData((prev) => ({
      ...prev,
      business: active === 2 ? value : prev.business,
      budget: active === 3 ? value : prev.budget,
      planing: active === 4 ? value : prev.planing,
    }));
  };

  const currentStepData = steps.find((val) => val.step === active);
  const isLastStep = active === steps.length; // Check if it's the last step (which is now step 5)

  return (
    <>
      {text ? (
        <Button onClick={showModal} className="comman-button">
          <span>Get Quote</span>
          <MdOutlineSupportAgent />
        </Button>
      ) : (
        <Button onClick={showModal} className="comman-button enquiry-button">
          <span className="hidden xl:block">Get Quote</span>
          <MdOutlineSupportAgent />
        </Button>
      )}
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
              <img src={logo} alt="Company Logo" />
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
            {currentStepData && (
              <div className="survey-question">
                <h4>Q. {currentStepData.question}</h4>
                <Divider />
                {currentStepData.type === "checkbox" && (
                  <Checkbox.Group
                    value={selectedData?.service ?? []}
                    onChange={(value) =>
                      setSelectedData((prev) => ({ ...prev, service: value as string[] }))
                    }
                    style={{ width: "100%" }}
                  >
                    <div className="grid grid-cols-2 gap-5">
                      {currentStepData.options?.map((val, index) => (
                        <Checkbox key={index} value={val}>{val}</Checkbox>
                      ))}
                    </div>
                  </Checkbox.Group>
                )}
                {currentStepData.type === "radio" && (
                  <Radio.Group
                    onChange={handleRadioChange}
                    value={
                      active === 2
                        ? selectedData.business
                        : active === 3
                          ? selectedData.budget
                          : selectedData.planing
                    }
                  >
                    <div className="grid grid-cols-2 gap-5">
                      {currentStepData.options?.map((option, index) => (
                        <Radio key={index} value={option}>
                          {option}
                        </Radio>
                      ))}
                    </div>
                  </Radio.Group>
                )}
                {currentStepData.type === "form" && (
                  <Form layout="vertical" form={form} onFinish={handleSubmit}>
                    <div className="grid grid-cols-2 gap-x-5">
                      {currentStepData.fields?.map((valData, index) => (
                        <Form.Item
                          label={valData?.label}
                          name={valData?.name}
                          rules={[{ required: valData?.required, message: `${valData?.label} is required` }]}
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
            )}
          </ConfigProvider>

          <div className="button-list">
            {active !== 1 && ( // Show "Previous" button if not on the first step
              <Button
                icon={<FaArrowAltCircleLeft />}
                onClick={() => setActive((prev) => prev - 1)}
                disabled={isSubmitting} // Disable during submission
              >
                Previous
              </Button>
            )}
            {active === 1 && <span></span> /* Placeholder for alignment on first step */}

            {!isLastStep ? ( // Show "Next" button if not on the last step (form step)
              <Button
                disabled={
                  isSubmitting ||
                  (active === 1 && selectedData.service?.length === 0) ||
                  (active === 2 && selectedData.business === null) ||
                  (active === 3 && selectedData.budget === null) ||
                  (active === 4 && selectedData.planing === null)
                }
                onClick={() => setActive((prev) => prev + 1)}
              >
                Next&nbsp;
                <FaArrowAltCircleRight />
              </Button>
            ) : ( // Show "Submit" button on the last step (form step)
              <Button
                onClick={() => form.submit()}
                className="success"
                loading={isSubmitting} // Show loading state
                disabled={isSubmitting} // Disable during submission
              >
                Submit <BsSendArrowUpFill />
              </Button>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
}