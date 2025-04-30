import { Checkbox, Col, Collapse, Divider, Row } from "antd";
import { FaAngleDown } from "react-icons/fa6";

export default function FilterSection({
  selectIndustrie,
  setSelectIndustrie,
  selectServices,
  setSelectServices,
}: any) {
  const indextries = [
    "All",
    "Healthcare",
    "Education",
    "Resort & Villa",
    "Hospitality & Catering",
    "Intrior Design",
    "Real Estate",
    "Spa & Salon",
  ];

  const services = [
    "All",
    "SEO Optimization",
    "Social Media Marketing",
    "Pay Per Click",
    "Web Development",
    "Application Development",
    "CRM Development",
  ];

  return (
    <div className="filter-card">
      <h3 className="filter-box">Filter</h3>
      <Collapse
        size="small"
        bordered={false}
        expandIcon={({ isActive }) => (
          <FaAngleDown
            className="angle-icon"
            style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}
          />
        )}
        expandIconPosition="right"
        style={{ padding: 0, background: "transparent", color: "#000" }}
        items={[
          {
            key: "1",
            label: <h3>Industries</h3>,
            children: (
              <Checkbox.Group
                value={[selectIndustrie]}
                onChange={setSelectIndustrie}
              >
                <Row>
                  {indextries.map((val, index) => (
                    <Col span={24}>
                      <Checkbox value={val} key={index}>
                        {val}
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            ),
          },
        ]}
      />
      <Collapse
        size="small"
        bordered={false}
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          <FaAngleDown
            className="angle-icon"
            style={{ transform: isActive ? "rotate(90deg)" : "rotate(0deg)" }}
          />
        )}
        style={{ padding: 0, background: "transparent", color: "#000" }}
        items={[
          {
            key: "2",
            label: <h3>Services</h3>,
            children: (
              <Checkbox.Group
                value={[selectServices]}
                onChange={setSelectServices}
              >
                <Row>
                  {services.map((val, index) => (
                    <Col span={24}>
                      <Checkbox value={val} key={index}>
                        {val}
                      </Checkbox>
                    </Col>
                  ))}
                </Row>
              </Checkbox.Group>
            ),
          },
        ]}
      />
    </div>
  );
}
