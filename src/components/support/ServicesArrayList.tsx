import {
  FaAppStoreIos,
  FaBriefcase,
  FaBusinessTime,
  FaCheck,
  FaClock,
  FaEnvelope,
  FaFlutter,
  FaShield,
  FaUser,
} from "react-icons/fa6";
import contactImage from "../../assets/images/contact-us-form.png";
import { MdMessage, MdPeopleAlt, MdPhone, MdSend } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";

import { FaPaintBrush } from "react-icons/fa";
import { SiApachecordova } from "react-icons/si";
import { IoLogoAndroid, IoLogoIonic } from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";

////-------- seo --------////
import SeoBanner from "../../assets/images/banners/seo-banner.jpg";
import Seo1 from "../../assets/images/resources/seo/seo1.avif";
import SeoSub1 from "../../assets/images/resources/seo/seo-sub1.png";
import SeoSub2 from "../../assets/images/resources/seo/seo-sub2.png";
import SeoSub3 from "../../assets/images/resources/seo/seo-sub3.png";
import SeoSub4 from "../../assets/images/resources/seo/seo-sub4.png";
import SeoSub5 from "../../assets/images/resources/seo/seo-sub5.jpg";
import Benefits1 from "../../assets/images/resources/seo/Benefits1.jpg";
import Benefits2 from "../../assets/images/resources/seo/Benefits2.jpg";
import Benefits3 from "../../assets/images/resources/seo/Benefits3.jpg";
import Benefits4 from "../../assets/images/resources/seo/Benefits4.jpg";
import Benefits5 from "../../assets/images/resources/seo/Benefits5.jpg";
import faq from "../../assets/images/resources/faq.jpg";

////-------- Social Media Marketing --------////
import SocialMediaMarketing from "../../assets/images/banners/Social-Media-Marketing-banner.jpg";
import smm1 from "../../assets/images/resources/smm/smm1.jpg";
import SmmSub1 from "../../assets/images/resources/smm/smm-sub1.jpg";
import SmmSub2 from "../../assets/images/resources/smm/smm-sub2.jpg";
import Facebook from "../../assets/images/resources/smm/Facebook.png";
import Instagram from "../../assets/images/resources/smm/Instagram.png";
import YouTube from "../../assets/images/resources/smm/YouTube.png";
import LinkedIn from "../../assets/images/resources/smm/linkdin.png";

////-------- Google My Business --------////
import GmbBanner from "../../assets/images/resources/gmb/gmb-banner.jpg";
import gmb1 from "../../assets/images/resources/gmb/gmb1.jpg";
import gmbImage from "../../assets/images/resources/services/gmbWhychoose.png";
import furniture from "../../assets/images/resources/services/furniture.png";
import doctor from "../../assets/images/resources/services/doctor.png";
import gmb5 from "../../assets/images/resources/gmb/gmb5.jpg";

////-------- Pay Per Click --------////
import PpcBannner from "../../assets/images/banners/ppc-banner.jpg";
import adsimage from "../../assets/images/resources/services/adsimage.png";
import addgraph from "../../assets/images/resources/services/addgraph.png";
import ppc1 from "../../assets/images/resources/ppc/ppc1.jpg";
import ppc2 from "../../assets/images/resources/ppc/ppc2.jpg";

////--------Website Development --------////
import WebDevelopmentBanner from "../../assets/images/banners/web-development-banner.jpg";
import web1 from "../../assets/images/resources/web/web1.jpg";
import web2 from "../../assets/images/resources/web/web2.jpg";
import web3 from "../../assets/images/resources/web/web3.jpg";

////--------Application Development --------////
import AppBanner from "../../assets/images/banners/application-banner.jpg";
import app1 from "../../assets/images/resources/app/app1.jpg";
import app2 from "../../assets/images/resources/app/app2.gif";


const services = [
  {
    banner:SeoBanner,
    title: "Boost Your Website Ranking with Proven SEO Techniques",
    shortdesc:
      "Improve your online visibility, drive organic traffic, and rank higher on Google with our tailored SEO strategies designed to deliver real results and long-term growth for your business.",
    slug: "/search-engine-optimization",
    description: {
      mode: "light",
      title: "Unbeatable SEO Packages & Pricing",
      shortdesc:
        "Increase Your Organic Traffic By Ranking Your Website On First Page In SERPs",
      desc: [
        "Boost your online visibility with Shree Krishna Digital Solutions Pvt. Ltd. Get Company’s affordable monthly SEO packages. As the Best SEO Company In Mumbai, our passionate and experienced team brings over 17 years of expertise, having successfully handled 100+ SEO projects that consistently deliver strong organic results. We at Shree Krishna Digital Solutions Pvt Ltd are committed to building long-term business relationships through our high-quality SEO services that drive growth. Why Choose Us Over This? We use SEO to increase your search engine visibility, generate qualified leads, drive sales and ultimately revenue. Why? Because we do!",
        "We prioritize on-page and off-site SEO to generate genuine interest and encourage those who want to buy your products or services. Our expert SEO team implements proven marketing funnels to attract and convert the right customers into leads. ",
        "Choose from flexible SEO plans tailored to your budget. As the best SEO company in Mumbai, Shree Krishna Digital Solutions Pvt. Ltd. is here to help your business grow and succeed online. Let’s connect to explore what an ideal SEO package should include.",
      ],
      subtitle: null,
      subdesc: [],
      image: Seo1,
    },
    package: {
      mode: "gray",
      title: "SEO Packges",
      shortdesc:
        "The best SEO company in Mumbai brings you scalable SEO packages tailored to your goals. We optimize your site to perform better, rank higher, and generate more meaningful leads and sales.",
      packagelist: [
        {
          title: "BASIC",
          price: "7000",
          period: "Monthly",
          shortdesc:
            "Meta Tags (Title & Description), Header Tags, Alt Tags, Upto 7 pages",
          features: [
            "Initial Website Review & SEO Audit",
            "Keyword Research (5-7 Targeted Keywords)",
            "Keyword Optimisation (Up to 3-4 Keywords)",
            "On-Page SEO",
            "Off-page Optimization",
            "Title & Meta Tag Optimisation",
            "Header Tag (H1, H2) Structuring",
            "Image ALT Text Optimisation",
            "URL Slug Optimisation",
          ],
        },
        {
          status: "active",
          title: "STANDARD",
          price: "12000",
          period: "Monthly",
          shortdesc:
            "Meta Tags (Title & Description), Header Tags, Alt Tags, Upto 30 pages",
          features: [
            "Comprehensive Website SEO Audit",
            "Keyword Research (10–12 Keywords)",
            "Keyword Optimisation (Up to 8 Keywords)",
            "On-Page SEO Optimisation",
            "Off-page Optimization",
            "Meta Tags (Title, Description)",
            "Header Tags Structuring (H1, H2, etc.)",
            "Keyword Placement in Content",
            "URL Slug Optimisation",
            "Image Optimisation with ALT Tags",
          ],
        },
        {
          status: "",
          title: "PREMIUM",
          price: "18000",
          period: "Monthly",
          shortdesc:
            "Meta Tags (Title & Description), Header Tags, Alt Tags, Upto 50 pages",
          features: [
            "Comprehensive Website SEO Audit",
            "Advanced Keyword Research (30 Keywords)",
            "Advanced On-Page SEO Optimisation",
            "Off-page Optimization",
            "Title & Meta Tags",
            "Header Tags (H1, H2, etc.)",
            "Image ALT Tags",
            "SEO-friendly URLs",
            "Content keyword integration",
            "URL Optimisation",
            "Image ALT Tags",
            "Structured internal linking",
          ],
        },
      ],
    },
    enhance: {
      mode: "light",
      title: "Enhance your Online Presence",
      image: "",
      shortdesc:
        "Online visibility is a must for you. Internet fame determines your level of visibility, popularity, and reputation as an entrepreneur or startup. Why is this important? Not only the online presence of Shree Krishna Digital Solutions Pvt Ltd, but also other factors will be monitored at the appropriate time. By utilizing SEO strategies, designing user-friendly and mobile-responsive websites for clients, and creating compelling content that appeals to your target audience, we aim to earn an online reputation.",
      desc: "We offer services such as SEO, website traffic generation, and lead generation. Our services cover all of the brands we serve. With the latest tools and best practices, our experts will enhance every aspect of your online identity. We continuously assess and perfect your digital strategy to ensure you remain ahead of the competition. With a strong presence in digital marketing, strategic partnerships, and diverse customer bases across multiple industries, Shree Krishna Digital Solutions Pvt Ltd has become the go-to best SEO company in Mumbai",
    },
    whychoose: {
      mode: "dark",
      title: "Why We Are The Perfect Fit For Your Needs",
      shortdesc:
        "We offer customized digital solutions, expert strategy, and dedicated support to ensure your business grows online. Our team works with passion, precision, and performance to meet your unique goals and deliver real results.",
      whychoosepoints: [
        {
          image:SeoSub1,
          title:
            "We provide comprehensive website auditing services that ensure strategic SEO.",
          desc: "The first step in getting started with SEO is analyzing your website extensively. The report covers the design of the site, its user interface and other on-page SEO elements, as well as the technical framework. The in-depth study identifies themes that may affect search engine performance and necessitate further investigation. A customized SEO approach is established based on industry standards and measures the results achieved. The effectiveness of SEO, website traffic generation, and the recruitment of qualified leads.",
        },
        {
          image:SeoSub2,
          title: "Keyword Research and Strategic Optimization",
          desc: "Smart keyword research is the foundation of effective SEO. Advanced tools and proven methods are utilized to identify highly valuable, niche-specific keywords that correspond to user intent. demotics. Keywords can be integrated into website content, meta tags, headings, and URLs to enhance the relevance and readability of each page. The site's search engine optimization leads to increased traffic from specific users through strategic planning.",
        },
        {
          image:SeoSub3,
          title: "Quality and Engaging Content Development",
          desc: "Effective SEO requires content that is unique, captivating and centred on specific keywords. Through the use of extensive research and audience comprehension, valuable content is created to tackle user issues while emphasizing subject expertise. From blog posts to landing pages, each piece is tailored to attract users and search engine bots alike. The content strategy focuses on offering value, building trust, and improving visibility. Recognized as the best SEO company in Mumbai, the approach ensures that every word published supports long-term SEO success and connects with the right audience.",
        },
        {
          image:SeoSub4,
          title: "Strategic Link Building for Authority.",
          desc: "Quality backlinks are like endorsements from real sources; they increase your website's credibility and domain authority. Link-building strategies are essential in obtaining relevant and credible backlinks that enhance your online brand. Building a strong presence in your industry requires engaging with and benefiting from guest posting opportunities alongside authority sources. Enhanced search engine rankings are achieved through this process, which also drives referral traffic.",
        },
        {
          image:SeoSub5,
          title: "On-Page and Technical SEO Enhancement.",
          desc: "The optimization of on-page components and technical elements is crucial for your website's SEO. Experts extensively examine and refine crucial components, such as title tags, meta descriptions, headers, image alt texts, and URL structure. This is all about making sure that your site loads quickly, is mobile-friendly, is secure, and is user-friendly. Your site's smooth user experience and crawlability are enhanced by these enhancements, which make it more search engine-friendly for indexing purposes.",
        },
      ],
    },
    benefits: {
      mode: "gray",
      title: "The Benefits Of Partnering With Shree Krishna Digital",
      shortdesc:
        "Collaborate with Shree Krishna Digital Solutions Pvt Ltd to unlock powerful SEO tools, industry best practices, and proven digital strategies. We ensure your business reaches the right audience and gets sustainable online visibility.",
      whychoosepoints: [
        {
          image:Benefits1,
          title: "Customized SEO Strategies.",
          desc: "Knowing that each company possesses its own unique objectives and challenges, an all-in SEO strategy won't be the most effective. Hence, tailored plans are developed to meet specific objectives, needs, and changing industry conditions.",
        },
        {
          image:Benefits2,
          title: "Proven Track Record.",
          desc: "Boost your website's SEO results through monthly plans. The team, with years of industry experience at their disposal, has consistently achieved measurable success across various industries. This record shows that real growth is achievable by improving search engine rankings and ensuring long-term exposure.",
        },
        {
          image:Benefits3,
          title: "Transparent Reporting and Analytics.",
          desc: "Building trust and fostering a positive work environment requires honesty. Why? It provides comprehensive reports and analytics for tracking campaigns on an ongoing basis. Organic traffic, keyword rankings, conversion rates and more informed decision-making are all included in these reports. What is the significance of this information?",
        },
        {
          image:Benefits4,
          title: "Committed Support and Collaboration",
          desc: "Gain meaningful insights through a thorough SEO performance review. We prioritize open communication and working together. SEO works with you; they always help guide you through the process. By analyzing your specific business objectives, we ensure that our strategies are in line with your expectations and goals. This approach helps build lasting relationships and drives shared success for your business.",
        },
        {
          image:Benefits5,
          title: "Staying Ahead of the Curve.",
          desc: "You must be up-to-date with the ever-changing digital world. We keep up with industry news, algorithm updates and new technological advancements. Let us assist you in accomplishing this.",
        },
      ],
    },
    ourworks: {
      mode: "image",
      title: "Our SEO Works",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione at nobis eius reprehenderit vitae mollitia libero fugit odit, earum dolorem eos quod, tempora rerum atque, harum voluptatum tenetur ipsam.",
      worklist: [
        {
          link: "https://www.youtube-nocookie.com/embed/4YqmxZhQS0A?si=GcIpAI10vWbDHclG",
          title: "Sejal Exports",
          desc: {
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione at nobis eius reprehenderit vitae mollitia libero fugit odit, earum dolorem eos quod, tempora rerum atque, harum voluptatum tenetur ipsam.",
            keywords: [
              "Best Digital Marketing Company in Andheri West",
              "Best Digital Marketing Company in Andheri West",
              "Best Digital Marketing Company in Andheri West",
            ],
          },
        },
        {
          link: "https://www.youtube-nocookie.com/embed/4YqmxZhQS0A?si=GcIpAI10vWbDHclG",
          title: "Indian Delight",
          desc: {
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione at nobis eius reprehenderit vitae mollitia libero fugit odit, earum dolorem eos quod, tempora rerum atque, harum voluptatum tenetur ipsam.",
            keywords: [
              "Best Digital Marketing Company in Andheri West",
              "Best Digital Marketing Company in Andheri West",
              "Best Digital Marketing Company in Andheri West",
            ],
          },
        },
        {
          link: "https://www.youtube-nocookie.com/embed/4YqmxZhQS0A?si=GcIpAI10vWbDHclG",
          title: "De Grandier",
          desc: {
            para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione at nobis eius reprehenderit vitae mollitia libero fugit odit, earum dolorem eos quod, tempora rerum atque, harum voluptatum tenetur ipsam.",
            keywords: [
              "Best Digital Marketing Company in Andheri West",
              "Best Digital Marketing Company in Andheri West",
              "Best Digital Marketing Company in Andheri West",
            ],
          },
        },
      ],
    },
    faq: {
      image: faq,
      mode: "light",
      title: "Helpfull F.A.Q.",
      shortdesc:
        "If you can not find any answers here, please feel free to contact us anytime via the chat box or using our contact form.",
      list: [
        {
          question: "What is SEO?",
          answer: {
            para: "SEO (Search Engine Optimization) is the process of improving your website’s visibility on search engines like Google. The goal is to get more organic (unpaid) traffic by ranking higher for relevant keywords.",
            list: [],
            note: "",
          },
        },
        {
          question: "Why is SEO important for my business?",
          answer: {
            para: "SEO helps people find your business online. A well-optimized website attracts more traffic, generates leads, increases sales, and builds brand credibility.",
            list: [],
            note: "",
          },
        },
        {
          question: "How long does SEO take to show results?",
          answer: {
            para: "SEO is a long-term strategy. Most websites start seeing noticeable improvements in 3 to 6 months, depending on the competition and the quality of the SEO work.",
            list: [],
            note: "",
          },
        },
        {
          question: "What are keywords and why do they matter?",
          answer: {
            para: "Keywords are the words or phrases people type into search engines. Using the right keywords in your content helps your website appear in relevant search results.",
            list: [],
            note: "",
          },
        },
        {
          question: "What is the difference between on-page and off-page SEO?",
          answer: {
            para: "",
            list: [
              "On-page SEO includes elements like keywords, content, titles, and internal links on your website.",
              "Off-page SEO refers to actions taken outside your site, like backlink building, social media marketing, and online reviews.",
            ],
            note: "",
          },
        },
        {
          question: "Do I need SEO if I’m running Google Ads?",
          answer: {
            para: "Yes. SEO and Google Ads can work together. Ads bring immediate traffic, while SEO builds long-term visibility and trust organically.",
            list: [],
            note: "",
          },
        },
        {
          question: "What are backlinks and why are they important?",
          answer: {
            para: "Backlinks are links from other websites pointing to your site. They signal trust and authority to search engines, helping your site rank higher.",
            list: [],
            note: "",
          },
        },

        {
          question: "Can I do SEO myself or should I hire an agency?",
          answer: {
            para: "While basic SEO can be done with some research, hiring an experienced SEO agency (like Shree Krishna Digital Solutions PVT. LTD) ensures better strategy, results, and return on investment.",
            list: [],
            note: "",
          },
        },
        // {
        //   question: "How does local SEO work?",
        //   answer: {
        //     para: "Local SEO helps your business show up in local searches (like restaurant near me). It includes optimizing your Google My Business profile, location-based keywords, and getting local reviews.",
        //     list: [],
        //     note: "",
        //   },
        // },
        // {
        //   question: "How do I know if my SEO is working?",
        //   answer: {
        //     para: "You can track SEO performance using tools like Google Analytics, Google Search Console, and SEO dashboards. Key metrics include traffic, keyword rankings, bounce rate, and conversions.",
        //     list: [],
        //     note: "",
        //   },
        // },
      ],
    },
    contact: {
      mode: "gray",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione at nobis eius reprehenderit vitae mollitia libero fugit odit, earum dolorem eos quod, tempora rerum atque, harum voluptatum tenetur ipsam.",
      form: [
        {
          label: "Full Name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Service",
          placeholder: "Service Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          placeholder: "Write here..",
          formType: "textarea",
          inputType: "text",
          class: "col-span-12",
          icon: <MdMessage />,
        },
        {
          label: "",
          placeholder: "Submit Enquiry",
          formType: "button",
          inputType: "",
          class: "col-span-12",
          icon: <MdSend />,
        },
      ],
    },
  },
  {
    banner:SocialMediaMarketing,
    title: "Social Media Marketing",
    shortdesc:
      "Engage, attract, and grow your audience with impactful social media content, tailored strategies, and targeted campaigns across major social platforms.",
    slug: "/social-media-marketing",
    description: {
      mode: "light",
      title: "SMM Services Company in Mumbai",
      shortdesc: "Increase Your Organic Traffic By Ranking Your GMB On First",
      desc: [
        "In this world which is driven by technology, social media is not merely a fad, it's an ecosystem where your clients or customers exist. Being one of the leading social media marketing agencies in Mumbai, we help you harness this opportunity by marketing your business, services and products on Facebook, Instagram, Twitter, LinkedIn, Pinterest, YouTube and many other leading platforms. Our goal is to enhance your visibility on the internet, move the right customers and help in the development of the brand strategically and purposefully. By building campaigns aimed at relevancy, telling great engaging stories, and going beyond data, we help social media fulfill its true potential for your business.",
      ],
      subtitle: "Why Social Media Marketing Matters for Your Brand",
      subdesc: [
        "Social media marketing encompasses more than simply making posts, it entails the development of a cohesive image which appeals to the audience. A powerful social strategy helps in improving the company image, driving visitors to the business website, and supporting the SEO goals. We assist your brand in building engagement through blogs, communities, and purposeful interactions that capture attention and drive conversions. Brand recall, improved engagement, or increased leads – no matter your goal, our tailored SMM solutions make certain that the message is visible, audible, and unforgettable.",
      ],
      image:smm1,
      imagePostion: "right",
    },

    services: {
      mode: "gray",
      title: "Proven SMM Strategies Tailored to You",
      shortdesc:
        "We offer a range of SMO services to help you build a strong online presence and engage with your audience effectively.",
      list: [
        {
          title: "Strategic Brand Growth",
          desc: "Boost your visibility and build organic traction with long-term brand positioning.",
        },
        {
          title: "Grow Followers",
          desc: "Strengthen your presence across Facebook, Instagram, LinkedIn, and Twitter with steady follower growth.",
        },
        {
          title: "Engagement That Matters",
          desc: "Drive real conversations and increase interaction through targeted content and timely posts.",
        },
        {
          title: "Make It Viral",
          desc: "With creative campaigns and trending content, we expand your reach and help your brand go viral.",
        },
        {
          title: "Join the Buzz",
          desc: "Be part of trending topics and discussions with active engagement across relevant social spaces.",
        },
        {
          title: "Reputation Protection",
          desc: "We monitor your brand mentions and maintain a positive image using smart social listening.",
        },
        {
          title: "Smarter Targeting",
          desc: "Our audience-focused ads and campaigns help you reach the right people at the right time.",
        },
        {
          title: "Transparent Tracking",
          desc: "We track and report performance regularly to refine and improve your social strategies.",
        },
      ],
    },

    package: {
      mode: "dark",
      title: "SMM Pricing & Packges",
      shortdesc:
        "In the realm of the internet, we know how challenging it can be to get people’s attention.",
      packagelist: [
        {
          title: "BASIC",
          price: "7000",
          period: "Monthly",
          shortdesc: "Platforms Covered, Instagram, Facebook",
          features: [
            "Design & Content Creation",
            "6 Static Posts or Carousels per Month",
            "3-4 story posting .",
            "2 REELS (10-15 SEC)",
            "1 Highlight Cover Set",
            "Free stock images and icons",
            "Content Writing",
            "Caption writing (SEO-friendly + engaging) Use of relevant hashtags (10–20 researched hashtags per post) Short call-to-actions",
            "Basic Strategy & Planning",
            "Content calendar (shared monthly)",
            "Niche & competitor research (basic level)",
            "Monthly theme follow",
            "Basic Engagement & Growth",
            "Profile optimization bio                                                               highlights                                                                   links",
            "URL Slug Optimisation",
          ],
        },
        {
          status: "active",
          title: "STANDARD",
          price: "10000",
          period: "Monthly",
          shortdesc: "Platforms Covered Instagram, Facebook, Pinterest",
          features: [
            "Design & Visual Content",
            "10 Custom Posts (static, carousel, or infographic)",
            "4-6 Branded Story Creatives",
            "3 Reel Edits (client-provided footage or basic editing)",
            "Highlight Covers / Story Highlights Setup",
            "Consistent Brand Theme follow",
            "Content Writing",
            "Caption writing with tailored tone",
            "Hashtag strategy (15–30 per post)",
            "Short CTA-based copies for stories and posts",
            "Bio & Profile Optimization",
            "Engagement & Organic Growth",
            "Hashtag & Time Analysis for Better Reach",
            "Boosting for Engagement",
            "content calender sharing",
            "Analytics & Reporting",
            "Monthly Performance Report (Reach, Impressions, Top Posts, Suggestions)",
            "Content Improvement Suggestions",
            "Support & Revisions",
            "2–3 Revisions per post (if needed)",
            "Monthly Strategy Call (30 min)",
          ],
        },
        {
          status: "",
          title: "PREMIUM",
          price: "18000",
          period: "Monthly",
          shortdesc:
            "Platforms Covered Instagram, Facebook, LinkedIn, Pinterest",
          features: [
            "Creative Content Creation",
            "12- 15 Premium Posts/month (carousels, infographics, static)",
            "6-8 Custom Stories/month",
            "6 Reels/month (edited with transitions, music, captions – client-provided footage or stock)",
            "Motion graphics or animated post options",
            "Branded highlight covers and story set",
            "Content Writing & Strategy",
            "SEO-friendly captions + CTA hooks",
            "20–40 Hashtags researched per category",
            "Festive/Seasonal campaign messaging",
            "Social Media Strategy",
            "Monthly content calendar with pre-approvals",
            "Monthly strategy call/meeting",
            "Competitor benchmarking",
            "Monthly campaign for reach and engagment.",
            "Reporting & Optimization",
            "In-depth monthly analytics (reach, growth, engagement, top-performing content)",
            "Content insights + improvement suggestions",
            "Reel performance analysis",
            "Support & Revisions",
            "3 revisions per post",
            "Dedicated Account Manager (optional)",
            "Add-Ons (Limited Free or Discounted)",
            "1 free ad creative/month (design + copy)",
            "Ad account (setup, targeting, budget plan)",
            "boosting for brand awarness.",
          ],
        },
      ],
    },

    platform: {
      mode: "light",
      title: "Platform-Specific SMM Services",
      image: SmmSub1,
      shortdesc:
        "We specialize in managing and optimizing your presence on various social media platforms to maximize your brand's reach and engagement.",
      list: [
        {
          name: "Facebook",
          icon: Facebook,
          desc: "We use targeted ad strategies and engaging content to help your brand reach a broader audience. From awareness campaigns to conversion-focused ads, we manage everything—from planning and execution to analytics and performance tweaks.",
        },
        {
          name: "Instagram",
          icon: Instagram,
          desc: "With a visually driven approach, we help you build a strong Instagram presence. From curated feeds to strategic hashtags and creative reels, we focus on increasing your visibility and driving leads through engaging and share-worthy content.",
        },
        {},

        {
          name: "LinkedIn",
          icon: LinkedIn,
          desc: "Speak directly to decision-makers and industry professionals. We create high-value content that boosts your credibility, builds authority, and opens the door to B2B opportunities through targeted campaigns and meaningful engagement.",
        },

        {
          name: "YouTube",
          icon: YouTube,
          desc: "Video is king—and YouTube is where it rules. From creating polished, engaging videos to optimizing for search and managing your YouTube ad campaigns, we ensure your content gets discovered and delivers results.",
        },
        {},
      ],
    },

    benefitsSecond: {
      mode: "gray",
      title: "Why Choose Our SMM Services?",
      shortdesc:
        "As a leading social media marketing agency in Mumbai, we offer comprehensive SMM services that help you connect with your audience and grow your brand.",
      desc: [
        "We’re not just another agency. As a respectable social media marketing agency in Mumbai, we place a high value on quantifiable results. Our team blends creativity with deep insights to create social media strategies that deliver real value.",
      ],
      points: [
        "Custom content for each platform",
        "Scheduling aligned with platform algorithms",
        "Strategic use of trending hashtags",
        "Organic strategies to grow followers",
        "Real-time interaction with your audience",
        "Campaigns that drive user-generated content",
        "Higher traffic and lead conversions",
        "Better search engine visibility",
        "Stronger online brand credibility",
      ],
      image:SmmSub2,
      imagePostion: "left",
    },

    faq: {
      image: faq,
      mode: "light",
      title: "Helpfull F.A.Q.",
      shortdesc:
        "If you can not find any answers here, please feel free to contact us anytime via the chat box or using our contact form.",
      list: [
        {
          question: "What is social media marketing?",
          answer: {
            para: "Social media marketing involves using platforms like Facebook, Instagram, LinkedIn, Twitter, and others to promote your business, build brand awareness, connect with your audience, and drive website traffic or sales.",
            list: [],
            note: "",
          },
        },
        {
          question: "Which social media platforms should my business use?",
          answer: {
            para: "It depends on your target audience and business goals. For B2C, platforms like Instagram, Facebook, and TikTok work well. For B2B, LinkedIn is ideal. We help identify and prioritize the platforms best suited to your audience.",
            list: [],
            note: "",
          },
        },
        {
          question: "How often should I post on social media?",
          answer: {
            para: "Consistency is key. Most businesses benefit from posting 3–5 times a week. The frequency can vary depending on the platform and your goals. We create custom content calendars to maintain regular engagement.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How long does it take to see results from social media marketing?",
          answer: {
            para: "Typically, it takes 2–3 months to see consistent engagement growth and 3–6 months for measurable results like leads, sales, or conversions. Paid campaigns may generate faster results.",
            list: [],
            note: "",
          },
        },
        {
          question: "Do I need to run ads to succeed on social media?",
          answer: {
            para: "While organic content is essential for building trust and brand presence, social media ads help amplify reach, target specific audiences, and drive faster results. We often recommend a mix of both.",
            list: [],
            note: "",
          },
        },
        {
          question: "What kind of content should I post on social media?",
          answer: {
            para: "A mix of engaging, informative, and promotional content works best—such as tips, customer testimonials, behind-the-scenes videos, product highlights, reels, and offers. We customize content based on your brand tone and goals.",
            list: [],
            note: "",
          },
        },
        {
          question: "Can social media help with lead generation?",
          answer: {
            para: "Absolutely. With the right strategy—targeted content, compelling CTAs, lead magnets, and ad campaigns—social media can be a powerful lead generation tool for both B2B and B2C businesses.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How do you measure the success of a social media campaign?",
          answer: {
            para: "We track key metrics such as engagement rate, reach, followers, website traffic, lead conversions, and ROI. Regular reports help you see what’s working and where we can improve.",
            list: [],
            note: "",
          },
        },
        // {
        //   question: "Will you manage my accounts or just provide guidance?",
        //   answer: {
        //     para: "We offer both options. We can fully manage your accounts—from content creation to posting and analytics—or work alongside your in-house team to provide strategy, training, and performance reviews.",
        //     list: [],
        //     note: "",
        //   },
        // },
        // {
        //   question: "How much does social media marketing cost?",
        //   answer: {
        //     para: "Our pricing depends on the scope of work, number of platforms, content needs, and whether you're including paid ads. We offer flexible packages tailored to your goals and budget.",
        //     list: [],
        //     note: "",
        //   },
        // },
      ],
    },
    contact: {
      mode: "gray",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione at nobis eius reprehenderit vitae mollitia libero fugit odit, earum dolorem eos quod, tempora rerum atque, harum voluptatum tenetur ipsam.",
      form: [
        {
          label: "Full Name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Service",
          placeholder: "Service Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          placeholder: "Write here..",
          formType: "textarea",
          inputType: "text",
          class: "col-span-12",
          icon: <MdMessage />,
        },
        {
          label: "",
          placeholder: "Submit Enquiry",
          formType: "button",
          inputType: "",
          class: "col-span-12",
          icon: <MdSend />,
        },
      ],
    },
  },
  {
    banner:GmbBanner,
    title: "Google My Business",
    shortdesc:
      "GMB strengthens your online presence, showing your business in local searches, maps, and results when it matters most.",
    slug: "/google-my-business",
    description: {
      mode: "light",
      title:
        "Google Business Listing & Ranking Services to Elevate Your Local Reach",
      shortdesc:
        "Increase Your Organic Traffic By Ranking Your Website On First Page In SERPs",
      desc: [
        "Are you looking to attract more local customers? Our Google Business listing service in Mumbai is designed to boost your visibility right where it matters most—on Google Maps and in local search results. Whether you’re a small shop or a growing brand, we help you stand out when customers are searching for the services you offer.",
        "At SKD, we go beyond just setting up your listing. Our local SEO experts enhance and manage your profile with smart optimizations that:",
        "We stay updated with Google’s evolving algorithms to make sure your business appears in front of people who are most likely to convert. While you focus on running your business, we focus on bringing more customers to your doorstep.",
      ],
      subdesc: [],
      subtitle: "We have Acchived",
      points: [
        {
          icon: (
            <RiMoneyRupeeCircleFill
              className="text-4xl"
              style={{ color: "var(--primary-color)" }}
            />
          ),
          subtitle: "We've generated over",
          title: "2,214,145,292",
          desc: "in revenue for our local clients",
        },
        {
          icon: (
            <FaBusinessTime
              className="text-4xl"
              style={{ color: "var(--primary-color)" }}
            />
          ),
          subtitle: "We've optimized over",
          title: "5,000",
          desc: "different local business stores",
        },
        {
          icon: (
            <MdPeopleAlt
              className="text-4xl"
              style={{ color: "var(--primary-color)" }}
            />
          ),
          subtitle: "A dedicated team of",
          title: "30+",
          desc: "local business SEO Experts.",
        },
      ],
      image:gmb1,
      imagePostion: "left",
    },

    workimages: {
      mode: "gray",
      title: "See Real Growth: Our Clients Get More Visibility & Walk-Ins",
      shortdesc:
        "Want measurable results? Businesses that use our Google Business listing service in Mumbai consistently see: 1)Improved local search rankings, 2)Increased customer interactions, 3)Higher footfall and online inquiries 4)When done right, your Google Business Profile becomes a lead magnet that works 24/7.",
      images: [
        {
          title:
            "Ranked a Wholesale Furniture Business GMB Profile in the 1st Position on Google Maps",
          image: furniture,
        },
        {
          title:
            "Ranked a Pediatrician Doctor GMB Profile in the 1st Position on Google Maps",
          image: doctor,
        },
      ],
    },

    benefitsSecond: {
      mode: "dark",
      title: "How Does Google Business Help Grow Your Brand Locally?",
      shortdesc: "",
      desc: [
        "Not only a digital listing, a well-maintained Google Business Profile is an effective tool for local marketing. It puts your business in front of nearby users exactly when they’re looking for products or services like yours.",
        "Here’s how we make the most of your profile:",
      ],
      points: [
        "Double-checking that your info is always accurate and up to date.",
        "Including eye-catching images that accurately convey your brand",
        "Publishing engaging posts to keep your audience informed",
        "Managing customer reviews to build a trustworthy image",
        "Helping you outrank local competitors",
        "Increasing the number of people who visit your website or store",
        "Building long-term customer trust",
      ],
      image:gmb5,
      imagePostion: "right",
    },

    platform: {
      mode: "light",
      title: "Step-by-Step Process After the Chart",
      image: gmbImage,
      shortdesc:
        "What makes our Google Business listing service in Mumbai effective is our structured, results-driven process. Every step is aimed at increasing your profile’s visibility and engagemen",
      list: [
        {
          name: "Claim or Create Your Google Business Profile",
          icon: "https://cdn-icons-png.flaticon.com/128/3601/3601002.png",
          desc: "Don’t have a profile yet? No worries. We’ll create or claim it for you and optimize it with complete, up-to-date info that helps your business shine in search results.",
        },
        {
          name: "Add Accurate & Complete Business Details",
          icon: "https://cdn-icons-png.flaticon.com/128/3840/3840738.png",
          desc: "Accuracy is essential in all aspects of your business, from name and location to hours and website.. We fix inconsistencies and fill gaps to make sure your profile is fully optimized for better rankings.",
        },
        {
          name: "Add High-Quality Photos & Videos",
          icon: "https://cdn-icons-png.flaticon.com/128/8068/8068129.png",
          desc: "Visuals matter. We’ll add professional images of your store, products, and team to help potential customers connect with your business before they even visit.",
        },
        {
          name: "Keep Your Profile Fresh with Google Posts",
          icon: "https://cdn-icons-png.flaticon.com/128/10469/10469552.png",
          desc: "We post regular updates about your offers, events, and announcements to keep your audience engaged—and your profile active.",
        },
        {
          name: "Use Target Keywords for Better Search Visibility",
          icon: "https://cdn-icons-png.flaticon.com/128/9181/9181393.png",
          desc: "We research the right keywords and integrate them naturally into your profile, helping your business appear in more local searches like services near me.",
        },

        {
          name: "Track Performance & Optimize Continuously",
          icon: "https://cdn-icons-png.flaticon.com/128/8921/8921823.png",
          desc: "We don’t stop at setup. Our team monitors your listing’s performance and provides regular reports, so we can fine-tune strategies for even better results.",
        },
      ],
    },

    faq: {
      image: faq,
      mode: "light",
      title: "Helpfull F.A.Q.",
      shortdesc:
        "If you can not find any answers here, please feel free to contact us anytime via the chat box or using our contact form.",
      list: [
        {
          question: "What is Google My Business (GMB)?",
          answer: {
            para: "Google My Business is a free tool by Google that allows businesses to manage their online presence across Google Search and Google Maps. It helps customers find your business location, contact details, reviews, photos, and more.",
            list: [],
            note: "",
          },
        },
        {
          question: "Why is Google My Business important for local SEO?",
          answer: {
            para: "GMB plays a critical role in local SEO by boosting your visibility in local search results, especially when people search for services “near me” or within a specific location.",
            list: [],
            note: "",
          },
        },
        {
          question: "How do I create a Google My Business profile?",
          answer: {
            para: "You can create a GMB profile by visiting google.com/business, signing in with your Google account, entering your business details, verifying your listing, and optimizing it with relevant information.",
            list: [],
            note: "",
          },
        },
        {
          question: "What is the verification process for GMB?",
          answer: {
            para: "Most businesses verify their GMB listing through a postcard sent to their business address. Some businesses may also qualify for phone, email, or instant verification options, depending on their category.",
            list: [],
            note: "",
          },
        },
        {
          question: "How can I optimize my Google My Business profile?",
          answer: {
            para: "You can optimize your GMB profile by adding accurate business information, uploading high-quality photos, regularly posting updates, responding to reviews, and using relevant keywords in your description.",
            list: [],
            note: "",
          },
        },
        {
          question: "How does GMB help bring more customers to my business?",
          answer: {
            para: "A well-optimized GMB profile makes your business more discoverable in local searches, increases trust through reviews and photos, and provides users with quick access to contact or visit you, leading to higher foot traffic and inquiries.",
            list: [],
            note: "",
          },
        },
        {
          question: "Is Google My Business free to use?",
          answer: {
            para: "Yes, GMB is completely free to set up and use. However, investing in professional GMB management services can enhance your profile performance significantly.",
            list: [],
            note: "",
          },
        },
        {
          question: "What are local SEO ranking factors for GMB?",
          answer: {
            para: "Important ranking factors include proximity to the searcher, relevance of your business category, number and quality of reviews, keyword optimization, consistent NAP (Name, Address, Phone) data, and profile completeness.",
            list: [],
            note: "",
          },
        },
        // {
        //   question: "Can I manage multiple locations under one Google My Business account?",
        //   answer: {
        //     para: "Yes, you can manage multiple business locations from a single GMB dashboard. Each location should have accurate and unique details to maintain authenticity and visibility.",
        //     list: [],
        //     note: "",
        //   },
        // },
        // {
        //   question: "How often should I update my GMB listing?",
        //   answer: {
        //     para: "It's recommended to update your GMB profile regularly—post updates weekly, respond to reviews promptly, and ensure all business details (like hours, address, services) are always accurate.",
        //     list: [],
        //     note: "",
        //   },
        // },
      ],
    },
    contact: {
      mode: "gray",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione at nobis eius reprehenderit vitae mollitia libero fugit odit, earum dolorem eos quod, tempora rerum atque, harum voluptatum tenetur ipsam.",
      form: [
        {
          label: "Full Name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Service",
          placeholder: "Service Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          placeholder: "Write here..",
          formType: "textarea",
          inputType: "text",
          class: "col-span-12",
          icon: <MdMessage />,
        },
        {
          label: "",
          placeholder: "Submit Enquiry",
          formType: "button",
          inputType: "",
          class: "col-span-12",
          icon: <MdSend />,
        },
      ],
    },
  },
  {
    banner: PpcBannner,
    title: "Pay Per Click",
    shortdesc:
      "Gain top search visibility with paid ads that drive traffic, leads, and sales, measurable through real-time PPC analytics.",
    slug: "/pay-per-click",
    description: {
      mode: "light",
      title: "Smart PPC Techniques for Your Business Growth",
      shortdesc: "",
      desc: [
        "Understanding PPC (Pay-Per-Click) Marketing PPC marketing is a targeted advertising approach where you pay only when someone clicks your ad in search engine results. Unlike organic traffic, these are sponsored placements (like those top Google ads) that instantly boost visibility.",
      ],
      subdesc: [
        "Each click costs a small fee, but when optimized well, the return outweighs the cost. For instance, a ₹500 click that generates a ₹15,000 sale is smart business. This precision makes PPC a favourite for growth-focused brands, especially when managed by experts like a PPC agency in Mumbai.",
      ],
      subtitle: "How PPC Works",
      points: [],
      image:ppc1,
      imagePostion: "right",
    },

    descriptionSecond: {
      mode: "gray",
      title: "Why PPC Benefits Everyone?",
      shortdesc: "",
      desc: [],
      subdesc: [],
      subtitle: "",
      points: [
        {
          icon: <FaCheck />,
          subtitle: "",
          title: "For users:",
          desc: "People actually prefer relevant ads, studies show PPC ads get more clicks than other digital ads. Google ensures ads match search intent, making them helpful rather than intrusive.",
        },
        {
          icon: <FaCheck />,
          subtitle: "",
          title: "For Advertisers:",
          desc: "It’s laser-targeted marketing. You reach people actively searching for your offerings, with measurable ROI. Every click reveals customer intent, helping refine strategies.",
        },
        {
          icon: <FaCheck />,
          subtitle: "",
          title: "For search engines:",
          desc: "PPC balances user experience with revenue. Google prioritizes useful ads, creating a win-win for searchers and businesses.",
        },
        {
          icon: <FaCheck />,
          subtitle: "",
          title: "The Performance Edge",
          desc: "Google doesn’t just favor high bidders; it rewards high-quality ads. Better engagement (clicks, relevance) lowers costs and improves ad positions. Essentially, well-crafted PPC campaigns perform better and cost less over time.",
        },
      ],
      image: adsimage,
      imagePostion: "left",
    },

    benefitsSecond: {
      mode: "dark",
      title: "Mastering Google Ads for PPC Success",
      shortdesc: "",
      desc: [
        "Google Ads remains the dominant PPC platform, operating on a pay-per-click model where advertisers bid for keywords. Each search triggers an instant auction where Google selects winning ads based on:",
        "For example, bidding on digital marketing services could land your ad at the top of search results. The actual placement depends on your Ad Rank, a combination of your maximum bid and Quality Score. Interestingly, higher Quality Scores can lower your actual cost-per-click (CPC), making campaigns more efficient.",
        "A skilled PPC agency in Mumbai can optimize these factors to maximize visibility while controlling costs. The smarter your bids and ads, the better your results, making PPC a win-win for businesses and searchers alike. ",
      ],
      points: [
        "Bid Amount",
        "Ad relevance",
        "Quality Score (measuring CTR, landing page experience, etc.)",
        "Managing customer reviews to build a trustworthy image",
        "Helping you outrank local competitors",
        "Increasing the number of people who visit your website or store",
        "Building long-term customer trust",
      ],
      image:ppc2,
      imagePostion: "right",
    },

    platform: {
      mode: "gray",
      title: "PPC Campaign Management Simplified",
      image: addgraph,
      shortdesc:
        "Creating PPC campaigns is just the first step – the real key to success lies in continuous optimization and refinement. Regular campaign management ensures your ads stay relevant, competitive, and cost-effective over time.",
      list: [
        {
          name: "Keyword Expansion & Refinement",
          icon: "https://cdn-icons-png.flaticon.com/128/3601/3601002.png",
          desc: "Continuously research and add new, high-intent keywords, Identify and eliminate underperforming terms, Create comprehensive lists of negative keywords.",
        },
        {
          name: "Ad Group Restructuring",
          icon: "https://cdn-icons-png.flaticon.com/128/3840/3840738.png",
          desc: "To improve relevancy, create ad groups with a tight topic. Develop highly specific ad copy for each group, Improve Quality Scores through better organization",
        },
        {},

        {
          name: "Landing Page Optimization",
          icon: "https://cdn-icons-png.flaticon.com/128/8068/8068129.png",
          desc: "Ensure perfect alignment between ads and landing pages. Try out various layouts, CTAs, and content. Improve conversion rates through continuous testing ",
        },

        {
          name: "Performance Monitoring",
          icon: "https://cdn-icons-png.flaticon.com/128/10469/10469552.png",
          desc: "Examine measurements every week to identify patterns. Adapt bids according to the performance of keywords Redirect funds to campaigns that are performing well.",
        },
        {},
      ],
    },

    services: {
      mode: "light",
      title: "Smart Keyword Research for PPC",
      shortdesc:
        "While time-intensive, keyword research forms the foundation of every high-performing PPC campaign. Unlike a one-time setup, winning advertisers treat keyword discovery as an ongoing process - constantly uncovering valuable, low-competition terms that most competitors overlook. Relying solely on basic tools like Keyword Planner means missing high-intent, long-tail keywords that could be driving quality traffic at lower costs.  ",
      list: [
        {
          title: "Precision Relevance",
          desc: "Target only terms closely tied to your offerings. Irrelevant keywords drain budgets and lower quality scores. Ideal terms should: Align with user search intent, Drive qualified click-throughs, Maintain low CPCs while boosting conversions  ",
        },
        {
          title: "Comprehensive Coverage",
          desc: "Go beyond generic head terms to capture the long tail those specific, less-searched phrases that: Account for 70% of all search terms. Faceless competition Often implies greater purchase intent. Example: Instead than just running shoes, try best cushioned running shoes for flat feet.",
        },
        {
          title: "Continuous Evolution",
          desc: "Treat your keyword list as a living system: Regularly add newly discovered terms, Test match types (exact vs. phrase), Extend according to performance information ",
        },
      ],
    },

    faq: {
      image: faq,
      mode: "light",
      title: "Helpfull F.A.Q.",
      shortdesc:
        "If you can not find any answers here, please feel free to contact us anytime via the chat box or using our contact form.",
      list: [
        {
          question: "What is Pay-Per-Click (PPC) advertising?",
          answer: {
            para: "PPC is a digital advertising model where advertisers pay a fee each time someone clicks on their ad. It's commonly used on platforms like Google Ads, Facebook Ads, and Bing Ads to drive targeted traffic to websites.",
            list: [],
            note: "",
          },
        },
        {
          question: "How does PPC work?",
          answer: {
            para: "PPC ads appear on search engines or social media platforms. You bid on keywords, and when users search for those terms, your ad may appear. If they click, you pay a fee based on the bid and ad quality.",
            list: [],
            note: "",
          },
        },
        {
          question: "Which platforms can I run PPC ads on?",
          answer: {
            para: "Popular platforms include:",
            list: [
              "Google Ads (Search, Display, YouTube)",
              "* Microsoft/Bing Ads",
              "Facebook and Instagram Ads",
              "LinkedIn Ads",
              "Twitter/X Ads",
            ],
            note: "",
          },
        },
        {
          question: "How much does PPC advertising cost?",
          answer: {
            para: "There’s no fixed cost. You set a daily or monthly budget, and your cost-per-click (CPC) depends on competition, industry, keyword quality, and other factors. It can range from a few cents to several dollars per click.",
            list: [],
            note: "",
          },
        },
        {
          question: "What are the benefits of PPC for my business?",
          answer: {
            para: "",
            list: [
              "Immediate visibility in search results",
              "Targeted traffic based on location, interests, or behavior",
              "Flexible budget control",
              "Trackable ROI and performance metrics",
              "Increases brand awareness and conversions",
            ],
            note: "",
          },
        },
        {
          question: "What is Quality Score in Google Ads?",
          answer: {
            para: "Quality Score is Google's rating of your ad relevance, keyword choice, and landing page experience. A higher score can lower your cost per click and improve your ad position.",
            list: [],
            note: "",
          },
        },
        {
          question: "How do I choose the right keywords for PPC?",
          answer: {
            para: "Using keyword research tools, identify terms your target audience is searching. Focus on keywords with high intent, relevance, and manageable competition. Include long-tail keywords for better targeting.",
            list: [],
            note: "",
          },
        },
        {
          question: "Can PPC help my local business?",
          answer: {
            para: "Yes! PPC is great for local targeting. With local extensions and geo-targeting, you can show ads to people searching for services near your location, driving foot traffic and local leads.",
            list: [],
            note: "",
          },
        },
        // {
        //   question: "Can I manage multiple locations under one Google My Business account?",
        //   answer: {
        //     para: "Yes, you can manage multiple business locations from a single GMB dashboard. Each location should have accurate and unique details to maintain authenticity and visibility.",
        //     list: [],
        //     note: "",
        //   },
        // },
        // {
        //   question: "How often should I update my GMB listing?",
        //   answer: {
        //     para: "It's recommended to update your GMB profile regularly—post updates weekly, respond to reviews promptly, and ensure all business details (like hours, address, services) are always accurate.",
        //     list: [],
        //     note: "",
        //   },
        // },
      ],
    },
    contact: {
      mode: "gray",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione at nobis eius reprehenderit vitae mollitia libero fugit odit, earum dolorem eos quod, tempora rerum atque, harum voluptatum tenetur ipsam.",
      form: [
        {
          label: "Full Name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Service",
          placeholder: "Service Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          placeholder: "Write here..",
          formType: "textarea",
          inputType: "text",
          class: "col-span-12",
          icon: <MdMessage />,
        },
        {
          label: "",
          placeholder: "Submit Enquiry",
          formType: "button",
          inputType: "",
          class: "col-span-12",
          icon: <MdSend />,
        },
      ],
    },
  },
  {
    banner:WebDevelopmentBanner,
    title: "Website Development",  
    shortdesc:
      "From design to deployment, web development turns your ideas into functional, scalable digital platforms that engage users.",
    slug: "/web-development",
    description: {
      mode: "light",
      title: "Web Development Solutions for Complex Business Needs",
      shortdesc: "",
      desc: [
        "We specialize in delivering powerful, scalable web solutions built to handle high volumes of traffic, complex business logic, and demanding security requirements. Whether you're a growing brand or a large-scale enterprise, our solutions are designed to be robust, secure, and future-ready.",
      ],
      subdesc: [
        "As a trusted web development company in Mumbai, we combine creativity with cutting-edge technology to craft websites that are not only visually appealing but also highly functional. Our goal is simple—to create digital platforms that speak your brand’s language while delivering a smooth, engaging user experience on every device. By blending design thinking with technical precision, we help your business make a lasting impression and build stronger connections with your audience, driving meaningful growth in a digital-first world.",
      ],
      subtitle: "Transforming Brands Through Purposeful Web Design",
      points: [
        {
          title: "Innovative Designs",
          subtitle: "",
          icon: <FaPaintBrush />,
          desc: "We create clean, modern, and mobile-friendly websites that look great and work seamlessly across all screen sizes. Every layout is designed to reflect your brand's identity while enhancing user engagement through intuitive navigation and visual clarity.",
        },
        {
          title: "Skilled & Certified Team",
          subtitle: "",
          icon: <FaShield />,
          desc: "Our team includes experienced web developers, UX/UI experts, and QA professionals who work together to deliver custom-built websites tailored to your exact needs. From e-commerce to enterprise portals, we handle it all with precision and care.",
        },
        {
          title: "Reliable Timelines",
          subtitle: "",
          icon: <FaClock />,
          desc: "Using agile practices, we break projects into clear milestones. This ensures your site is delivered on schedule, fully tested, and optimized—without ever sacrificing quality.",
        },
        {
          title: "24/7 Technical Support",
          subtitle: "",
          icon: <MdPhone />,
          desc: "Your website should work for you around the clock. That’s why we offer dedicated technical support to address issues promptly, maintain performance, and safeguard against security threats—day or night.",
        },
      ],
      pointStyle: "card",
      image: web1,
      imagePostion: "right",
    },
    descriptionSecond: {
      mode: "gray",
      title: "Empowering Your Digital Future",
      shortdesc: "",
      desc: [
        "As a leading web development company in Mumbai, we go beyond basic websites. Our solutions include responsive web portals, mobile-integrated platforms, and scalable cloud-based systems designed to evolve with your business. We don’t just build websites—we build digital ecosystems that help your brand adapt, grow, and stay ahead in a competitive landscape.",
        "Let’s Build Something That Lasts",
      ],
      subdesc: [
        "Create a lasting impact online with expertly crafted websites that are secure, scalable, and built for speed. Our custom web development focuses on delivering seamless user experiences, reliable performance, and the flexibility your business needs to grow in today’s digital world.",
      ],
      subtitle:
        "High-Performance Web Solutions to Strengthen Your Digital Presence",
      points: [
        {
          icon: <FaCheck />,
          subtitle: "",
          title: "Custom Web Development:",
          desc: "We build fully customized websites that reflect your brand’s personality and business goals. From tailored layouts to advanced functionalities, every feature is developed to give you a unique digital presence that captures attention and converts visitors into customers.",
        },
        {
          icon: <FaCheck />,
          subtitle: "",
          title: "E-Commerce Solutions",
          desc: "Increase your online revenue with help from a top-rated web development company in Mumbai. Our e-commerce solutions are built for performance—featuring secure platforms, user-friendly navigation, optimized product displays, and streamlined checkout systems that enhance the shopping experience and drive conversions.",
        },
        {
          icon: <FaCheck />,
          subtitle: "",
          title: "Mobile Optimization",
          desc: "Your website should shine on every screen. We fine-tune each element—from layout to speed—to ensure it runs smoothly on smartphones and tablets. The result is a responsive, mobile-first experience that keeps users engaged and encourages longer site visits.",
        },
        {
          icon: <FaCheck />,
          subtitle: "",
          title: "Landing Pages & Microsites",
          desc: "We design goal-oriented landing pages and microsites that are built to convert. Whether you're launching a campaign or promoting a product, our focused designs eliminate clutter and spotlight your key messages—delivering stronger leads and measurable results.",
        },
      ],
      image: web2,
      imagePostion: "left",
    },
    services: {
      mode: "dark",
      title: "Features & Objective",
      shortdesc: "",
      list: [
        {
          title: "Rapid Development",
          desc: "Need to move fast without sacrificing quality? Our agile development process ensures your website or app is delivered quickly and efficiently. We break projects into focused milestones, helping you meet tight deadlines while staying competitive—without ever compromising performance or reliability.",
        },
        {
          title: "Robust Security",
          desc: "Keep your digital assets protected with industry-leading security practices. From SSL certificates and secure coding to regular vulnerability checks and advanced firewalls, we prioritize the safety of your data. Clients trust us because we deliver not just great websites—but peace of mind too.",
        },
        {
          title: "Seamless Integrations",
          desc: "As a trusted web development company in Mumbai, we specialize in integrating your website with the tools and platforms your business relies on. Whether it's CRMs, payment gateways, or third-party APIs, our solutions are built to streamline workflows and deliver a smoother experience for both you and your users.",
        },
      ],
    },
    platform: {
      mode: "light",
      title: "Our Development Proccess",
      image: web3,
      shortdesc: "",
      list: [
        {
          name: "Discover",
          icon: "https://cdn-icons-png.flaticon.com/128/3601/3601002.png",
          desc: "We start by understanding your vision. This phase includes setting clear objectives, conducting in-depth research, and outlining a strategic roadmap tailored to your business needs.",
        },
        {
          name: "Design",
          icon: "https://cdn-icons-png.flaticon.com/128/3840/3840738.png",
          desc: "Our creative team brings your ideas to life with intuitive UI designs. Once finalized and approved, the design becomes the blueprint for a smooth and engaging user experience.",
        },
        {},

        {
          name: "Develop",
          icon: "https://cdn-icons-png.flaticon.com/128/8068/8068129.png",
          desc: "With your design in hand, our developers write clean, scalable code. As a leading web development company in Mumbai, we focus on performance, security, and adaptability at every stage.",
        },

        {
          name: "Deploy",
          icon: "https://cdn-icons-png.flaticon.com/128/10469/10469552.png",
          desc: "Your project is launched seamlessly across all platforms. We ensure a smooth rollout, thorough testing, and optimized performance so your website is ready to impress from day one.",
        },
        {},
      ],
    },
    faq: {
      image: faq,
      mode: "gray",
      title: "Helpfull F.A.Q.",
      shortdesc:
        "If you can not find any answers here, please feel free to contact us anytime via the chat box or using our contact form.",
      list: [
        {
          question: "What is web development?",
          answer: {
            para: "PWeb development is the process of creating and maintaining websites or web applications. It involves front-end development (what users see), back-end development (server-side logic), and sometimes database management.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "What’s the difference between web design and web development?",
          answer: {
            para: "Web design focuses on the look, layout, and user experience of a website, while web development involves writing the code to make the website function. Designers create the visuals, and developers bring them to life.",
            list: [],
            note: "",
          },
        },
        {
          question: "How long does it take to build a website?",
          answer: {
            para: "The timeline depends on the project's complexity. A basic website may take 1–3 weeks, while a complex website or e-commerce platform could take 6–12 weeks or more.",
            list: [],
            note: "",
          },
        },
        {
          question: "How much does web development cost?",
          answer: {
            para: "Costs vary based on design, features, content, and functionality. A basic site may start from a few hundred dollars, while custom-built or enterprise-level websites can cost significantly more.",
            list: [],
            note: "",
          },
        },
        {
          question: "Will my website be mobile-friendly?",
          answer: {
            para: "es. All our websites are developed with responsive design, ensuring they look and function perfectly on smartphones, tablets, and desktops.",
            list: [],
            note: "",
          },
        },
        {
          question: "Can I update the website myself after it's built?",
          answer: {
            para: "Absolutely. We build websites with easy-to-use content management systems (CMS) like WordPress, so you can update content, images, and more without technical knowledge.",
            list: [],
            note: "",
          },
        },
        {
          question: "Do you offer website maintenance and support?",
          answer: {
            para: "Yes. We offer ongoing maintenance plans that include updates, backups, security checks, and technical support to keep your website running smoothly.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Can you help with website hosting and domain registration?",
          answer: {
            para: "Yes. We assist with domain name registration, web hosting setup, and SSL certificate installation to ensure your site is secure and live online.",
            list: [],
            note: "",
          },
        },
        // {
        //   question: "Can I manage multiple locations under one Google My Business account?",
        //   answer: {
        //     para: "Yes, you can manage multiple business locations from a single GMB dashboard. Each location should have accurate and unique details to maintain authenticity and visibility.",
        //     list: [],
        //     note: "",
        //   },
        // },
        // {
        //   question: "How often should I update my GMB listing?",
        //   answer: {
        //     para: "It's recommended to update your GMB profile regularly—post updates weekly, respond to reviews promptly, and ensure all business details (like hours, address, services) are always accurate.",
        //     list: [],
        //     note: "",
        //   },
        // },
      ],
    },
    contact: {
      mode: "light",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione at nobis eius reprehenderit vitae mollitia libero fugit odit, earum dolorem eos quod, tempora rerum atque, harum voluptatum tenetur ipsam.",
      form: [
        {
          label: "Full Name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Service",
          placeholder: "Service Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          placeholder: "Write here..",
          formType: "textarea",
          inputType: "text",
          class: "col-span-12",
          icon: <MdMessage />,
        },
        {
          label: "",
          placeholder: "Submit Enquiry",
          formType: "button",
          inputType: "",
          class: "col-span-12",
          icon: <MdSend />,
        },
      ],
    },
  },
  {
    banner:AppBanner,
    title: "Application Development",
    shortdesc:
      "Custom mobile app development tailored to your brand, goals, and target audience for lasting impact.",
    slug: "/application-development",
    description: {
      mode: "light",
      title: "Custom Mobile App Solutions for Business Growth",
      shortdesc: "",
      desc: [
        "Do you want to move your company around? Our staff at a leading app development company in Mumbai specializes in creating mobile apps that are tailored to your operations, objectives, and brand. We collaborate closely with you to create solutions that support your digital growth, whether you're beginning from scratch or redesigning an existing platform.",
        "We are renowned for creating high-performing apps that not only work well but also leave a lasting impression by fusing precision engineering with a thorough comprehension of customer demands.",
      ],
      subdesc: [
        "We provide full-cycle app development that is customized to your vision as a reputable app development company in Mumbai. Every stage, from conception to release, is managed by skilled developers who know how to transform concepts into useful, entertaining mobile applications.",
        "Our method—listening before building—is what sets us apart. The foundation of our process is an understanding of your target market, business model, and long-term objectives. This guarantees that we develop solutions that are both effective and realistic.",
      ],
      subtitle: "Comprehensive App Development Solutions",
      points: [
        {
          icon: <FaAppStoreIos />,
          title: "iOS Native App Development",
          subtitle: "",
          desc: "",
        },
        {
          icon: <TbBrandReactNative />,
          title: "React Native App Development",
          subtitle: "",
          desc: "",
        },
        {
          icon: <FaFlutter />,
          title: "Flutter App Development",
          subtitle: "",
          desc: "",
        },
        {
          icon: <IoLogoAndroid />,
          title: "Android App Development",
          subtitle: "",
          desc: "",
        },
        {
          icon: <SiApachecordova />,
          title: "Cordova App Development",
          subtitle: "",
          desc: "",
        },
        {
          icon: <IoLogoIonic />,
          title: "Ionic App Development",
          subtitle: "",
          desc: "",
        },
      ],
      pointStyle: "card",
      image:app1,
      imagePostion: "left",
    },
    services: {
      mode: "dark",
      title: "Why Choose Us for Mobile App Development?",
      shortdesc: "",
      list: [
        {
          title: "Reasonably priced, superior solutions",
          desc: "We think high-quality apps shouldn't be prohibitively expensive. Regardless of the size of your business, we provide value-driven mobile applications that are made to optimize your return on investment through flexible pricing and astute development techniques.",
        },
        {
          title: "The Process of Agile Development",
          desc: "Quickness and flexibility are essential. For this reason, we divide your project into digestible sprints using agile approaches. Your software will remain in line with your changing needs thanks to frequent updates, fast feedback loops, and rapid modifications.",
        },
        {
          title: "Guaranteed Perfect Performance",
          desc: "We thoroughly test your app from the very beginning to the end. Every feature is tested for dependability and cross-platform compatibility to give users a seamless, error-free experience.",
        },
        {
          title: "Skilled and Accredited Developers",
          desc: "Our development team, which is situated in Mumbai, has years of practical experience with cross-platform technologies and platforms including iOS and Android. We create user-friendly programs that scale with your business and operate dependably, regardless of how complicated your idea is.",
        },
        {
          title: "Complete NDA Confidentiality",
          desc: "We keep your thoughts secure. We secure your intellectual property from conception to launch by operating under stringent non-disclosure agreements. You may confidently express your ideas because we protect and uphold your creative rights.",
        },
        {
          title: "UI/UX Design Focused on Users",
          desc: "We create mobile interfaces that are both aesthetically pleasing and useful. Each screen, button, and interaction has been carefully planned to improve the user experience, boost interaction, and represent the essence of your brand.",
        },
        {
          title: "Transparency and Clear Communication",
          desc: "We don't think speculation is acceptable. Regular updates, open communication, and clear timetables will let you know how your project is progressing at all times. From launch to post-launch assistance, we guarantee total transparency and confidence.",
        },

        {
          title: "Consistent on-time delivery",
          desc: "We are aware of how crucial deadlines are in the corporate world. Our team ensures that your software is available on time without sacrificing quality by adhering to milestone-based progress and defined workflows.",
        },
        {
          title: "Verified Performance History: Over 600 Projects Finalized",
          desc: "More than 600 mobile apps have been successfully supplied by us in industries like healthcare, e-commerce, and fintech. Because of our background as a Mumbai app development company, we can contribute our industry knowledge and creative ideas to any project, no matter how big or complicated.",
        },
      ],
    },
    enhance: {
      mode: "light",
      title: "Together, let's create something extraordinary.",
      image:app2,
      shortdesc:
        "We can assist you if you're prepared to release a mobile application that accurately reflects your company and produces tangible outcomes. Join forces with a Mumbai app development company that is dedicated to your success at every stage.",
      desc: "",
    },
    faq: {
      image: faq,
      mode: "gray",
      title: "Helpfull F.A.Q.",
      shortdesc:
        "If you can not find any answers here, please feel free to contact us anytime via the chat box or using our contact form.",
      list: [
        {
          question: "What is application development?",
          answer: {
            para: "Application development is the process of creating software applications for mobile devices, desktops, or web platforms. It involves planning, designing, coding, testing, and launching apps tailored to user or business needs.",
            list: [],
            note: "",
          },
        },
        {
          question: "What platforms do you develop applications for?",
          answer: {
            para: "We develop applications for Android, iOS, web browsers, and desktop systems. We also build cross-platform apps that work seamlessly across multiple devices using frameworks like Flutter or React Native.",
            list: [],
            note: "",
          },
        },
        {
          question: "How much does it cost to develop an app?",
          answer: {
            para: "The cost varies based on the app’s complexity, features, design, and the platforms involved. We offer customized quotes after a detailed requirement discussion to match your budget and goals.",
            list: [],
            note: "",
          },
        },
        {
          question: "How long does it take to develop an application?",
          answer: {
            para: "The development timeline depends on the scope of the project. On average, a simple app takes 4–8 weeks, while complex applications may take 3–6 months or more.",
            list: [],
            note: "",
          },
        },
        {
          question: "Can you help with app design and user interface (UI/UX)?",
          answer: {
            para: "Yes, we have a dedicated team of UI/UX designers who create visually appealing, intuitive, and user-friendly interfaces to ensure an optimal user experience.",
            list: [],
            note: "",
          },
        },
        {
          question: "Do you provide post-launch support and updates?",
          answer: {
            para: "Absolutely! We offer maintenance and support packages that include bug fixes, feature enhancements, updates for new OS versions, and performance monitoring.",
            list: [],
            note: "",
          },
        },
        {
          question: "Will I own the source code of my app?",
          answer: {
            para: "Yes. Once the project is complete and full payment is made, you will have full ownership of the app and its source code.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Can you integrate third-party services like payment gateways or APIs?",
          answer: {
            para: "Yes, we regularly integrate third-party APIs including payment gateways, location services, chat systems, and more to enhance app functionality.",
            list: [],
            note: "",
          },
        },
        // {
        //   question: "Can I manage multiple locations under one Google My Business account?",
        //   answer: {
        //     para: "Yes, you can manage multiple business locations from a single GMB dashboard. Each location should have accurate and unique details to maintain authenticity and visibility.",
        //     list: [],
        //     note: "",
        //   },
        // },
        // {
        //   question: "How often should I update my GMB listing?",
        //   answer: {
        //     para: "It's recommended to update your GMB profile regularly—post updates weekly, respond to reviews promptly, and ensure all business details (like hours, address, services) are always accurate.",
        //     list: [],
        //     note: "",
        //   },
        // },
      ],
    },
    contact: {
      mode: "light",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe ratione at nobis eius reprehenderit vitae mollitia libero fugit odit, earum dolorem eos quod, tempora rerum atque, harum voluptatum tenetur ipsam.",
      form: [
        {
          label: "Full Name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Service",
          placeholder: "Service Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          placeholder: "Write here..",
          formType: "textarea",
          inputType: "text",
          class: "col-span-12",
          icon: <MdMessage />,
        },
        {
          label: "",
          placeholder: "Submit Enquiry",
          formType: "button",
          inputType: "",
          class: "col-span-12",
          icon: <MdSend />,
        },
      ],
    },
  },
];

export default services;
