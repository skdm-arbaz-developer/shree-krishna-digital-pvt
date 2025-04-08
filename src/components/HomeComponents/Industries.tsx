import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ReactNode } from "react";
import doctor from "../../assets/images/resources/industry/doctor.jpeg";
import hospitality from "../../assets/images/resources/industry/hospitality-and-catering.webp";
import education from "../../assets/images/resources/industry/education.jpeg";
import realestate from "../../assets/images/resources/industry/real-estate.jpeg";
import interior from "../../assets/images/resources/industry/interior-design.jpeg";
import resort from "../../assets/images/resources/industry/resort-villa.jpeg";
import salon from "../../assets/images/resources/industry/spa-salon.jpg";
import "../../css/home/industry.css";

interface CardProps {
  nav: string;
  links: Array<{
    link: string;
    title: string;
  }>; // Corrected type
  children?: ReactNode; // Allow children
}

export default function Industries() {
  const industryList = [
    {
      title: "Healthcare",
      img: doctor,
    },
    {
      title: "Education",
      img: education,
    },
    {
      title: "Resorts & Villa",
      img: resort,
    },
    {
      title: "Hospitality & Catering",
      img: hospitality,
    },
    {
      title: "Interior Designs",
      img: interior,
    },
    {
      title: "Real Estate",
      img: realestate,
    },
    {
      title: "Spa & Salon",
      img: salon,
    },
  ];
  return (
    <section className="section secton-center">
      <div className="container mx-auto">
        <div className="section-body">
          <h2 className="section-title">Indusries, We Serve</h2>
          <p className="section-content">
            We provide a comprehensive range of solutions designed to address
            your unique business challenges and drive meaningful growth.
          </p>
        </div>
        <div className="industry-lists mt-10">
          <Swiper
          
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
            }}
            navigation={true}
            modules={[Navigation]}
            className="industry-swiper"
          >
            {industryList.map((val, index) => (
              <SwiperSlide key={index}>
                <InductryCard link={val.img} title={val.title} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

const InductryCard = ({ link, title }: CardProps) => (
  <div className="industry-card">
    <img src={link} />
    <div className="content">
      <h3>{title}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, debitis.
        Repudiandae vel ab a officiis modi nostrum unde, neque accusamus! Harum
        ducimus inventore rem accusamus aperiam repellat blanditiis maiores.
        Omnis.
      </p>
    </div>
  </div>
);
