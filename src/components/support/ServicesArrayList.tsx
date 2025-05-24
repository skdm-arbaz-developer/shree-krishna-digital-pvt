import {
  FaBriefcase,
  FaBusinessTime,
  FaEnvelope,
  FaUser,
} from "react-icons/fa6";
import contactImage from "../../assets/images/contact-us-form.png";
import { MdMessage, MdPeopleAlt, MdPhone, MdSend } from "react-icons/md";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import furniture from "../../assets/images/resources/services/furniture.png";
import doctor from "../../assets/images/resources/services/doctor.png";
import gmbImage from "../../assets/images/resources/services/gmbWhychoose.png";

const services = [
  {
    banner:
      "https://static.vecteezy.com/system/resources/previews/024/444/363/non_2x/seo-search-engine-optimization-internet-technology-for-business-companies-search-engine-optimization-seo-concept-on-dark-blue-background-vector.jpg",
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
        "Boost your online visibility with Shree Krishna Digital Solution Pvt Ltd Pvt. Ltd. Solution Company’s affordable monthly SEO packages. As the Best SEO Company In Mumbai, our passionate and experienced team brings over 17 years of expertise, having successfully handled 100+ SEO projects that consistently deliver strong organic results. We at Shree Krishna Digital Solution Pvt Ltd are committed to building long-term business relationships through our high-quality SEO services that drive growth. Why Choose Us Over This? We use SEO to increase your search engine visibility, generate qualified leads, drive sales and ultimately revenue. Why? Because we do!",
        "We prioritize on-page and off-site SEO to generate genuine interest and encourage those who want to buy your products or services. Our expert SEO team implements proven marketing funnels to attract and convert the right customers into leads. ",
        "Choose from flexible SEO plans tailored to your budget. As the best SEO company in Mumbai, Shree Krishna Digital Solution Pvt Ltd Pvt. Ltd. is here to help your business grow and succeed online. Let’s connect to explore what an ideal SEO package should include.",
      ],
      subtitle: null,
      subdesc: [],
      image:
        "https://img.freepik.com/free-photo/employee-working-marketing-setting_23-2151871171.jpg?semt=ais_hybrid&w=740",
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
        "Online visibility is a must for you. Internet fame determines your level of visibility, popularity, and reputation as an entrepreneur or startup. Why is this important? Not only the online presence of Shree Krishna Digital Solution Pvt Ltd, but also other factors will be monitored at the appropriate time. By utilizing SEO strategies, designing user-friendly and mobile-responsive websites for clients, and creating compelling content that appeals to your target audience, we aim to earn an online reputation.",
      desc: "We offer services such as SEO, website traffic generation, and lead generation. Our services cover all of the brands we serve. With the latest tools and best practices, our experts will enhance every aspect of your online identity. We continuously assess and perfect your digital strategy to ensure you remain ahead of the competition. With a strong presence in digital marketing, strategic partnerships, and diverse customer bases across multiple industries, Shree Krishna Digital Solution Pvt Ltd has become the go-to best SEO company in Mumbai",
    },
    whychoose: {
      mode: "dark",
      title: "Why We Are The Perfect Fit For Your Needs",
      shortdesc:
        "We offer customized digital solutions, expert strategy, and dedicated support to ensure your business grows online. Our team works with passion, precision, and performance to meet your unique goals and deliver real results.",
      whychoosepoints: [
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Website-Audit-300x279-1-280x279-1.png",
          title:
            "We provide comprehensive website auditing services that ensure strategic SEO.",
          desc: "The first step in getting started with SEO is analyzing your website extensively. The report covers the design of the site, its user interface and other on-page SEO elements, as well as the technical framework. The in-depth study identifies themes that may affect search engine performance and necessitate further investigation. A customized SEO approach is established based on industry standards and measures the results achieved. The effectiveness of SEO, website traffic generation, and the recruitment of qualified leads.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Keyword_Research-transformed-300x255-1-280x255-1.png",
          title: "Keyword Research and Strategic Optimization",
          desc: "Smart keyword research is the foundation of effective SEO. Advanced tools and proven methods are utilized to identify highly valuable, niche-specific keywords that correspond to user intent. demotics. Keywords can be integrated into website content, meta tags, headings, and URLs to enhance the relevance and readability of each page. The site's search engine optimization leads to increased traffic from specific users through strategic planning.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Content-Creation-300x252-1-280x252-1.png",
          title: "Quality and Engaging Content Development",
          desc: "Effective SEO requires content that is unique, captivating and centred on specific keywords. Through the use of extensive research and audience comprehension, valuable content is created to tackle user issues while emphasizing subject expertise. From blog posts to landing pages, each piece is tailored to attract users and search engine bots alike. The content strategy focuses on offering value, building trust, and improving visibility. Recognized as the best SEO company in Mumbai, the approach ensures that every word published supports long-term SEO success and connects with the right audience.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Link-Building-Service-300x208-1-280x208-1.png",
          title: "Strategic Link Building for Authority.",
          desc: "Quality backlinks are like endorsements from real sources; they increase your website's credibility and domain authority. Link-building strategies are essential in obtaining relevant and credible backlinks that enhance your online brand. Building a strong presence in your industry requires engaging with and benefiting from guest posting opportunities alongside authority sources. Enhanced search engine rankings are achieved through this process, which also drives referral traffic.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Onpage-SEO-300x217-1-280x217-1.jpg",
          title: "On-Page and Technical SEO Enhancement.",
          desc: "The optimization of on-page components and technical elements is crucial for your website's SEO. Experts extensively examine and refine crucial components, such as title tags, meta descriptions, headers, image alt texts, and URL structure. This is all about making sure that your site loads quickly, is mobile-friendly, is secure, and is user-friendly. Your site's smooth user experience and crawlability are enhanced by these enhancements, which make it more search engine-friendly for indexing purposes.",
        },
      ],
    },
    benefits: {
      mode: "gray",
      title: "The Benefits Of Partnering With Shree Krishna Digital",
      shortdesc:
        "Collaborate with Shree Krishna Digital to unlock powerful SEO tools, industry best practices, and proven digital strategies. We ensure your business reaches the right audience and gets sustainable online visibility.",
      whychoosepoints: [
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Screenshot_5-raOu7uZmi-transformed-606x400-1.jpg",
          title: "Customized SEO Strategies.",
          desc: "Knowing that each company possesses its own unique objectives and challenges, an all-in SEO strategy won't be the most effective. Hence, tailored plans are developed to meet specific objectives, needs, and changing industry conditions.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Screenshot-a_A5qIf7b-transformed-601x400-1.jpg",
          title: "Proven Track Record.",
          desc: "Boost your website's SEO results through monthly plans. The team, with years of industry experience at their disposal, has consistently achieved measurable success across various industries. This record shows that real growth is achievable by improving search engine rankings and ensuring long-term exposure.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Screenshot_1-HeRF66lAW-transformed-597x400-1.jpg",
          title: "Transparent Reporting and Analytics.",
          desc: "Building trust and fostering a positive work environment requires honesty. Why? It provides comprehensive reports and analytics for tracking campaigns on an ongoing basis. Organic traffic, keyword rankings, conversion rates and more informed decision-making are all included in these reports. What is the significance of this information?",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Screenshot_2-HYO2GdcC6-transformed-606x400-1.jpg",
          title: "Committed Support and Collaboration",
          desc: "Gain meaningful insights through a thorough SEO performance review. We prioritize open communication and working together. SEO works with you; they always help guide you through the process. By analyzing your specific business objectives, we ensure that our strategies are in line with your expectations and goals. This approach helps build lasting relationships and drives shared success for your business.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Screenshot_3-KlndiIHtuF-transformed-604x400-1.jpg",
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
      image: "https://cdn2.mageplaza.com/media/general2/UBsDQPo.jpg",
      mode: "light",
      title: "Helpfull SEO F.A.Q.",
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
            para: "While basic SEO can be done with some research, hiring an experienced SEO agency (like Shree Krishna Digital Solution PVT. LTD) ensures better strategy, results, and return on investment.",
            list: [],
            note: "",
          },
        },
        {
          question: "How does local SEO work?",
          answer: {
            para: "Local SEO helps your business show up in local searches (like restaurant near me). It includes optimizing your Google My Business profile, location-based keywords, and getting local reviews.",
            list: [],
            note: "",
          },
        },
        {
          question: "How do I know if my SEO is working?",
          answer: {
            para: "You can track SEO performance using tools like Google Analytics, Google Search Console, and SEO dashboards. Key metrics include traffic, keyword rankings, bounce rate, and conversions.",
            list: [],
            note: "",
          },
        },
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
    banner:
      "https://i.pinimg.com/originals/c5/18/2c/c5182c09b6a831cb9c654362a6aceb20.jpg",
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
      image:
        "https://i.pinimg.com/736x/62/0c/91/620c915299d3c0306c5a36254ec5034a.jpg",
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

    platform: {
      mode: "light",
      title: "Platform-Specific SMM Services",
      image:
        "https://i.pinimg.com/736x/b9/93/5c/b9935cb835561ed50a8b418e4f8f0bb1.jpg",
      shortdesc:
        "We specialize in managing and optimizing your presence on various social media platforms to maximize your brand's reach and engagement.",
      list: [
        {
          name: "Facebook",
          icon: "https://cdn-icons-png.flaticon.com/128/3670/3670124.png",
          desc: "We use targeted ad strategies and engaging content to help your brand reach a broader audience. From awareness campaigns to conversion-focused ads, we manage everything—from planning and execution to analytics and performance tweaks.",
        },
        {
          name: "Instagram",
          icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
          desc: "With a visually driven approach, we help you build a strong Instagram presence. From curated feeds to strategic hashtags and creative reels, we focus on increasing your visibility and driving leads through engaging and share-worthy content.",
        },
        {},

        {
          name: "LinkedIn",
          icon: "https://cdn-icons-png.flaticon.com/128/2504/2504923.png",
          desc: "Speak directly to decision-makers and industry professionals. We create high-value content that boosts your credibility, builds authority, and opens the door to B2B opportunities through targeted campaigns and meaningful engagement.",
        },

        {
          name: "YouTube",
          icon: "https://cdn-icons-png.flaticon.com/128/5968/5968852.png",
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
      image:
        "https://i.pinimg.com/736x/fe/ef/3e/feef3e29c0198fbb5b322ac6867776b8.jpg",
      imagePostion: "left",
    },

    faq: {
      image: "https://cdn2.mageplaza.com/media/general2/UBsDQPo.jpg",
      mode: "light",
      title: "Helpfull SEO F.A.Q.",
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
        {
          question: "Will you manage my accounts or just provide guidance?",
          answer: {
            para: "We offer both options. We can fully manage your accounts—from content creation to posting and analytics—or work alongside your in-house team to provide strategy, training, and performance reviews.",
            list: [],
            note: "",
          },
        },
        {
          question: "How much does social media marketing cost?",
          answer: {
            para: "Our pricing depends on the scope of work, number of platforms, content needs, and whether you're including paid ads. We offer flexible packages tailored to your goals and budget.",
            list: [],
            note: "",
          },
        },
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
    banner:
      "https://i.pinimg.com/1200x/f9/62/83/f9628343b04725da400b8ff31fb789d0.jpg",
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
      image:
        "https://i.pinimg.com/736x/fc/2d/b1/fc2db19c99cb9ed764593899b30d28d0.jpg",
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
      image:
        "https://i.pinimg.com/736x/57/31/2a/57312a1f57d8ccdd64c44bc36e3ae9e6.jpg",
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
      image: "https://cdn2.mageplaza.com/media/general2/UBsDQPo.jpg",
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
        {
          question: "Can I manage multiple locations under one Google My Business account?",
          answer: {
            para: "Yes, you can manage multiple business locations from a single GMB dashboard. Each location should have accurate and unique details to maintain authenticity and visibility.",
            list: [],
            note: "",
          },
        },
        {
          question: "How often should I update my GMB listing?",
          answer: {
            para: "It's recommended to update your GMB profile regularly—post updates weekly, respond to reviews promptly, and ensure all business details (like hours, address, services) are always accurate.",
            list: [],
            note: "",
          },
        },
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
];

export default services;
