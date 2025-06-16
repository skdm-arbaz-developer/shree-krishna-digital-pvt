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
import { NavLink } from "react-router-dom";

interface CardProps {
  img: string;
  title: string;
  desc: string;
  children?: ReactNode;
  link: string;
}

export default function Industries() {
  const industryList = [
    {
      title: "Healthcare",
      img: doctor,
      desc: "We provide innovative healthcare solutions to enhance patient care and streamline operations.",
      link: "/digital-marketing-for-healthcare-mumbai",
    },
    {
      title: "Education",
      img: education,
      desc: "Empowering educational institutions with technology to enhance learning experiences and administrative efficiency.",
      link: "/digital-marketing-for-education-in-mumbai",
    },
    {
      title: "Resorts & Villa",
      img: resort,
      desc: "Transforming hospitality experiences with cutting-edge solutions for resorts and villas.",
      link: "/digital-marketing-for-resorts-and-villas-in-mumbai",
    },
    {
      title: "Hospitality & Catering",
      img: hospitality,
      desc: "Revolutionizing the hospitality and catering industry with tailored solutions for seamless operations.",
      link: "/digital-marketing-for-hospitality-and-caterers-mumbai ",
    },
    {
      title: "Interior Designs",
      img: interior,
      desc: "Crafting stunning interior designs with innovative solutions that elevate spaces.",
      link: "/digital-marketing-for-interior-designer-mumbai",
    },
    {
      title: "Real Estate",
      img: realestate,
      desc: "Empowering real estate businesses with technology to streamline processes and enhance customer experiences.",
      link: "/digital-marketing-for-real-estate-mumbai",
    },
    {
      title: "Spa & Salon",
      img: salon,
      desc: "Enhancing spa and salon experiences with innovative solutions for better customer engagement and management.",
      link: "/digital-marketing-for-spa-and-salon-mumbai",
    },
  ];
  return (
    <section className="section">
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="section-body flex justify-center flex-col items-center">
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
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="industry-swiper"
          >
            {industryList.map((val, index) => (
              <SwiperSlide key={index}>
                <InductryCard
                  link={val?.link}
                  img={val.img}
                  title={val.title}
                  desc={val.desc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

const InductryCard = ({ img, title, desc, link }: CardProps) => (
  <div className="industry-card">
    <img src={img} alt={title} />
    <NavLink to={link} className="content">
      <h3>{title}</h3>
      <p>{desc}</p>
    </NavLink>
  </div>
);
