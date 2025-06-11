import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function GetInTouch({ data, contactRef }: any) {
  const [enquiryForm] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  interface ContactFormValues {
    name: string;
    email: string;
    message: string;
    phone: string;
    business: string;
    country: string;
  }

  useEffect(() => {
    enquiryForm.setFieldsValue({ country: data?.title });
  }, []);

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
                    <tr><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;"><strong>Country:</strong></td><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;">${
                      value.country || "N/A"
                    }</td></tr>
                    <tr><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;"><strong>Business:</strong></td><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;">${
                      value.business || "N/A"
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
      enquiryForm.resetFields();
      enquiryForm.setFieldsValue({ country: data?.type });
    }
  };

  return (
    <section className="section get-in-touch-country" ref={contactRef}>
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="contain-info">
            <div className="sec-title">
              <h2>
                Get In Touch <br /> With Us <span className="dot">.</span>
              </h2>
              <p>{data?.getintouchSection}</p>
            </div>
            <div className="get-in-touch-list">
              <ul>
                <li>
                  <NavLink to="tel:+917021390953">
                    <div className="get-in-touch-icon">
                      <LuPhoneCall />
                    </div>
                    <div className="contact">
                      +91&nbsp;7021&nbsp;390&nbsp;953
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://api.whatsapp.com/send/?phone=%2B917021390953&text=Hello%2C%20I%27m%20interested%20in%20your%20digital%20marketing%20services.%20Please%20share%20more%20details%20about%20how%20you%20can%20help%20grow%20my%20business%20online.&type=phone_number&app_absent=0">
                    <div className="get-in-touch-icon">
                      <BsWhatsapp />
                    </div>
                    <div className="contact">
                      +91&nbsp;7021&nbsp;390&nbsp;953
                    </div>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="mailto:shreekrishnadigital09@gmail.com">
                    <div className="get-in-touch-icon">
                      <MdOutlineMail />
                    </div>
                    <div className="contact">
                      shreekrishnadigital09@gmail.com
                    </div>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Form form={enquiryForm} onFinish={handleSubmit} layout="vertical">
            <div className="grid grid-cols-2 gap-x-5">
              <div className="col-span-2">
                <Form.Item
                  name={"name"}
                  rules={[{ required: true }]}
                  label="Name"
                >
                  <Input className="formInput" placeholder="Name" />
                </Form.Item>
              </div>
              <Form.Item
                name={"phone"}
                rules={[{ required: true }]}
                label="Phone"
              >
                <Input className="formInput" placeholder="Phone" />
              </Form.Item>
              <Form.Item
                name={"email"}
                rules={[{ required: true }]}
                label="Email"
              >
                <Input className="formInput" placeholder="Email" />
              </Form.Item>
              <Form.Item
                name={"business"}
                rules={[{ required: true }]}
                label="Business"
              >
                <Input className="formInput" placeholder="Business" />
              </Form.Item>
              <Form.Item
                name={"country"}
                rules={[{ required: true }]}
                label="Country"
              >
                <Input className="formInput" disabled placeholder="Country" />
              </Form.Item>
              <div className="col-span-2">
                <Form.Item name={"message"} label="Message">
                  <TextArea className="formInput" placeholder="Message" />
                </Form.Item>
              </div>
              <Form.Item>
                <Button
                  htmlType="submit"
                  loading={isSubmitting}
                  className="theme-btn btn-style-one"
                  style={{ height: 65 }}
                >
                  <i className="btn-curve" />
                  <span className="btn-title">Submit Enquiry</span>
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </section>
  );
}
