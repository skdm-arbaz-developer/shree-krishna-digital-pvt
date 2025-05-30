import { Collapse } from "antd";

export default function FAQ({ faqRef }: any) {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const getItems = (panelStyle: any) => [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "4",
      label: "This is panel header 3",
      children: <p>{text}</p>,
      style: panelStyle,
    },
    {
      key: "5",
      label: "This is panel header 3",
      children: <p>{text}</p>,
      style: panelStyle,
    },
  ];

  const panelStyle = {
    marginBottom: 15,
    background: "#fff",
    borderRadius: "unset",
    border: "none",
  };

  return (
    <section className="we-do-section" ref={faqRef}>
      <div className="container mx-auto">
        <div className="grid grid-cols-12">
          <div className="left-col lg:col-span-6 col-span-12">
            <div className="inner">
              <div className="sec-title">
                <h2>
                  We do more then ever <br />
                  platforms <span className="dot">.</span>
                </h2>
              </div>
              <div className="featured-block clearfix">
                <div className="image">
                  <img
                    src="https://linoor-nuxt.netlify.app/images/resource/featured-image-4.jpg"
                    alt=""
                  />
                </div>
                <div className="text">
                  There are many variatns of passages the majority have suffered
                  alteration in some foor randomised words believable.
                </div>
              </div>
              <div className="progress-box">
                <div className="bar-title">Digital marketing</div>
                <div className="bar">
                  <div className="progress-bar">
                    <span
                      className="progress-bar-fill"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-col lg:col-span-6 col-span-12">
            <div className="inner">
              <div className="faq-box">
                <div className="accordion-container-one" role="tablist">
                  <Collapse
                    bordered={false}
                    defaultActiveKey={["1"]}
                    accordion
                    style={{ background: "transparent" }}
                    expandIconPosition="right"
                    items={getItems(panelStyle)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
