import CommanBanner from "../components/support/CommanBanner";
import { MdCall, MdMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import "../css/contactus.css";
import Contact from "../assets/images/banners/contact-us-banner.jpg";
import { Helmet } from "react-helmet-async";
import axios from "axios";
import { useState } from "react";

export default function ContactUs() {
  const [form] = Form.useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  interface ContactFormValues {
    name: string;
    email: string;
    message: string;
    phone: string;
    subject: string;
  }

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
                    <tr><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;"><strong>Subject:</strong></td><td style="text-align:left;color:#000;padding:8px;border:1px solid #333;">${
                      value.subject || "N/A"
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
        form.resetFields();
      }
    } catch (error) {
      console.error("Axios Error:", error);
      alert(
        "There was a network error submitting your form. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
      form.resetFields();
    }
  };

  return (
    <>
      <Helmet>
        <title>Online Marketing Near Mumbai | Shree Krishna Digital</title>
        <meta
          name="description"
          content="Looking for online marketing near Mumbai? We offer SEO, PPC, and social media strategies to grow your business and reach your audience effectively."
        />
        <meta
          name="keywords"
          content="Best Digital Marketing Agency In Mumbai,Digital Marketing Company In Mumbai,Digital Marketing Experts In Mumbai,Top Digital Marketing Services In Mumbai,Life At Digital Marketing Agency In Mumbai,Digital Marketing In Mumbai,Top Digital Marketing Company In Mumbai,Internet Marketing Service In Mumbai,Digital Marketing In Mumbai,Best SEO Company In Mumbai,Social Media Marketing Agency In Mumbai,Google My Business listing service,PPC Agency Mumbai,PR Agency In Mumbai,Web Development Company In Mumbai,App Development Company In Mumbai,CRM Development Company In Mumbai,Digital Marketing For Healthcare In Mumbai,Digital Marketing For Hospitility & Caterers In Mumbai,Digital Marketing For Real Estate In Mumbai,Digital Marketing For Resort & Villas In Mumbai,Digital Marketing For Interior Designer In Mumbai,Digital Marketing For Spa & Salon In Mumbai,Digital Marketing For Education In Mumbai,Digital Marketing For Real Life Style In Mumbai,Best Digital Marketing Agency In Mumbai ,Online Marketing Near Mumbai,Search Engine Optimization in India,Social Media Marketing in India,Google My Business in India,Pay Per Click Marketing In India,Web Developement In India,Application Development In India,Search Engine Optimization in Australia,Social Media Marketing in Australia,GMB Optimization Service in Australia,Pay Per Click Marketing in Australia,Web Developement in Australia,Application Development in Australia,Search Engine Optimization in Canada,Social Media Marketing in Canada,GMB Optimization Service in Canada,Pay Per Click Marketing in Canada,Web Developement in Canada,Application Development in Canada,Search Engine Optimization in Malaysia,Social Media Marketing in Malaysia,GMB Optimization Service in Malaysia,Pay Per Click Marketing in Malaysia,Web Developement in Malaysia,Application Development in Malaysia,Search Engine Optimization in Nepal ,Social Media Marketing in Nepal ,GMB Optimization Service in Nepal,Pay Per Click Marketing in Nepal,Web Developement in Nepal,Application Development in Nepal,Search Engine Optimization in Dubai,Social Media Marketing in Dubai,GMB Optimization Service in Dubai ,Pay Per Click Marketing in Dubai,Web Developement in Dubai,Application Development in Dubai,Search Engine Optimization in USA,Social Media Marketing in USA,GMB Optimization Service in USA,Pay Per Click Marketing in USA,Web Developement in USA,Application Development in USA,Search Engine Optimization in United Kingdom,Social Media Marketing in United Kingdom,GMB Optimization Service in United Kingdom ,Pay Per Click Marketing in United Kingdom,Web Developement in United Kingdom,Application Development in United Kingdom,Search Engine Optimization in Maldives,Social Media Marketing in Maldives,GMB Optimization Service in Maldives,Pay Per Click Marketing in Maldives,Web Developement in Maldives,Application Development in Maldives"
        />
        <link rel="canonical" href="https://skdm.in/pr-agency-mumbai" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta
          property="og:title"
          content="Online Marketing Near Mumbai | Shree Krishna Digital"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skdm.in/" />
        <meta
          property="og:description"
          content="Looking for online marketing near Mumbai? We offer SEO, PPC, and social media strategies to grow your business and reach your audience effectively."
        />
        <meta
          property="og:image"
          content="https://skdm.in/assets/logo-C6brZTHT.png"
        />
      </Helmet>

      <CommanBanner
        title="Contact Us"
        keyword="Online Marketing Near Mumbai"
        desc="Get in touch with us for any queries or support"
        image={Contact}
      />

      <section className="section">
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="section-body flex justify-center items-center flex-col">
            <h2 className="section-title">Contact Us</h2>
            <p
              className="section-content text-center"
              style={{ maxWidth: 750 }}
            >
              We’re here to help! Whether you have questions about our services,
              need support, or just want to say hello, feel free to reach out.
              Our team is ready to assist you with any inquiries you may have.
            </p>
          </div>

          <div className="contact-us-card">
            <div className="grid lg:grid-cols-7">
              <div className="col-span-2">
                <div className="contact-us-left">
                  <div className="contact-detail-list">
                    <NavLink to="tel:+917021390953" className="contact-detail">
                      <div className="grid grid-cols-12 pb-10">
                        <div className="col-span-3">
                          <div className="icon">
                            <MdCall />
                          </div>
                        </div>
                        <div className="col-span-9">
                          <div className="detail">
                            <h5>Phone</h5>
                            <p>+91 70213 90953</p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      to="mailto:shreekrishnadigital09@gmail.com"
                      className="contact-detail"
                    >
                      <div className="grid grid-cols-12 pb-10">
                        <div className="col-span-3">
                          <div className="icon">
                            <MdMail />
                          </div>
                        </div>
                        <div className="col-span-9">
                          <div className="detail">
                            <h5>Email</h5>
                            <p>shreekrishnadigital09@gmail.com</p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      to="https://maps.app.goo.gl/DogSopFbKJsboryy6"
                      className="contact-detail"
                    >
                      <div className="grid grid-cols-12 pb-10">
                        <div className="col-span-3">
                          <div className="icon">
                            <FaLocationDot />
                          </div>
                        </div>
                        <div className="col-span-9">
                          <div className="detail">
                            <h5>Office Address</h5>
                            <p>
                              102 B Mohid heights, suresh nagar, rto road,
                              opposite madha signal, near Kokilaben hospital,
                              andheri west-400053
                            </p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                  </div>

                  <div className="social-media">
                    <h5>Follow us</h5>
                    <ul>
                      <li>
                        <NavLink
                          target="_blank"
                          to="https://www.facebook.com/shree.krishnadigitalsolutions/"
                          className="icon"
                        >
                          <FaFacebook />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          target="_blank"
                          to="https://www.linkedin.com/company/shree-krishna-digital-marketing/?originalSubdomain=in"
                          className="icon"
                        >
                          <FaLinkedin />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          target="_blank"
                          to="https://www.instagram.com/shreekrishna_digitalsolutions/"
                          className="icon"
                        >
                          <FaInstagram />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          target="_blank"
                          to="https://api.whatsapp.com/send/?phone=%2B917021390953&text=Hello%2C%20I%27m%20interested%20in%20your%20digital%20marketing%20services.%20Please%20share%20more%20details%20about%20how%20you%20can%20help%20grow%20my%20business%20online.&type=phone_number&app_absent=0"
                          className="icon"
                        >
                          <BsWhatsapp />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-5">
                <div className="contact-us-right">
                  <Form layout="vertical" form={form} onFinish={handleSubmit}>
                    <div className="grid grid-cols-2 gap-10">
                      <Form.Item
                        style={{ margin: "unset" }}
                        label="Full Name"
                        name="name"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Full Name" />
                      </Form.Item>
                      <Form.Item
                        style={{ margin: "unset" }}
                        label="Phone"
                        name="phone"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Phone" />
                      </Form.Item>
                      <Form.Item
                        style={{ margin: "unset" }}
                        label="Email"
                        name="email"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Email" />
                      </Form.Item>
                      <Form.Item
                        style={{ margin: "unset" }}
                        label="Subject"
                        name="subject"
                        rules={[{ required: true }]}
                      >
                        <Select
                          className="seclect-form"
                          placeholder="Subject"
                          style={{ borderRadius: 10 }}
                          options={[
                            { value: "Service", label: "Service" },
                            {
                              value: "PR & Advertising",
                              label: "PR & Advertising",
                            },
                            { value: "Feedback", label: "Feedback" },
                          ]}
                        />
                      </Form.Item>
                      <div className="col-span-2">
                        <Form.Item
                          style={{ margin: "unset" }}
                          label="Message"
                          name="message"
                          rules={[{ required: true }]}
                        >
                          <TextArea rows={4} placeholder="Message" />
                        </Form.Item>
                      </div>

                      <Form.Item style={{ margin: "unset" }}>
                        <Button
                          loading={isSubmitting}
                          htmlType="submit"
                          className="comman-button"
                        >
                          Send Message
                          <FaArrowRight />
                        </Button>
                      </Form.Item>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3910469743914!2d72.82395517544265!3d19.134352582082332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c946e4282bd9%3A0x2781c048e4376933!2sShree%20Krishna%20Digital%20Marketing%20Services%20%7C%20Best%20Digital%20Marketing%20Company%20in%20Andheri%20%7C%20Digital%20Marketing%20Agency%20in%20Andheri!5e0!3m2!1sen!2sin!4v1746181540949!5m2!1sen!2sin"
            width={"100%"}
            height={450}
            style={{ border: 0, borderRadius: 30 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
