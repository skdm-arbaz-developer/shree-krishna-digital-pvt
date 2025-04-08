import { Button } from "antd";
import banner from "../../assets/videos/homebanner.mp4";
import "../../css/home/banner.css";
import { FaAngleRight } from "react-icons/fa6";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          expedita dolor praesentium officia placeat illo.
        </p>
        <Button className="comman-button">
          Contact Us <FaAngleRight />
        </Button>
      </div>
    </div>
  );
}
