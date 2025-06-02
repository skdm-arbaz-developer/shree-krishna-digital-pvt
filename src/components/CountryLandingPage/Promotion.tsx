import { FaBusinessTime } from "react-icons/fa6";

export default function Promotion({ data }: any) {
  return (
    <section className="parallax-section">
      <div
        className="image-layer"
        style={{
          backgroundImage:
            "url(https://linoor-nuxt.netlify.app/images/background/image-2.jpg)",
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
