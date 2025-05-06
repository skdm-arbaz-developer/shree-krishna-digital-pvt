import { ConfigProvider, Tabs } from "antd";
import { useState } from "react";
import PortfolioSectionCard from "../components/AdsAndPR/PortfolioSectionCard";

export default function PortfolioPrAds() {
  const [active, setActive] = useState("Advertisment");

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
      <section className="section">
        <div className="container mx-auto">
          <div className="section-body flex justify-center items-center flex-col">
            <h2 className="section-title">Our Portfolio</h2>
            <p
              className="section-content text-center"
              style={{ maxWidth: 750 }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laboriosam dolore quaerat accusamus officia veritatis omnis
              consequuntur, libero, eligendi error minima magni quisquam iste
              unde, sapiente perspiciatis quam est ad distinctio.
            </p>
          </div>
          <ConfigProvider
            theme={{
              components: {
                Tabs: {
                  itemActiveColor: "#e98c14",
                  itemHoverColor: "#e98c14",
                  itemSelectedColor: "#e98c14",
                },
              },
            }}
          >
            <Tabs
              activeKey={active}
              size={"large"}
              type="card"
              animated
              style={{ marginBottom: 32 }}
              onChange={setActive}
              items={[
                {
                  label: `Advertisment`,
                  key: "Advertisment",
                  children: portfolio
                    .filter((val) => val.type === "Advertisment")
                    .map((val, index) => (
                      <PortfolioSectionCard
                        key={index}
                        index={index}
                        portfolio={val}
                      />
                    )),
                },
                {
                  label: `PR : Public Relations`,
                  key: "Public Relations",
                  children: portfolio
                    .filter((val) => val.type === "Public Relations")
                    .map((val, index) => (
                      <PortfolioSectionCard
                        key={index}
                        index={index}
                        portfolio={val}
                      />
                    )),
                },
              ]}
            />
          </ConfigProvider>
        </div>
      </section>
    </>
  );
}
