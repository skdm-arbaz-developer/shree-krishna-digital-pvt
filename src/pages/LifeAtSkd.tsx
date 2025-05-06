import { Badge, ConfigProvider, Image, Tabs, Tag } from "antd";
import CommanBanner from "../components/support/CommanBanner";
import { useState } from "react";
import { MdCelebration, MdDashboard } from "react-icons/md";
import { FaBirthdayCake, FaBusAlt } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";
import "../css/galler.css";
import { FaImage } from "react-icons/fa6";

export default function LifeAtSkd() {
  const [activeKey, setActiveKey] = useState("all");

  const contents = [
    {
      type: "tour",
      title: "Office trip at 2021",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2021",
      images: [
        "https://skdm.in/static/media/t1.2e3046b811e8aa7a1bec.jpeg",
        "https://skdm.in/static/media/t2.374a92cf7a2714eeff37.jpeg",
        "https://skdm.in/static/media/t5.e91a7a098bac3460767a.jpeg",
        "https://skdm.in/static/media/t4.115740fa60035a3f4b79.jpeg",
      ],
      banner: "https://skdm.in/static/media/t1.2e3046b811e8aa7a1bec.jpeg",
    },
    {
      type: "festive",
      title: "Ganpati Festive Celebration 2021",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2021",
      banner: "https://skdm.in/static/media/g1.cc79cb32b4bb83df6585.jpeg",
      images: [
        "https://skdm.in/static/media/g1.cc79cb32b4bb83df6585.jpeg",
        "https://skdm.in/static/media/g5.1ed755bb2a628a26784d.jpeg",
        "https://skdm.in/static/media/g4.47d5f3c57d764136f126.jpeg",
      ],
    },
    {
      type: "charity",
      title: "Charity by SKD",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2022",
      banner: "https://skdm.in/static/media/pr6.fcc60d557cc798d9e095.jpeg",
      images: [
        "https://skdm.in/static/media/pr6.fcc60d557cc798d9e095.jpeg",
        "https://skdm.in/static/media/pr7.1e4c8e17f3f2384db39e.jpeg",
      ],
    },
    {
      type: "charity",
      title: "PR by SKD",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2022",
      banner: "https://skdm.in/static/media/pr3.769ed4329494c76b3edc.jpeg",
      images: [
        "https://skdm.in/static/media/pr3.769ed4329494c76b3edc.jpeg",
        "https://skdm.in/static/media/pr2.442a38c0ea8c813e6bf4.jpeg",
        "https://skdm.in/static/media/pr1.397c2f5dbcb849721b9e.jpeg",
      ],
    },
    {
      type: "birthday",
      title: "Ambrish Sir birthday Celebration",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2023",
      banner: "https://skdm.in/static/media/b6.6f87a8e8a3609420f379.jpeg",
      images: [
        "https://skdm.in/static/media/b6.6f87a8e8a3609420f379.jpeg",
        "https://skdm.in/static/media/b7.031aeab75178bc551715.jpeg",
      ],
    },
    {
      type: "office",
      title: "Office Photo Shoot",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: "https://skdm.in/static/media/off3.4fc27000a796abc55159.jpeg",
      images: [
        "https://skdm.in/static/media/off3.4fc27000a796abc55159.jpeg",
        "https://skdm.in/static/media/off5.36029bceb8d4d5202da1.jpeg",
        "https://skdm.in/static/media/off4.3d04e86ae60fbbd2c14c.jpeg",
        "https://skdm.in/static/media/off7.a02e33319757a9673d4c.jpeg",
        "https://skdm.in/static/media/off6.7ae143e79da166117d96.jpeg",
        "https://skdm.in/static/media/off1.2aba26ed57c446f1cc4e.jpeg",
      ],
    },

    {
      type: "festive",
      title: "Ganpati Festive Celebration at 2024",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: "https://skdm.in/static/media/g2.067316ceef8af055b64b.jpeg",
      images: [
        "https://skdm.in/static/media/g2.067316ceef8af055b64b.jpeg",
        "https://skdm.in/static/media/g3.0a3100ecf1b514f6b56e.jpeg",
        "https://skdm.in/static/media/ganpati.5205d6dc41cce8f07ba9.jpeg",
        "https://skdm.in/static/media/ganpati.5205d6dc41cce8f07ba9.jpeg",
      ],
    },
    {
      type: "charity",
      title: "Concert by SKD",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: "https://skdm.in/static/media/pr5.d1078a108b83d9778ceb.jpeg",
      images: [
        "https://skdm.in/static/media/pr5.d1078a108b83d9778ceb.jpeg",
        "https://skdm.in/static/media/pr4.29501f9bd65edff7f8b1.jpeg",
      ],
    },
    {
      type: "birthday",
      title: "Joyti Ma'am birthday celebration",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: "https://skdm.in/static/media/b1.2494a1130d6a05c6fb8f.jpeg",
      images: [
        "https://skdm.in/static/media/b1.2494a1130d6a05c6fb8f.jpeg",
        "https://skdm.in/static/media/b8.62fc756b45f6db6a0268.jpeg",
        "https://skdm.in/static/media/b10.8e5a0f03f7aa94190b02.jpeg",
      ],
    },
    {
      type: "festive",
      title: "New year celebration",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente beatae sit dolorem a necessitatibus possimus doloremque odio nostrum quia quo, quae tenetur, earum nobis? Esse voluptate beatae eos accusantium aliquam.",
      year: "2024",
      banner: "https://skdm.in/static/media/b9.58102060a14c402c4920.jpeg",
      images: ["https://skdm.in/static/media/b9.58102060a14c402c4920.jpeg"],
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
        name = "PR & Charity";
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
        image={
          "https://lh3.googleusercontent.com/p/AF1QipOr46CkP00SNM4i7FjIQUJfEeL884DM0PtqPTA0=s1360-w1360-h1020-rw"
        }
        title="Life at Shree Krishna Digital Solution"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab dolorum, non distinctio voluptatibus deserunt natus tempore corporis vel eum molestiae exercitationem ea, ipsum sunt expedita reiciendis obcaecati! Beatae, repudiandae."
      />

      <section className="section">
        <div className="container mx-auto">
          <div className="section-body flex flex-col justify-center items-center mb-15">
            <h2 className="section-title">
              Memories with Shree Krishna Digital
            </h2>
            <p className="section-contet text-center" style={{ maxWidth: 750 }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Cupiditate, fugit asperiores. Odio asperiores in cupiditate odit
              quod praesentium optio dolorem quam quidem, commodi assumenda
              ducimus rerum, delectus nam debitis aperiam.
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
                      &nbsp; Charity & PR
                    </div>
                  ),
                },
              ]}
            />
          </ConfigProvider>

          <div className="images-list mt-10">
            <div className="grid grid-cols-6 gap-10">
              {(activeKey === "all"
                ? contents
                : contents.filter((val) => val.type === activeKey)
              ).map((val, index) => (
                <div className="col-span-2 relative">
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
