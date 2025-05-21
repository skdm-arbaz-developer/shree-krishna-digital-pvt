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
import { useEffect, useRef, useState } from "react";
import SvgIcon from "../../assets/images/icons/home-about-right.svg";

export default function WhyChoosePoints() {
  type ItemType = {
    icon?: React.ReactNode;
    title: string;
    description: string;
  };

  const [active, setActive] = useState<ItemType | null>(null);
  const whyChooseRef = useRef<HTMLDivElement>(null);

  const data = [
    {
      icon: <SiGoogledisplayandvideo360 />,
      title: "360° Digital Solutions",
      description:
        "We provide complete digital solutions designed to match your business needs. From powerful marketing strategies to strong full-stack development, our skilled team takes care of everything to help you succeed online, all in one place. We provide top digital marketing service in Mumbai and focus on smart ideas and smooth processes. We support brands in growing, connecting with their audience, and staying ahead in today’s fast-moving digital space through reliable and full-service support.",
    },
    {
      icon: <MdDashboardCustomize />,
      title: "Customized Strategies",
      description:
        "We don't treat every business as a one-size-fits-all. We meticulously craft digital campaigns and tech solutions that are tailored to meet your audience and desired goals. By closely tracking your brand, we devise strategies that enhance performance, engage with your target audience, and facilitate business growth.",
    },
    {
      icon: <FaSteam />,
      title: "Experienced & Skilled Team",
      description:
        "Our highly skilled team is made up of certified digital marketers, creative designers, and experienced developers who bring years of hands-on expertise in the digital industry. Each member contributes deep knowledge and technical proficiency, ensuring that every project is executed with precision, creativity, and a results-driven approach tailored to meet your business goals.",
    },
    {
      icon: <FaTeamspeak />,
      title: "Results-Driven Approach",
      description:
        "To ensure genuine business impact, we prioritize data-driven approaches, measurable outcomes, and detailed tracking to ensure successful campaigns. We analyze important data and optimize your efforts to achieve tangible outcomes. Why choose us? We offer transparency, accountability, and consistent growth to meet your business objectives and marketing goals.",
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
    setActive(data[0]);
  }, []);

  const handleClick = () => {
    if (whyChooseRef.current) {
      whyChooseRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="section relative">
      <img src={SvgIcon} className="absolute top-0 right-0" />

      <div className="container mx-auto">
        <div className="section-body flex flex-col justify-center items-center">
          <h2 className="section-title">Why you Need Us</h2>
          <p className="section-content">
            Why we are the best choice for your business
          </p>
        </div>

        <div className="why-choose-section mt-20">
          <div className="lg:grid lg:grid-cols-7 why-choose-card">
            <div className="lg:col-span-3 why-choose-card-left">
              <List
                dataSource={data}
                renderItem={(item: ItemType) => (
                  <List.Item
                    className={
                      active?.title === item?.title
                        ? "why-choose-title active"
                        : " why-choose-title"
                    }
                    onClick={() => {
                      setActive(item);
                      handleClick();
                    }}
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
            <div
              className="lg:col-span-4 why-choose-card-right mt-10 lg:mt-0"
              ref={whyChooseRef}
            >
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
