import { FaCalendar } from "react-icons/fa6";
import FaqArrow from "../../assets/images/icons/faq-arrow.svg";
import FaqStart from "../../assets/images/icons/faq-star.svg";
import "../../css/aboutpage.css";
import journey1 from "../../assets/images/resources/journey1.jpg";
import journey2 from "../../assets/images/resources/journey2.jpg";
import journey3 from "../../assets/images/resources/journey3.jpg";
import journey4 from "../../assets/images/resources/journey4.jpg";
import journey5 from "../../assets/images/resources/journey5.webp";

export default function OurJourney() {
  const jouneyData = [
    {
      image:journey1,
      year: "2018",
      title: "The Beginning",
      content:
        "Two individuals set out on a journey to enhance online business growth with the launch of Shree Krishna Digital Solutions Pvt Ltd in 2018. With just a single SEO project and a website assignment, our journey began from a small setup. This marked the birth of a future-leading digital marketing company in Mumbai.",
    },
    {
      image:journey2,
      year: "2020",
      title: "Building Our Core Team",
      content:
        "By 2020, we had moved into our first office space and formed a dedicated team of 10 professionals. We successfully completed 64 website development projects and 38 social media campaigns. Our work ethic and results laid the foundation for Shree Krishna Digital Solutions Pvt Ltd as a go-to digital marketing company in Mumbai.",
    },
    {
      image:journey3,
      year: "2021",
      title: "Growth Through Consistency",
      content:
        "We carried our momentum into 2021, crossing the mark of 100+ completed digital projects. With every project, we built more trust and loyalty among clients, growing our influence and reputation across various industries.",
    },
    {
      image:journey4,
      year: "2023",
      title: "A Landmark Year",
      content:
        "2023 was a game-changing year. Shree Krishna Digital Solutions Pvt Ltd achieved its highest revenue, proudly serving over 300+ clients. We delivered 100+ SEO projects and 100+ social media marketing campaigns. This year, we also introduced professional Ads and PR services, expanding our reach and impact.",
    },
    {
      image:journey5,
      year: "2024 & Beyond",
      title: "Scaling New Heights",
      content:
        "By 2024, our consistent dedication helped us serve over 600+ happy clients. With a growing team and stronger strategies, we continue to deliver end-to-end digital solutions, empowering businesses to thrive online.",
    },
  ];
  return (
    <>
      <section
        className="section section-dark"
        style={{ padding: "50px 0 30px 0" }}
      >
        <img src={FaqArrow} className="absolute -top-10 left-0" />
        <img src={FaqStart} className="absolute top-0 right-0" />

        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="section-body flex flex-col justify-between items-center">
            <h2
              className="section-title lg:text-center"
              style={{ maxWidth: "900px" }}
            >
              Where It All Began: Shree Krishna Digital Solutions Pvt Ltd's
              Growth Story
            </h2>
            <p
              className="section-content lg:text-center"
              style={{ maxWidth: "700px" }}
            >
              Started in 2018 with a dream, Shree Krishna Digital Solutions Pvt
              Ltd grew into a reliable digital force built on trust and
              creativity.
            </p>
          </div>
        </div>
      </section>

      {jouneyData.map((item, index) => (
        <JourneyCard
          key={index}
          year={item.year}
          title={item.title}
          content={item.content}
          image={item.image}
          index={index + 1}
        />
      ))}
    </>
  );
}
const JourneyCard = ({ year, title, content, image, index }: any) => {
  return (
    <div className="journey-card">
      <div className="md:grid md:grid-cols-2 relative">
        <div
          className={`journey-image ${index % 2 === 0 ? "order-2" : "order-1"}`}
        >
          <img src={image} alt={title} />
        </div>
        <div
          className={`journey-content-left ${
            index % 2 === 0 ? "order-1 left-section" : "order-2 right-section"
          }`}
        >
          <section className="section journey-content">
            <span className="journey-icon">
              <FaCalendar />
              {year}
            </span>
            <h2 className="section-title">{title}</h2>
            <p>{content}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
