import { FaBusinessTime } from "react-icons/fa6";
import img2 from "../../assets/images/resources/image-2.jpg"


export default function Promotion({ data }: any) {
  return (
    <section className="parallax-section">
      <div
        className="image-layer"
        style={{
          backgroundImage:
            `url(${img2})`,
        }}
      />
      <div className="auto-container">
        <div className="content-box">
          <div className="icon-box">
            <FaBusinessTime />
          </div>
          <h2>
            {data?.promotionSection?.title}
            <span>{data?.promotionSection?.secondTitle}</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
