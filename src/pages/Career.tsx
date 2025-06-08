import CommanBanner from "../components/support/CommanBanner";
import TeamBanner from "../assets/images/banners/team-banner.jpeg";
import { ConfigProvider, Form, Input, Tabs } from "antd";
import { FaCode, FaPaintbrush, FaUpload } from "react-icons/fa6";
import { MdAdsClick } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { RiTeamFill } from "react-icons/ri";
import { Button } from "antd";
import { Helmet } from "react-helmet";

export default function Career() {
  const openPosition = [
    {
      position: "Frontend Developer",
      experinceFrom: "1",
      experinceTo: "2",
      responsibilities: [
        "Develop user interfaces using React.js",
        "Collaborate with backend team for API integration",
        "Ensure responsive design and cross-browser compatibility",
      ],
      skills: [
        "Proficiency in React.js and JavaScript",
        "Basic understanding of HTML, CSS, and responsive design",
        "Familiarity with Git and code versioning",
      ],
      icon: "development",
    },
    {
      position: "Backend Developer",
      experinceFrom: "1",
      experinceTo: "2",
      responsibilities: [
        "Build and maintain backend services using Laravel",
        "Integrate APIs and manage databases",
        "Ensure backend performance and data security",
      ],
      skills: [
        "Good understanding of PHP and Laravel framework",
        "Experience with MySQL or related databases",
        "Basic knowledge of RESTful APIs and MVC architecture",
      ],
      icon: "development",
    },
    {
      position: "Sales Executive",
      experinceFrom: "2",
      experinceTo: "3",
      responsibilities: [
        "Conduct client visits and manage sales meetings",
        "Understand customer needs and offer suitable solutions",
        "Generate leads and follow up on sales inquiries",
      ],
      skills: [
        "Basic knowledge of client meetings and field sales",
        "Good communication and interpersonal skills",
        "Ability to build relationships and close deals",
      ],
      icon: "sales",
    },
    {
      position: "Digital Marketing Executive",
      experinceFrom: "1",
      experinceTo: "2",
      responsibilities: [
        "Assist in planning digital marketing strategies",
        "Handle social media and basic SEO tasks",
        "Support content creation and campaign tracking",
      ],
      skills: [
        "Basic understanding of SEO, social media, and Google tools",
        "Experience in content creation and digital promotion",
        "Ability to analyze basic performance metrics",
      ],
      icon: "socialmedia",
    },
    {
      position: "HR Executive",
      experinceFrom: "1",
      experinceTo: "2",
      responsibilities: [
        "Assist with recruitment and onboarding",
        "Maintain employee records and support HR policies",
        "Support team coordination and employee engagement",
      ],
      skills: [
        "Basic knowledge of HR practices and hiring process",
        "Good communication and documentation skills",
        "Ability to handle employee queries and maintain records",
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
      <Helmet>
        <title>Best Digital Marketing Agency in Mumbai | Shree Krishna Digital</title>
        <meta name="description" content="Partner with Mumbai’s top digital agency for SEO, social media, Google Ads, and branding. Get real results with strategies tailored to your goal." />
        <meta name="keywords" content="Best Digital Marketing Agency In Mumbai,Digital Marketing Company In Mumbai,Digital Marketing Experts In Mumbai,Top Digital Marketing Services In Mumbai,Life At Digital Marketing Agency In Mumbai,Digital Marketing In Mumbai,Top Digital Marketing Company In Mumbai,Internet Marketing Service In Mumbai,Digital Marketing In Mumbai,Best SEO Company In Mumbai,Social Media Marketing Agency In Mumbai,Google My Business listing service,PPC Agency Mumbai,PR Agency In Mumbai,Web Development Company In Mumbai,App Development Company In Mumbai,CRM Development Company In Mumbai,Digital Marketing For Healthcare In Mumbai,Digital Marketing For Hospitility & Caterers In Mumbai,Digital Marketing For Real Estate In Mumbai,Digital Marketing For Resort & Villas In Mumbai,Digital Marketing For Interior Designer In Mumbai,Digital Marketing For Spa & Salon In Mumbai,Digital Marketing For Education In Mumbai,Digital Marketing For Real Life Style In Mumbai,Best Digital Marketing Agency In Mumbai ,Online Marketing Near Mumbai,Search Engine Optimization in India,Social Media Marketing in India,Google My Business in India,Pay Per Click Marketing In India,Web Developement In India,Application Development In India,Search Engine Optimization in Australia,Social Media Marketing in Australia,GMB Optimization Service in Australia,Pay Per Click Marketing in Australia,Web Developement in Australia,Application Development in Australia,Search Engine Optimization in Canada,Social Media Marketing in Canada,GMB Optimization Service in Canada,Pay Per Click Marketing in Canada,Web Developement in Canada,Application Development in Canada,Search Engine Optimization in Malaysia,Social Media Marketing in Malaysia,GMB Optimization Service in Malaysia,Pay Per Click Marketing in Malaysia,Web Developement in Malaysia,Application Development in Malaysia,Search Engine Optimization in Nepal ,Social Media Marketing in Nepal ,GMB Optimization Service in Nepal,Pay Per Click Marketing in Nepal,Web Developement in Nepal,Application Development in Nepal,Search Engine Optimization in Dubai,Social Media Marketing in Dubai,GMB Optimization Service in Dubai ,Pay Per Click Marketing in Dubai,Web Developement in Dubai,Application Development in Dubai,Search Engine Optimization in USA,Social Media Marketing in USA,GMB Optimization Service in USA,Pay Per Click Marketing in USA,Web Developement in USA,Application Development in USA,Search Engine Optimization in United Kingdom,Social Media Marketing in United Kingdom,GMB Optimization Service in United Kingdom ,Pay Per Click Marketing in United Kingdom,Web Developement in United Kingdom,Application Development in United Kingdom,Search Engine Optimization in Maldives,Social Media Marketing in Maldives,GMB Optimization Service in Maldives,Pay Per Click Marketing in Maldives,Web Developement in Maldives,Application Development in Maldives" />
        <link rel="canonical" href="https://skdm.in/" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta property="og:title" content="Best Digital Marketing Agency in Mumbai | Shree Krishna Digital" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skdm.in/" />
        <meta property="og:description" content="Partner with Mumbai’s top digital agency for SEO, social media, Google Ads, and branding. Get real results with strategies tailored to your goal. " />
        <meta property="og:image" content="https://katariashubli.com/static/media/kartaria%20logo.61ab17e04111050f3cc9.png" />
      </Helmet>
      <CommanBanner
        title="Best Digital Marketing Agency In Mumbai"
        desc="Join our dynamic team and be part of something extraordinary. We’re looking for passionate individuals who want to make a difference."
        image={TeamBanner}
      />

      <section className="section">
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="section-body flex justify-center items-center flex-col mb-20">
            <h2 className="section-title">Open Positions</h2>
            <p className="section-content text-center">
              Explore exciting career opportunities with us! We are looking for
              talented individuals to join our team in various roles. If you are
              passionate about your work and eager to grow, we would love to
              hear from you.
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
