import { Avatar, Collapse, Divider, List, theme } from "antd";
import countries from "../support/Countries";
import { NavLink } from "react-router-dom";

export default function Cities({ data }: any) {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  return (
    <section className="section section-gray">
      <div className="container mx-auto">
        <div className="sec-title">
          <h2>
            We also served in these Cities <span className="dot">.</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            eveniet voluptatum repellat exercitationem quisquam maxime a
            architecto, nihil praesentium voluptas placeat corporis, magnam
            natus ea delectus quos quaerat esse. Nesciunt?
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-5">
          {countries
            ?.filter((val) => val?.type === data?.type)
            ?.splice(1, 3)
            ?.map((val, index) => (
              <Collapse
                key={index}
                expandIconPosition="right"
                bordered={false}
                style={{
                  background: "transparent",
                }}
                items={[
                  {
                    key: "1",
                    label: (
                      <div className="grid grid-cols-12 gap-5">
                        <Avatar
                          className="col-span-3"
                          size={90}
                          src={val?.banner}
                          shape="square"
                        />
                        <div className="col-span-9 ml-3">
                          <strong className="text-gray-900">
                            {val?.title}
                          </strong>
                          <p style={{ color: "#808080", fontSize: ".85rem" }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Facilis fugit natus voluptatem inventore,
                          </p>
                        </div>
                      </div>
                    ),
                    children: (
                      <div>
                        <strong>Services We Serve</strong>
                        <Divider />
                        <List
                          itemLayout="horizontal"
                          dataSource={val?.services}
                          renderItem={(item, index) => (
                            <List.Item key={index}>
                              <List.Item.Meta
                                avatar={
                                  <Avatar shape="square" src={item?.icon} />
                                }
                                title={
                                  <NavLink to={item?.link}>
                                    {item.title}
                                  </NavLink>
                                }
                                description={
                                  <p className="hideContent">{item?.desc[0]}</p>
                                }
                              />
                            </List.Item>
                          )}
                        />
                      </div>
                    ),
                    style: panelStyle,
                  },
                ]}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
