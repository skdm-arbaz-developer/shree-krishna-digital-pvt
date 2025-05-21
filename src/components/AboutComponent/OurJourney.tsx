import { FaCalendar } from "react-icons/fa6";
import FaqArrow from "../../assets/images/icons/faq-arrow.svg";
import FaqStart from "../../assets/images/icons/faq-star.svg";
import "../../css/aboutpage.css";

export default function OurJourney() {
  const jouneyData = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg",
      year: "2018",
      title: "The Beginning",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse at veritatis quaerat, placeat autem corporis in facere deleniti itaque minus sapiente perferendis ipsa possimus ullam mollitia consequuntur. Asperiores, quibusdam quidem.",
    },
    {
      image:
        "https://images.pexels.com/photos/6077983/pexels-photo-6077983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      year: "2020",
      title: "First Milestone",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse at veritatis quaerat, placeat autem corporis in facere deleniti itaque minus sapiente perferendis ipsa possimus ullam mollitia consequuntur. Asperiores, quibusdam quidem.",
    },
    {
      image:
        "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      year: "2021",
      title: "Expansion",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse at veritatis quaerat, placeat autem corporis in facere deleniti itaque minus sapiente perferendis ipsa possimus ullam mollitia consequuntur. Asperiores, quibusdam quidem.",
    },
    {
      image:
        "https://images.pexels.com/photos/8111895/pexels-photo-8111895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      year: "2023",
      title: "Client Success",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse at veritatis quaerat, placeat autem corporis in facere deleniti itaque minus sapiente perferendis ipsa possimus ullam mollitia consequuntur. Asperiores, quibusdam quidem.",
    },
    {
      image:
        "https://images.pexels.com/photos/8353804/pexels-photo-8353804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      year: "2024 & Beyond",
      title: "Innovation Hub",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse at veritatis quaerat, placeat autem corporis in facere deleniti itaque minus sapiente perferendis ipsa possimus ullam mollitia consequuntur. Asperiores, quibusdam quidem.",
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

        <div className="container mx-auto">
          <div className="section-body flex flex-col justify-between items-center">
            <h2
              className="section-title"
              style={{ maxWidth: "600px" }}
            >
              SKDM’s Journey: From Vision to Reality
            </h2>
            <p
              className="section-content"
              style={{ maxWidth: "700px" }}
            >
              From a bold vision in 2018 to becoming a trusted digital partner,
              our journey is defined by innovation, growth, and client success.
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
          <section className="section journey-content" >
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
