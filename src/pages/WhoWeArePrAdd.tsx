import { Button } from "antd";
import CommanBanner from "../components/support/CommanBanner";
import "../css/prads.css";
import { MdPhone } from "react-icons/md";
import { NavLink } from "react-router-dom";
import "../css/team.css";
import "../css/home/logoscroll.css";
import image1 from "../assets/images/partners/Google.png";
import image2 from "../assets/images/partners/GoogleAds.png";
import image3 from "../assets/images/partners/Meta.png";
import image4 from "../assets/images/partners/PhonePe.png";
import image5 from "../assets/images/partners/Rayzorpay.png";
import { BsArrowRight } from "react-icons/bs";
import PortfolioSectionCard from "../components/AdsAndPR/PortfolioSectionCard";

export default function WhoWeArePrAdd() {
  const teamlist = [
    {
      image:
        "https://images.crunchbase.com/image/upload/c_thumb,h_256,w_256,f_auto,g_face,z_0.7,q_auto:eco,dpr_1/idh8kcnm6i6sipzztpfo",
      name: "Ambrish Kumar",
      designation: "Line Producer",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel ?",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=uHzeaBv3V2z6Tp6wvhzGABlTs9HR-SP-tEX1UbYNn4Q",
      name: "Vinay Mishra",
      designation: "Line Producer & Director",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXCZZDzciK3-mZZoILFVCc6IyDLQ7j0GKz_iRmGmD8r0jnDJBSPSSx9spfKu8xy0Ngdk&usqp=CAU",
      name: "Kunal Kahtoi",
      designation: "Director of Photography",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image:
        "https://images.pexels.com/photos/8528852/pexels-photo-8528852.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Priyanka Salvi",
      designation: "Director",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
  ];

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

  const portfolio = [
    {
      client: "TechNova Solutions",
      type: "Public Relations",
      category: "Technology",
      desc: `We led the public relations campaign for TechNova Solutions during their flagship product launch. Our team coordinated press releases, managed interviews, and ensured strategic media placements in leading tech publications across India and international platforms.
  
      This campaign resulted in significant brand visibility, with a 40% increase in media mentions and strong engagement from tech bloggers and influencers. We positioned TechNova as an emerging leader in cloud-based software, gaining them traction in B2B and investor networks.`,
      video: "https://www.pexels.com/video/3184292/",
    },
    {
      client: "UrbanStyle Apparel",
      type: "Advertisment",
      category: "Fashion",
      desc: `We conceptualized and executed a dynamic summer campaign for UrbanStyle Apparel, blending fashion film, influencer content, and high-impact ads across Instagram, YouTube, and digital magazines. The shoot captured bold, youth-centric aesthetics with vibrant visuals.
  
      The campaign saw a 120% jump in web traffic and contributed to a 25% increase in sales during the season. Our creative direction aligned closely with UrbanStyle's brand image, helping them stand out in a saturated fashion market.`,
      video: "https://www.pexels.com/video/856192/",
    },
    {
      client: "GreenLeaf Organics",
      type: "Public Relations",
      category: "Sustainability",
      desc: `Our PR team worked closely with GreenLeaf Organics to craft a media narrative around their eco-conscious packaging solutions. We arranged press coverage, brand stories, and partnered with environmental forums and podcasts to showcase their sustainability efforts.
  
      As a result, the brand was featured in over 30 media outlets including GreenBiz and EcoIndia. This not only enhanced their market position but also attracted investor interest aligned with ESG goals.`,
      video: "https://www.pexels.com/video/3184291/",
    },
    {
      client: "Velocity Auto",
      type: "Advertisment",
      category: "Automotive",
      desc: `We produced a high-octane advertisement for Velocity Auto’s latest electric vehicle. The shoot involved drone footage, urban landscapes, and 3D motion graphics to emphasize both performance and sustainability.
  
      The ad aired on national television and was also distributed on YouTube and OTT platforms. It resulted in a 30% uplift in showroom visits and positioned the EV model as a lifestyle product rather than just a vehicle.`,
      video: "https://www.pexels.com/video/854190/",
    },
    {
      client: "AeroFly Drones",
      type: "Advertisment",
      category: "Aerial Services",
      desc: `For AeroFly Drones, we delivered an impactful visual advertising campaign targeting the real estate and events sectors. Our concept highlighted the range and precision of their drone capabilities using real-client case studies.
  
      The campaign helped AeroFly secure multiple long-term contracts. The visuals were also repurposed for their website and pitch decks, adding long-term brand value and professional appeal.`,
      video: "https://www.pexels.com/video/3184293/",
    },
    {
      client: "Glow Cosmetics",
      type: "Public Relations",
      category: "Beauty",
      desc: `Our PR efforts for Glow Cosmetics focused on their new vegan skincare line. We launched a blogger outreach initiative, sent curated PR boxes, and facilitated reviews with dermatologists and influencers.
  
      Media placements in health and wellness magazines further amplified the campaign. The launch received viral traction on Instagram, and the brand trended on beauty forums for over two weeks.`,
      video: "https://www.pexels.com/video/854192/",
    },
    {
      client: "FitFlex Gyms",
      type: "Advertisment",
      category: "Fitness",
      desc: `We designed a digital-first ad campaign for FitFlex Gyms to boost gym signups in Tier-1 cities. The video ad showcased real client transformations and 24x7 fitness access using upbeat, energetic visuals.
  
      Our performance marketing team targeted the campaign to fitness-conscious millennials, leading to a 3X return on ad spend (ROAS) and a 150% increase in new user registrations.`,
      video: "https://www.pexels.com/video/3184294/",
    },
    {
      client: "EduSpark Academy",
      type: "Public Relations",
      category: "Education",
      desc: `We positioned EduSpark Academy as an innovation leader in AI-based education through strategic storytelling. Our PR team arranged interviews with the founders and collaborated with edtech bloggers to run in-depth features.
  
      The campaign elevated EduSpark’s brand credibility, attracting over 10,000 new users to their platform and securing a strategic partnership with a national curriculum board.`,
      video: "https://www.pexels.com/video/854193/",
    },
    {
      client: "The Brew House",
      type: "Advertisment",
      category: "Food & Beverage",
      desc: `To launch their seasonal menu, we created a heartwarming brand video for The Brew House capturing the aroma, craftsmanship, and community spirit of their coffee culture. The ad included cozy café settings and close-up shots of their brews.
  
      This emotional appeal struck a chord with urban coffee lovers, resulting in a 70% increase in in-store visits during weekends and a strong social media presence through customer-shared content.`,
      video: "https://www.pexels.com/video/3184295/",
    },
    {
      client: "NeoTech Devices",
      type: "Public Relations",
      category: "Consumer Electronics",
      desc: `We rolled out a comprehensive PR campaign for NeoTech Devices around their smart wearables launch. It included a keynote event, product seeding to tech reviewers, and press briefings with hands-on demos.
  
      Coverage spanned across TechCrunch India, Digit Magazine, and 15+ influencer tech YouTube channels. The earned media helped them outperform competitors during launch week on e-commerce portals.`,
      video: "https://www.pexels.com/video/854194/",
    },
  ];
  

  return (
    <>
      <CommanBanner
        title="Who We Are - PR & Advertising"
        desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, maxime, porro, quae perferendis odit dolorem eveniet odio saepe inventore repudiandae non repellendus commodi a corporis? Consequuntur aspernatur officia vero dolores!"
        image="https://images.pexels.com/photos/3045399/pexels-photo-3045399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      <section className="section">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-5">
              <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1037736318?h=8fa5d2c1e9"
                width={"100%"}
                height={"100%"}
                frameBorder={0}
              />
            </div>
            <div className="col-span-7">
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
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-7">
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
            <div className="col-span-5">
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
      <section className="section section-dark">
        <div className="container mx-auto">
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
            <div className="grid grid-cols-4 gap-8">
              {teamlist.map((val, index) => (
                <TeamCard data={val} key={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container mx-auto">
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
      </section>

      <section className="section" style={{ paddingBottom: "0px" }}>
        <div className="container mx-auto">
          <div className="section-body">
            <div className="flex justify-between">
              <h2 className="section-title">Our Portfolio</h2>
              <NavLink to="/our-portfolio">
                <Button className="comman-button mt-5">
                  Know More <BsArrowRight />
                </Button>
              </NavLink>
            </div>
            <p className="section-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              quibusdam fuga tenetur neque soluta facere! Ipsa esse sint dolorum
              quidem magni unde qui exercitationem inventore. Voluptas fugiat
              nam maxime non! Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </p>
          </div>
        </div>
      </section>

      {portfolio.splice(0,5).map((val, index) => (
        <PortfolioSectionCard key={index} index={index} portfolio={val} />
      ))}
    </>
  );
}

const TeamCard = ({ data }: any) => (
  <div className="team-card">
    <div className="team-image">
      <img src={data?.image} alt={data?.name} />
    </div>
    <div className="team-detail">
      <p className="team-content">{data?.desc}</p>

      <div className="team-title">
        <h3>{data?.name}</h3>
        <h4>{data?.designation}</h4>
      </div>
    </div>
  </div>
);
