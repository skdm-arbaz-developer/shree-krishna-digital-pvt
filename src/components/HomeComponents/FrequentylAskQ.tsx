import { Collapse } from "antd";
import FaqImage from "../../assets/images/resources/home-faq.jpeg";
import "../../css/home/faq.css";
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function FrequentylAskQ() {


  const faqs = [
    {
      label: "Why should I choose your agency or freelancer or in-house stream for my business?",
      children:
        "We offer a skilled, transparent, and results-driven team that adapts to your needs. Whether you're a startup or enterprise, our personalized approach ensures your goals are met with measurable outcomes.",
    },
    {
      label: "I have been burned by SEO agencies before. How are you different?",
      children:
        "We understand your concern. Our agency is built on transparency, timely service delivery, and trust. We provide regular performance reports, address all your doubts via scheduled or on-call support, and operate with a proper company setup, ensuring you get reliable, accountable, and results-driven SEO services.",
    },
    {
      label: "How quickly can I expect the results?",
      children:
        "Results vary by service, PPC brings faster results, while SEO and organic growth typically take 3–6 months. We set realistic timelines and keep you informed throughout the journey.",
    },
    {
      label: "What is your pricing? I am scared of hidden costs.",
      children:
        "Our pricing is straightforward with no hidden fees. We offer detailed proposals and transparent billing, so you know exactly what you’re paying for at every step.",
    },
    {
      label: "Why are my Instagram posts getting zero engagement?",
      children:
        "Low engagement can stem from inconsistent content, poor timing, or lack of audience targeting. We audit your profile, refine your strategy, and use data to boost visibility and interaction.",
    },
    {
      label: "Do you work with local businesses or just big brands?",
      children:
        "We work with both! Whether you're a local business or a large brand, we tailor strategies to suit your goals, budget, and growth stage with equal dedication.",
    },
  ];

  return (
    <section className="section section-dark">
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="section-body flex flex-col justify-center lg:items-center">
          <h2 className="section-title" style={{fontSize:"1.5rem"}}>
            Frequently Asked Questions
          </h2>
          <p className="section-content md:text-center max-w-3xl">
            Here, you’ll find answers to the most common questions. If you need
            further assistance, feel free to reach out!
          </p>
        </div>

        <div className="faq-list mt-10">
          <div className="grid lg:grid-cols-3">
            <div className="faq-image col-span-2">
              <img src={FaqImage} alt="Best Digital Marketing Agency In Mumbai" />
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