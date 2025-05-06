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
import { BsYoutube } from "react-icons/bs";
import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import "../css/contactus.css";

export default function ContactUs() {
  return (
    <>
      <CommanBanner
        title="Contact Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur error, illo reiciendis quisquam et vel? Deleniti magnam nobis rem omnis, impedit voluptatum beatae sunt molestias voluptate sapiente harum rerum."
        image="https://eclipsesol.com/wp-content/uploads/2023/09/contact-us-scaled-1.jpg"
      />

      <section className="section">
        <div className="container mx-auto">
          <div className="section-body flex justify-center items-center flex-col">
            <h2 className="section-title">Contact Us</h2>
            <p
              className="section-content text-center"
              style={{ maxWidth: 750 }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
              minima. Ipsam, autem ea corrupti error quibusdam doloribus rerum
              modi omnis ipsa, nostrum nisi fugit id libero quos debitis a quia.
            </p>
          </div>

          <div className="contact-us-card">
            <div className="grid grid-cols-7">
              <div className="col-span-2">
                <div className="contact-us-left">
                  <div className="contact-detail-list">
                    <NavLink to="tel:+917021390958" className="contact-detail">
                      <div className="grid grid-cols-12 pb-10">
                        <div className="col-span-3">
                          <div className="icon">
                            <MdCall />
                          </div>
                        </div>
                        <div className="col-span-9">
                          <div className="detail">
                            <h5>Phone</h5>
                            <p>+91 70213 90958</p>
                          </div>
                        </div>
                      </div>
                    </NavLink>
                    <NavLink
                      to="mailto:shreemarketing09@gmail.com"
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
                            <p>shreemarketing09@gmail.com</p>
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
                              Number 102/B, Office, MOHID HEIGHTS 1st, Andheri,
                              Mumbai, Maharashtra 400053
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
                        <NavLink to="#" className="icon">
                          <FaFacebook />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="icon">
                          <FaLinkedin />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="icon">
                          <FaInstagram />
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#" className="icon">
                          <BsYoutube />
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-5">
                <div className="contact-us-right">
                  <Form layout="vertical">
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
                        <Button htmlType="submit" className="comman-button">
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
        <div className="container mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.3910469743914!2d72.82395517544265!3d19.134352582082332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c946e4282bd9%3A0x2781c048e4376933!2sShree%20Krishna%20Digital%20Marketing%20Services%20%7C%20Best%20Digital%20Marketing%20Company%20in%20Andheri%20%7C%20Digital%20Marketing%20Agency%20in%20Andheri!5e0!3m2!1sen!2sin!4v1746181540949!5m2!1sen!2sin"
            width={"100%"}
            height={450}
            style={{ border: 0, borderRadius:30 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}
