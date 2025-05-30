import { FaBusinessTime } from "react-icons/fa6";

export default function Promotion() {
  return (
    <section className="parallax-section">
      <div
        className="image-layer"
        style={{ backgroundImage: "url(https://linoor-nuxt.netlify.app/images/background/image-2.jpg)" }}
      />
      <div className="auto-container">
        <div className="content-box">
          <div className="icon-box">
            <FaBusinessTime />
          </div>
          <h2>
            Great things in business are never done by one person.
            <span>They’re done by a team of people.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
