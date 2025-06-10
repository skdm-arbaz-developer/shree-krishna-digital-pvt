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
import { Helmet } from "react-helmet";

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
      image: VinayMishra,
      name: "Vinay Mishra",
      designation: "Line Producer & Director",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image: KunalKahtoi,
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
      <Helmet>
        <title>PR Agency in Mumbai | Shree Krishna Digital</title>
        <meta name="description" content="Looking for a PR agency in Mumbai? We offer expert media relations, brand strategy & PR services to help build credibility & connect with your audience." />
        <meta name="keywords" content="Best Digital Marketing Agency In Mumbai,Digital Marketing Company In Mumbai,Digital Marketing Experts In Mumbai,Top Digital Marketing Services In Mumbai,Life At Digital Marketing Agency In Mumbai,Digital Marketing In Mumbai,Top Digital Marketing Company In Mumbai,Internet Marketing Service In Mumbai,Digital Marketing In Mumbai,Best SEO Company In Mumbai,Social Media Marketing Agency In Mumbai,Google My Business listing service,PPC Agency Mumbai,PR Agency In Mumbai,Web Development Company In Mumbai,App Development Company In Mumbai,CRM Development Company In Mumbai,Digital Marketing For Healthcare In Mumbai,Digital Marketing For Hospitility & Caterers In Mumbai,Digital Marketing For Real Estate In Mumbai,Digital Marketing For Resort & Villas In Mumbai,Digital Marketing For Interior Designer In Mumbai,Digital Marketing For Spa & Salon In Mumbai,Digital Marketing For Education In Mumbai,Digital Marketing For Real Life Style In Mumbai,Best Digital Marketing Agency In Mumbai ,Online Marketing Near Mumbai,Search Engine Optimization in India,Social Media Marketing in India,Google My Business in India,Pay Per Click Marketing In India,Web Developement In India,Application Development In India,Search Engine Optimization in Australia,Social Media Marketing in Australia,GMB Optimization Service in Australia,Pay Per Click Marketing in Australia,Web Developement in Australia,Application Development in Australia,Search Engine Optimization in Canada,Social Media Marketing in Canada,GMB Optimization Service in Canada,Pay Per Click Marketing in Canada,Web Developement in Canada,Application Development in Canada,Search Engine Optimization in Malaysia,Social Media Marketing in Malaysia,GMB Optimization Service in Malaysia,Pay Per Click Marketing in Malaysia,Web Developement in Malaysia,Application Development in Malaysia,Search Engine Optimization in Nepal ,Social Media Marketing in Nepal ,GMB Optimization Service in Nepal,Pay Per Click Marketing in Nepal,Web Developement in Nepal,Application Development in Nepal,Search Engine Optimization in Dubai,Social Media Marketing in Dubai,GMB Optimization Service in Dubai ,Pay Per Click Marketing in Dubai,Web Developement in Dubai,Application Development in Dubai,Search Engine Optimization in USA,Social Media Marketing in USA,GMB Optimization Service in USA,Pay Per Click Marketing in USA,Web Developement in USA,Application Development in USA,Search Engine Optimization in United Kingdom,Social Media Marketing in United Kingdom,GMB Optimization Service in United Kingdom ,Pay Per Click Marketing in United Kingdom,Web Developement in United Kingdom,Application Development in United Kingdom,Search Engine Optimization in Maldives,Social Media Marketing in Maldives,GMB Optimization Service in Maldives,Pay Per Click Marketing in Maldives,Web Developement in Maldives,Application Development in Maldives" />
        <link rel="canonical" href="https://skdm.in/pr-agency-mumbai" />
        <meta httpEquiv="cache-control" content="no-cache" />
        <meta httpEquiv="expires" content="0" />
        <meta httpEquiv="pragma" content="no-cache" />
        <meta property="og:title" content="PR Agency in Mumbai | Shree Krishna Digital" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://skdm.in/" />
        <meta property="og:description" content="Looking for a PR agency in Mumbai? We offer expert media relations, brand strategy & PR services to help build credibility & connect with your audience." />
        <meta property="og:image" content="https://katariashubli.com/static/media/kartaria%20logo.61ab17e04111050f3cc9.png" />
      </Helmet>
      <CommanBanner
        title="PR Agency In Mumbai"
        desc="At Shree Krishna Digital Solutions Pvt Ltd, we specialize in creating powerful PR narratives and performance-driven advertising campaigns that elevate your brand and connect with your audience across all platforms."
        image={PrAd}
      />
      <section className="section relative">
        <img src={SvgIcon} className="absolute top-0 right-0" alt="PR Agency in Mumbai"/>
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
                At Shree Krishna Digital Solutions Pvt Ltd, we are more than just an advertising company; we are your brand’s growth partner. Our mission is to craft creative, result-oriented campaigns that connect businesses with their audience in meaningful ways. From digital ads and social media marketing to print media and outdoor advertising, we offer 360° advertising solutions tailored to your goals.
                </p>
                <p className="section-content pt-3">
                Our team of strategists, designers, and media planners works closely with you to understand your vision and translate it into high-impact campaigns that drive visibility, engagement, and conversions. Whether you're a startup building awareness or an established brand aiming to scale, we deliver measurable results with data-backed strategies and innovative creativity.We don’t just advertise; we build brands, shape reputations, and drive business success.
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
                We are your partners in purposeful communication at Shree Krishna Digital Solutions Pvt Ltd, offering professional PR marketing support that brings your brand story to life. Our team helps you engage with your audience through newsworthy press releases, targeted media placements, and storytelling that connects. 
                </p>
                <p className="section-content pt-3">
                We design PR strategies that go beyond promotion to build reputation, increase visibility, and drive customer trust. From media relations and corporate communication to influencer tie-ups and event promotions, our approach ensures you’re in control of your narrative. Whether you want to launch a product, strengthen credibility, or handle a sensitive issue, our PR support is thoughtful, timely, and effective. We don’t just create noise; we build influence. Let your brand speak louder, smarter, and with purpose.
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
        <img src={FaqArrow} className="absolute -top-10 left-0" alt="PR Top Agency in Mumbai"/>
        <img src={FaqStart} className="absolute top-0 right-0" alt="PR company In Mumbai"/>
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="section-body flex justify-center items-center flex-col">
            <h2 className="section-title text-center">Team Behind the Ads</h2>
            <p
              className="section-content text-center"
              style={{ maxWidth: 900 }}
            >
      We are the team behind the ads, crafting campaigns with care, creativity, and strategy. Each project reflects our passion for helping brands achieve visibility and connection.
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
            {/* <p className="section-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quibusdam fuga tenetur neque soluta facere! Ipsa esse sint dolorum
              quidem magni unde qui exercitationem inventore. Voluptas fugiat
              nam maxime non! Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p> */}
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
