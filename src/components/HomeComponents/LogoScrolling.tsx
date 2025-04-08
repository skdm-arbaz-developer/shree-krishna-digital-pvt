import "../../css/home/logoscroll.css";
import image1 from "../../assets/images/partners/Google.png";
import image2 from "../../assets/images/partners/GoogleAds.png";
import image3 from "../../assets/images/partners/Meta.png";
import image4 from "../../assets/images/partners/PhonePe.png";
import image5 from "../../assets/images/partners/Rayzorpay.png";

export default function LogoScrolling() {
  const brandslogo = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
    image1,
    image2,
    image3,
    image4,
    image5,
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0 p-3 z-10">
      <div className="scrolling-logo">
        <h5 className="label-style">
          Our Trusted <br />
          Partners
        </h5>
        <div className="logo-list">
          <div className="logo-scroll">
            {brandslogo.map((val, index) => (
              <img key={index} src={val} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
