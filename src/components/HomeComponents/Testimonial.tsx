import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ReactNode } from "react";
import "../../css/home/testimonial.css";
import { BsQuote } from "react-icons/bs";
import { Avatar } from "antd";
import { FaUser } from "react-icons/fa6";
import FaqArrow from "../../assets/images/icons/faq-arrow.svg";
import FaqStart from "../../assets/images/icons/faq-star.svg";


interface CardProps {
  review: string;
  name: string;
  company: string;
  children?: ReactNode; // Allow children
}

export default function Testimonial() {
  const testimonials = [
    {
      review:
        "Amazing service! The team was very professional and delivered beyond expectations.",
      name: "Rahul Sharma",
      company: "Tech Solutions",
    },
    {
      review: "Great experience! Their attention to detail is commendable.",
      name: "Sneha Verma",
      company: "Creative Minds",
    },
    {
      review: "Highly recommend! Excellent quality and timely delivery.",
      name: "Amit Patel",
      company: "Web Innovators",
    },
    {
      review: "Fantastic work! The project was completed flawlessly.",
      name: "Neha Singh",
      company: "Design Hub",
    },
    {
      review:
        "Professional and efficient! Will definitely work with them again.",
      name: "Rohit Mehta",
      company: "Digital Experts",
    },
    {
      review:
        "Exceptional service! They went above and beyond our expectations.",
      name: "Pooja Malhotra",
      company: "Brand Boosters",
    },
    {
      review:
        "Very satisfied with the outcome! The team was helpful throughout.",
      name: "Vikram Joshi",
      company: "Startup Labs",
    },
    {
      review:
        "Great communication and execution. The end result was fantastic!",
      name: "Ankita Pandey",
      company: "NextGen Solutions",
    },
    {
      review: "Loved the creativity and professionalism. Highly recommend!",
      name: "Sandeep Kapoor",
      company: "Elite Designs",
    },
    {
      review:
        "A pleasure to work with! They made the entire process smooth and easy.",
      name: "Meenal Thakur",
      company: "Visionary Marketing",
    },
    {
      review: "Superb results! They understood our requirements perfectly.",
      name: "Kunal Desai",
      company: "Modern Developers",
    },
    {
      review:
        "Quality work and great customer service. Impressed with their dedication.",
      name: "Riya Gupta",
      company: "Social Creators",
    },
    {
      review: "Reliable and efficient. Delivered exactly what we needed!",
      name: "Arjun Nair",
      company: "Ecom Boosters",
    },
    {
      review: "Excellent team! Their creativity and expertise are unmatched.",
      name: "Divya Saxena",
      company: "Innovate Digital",
    },
    {
      review: "Great value for money. The results exceeded our expectations.",
      name: "Mohit Reddy",
      company: "Smart Solutions",
    },
  ];

  return (
    <section className="section section-dark mb-110 relative">
      <img src={FaqArrow} className="absolute -top-10 left-0" />
      <img src={FaqStart} className="absolute top-0 right-0" />

      <div className="container mx-auto relative">
        <div className="section-body flex justify-center pb-20">
          <h2 className="section-title">What our clients, Say</h2>
        </div>

        <div className="testimonial-list mt-30 lg:mt-20">
          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            spaceBetween={20}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Navigation, Pagination]}
            className="industry-swiper"
          >
            {testimonials.map((val, index) => (
              <SwiperSlide className="pb-20" key={index}>
                <TestimonialCard
                  review={val.review}
                  name={val.name}
                  company={val.company}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

const TestimonialCard = ({ review, name, company }: CardProps) => (
  <div className="testimonial-card">
    <div className="review">
      <BsQuote />
      <p>{review}</p>
    </div>
    <div className="writer-detail">
      <Avatar size={50} shape="circle" icon={<FaUser />} />
      <div className="testimonial-contact-detail">
        <h5>{name}</h5>
        <p>{company}</p>
      </div>
    </div>
  </div>
);
