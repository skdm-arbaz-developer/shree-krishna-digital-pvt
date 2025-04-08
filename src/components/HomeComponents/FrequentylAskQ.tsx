import { Collapse } from "antd";
import FaqImage from "../../assets/images/resources/home-faq.jpeg";
import "../../css/home/faq.css";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function FrequentylAskQ() {


  const faqs = [
    {
      label: "What services do you offer?",
      children:
        "We offer a range of digital marketing services, including SEO, social media marketing, pay-per-click advertising, content marketing, email marketing, and website development.",
    },
    {
      label: "How can digital marketing help my business?",
      children:
        "Digital marketing helps increase brand visibility, drive targeted traffic, generate leads, and boost sales by leveraging online channels such as search engines, social media, and email marketing.",
    },
    {
      label: "How long does it take to see results?",
      children:
        "The timeline for results varies depending on the strategy. SEO can take 3-6 months, while paid advertising and social media campaigns can yield quicker results within weeks.",
    },
    {
      label: "Do you offer customized marketing strategies?",
      children:
        "Yes, we tailor our marketing strategies based on your business goals, target audience, and industry to ensure maximum effectiveness.",
    },
    {
      label: "What industries do you work with?",
      children:
        "We work with various industries, including real estate, healthcare, e-commerce, hospitality, education, and startups, among others.",
    },
    {
      label: "How do I get started?",
      children:
        "Getting started is easy! Contact us for a free consultation, and we'll discuss your business goals and create a tailored digital marketing strategy for you.",
    },
  ];

  return (
    <section className="section section-dark">
      <div className="container mx-auto">
        <div className="section-body flex flex-col justify-center items-center">
          <h2 className="section-title text-center">
            Frequently Asked Questions
          </h2>
          <p className="section-content text-center max-w-3xl">
            Here, you’ll find answers to the most common questions. If you need
            further assistance, feel free to reach out!
          </p>
        </div>

        <div className="faq-list mt-10">
          <div className="grid grid-cols-3">
            <div className="faq-image col-span-2">
              <img src={FaqImage} />
            </div>
            <div className="faq-content flex items-center justify-start">
              <Collapse
                accordion
                style={{ width: "100%" }}
                expandIcon={({ isActive }) =>
                  isActive ? <FaMinus /> : <FaPlus />
                }
                expandIconPosition={"end"}
                items={faqs.map((val, index) => ({
                  ...val,
                  key: index + 1,
                  children: <Answer answer={val.children} />,
                }))}
                bordered={false}
                defaultActiveKey={["1"]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Answer = ({ answer }: any) => (
  <p className="faq-content-text">{answer}</p>
);