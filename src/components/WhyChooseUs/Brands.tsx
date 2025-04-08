import image1 from "../../assets/images/partners/Google.png";
import image2 from "../../assets/images/partners/GoogleAds.png";
import image3 from "../../assets/images/partners/Meta.png";
import image4 from "../../assets/images/partners/PhonePe.png";
import image5 from "../../assets/images/partners/Rayzorpay.png";

export default function Brands() {
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
    <section className="section section-gray">
      <div className="container mx-auto">
        <div className="section-body flex justify-center items-center flex-col">
          <h2 className="section-title">Trusted by leading brands</h2>
          <p className="section-content">
            Explore the companies that trust us to deliver exceptional results.
          </p>
        </div>

        <div className="logo-list mt-20">
          <div className="logo-scroll">
            {brandslogo.map((val, index) => (
              <img key={index} src={val} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
