import CommanBanner from "../components/support/CommanBanner";
import TeamBanner from "../assets/images/banners/team-banner.jpeg";
import { ConfigProvider, Form, Input, Tabs } from "antd";
import { FaCode, FaPaintbrush, FaUpload } from "react-icons/fa6";
import { MdAdsClick } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { Button } from "antd";

export default function Career() {
  const openPosition = [
    {
      position: "Frontend Developer",
      experinceFrom: "2",
      experinceTo: "4",
      responsibilities: [
        "Develop responsive user interfaces using React.js",
        "Collaborate with backend developers and designers",
        "Optimize applications for maximum speed and scalability",
      ],
      skills: [
        "Strong understanding of JavaScript and modern frontend frameworks like React",
        "Proficient in writing clean HTML and CSS with responsiveness in mind",
        "Familiarity with version control tools like Git",
      ],
      icon: "development",
    },
    {
      position: "Backend Developer",
      experinceFrom: "3",
      experinceTo: "5",
      responsibilities: [
        "Develop and maintain server-side logic",
        "Build RESTful APIs and integrate third-party services",
        "Ensure performance and scalability of backend systems",
      ],
      skills: [
        "Expertise in server-side development using Node.js and Express",
        "Experience working with databases such as MongoDB or MySQL",
        "Ability to write secure and scalable backend code",
      ],
      icon: "development",
    },
    {
      position: "UI/UX Designer",
      experinceFrom: "1",
      experinceTo: "3",
      responsibilities: [
        "Design intuitive and visually appealing interfaces",
        "Create wireframes, prototypes, and design systems",
        "Conduct user research and usability testing",
      ],
      skills: [
        "Proficiency in design tools like Figma or Adobe XD",
        "Understanding of user-centered design principles",
        "Ability to translate requirements into engaging visuals",
      ],
      icon: "graphic",
    },
    {
      position: "Digital Marketing Executive",
      experinceFrom: "2",
      experinceTo: "4",
      responsibilities: [
        "Plan and execute digital marketing campaigns",
        "Monitor SEO/SEM and website analytics",
        "Create and manage content for social media and blogs",
      ],
      skills: [
        "Good grasp of SEO strategies and Google Ads management",
        "Experience with content creation for multiple platforms",
        "Ability to analyze and report campaign performance metrics",
      ],
      icon: "socialmedia",
    },
    {
      position: "Project Manager",
      experinceFrom: "4",
      experinceTo: "7",
      responsibilities: [
        "Coordinate internal resources and third parties/vendors",
        "Ensure projects are delivered on-time and within scope",
        "Manage risk and develop mitigation plans",
      ],
      skills: [
        "Strong leadership and organizational skills",
        "Experience with project management tools and agile methodologies",
        "Excellent communication and stakeholder management abilities",
      ],
      icon: "sales",
    },
    {
      position: "HR Executive",
      experinceFrom: "2",
      experinceTo: "5",
      responsibilities: [
        "Manage recruitment and onboarding process",
        "Handle employee relations and compliance",
        "Support organizational development initiatives",
      ],
      skills: [
        "Knowledge of HR best practices and labor laws",
        "Ability to conduct interviews and evaluate candidates",
        "Experience in employee engagement and performance management",
      ],
      icon: "ads",
    },
  ];

  const findIcon = ({ icon }: { icon: string }) => {
    let returnIcon;

    switch (icon) {
      case "development":
        returnIcon = <FaCode size={30} />;
        break;
      case "graphic":
        returnIcon = <FaPaintbrush size={30} />;
        break;
      case "socialmedia":
        returnIcon = <AiFillInstagram size={30} />;
        break;
      case "sales":
        returnIcon = <RiTeamFill size={30} />;
        break;
      case "ads":
        returnIcon = <MdAdsClick size={30} />;
        break;
    }

    return returnIcon;
  };

  return (
    <>
      <CommanBanner
        title="Shape Your Future with us"
        desc="Join our dynamic team and be part of something extraordinary. We’re looking for passionate individuals who want to make a difference."
        image={TeamBanner}
      />

      <section className="section">
        <div className="container mx-auto">
          <div className="section-body flex justify-center items-center flex-col mb-20">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-content text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  inkBarColor: "#e98c14",
                  itemActiveColor: "#e98c14",
                  itemHoverColor: "#e98c14",
                  itemSelectedColor: "#e98c14",
                },
              },
            }}
          >
            <Tabs
              type="line"
              size="large"
              animated
              style={{ marginBottom: 32 }}
              items={openPosition.map((val, index) => ({
                key: String(index),
                label: (
                  <div className="flex flex-col items-center">
                    {findIcon({ icon: val.icon })}{" "}
                    <span className="mt-3">{val.position}</span>
                  </div>
                ),
                children: (
                  <div className="job_desc mt-10">
                    <div className="flex items-center">
                      <h3 style={{ color: "#e98c14", fontSize: "1.2rem" }}>
                        EXPERIENCE REQUIRED :
                      </h3>
                      <div className="mx-3" style={{ fontSize: "1rem" }}>
                        {val?.experinceFrom} To {val?.experinceTo} Years
                      </div>
                    </div>

                    <h3
                      className="mt-3"
                      style={{ color: "#e98c14", fontSize: "1.2rem" }}
                    >
                      KEY RESPONSIBILITIES :
                    </h3>
                    <ul style={{ listStyle: "initial", paddingLeft: "40px" }}>
                      {val?.responsibilities.map((val, index) => (
                        <li style={{ fontSize: "1rem" }} key={index}>
                          {val}
                        </li>
                      ))}
                    </ul>

                    <h3
                      className="mt-3"
                      style={{ color: "#e98c14", fontSize: "1.2rem" }}
                    >
                      SKILLS REQUIRED :
                    </h3>
                    <ul style={{ listStyle: "initial", paddingLeft: "40px" }}>
                      {val?.skills.map((val, index) => (
                        <li style={{ fontSize: "1rem" }} key={index}>
                          {val}
                        </li>
                      ))}
                    </ul>

                    <h5 className="mt-10" style={{ fontSize: "1.1rem" }}>
                      Interested candidates may email their resumé to the below
                      mentioned email address{" "}
                      <span style={{ color: "#386568" }}>
                        shreekrishnadigital09@gmail.com
                      </span>
                    </h5>

                    <br />
                    <Form layout="horizontal" style={{ maxWidth: 500 }}>
                      <Form.Item
                        name={"name"}
                        label="Candidate Name"
                        rules={[{ required: true }]}
                      >
                        <Input placeholder="Name" />
                      </Form.Item>

                      <Form.Item
                        name={"resume"}
                        label="Upload Resume"
                        rules={[{ required: true }]}
                      >
                        <Input type="file" placeholder="Name" />
                      </Form.Item>

                      <Form.Item>
                        <Button className="comman-button">
                            Submit
                          <FaUpload />
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                ),
              }))}
            />
          </ConfigProvider>
        </div>
      </section>
    </>
  );
}
