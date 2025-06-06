import { Button } from "antd";
import CommanBanner from "../components/support/CommanBanner";
import "../css/prads.css";
import { MdPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "../css/team.css";
import "../css/home/logoscroll.css";
// import image1 from "../assets/images/partners/Google.png";
// import image2 from "../assets/images/partners/GoogleAds.png";
// import image3 from "../assets/images/partners/Meta.png";
// import image4 from "../assets/images/partners/PhonePe.png";
// import image5 from "../assets/images/partners/Rayzorpay.png";
// import { BsArrowRight } from "react-icons/bs";
import PortfolioSectionCard from "../components/AdsAndPR/PortfolioSectionCard";
import SvgIcon from "../assets/images/icons/home-about-right.svg";
import FaqArrow from "../assets/images/icons/faq-arrow.svg";
import FaqStart from "../assets/images/icons/faq-star.svg";
import VinayMishra from "../assets/images/resources/VinayMishra.jpg"
import KunalKahtoi from "../assets/images/resources/KunalKahtoi.jpeg"
import PrAd from "../assets/images/banners/pr-ad-banner.webp"

export default function WhoWeArePrAdd() {
  const teamlist = [
    // {
    //   image:
    //     "https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/idh8kcnm6i6sipzztpfo",
    //   name: "Ambrish Kumar",
    //   designation: "Line Producer",
    //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel ?",
    // },
    {
      image:VinayMishra,
      name: "Vinay Mishra",
      designation: "Line Producer & Director",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image:KunalKahtoi,
      name: "Kunal Kahtoi",
      designation: "Director of Photography",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    // {
    //   image:
    //     "https://images.pexels.com/photos/8528852/pexels-photo-8528852.jpeg?auto=compress&cs=tinysrgb&w=1200",
    //   name: "Priyanka Salvi",
    //   designation: "Director",
    //   desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    // },
  ];

  // const brandslogo = [
  //   image1,
  //   image2,
  //   image3,
  //   image4,
  //   image5,
  //   image1,
  //   image2,
  //   image3,
  //   image4,
  //   image5,
  //   image1,
  //   image2,
  //   image3,
  //   image4,
  //   image5,
  // ];

  const portfolio = [
    "712504241",
    "710620003",
    "847300024",
    "907197645",
    "712504197",
    "937415805",
    "874282187",
    "211531746",
    "760366144",
  ];


  return (
    <>
      <CommanBanner
        title="Who We Are - PR & Advertising"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, maxime, porro, quae perferendis odit dolorem eveniet odio saepe inventore repudiandae non repellendus commodi a corporis? Consequuntur aspernatur officia vero dolores!"
        image= {PrAd}
      />
      <section className="section relative">
        <img src={SvgIcon} className="absolute top-0 right-0" />
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="md:grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-5">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1037736318?h=8fa5d2c1e9"
                width={"100%"}
                className="min-h-[250px] h-full"
                frameBorder={0}
              />
            </div>
            <div className="col-span-12 md:col-span-7">
              <div className="section-body">
                <h2 className="section-title">We are as Advertising Company</h2>
                <p className="section-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque, deleniti. Neque in eum, voluptates voluptatem vel modi
                  ut laborum officia incidunt voluptas nam accusamus eligendi,
                  asperiores magnam nisi! Expedita, magnam?
                </p>
                <p className="section-content pt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque, deleniti. Neque in eum, voluptates voluptatem vel modi
                  ut laborum officia incidunt voluptas nam accusamus eligendi,
                  asperiores magnam nisi! Expedita, magnam? Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Itaque, deleniti.
                  Neque in eum, voluptates voluptatem vel modi ut laborum
                  officia incidunt voluptas nam accusamus eligendi, asperiores
                  magnam nisi! Expedita, magnam? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Itaque, deleniti. Neque in eum,
                  voluptates voluptatem vel modi ut laborum officia incidunt
                  voluptas nam accusamus eligendi, asperiores magnam nisi!
                  Expedita, magnam?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="md:grid grid-cols-12 gap-10">
            <div className="col-span-12 md:col-span-7">
              <div className="section-body">
                <h2 className="section-title">
                  We are as In PR Marketing Support
                </h2>
                <p className="section-content">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque, deleniti. Neque in eum, voluptates voluptatem vel modi
                  ut laborum officia incidunt voluptas nam accusamus eligendi,
                  asperiores magnam nisi! Expedita, magnam?
                </p>
                <p className="section-content pt-3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Itaque, deleniti. Neque in eum, voluptates voluptatem vel modi
                  ut laborum officia incidunt voluptas nam accusamus eligendi,
                  asperiores magnam nisi! Expedita, magnam? Lorem ipsum dolor
                  sit, amet consectetur adipisicing elit. Itaque, deleniti.
                  Neque in eum, voluptates voluptatem vel modi ut laborum
                  officia incidunt voluptas nam accusamus eligendi, asperiores
                  magnam nisi! Expedita, magnam? Lorem ipsum dolor sit, amet
                  consectetur adipisicing elit. Itaque, deleniti. Neque in eum,
                  voluptates voluptatem vel modi ut laborum officia incidunt
                  voluptas nam accusamus eligendi, asperiores magnam nisi!
                  Expedita, magnam?
                </p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-5">
              <video controls>
                <source src="https://videos.pexels.com/video-files/6878737/6878737-uhd_2732_1440_25fps.mp4"></source>
              </video>
            </div>
          </div>
        </div>
      </section>

      <div className="adspromotion">
        <video autoPlay loop>
          <source src="https://videos.pexels.com/video-files/854106/854106-hd_1920_1080_25fps.mp4" />
        </video>

        <div className="adscontent">
          <h2>Curious About What More We Can Do For Your Brand?</h2>
          <h5>Let’s Chat Over A Cup Of Coffee!</h5>
          <NavLink to={"tel:+917039212103"}>
            <Button className="comman-button">
              Let's Discuss
              <MdPhone />
            </Button>
          </NavLink>
        </div>
      </div>
      <section className="section relative section-dark">
        <img src={FaqArrow} className="absolute -top-10 left-0" />
        <img src={FaqStart} className="absolute top-0 right-0" />
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="section-body flex justify-center items-center flex-col">
            <h2 className="section-title text-center">Team Behind the Ads</h2>
            <p
              className="section-content text-center"
              style={{ maxWidth: 900 }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              nesciunt quis eaque eos animi temporibus repellat a facere aliquam
              quasi at laboriosam molestias quia ea vitae, quos distinctio,
              repudiandae hic!
            </p>
          </div>

          <div className="team-list mt-20">
            <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {teamlist.map((val, index) => (
                <TeamCard data={val} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section section-gray">
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="section-body flex justify-center items-center flex-col">
            <h2 className="section-title text-center">
              Our Associate partners for PR
            </h2>
            <p
              className="section-content text-center"
              style={{ maxWidth: 900 }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
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
      </section> */}

      <section className="section" style={{ paddingBottom: "0px" }}>
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="section-body">
            <div className="flex justify-between">
              <h2 className="section-title">Our Portfolio</h2>
              {/* <NavLink to="/our-portfolio">
                <Button className="comman-button mt-5">
                  Know More <BsArrowRight />
                </Button>
              </NavLink> */}
            </div>
            <p className="section-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quibusdam fuga tenetur neque soluta facere! Ipsa esse sint dolorum
              quidem magni unde qui exercitationem inventore. Voluptas fugiat
              nam maxime non! Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>

          <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
            {portfolio.map((val, index) => (
              <PortfolioSectionCard key={index} index={index} portfolio={val} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const TeamCard = ({ data }: any) => (
  <div className="team-card">
    <div className="team-image">
      <img src={data?.image} alt={data?.name} />
    </div>
    <div className="team-detail">
      {/* <p className="team-content">{data?.desc}</p> */}

      <div className="team-title">
        <h3>{data?.name}</h3>
        <h4>{data?.designation}</h4>
      </div>
    </div>
  </div>
);
