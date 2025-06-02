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
      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="section-body flex justify-center items-center flex-col">
          <h2 className="section-title">Chosen by top brands for results</h2>
          <p className="section-content md:text-center mx-w-[900px]">
            We're chosen by brands like Google and PhonePe because we deliver
            what matters: growth. As a top digital marketing service in Mumbai,
            our results speak for themselves through strong partnerships and
            digital experience.
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
