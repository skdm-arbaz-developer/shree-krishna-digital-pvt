import { List } from "antd";
import "../../css/home/logoscroll.css";
import "../../css/whychooseus.css";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { MdDashboardCustomize } from "react-icons/md";
import { FaSteam } from "react-icons/fa";
import { FaTeamspeak } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { useEffect, useState } from "react";

export default function WhyChoosePoints() {
  type ItemType = {
    icon?: React.ReactNode;
    title: string;
    description: string;
  };

  const [active, setActive] = useState<ItemType | null>(null);

  const data = [
    {
      icon: <SiGoogledisplayandvideo360 />,
      title: "360° Digital Solutions",
      description:
        "We offer end-to-end services from digital marketing to full-stack IT solutions — everything your business needs to grow online under one roof. We offer end-to-end services from digital marketing to full-stack IT solutions — everything your business needs to grow online under one roof. We offer end-to-end services from digital marketing to full-stack IT solutions — everything your business needs to grow online under one roof.",
    },
    {
      icon: <MdDashboardCustomize />,
      title: "Customized Strategies",
      description:
        "No one-size-fits-all. We tailor every campaign and tech solution to your unique business goals and target audience. No one-size-fits-all. We tailor every campaign and tech solution to your unique business goals and target audience. ",
    },
    {
      icon: <FaSteam />,
      title: "Experienced & Skilled Team",
      description:
        "Our team consists of certified digital marketers, creative designers, and expert developers who bring years of industry experience.",
    },
    {
      icon: <FaTeamspeak />,
      title: "Results-Driven Approach",
      description:
        "We focus on data, ROI, and performance metrics to ensure every campaign delivers measurable results.",
    },
    {
      icon: <GrTechnology />,
      title: "Cutting-Edge Technology",
      description:
        "From the latest tools in digital marketing to advanced tech stacks in IT development, we stay ahead so your business can too.",
    },
    {
      icon: <RiUserCommunityFill />,
      title: "Transparent Communication",
      description:
        "We keep you in the loop with regular updates, performance reports, and clear communication at every step.",
    },
    {
      icon: <MdOutlineSupportAgent />,
      title: "Dedicated Support & Maintenance",
      description:
        "Our job doesn’t end at delivery — we offer ongoing support, optimization, and maintenance to keep your digital assets performing at their best.",
    },
  ];
  useEffect(() => {
    setActive(data[0])
  }, []);

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="section-body flex flex-col justify-center items-center">
          <h2 className="section-title">Types of websites</h2>
          <p className="section-content">
            Custom Solutions for Every Business Need
          </p>
        </div>

        <div className="why-choose-section mt-20">
          <div className="grid grid-cols-7 why-choose-card">
            <div className="col-span-3 why-choose-card-left">
              <List
                dataSource={data}
                renderItem={(item: ItemType) => (
                  <List.Item
                    className={
                      active?.title === item?.title
                        ? "why-choose-title active"
                        : " why-choose-title"
                    }
                    onClick={() => setActive(item)}
                  >
                    <div className="flex items-center">
                      {item.icon}
                      <span className="mx-5">{item.title}</span>
                    </div>
                    <GoArrowRight className="arrow" />
                  </List.Item>
                )}
              />
            </div>
            <div className="col-span-4 why-choose-card-right">
              {active?.icon}
              <h3>{active?.title}</h3>
              <p>{active?.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
