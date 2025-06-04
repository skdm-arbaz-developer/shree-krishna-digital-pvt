import { Collapse } from "antd";

export default function FAQ({ data, faqRef }: any) {

  const panelStyle = {
    marginBottom: 15,
    background: "#fff",
    borderRadius: "unset",
    border: "none",
  };

  return (
    data?.faqSection?.faq.length > 0 && (
      <section className="we-do-section" ref={faqRef}>
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="grid grid-cols-12">
            <div className="left-col lg:col-span-6 col-span-12">
              <div className="inner">
                <div className="sec-title">
                  <h2>
                    {data?.faqSection?.title} <span className="dot">.</span>
                  </h2>
                </div>
                <div className="featured-block clearfix">
                  <div className="image">
                    <img
                      src="https://linoor-nuxt.netlify.app/images/resource/featured-image-4.jpg"
                      alt=""
                    />
                  </div>
                  <div className="text">{data?.faqSection?.desc}</div>
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
                      items={data?.faqSection?.faq?.map(
                        (val: any, index: number) => ({
                          key: index + 1,
                          label: val?.question,
                          children: val?.answer,
                          style: panelStyle,
                        })
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}
