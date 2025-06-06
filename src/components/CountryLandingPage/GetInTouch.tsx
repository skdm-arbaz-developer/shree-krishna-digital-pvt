import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { BsWhatsapp } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function GetInTouch({ data, contactRef }: any) {
  const [enquiryForm] = Form.useForm();

  const handleSubmit = (value: any) => {
    console.log(value);
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
                <Form.Item rules={[{ required: true }]} label="Name Name">
                  <Input className="formInput" placeholder="Name" />
                </Form.Item>
              </div>
              <div className="col-span-2">
                <Form.Item rules={[{ required: true }]} label="Business Name">
                  <Input className="formInput" placeholder="Business Name" />
                </Form.Item>
              </div>
              <Form.Item rules={[{ required: true }]} label="Phone">
                <Input className="formInput" placeholder="Phone" />
              </Form.Item>
              <Form.Item rules={[{ required: true }]} label="Email">
                <Input className="formInput" placeholder="Email" />
              </Form.Item>
              <div className="col-span-2">
                <Form.Item label="Message">
                  <TextArea className="formInput" placeholder="Message" />
                </Form.Item>
              </div>
              <Form.Item>
                <Button
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
