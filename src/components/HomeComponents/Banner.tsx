import { Button } from "antd";
import banner from "../../assets/videos/homebanner.mp4";
import "../../css/home/banner.css";
import { FaAngleRight } from "react-icons/fa6";
import EnquiryForm from "../Modal/EnquiryForm";

export default function Banner() {
  return (
    <div className="home_banner">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={banner} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="video-content">
        <h2>Digital Innovation for</h2>
        <h3 className="gradient-text">Bussiness Growth</h3>
        <p>
          We are a leading digital marketing agency, dedicated to helping
          businesses thrive in the digital landscape. Our team of experts
          specializes in creating tailored strategies that drive results and
          elevate your brand's online presence.
        </p>
        <EnquiryForm />
      </div>
    </div>
  );
}
