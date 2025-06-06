import { Badge, ConfigProvider, Image, Tabs, Tag } from "antd";
import CommanBanner from "../components/support/CommanBanner";
import { useState } from "react";
import { MdCelebration, MdDashboard } from "react-icons/md";
import { FaBirthdayCake, FaBusAlt } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";
import "../css/galler.css";
import { FaImage } from "react-icons/fa6";
import banner from "../assets/images/banners/life-at-skdm-banner.jpeg";
import ganpatiFirst1 from "../assets/images/skd/ganpati/2022/1.jpeg";
import ganpatiFirst2 from "../assets/images/skd/ganpati/2022/1.jpeg";
import ganpatiFirst3 from "../assets/images/skd/ganpati/2022/1.jpeg";
import ganpatiFirst4 from "../assets/images/skd/ganpati/2022/1.jpeg";
import ganpatiFirst5 from "../assets/images/skd/ganpati/2022/1.jpeg";

import ganpatiSecond1 from "../assets/images/skd/ganpati/2023/1.jpeg";
import ganpatiSecond2 from "../assets/images/skd/ganpati/2023/2.jpeg";
import ganpatiSecond3 from "../assets/images/skd/ganpati/2023/3.jpeg";
import ganpatiSecond4 from "../assets/images/skd/ganpati/2023/4.jpeg";

import ganpatiThird1 from "../assets/images/skd/ganpati/2024/1.jpeg";
import ganpatiThird2 from "../assets/images/skd/ganpati/2024/2.jpeg";
import ganpatiThird3 from "../assets/images/skd/ganpati/2024/3.jpeg";
import ganpatiThird4 from "../assets/images/skd/ganpati/2024/4.jpeg";
import ganpatiThird5 from "../assets/images/skd/ganpati/2024/5.jpeg";
import ganpatiThird6 from "../assets/images/skd/ganpati/2024/6.jpeg";

import tripOne1 from "../assets/images/skd/trip/2021/1.jpeg";
import tripOne2 from "../assets/images/skd/trip/2021/2.jpeg";
import tripOne3 from "../assets/images/skd/trip/2021/3.jpeg";
import tripOne4 from "../assets/images/skd/trip/2021/4.jpeg";

import tripSecond1 from "../assets/images/skd/trip/2022/1.jpeg";
import tripSecond2 from "../assets/images/skd/trip/2022/2.jpeg";
import tripSecond3 from "../assets/images/skd/trip/2022/3.jpeg";

import tripFourth1 from "../assets/images/skd/trip/2024/1.jpeg";
import tripFourth2 from "../assets/images/skd/trip/2024/2.jpeg";
import tripFourth3 from "../assets/images/skd/trip/2024/3.jpeg";
import tripFourth4 from "../assets/images/skd/trip/2024/4.jpeg";
import tripFourth5 from "../assets/images/skd/trip/2024/5.jpeg";

import tripthird1 from "../assets/images/skd/trip/2023/1.jpeg";
import tripthird2 from "../assets/images/skd/trip/2023/2.jpeg";
import tripthird3 from "../assets/images/skd/trip/2023/3.jpeg";
import tripthird4 from "../assets/images/skd/trip/2023/4.jpeg";
import tripthird5 from "../assets/images/skd/trip/2023/5.jpeg";
import tripthird6 from "../assets/images/skd/trip/2023/6.jpeg";
import tripthird7 from "../assets/images/skd/trip/2023/7.jpeg";
import tripthird8 from "../assets/images/skd/trip/2023/8.jpeg";

import tripFifth1 from "../assets/images/skd/trip/2025/1.jpeg";
import tripFifth2 from "../assets/images/skd/trip/2025/2.jpeg";
import tripFifth3 from "../assets/images/skd/trip/2025/3.jpeg";
import tripFifth4 from "../assets/images/skd/trip/2025/4.jpeg";
import tripFifth5 from "../assets/images/skd/trip/2025/5.jpeg";
import tripFifth6 from "../assets/images/skd/trip/2025/6.jpeg";
import tripFifth7 from "../assets/images/skd/trip/2025/7.jpeg";
import tripFifth8 from "../assets/images/skd/trip/2025/8.jpeg";

import docotr1 from "../assets/images/skd/events/dcotor/1.jpeg";
import docotr2 from "../assets/images/skd/events/dcotor/2.jpeg";
import docotr3 from "../assets/images/skd/events/dcotor/3.jpeg";
import docotr4 from "../assets/images/skd/events/dcotor/4.jpeg";
import docotr5 from "../assets/images/skd/events/dcotor/5.jpeg";

import cycle1 from "../assets/images/skd/events/cycle/1.jpeg";
import cycle2 from "../assets/images/skd/events/cycle/2.jpeg";
import cycle3 from "../assets/images/skd/events/cycle/3.jpeg";
import cycle4 from "../assets/images/skd/events/cycle/4.jpeg";
import cycle5 from "../assets/images/skd/events/cycle/5.jpeg";
import cycle6 from "../assets/images/skd/events/cycle/6.jpeg";

import pr1 from "../assets/images/skd/events/pr/1.jpeg";
import pr2 from "../assets/images/skd/events/pr/2.jpeg";
import pr3 from "../assets/images/skd/events/pr/3.jpeg";
import pr4 from "../assets/images/skd/events/pr/4.jpeg";

import jaat1 from "../assets/images/skd/events/jaat/1.jpeg";
import jaat2 from "../assets/images/skd/events/jaat/2.jpeg";
import jaat3 from "../assets/images/skd/events/jaat/3.jpeg";

import music1 from "../assets/images/skd/events/music/1.jpeg";
import music2 from "../assets/images/skd/events/music/2.jpeg";
import music3 from "../assets/images/skd/events/music/3.jpeg";
import music4 from "../assets/images/skd/events/music/4.jpeg";
import music5 from "../assets/images/skd/events/music/5.jpeg";
import music6 from "../assets/images/skd/events/music/6.jpeg";
import music7 from "../assets/images/skd/events/music/7.jpeg";

import charity1 from "../assets/images/skd/events/charity/1.jpeg";
import charity2 from "../assets/images/skd/events/charity/2.jpeg";

import ads1 from "../assets/images/skd/events/ads/1.jpeg";
import ads2 from "../assets/images/skd/events/ads/2.jpeg";
import ads3 from "../assets/images/skd/events/ads/3.jpeg";
import ads4 from "../assets/images/skd/events/ads/4.jpeg";
import ads5 from "../assets/images/skd/events/ads/5.jpeg";

import podcast1 from "../assets/images/skd/events/podcast/1.jpeg";
import podcast2 from "../assets/images/skd/events/podcast/2.jpeg";
import podcast3 from "../assets/images/skd/events/podcast/3.jpeg";

import ambrish1 from "../assets/images/skd/office/ambrish/1.jpeg";
import ambrish2 from "../assets/images/skd/office/ambrish/2.jpeg";
import ambrish3 from "../assets/images/skd/office/ambrish/3.jpeg";
import ambrish4 from "../assets/images/skd/office/ambrish/4.jpeg";

import shoot1 from "../assets/images/skd/office/shoot/1.jpeg";
import shoot2 from "../assets/images/skd/office/shoot/2.jpeg";
import shoot3 from "../assets/images/skd/office/shoot/3.jpeg";
import shoot4 from "../assets/images/skd/office/shoot/4.jpeg";
import shoot5 from "../assets/images/skd/office/shoot/1.jpeg";
import shoot6 from "../assets/images/skd/office/shoot/2.jpeg";

import concert1 from "../assets/images/skd/events/concert/1.jpeg";
import concert2 from "../assets/images/skd/events/concert/2.jpeg";
import concert3 from "../assets/images/skd/events/concert/3.jpeg";

import jyoti1 from "../assets/images/skd/office/jyoti/1.jpeg";
import jyoti2 from "../assets/images/skd/office/jyoti/2.jpeg";
import jyoti3 from "../assets/images/skd/office/jyoti/3.jpeg";
import jyoti4 from "../assets/images/skd/office/jyoti/4.jpeg";
import jyoti5 from "../assets/images/skd/office/jyoti/5.jpeg";
import jyoti6 from "../assets/images/skd/office/jyoti/6.jpeg";

export default function LifeAtSkd() {
  const [activeKey, setActiveKey] = useState("all");

  const contents = [
    {
      type: "tour",
      title: "Office trip at 2021",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2021",
      banner: tripOne1,
      images: [tripOne1, tripOne2, tripOne3, tripOne4],
    },
    {
      type: "tour",
      title: "Office trip at 2022",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2022",
      banner: tripSecond1,
      images: [tripSecond1, tripSecond2, tripSecond3],
    },
    {
      type: "tour",
      title: "Office trip at 2023",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2023",
      banner: tripthird1,
      images: [
        tripthird1,
        tripthird2,
        tripthird3,
        tripthird4,
        tripthird5,
        tripthird6,
        tripthird7,
        tripthird8,
      ],
    },
    {
      type: "tour",
      title: "Office trip at 2024",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: tripFourth1,
      images: [tripFourth1, tripFourth2, tripFourth3, tripFourth4, tripFourth5],
    },
    {
      type: "tour",
      title: "Office trip at 2025",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2025",
      banner: tripFifth1,
      images: [
        tripFifth1,
        tripFifth2,
        tripFifth3,
        tripFifth4,
        tripFifth5,
        tripFifth6,
        tripFifth7,
        tripFifth8,
      ],
    },
    {
      type: "festive",
      title: "Ganpati Festive Celebration 2022",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2022",
      banner: ganpatiFirst1,
      images: [
        ganpatiFirst1,
        ganpatiFirst2,
        ganpatiFirst3,
        ganpatiFirst4,
        ganpatiFirst5,
      ],
    },
    {
      type: "festive",
      title: "Ganpati Festive Celebration 2023",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2023",
      banner: ganpatiSecond1,
      images: [ganpatiSecond1, ganpatiSecond2, ganpatiSecond3, ganpatiSecond4],
    },
    {
      type: "festive",
      title: "Ganpati Festive Celebration 2024",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: ganpatiThird1,
      images: [
        ganpatiThird1,
        ganpatiThird2,
        ganpatiThird3,
        ganpatiThird4,
        ganpatiThird5,
        ganpatiThird6,
      ],
    },
    {
      type: "charity",
      title: "Doctors Corporate Event by SKD",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2022",
      banner: docotr1,
      images: [docotr1, docotr2, docotr1, docotr3, docotr4, docotr5],
    },
    {
      type: "charity",
      title: "Cycle Event Attending Ambrish Sir",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2022",
      banner: cycle1,
      images: [cycle1, cycle2, cycle3, cycle4, cycle5, cycle6],
    },
    {
      type: "charity",
      title: "PR By SKD of Lakhani Catering",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2022",
      banner: pr1,
      images: [pr1, pr2, pr3, pr4],
    },
    {
      type: "charity",
      title: "Jaat Sahab Event Attend",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2025",
      banner: jaat1,
      images: [jaat1, jaat2, jaat3],
    },
    {
      type: "charity",
      title: "Specil Guest Attend Music Event",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: music1,
      images: [music1, music2, music3, music4, music5, music6, music7],
    },
    {
      type: "charity",
      title: "Event by SKD",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2023",
      banner: charity1,
      images: [charity1, charity2],
    },
    {
      type: "charity",
      title: "Podcast With Skin Doctor Shoot by SKD",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2025",
      banner: ads1,
      images: [ads1, ads2, ads3, ads4, ads5],
    },
    {
      type: "charity",
      title: "Podcast With Orthopedic Doctor Shoot by SKD",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: podcast1,
      images: [podcast1, podcast2, podcast3],
    },
    {
      type: "birthday",
      title: "Ambrish Sir birthday Celebration",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2023",
      banner: ambrish1,
      images: [ambrish1, ambrish2, ambrish3, ambrish4],
    },
    {
      type: "office",
      title: "Office Photo Shoot",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: shoot1,
      images: [shoot1, shoot2, shoot3, shoot4, shoot5, shoot6],
    },
    {
      type: "charity",
      title: "Concert Organize by SKD",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2022",
      banner: concert1,
      images: [concert1, concert2, concert3],
    },
    {
      type: "birthday",
      title: "Joyti Ma'am birthday celebration",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: jyoti1,
      images: [jyoti1, jyoti2, jyoti3, jyoti4, jyoti5, jyoti6],
    },
  ];

  const finddTag = ({ type }: any) => {
    let color;
    let name;

    switch (type) {
      case "tour":
        color = "green";
        name = "Office Tours";
        break;
      case "festive":
        color = "magenta";
        name = "Fastival Celebration";
        break;
      case "birthday":
        color = "cyan";
        name = "Birthday Celebrate";
        break;
      case "charity":
        color = "purple";
        name = "Events";
        break;
      case "office":
        color = "blue";
        name = "Office Funday";
        break;
      default:
        name = "Others";
        color = "volcano";
    }

    return (
      <Tag color={color} style={{ textTransform: "capitalize" }}>
        {name}
      </Tag>
    );
  };

  const finddBadgeColor = ({ type }: any) => {
    let color;

    switch (type) {
      case "tour":
        color = "green";
        break;
      case "festive":
        color = "magenta";
        break;
      case "birthday":
        color = "cyan";
        break;
      case "charity":
        color = "purple";
        break;
      case "office":
        color = "blue";
        break;
      default:
        color = "volcano";
    }

    return color;
  };

  return (
    <>
      <CommanBanner
        image={banner}
        title="Life At Shree Krishna Digital Solutions Pvt Ltd"
        desc="Experience the vibrant culture and dynamic work environment at Shree Krishna Digital Solutions Pvt Ltd, where innovation meets creativity. Join us in our journey of digital excellence."
      />

      <section className="section">
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="section-body flex flex-col justify-center lg:items-center mb-15">
            <h2 className="section-title">
              Memories with Shree Krishna Digital
            </h2>
            <p className="section-contet lg:text-center" style={{ maxWidth: 750 }}>
              At Shree Krishna Digital Solutions Pvt Ltd, we believe in creating lasting memories
              that reflect our vibrant culture and team spirit. From festive
              celebrations to team outings, every moment is a testament to our
              commitment to fostering a positive and engaging work environment.
            </p>
          </div>
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  itemActiveColor: "#e98c14",
                  itemHoverColor: "#e98c14",
                  itemSelectedColor: "#e98c14",
                },
              },
            }}
          >
            <Tabs
              activeKey={activeKey}
              size={"large"}
              type="card"
              onChange={setActiveKey}
              items={[
                {
                  key: "all",
                  label: (
                    <div className="flex items-center">
                      <MdDashboard />
                      &nbsp; All
                    </div>
                  ),
                },
                {
                  key: "tour",
                  label: (
                    <div className="flex items-center">
                      <FaBusAlt />
                      &nbsp; Tours
                    </div>
                  ),
                },
                {
                  key: "festive",
                  label: (
                    <div className="flex items-center">
                      <MdCelebration />
                      &nbsp; Festive Celebration
                    </div>
                  ),
                },
                {
                  key: "birthday",
                  label: (
                    <div className="flex items-center">
                      <FaBirthdayCake />
                      &nbsp; Birthday
                    </div>
                  ),
                },
                {
                  key: "office",
                  label: (
                    <div className="flex items-center">
                      <PiOfficeChairFill />
                      &nbsp; Office Funday
                    </div>
                  ),
                },
                {
                  key: "charity",
                  label: (
                    <div className="flex items-center">
                      <PiOfficeChairFill />
                      &nbsp; Events & PR
                    </div>
                  ),
                },
              ]}
            />
          </ConfigProvider>

          <div className="images-list mt-10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {(activeKey === "all"
                ? contents
                : contents.filter((val) => val.type === activeKey)
              )
                ?.sort((a: any, b: any) => b.year - a.year)
                ?.map((val, index) => (
                  <div className="relative">
                    <Image.PreviewGroup key={index} items={val?.images}>
                      <Badge.Ribbon
                        color={finddBadgeColor({ type: val.type })}
                        text={
                          <div className="flex items-center p-2">
                            <FaImage />
                            &nbsp;+{val?.images.length - 1}
                          </div>
                        }
                      >
                        <Image
                          width={"100%"}
                          style={{
                            maxHeight: 400,
                            objectFit: "cover",
                            objectPosition: "center",
                            minHeight: 400,
                          }}
                          src={val?.banner}
                        />
                      </Badge.Ribbon>
                    </Image.PreviewGroup>

                    <div className="tag-reamining-image absolute top-2 left-2">
                      {finddTag({ type: val.type })}
                    </div>

                    <div className="title absolute bottom-0 left-0 right-0 p-3 backdrop-blur-md">
                      <h5 className="text-white">{val.title}</h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
