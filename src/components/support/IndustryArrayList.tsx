import { FaBriefcase, FaEnvelope, FaUser } from "react-icons/fa6";
import { MdMessage, MdPhone, MdSend } from "react-icons/md";
import contactImage from "../../assets/images/contact-us-form.png";
import industrise from "../../assets/images/banners/industrise-banner.jpg";
import DigitalGrowth from "../../assets/images/resources/DigitalGrowth.jpg";
import RealEstate from "../../assets/images/resources/Real-Estate.jpg";
import Hospitality from "../../assets/images/resources/Hospitality.jpeg";
import ECommerce from "../../assets/images/resources/E-Commerce.jpg";
import Education from "../../assets/images/resources/Education.jpg";
import InteriorDesign from "../../assets/images/resources/Interior-Design.jpg";
import Logistics from "../../assets/images/resources/Logistics.jpg";
// import Healthcare from "../../assets/images/resources/Healthcare.jpg";
// import ITServices from "../../assets/images/resources/IT Services.jpg";
// import Travel from "../../assets/images/resources/Travel.jpeg";
// import Fashion from "../../assets/images/resources/Fashion.jpg";
import industry1 from "../../assets/images/resources/industry1.jpeg";
import industry2 from "../../assets/images/resources/industry2.jpeg";
import industry3 from "../../assets/images/resources/industry3.png";
import industry4 from "../../assets/images/resources/industry4.webp";
import industry5 from "../../assets/images/resources/industry5.avif";
import GoogleMyBusiness from "../../assets/images/resources/google-my-business.png";
import seo from "../../assets/images/resources/seo.webp";
import ppc from "../../assets/images/resources/PPC.jpg";
import YouTubeMarketing from "../../assets/images/resources/YouTube Marketing.webp";
import SocialMedia from "../../assets/images/resources/socialmedia.webp";
import faq from "../../assets/images/resources/faq.jpg";
import ResortVilla from "../../assets/images/banners/resort-villa-banner.webp";
import resort1 from "../../assets/images/resources/resort1.jpeg";
import villa1 from "../../assets/images/resources/villa1.jpg";
import villa2 from "../../assets/images/resources/villa2.webp";
import villa3 from "../../assets/images/resources/villa3.jpg";
import villa4 from "../../assets/images/resources/villa3.jpg";
import villa5 from "../../assets/images/resources/villa4.jpg";
import EducationBanner from "../../assets/images/banners/education-banner.png";
import education1 from "../../assets/images/resources/education1.jpg";
import EducationSub1 from "../../assets/images/resources/education-sub1.jpeg";
import EducationSub2 from "../../assets/images/resources/education-sub2.jpg";
import EducationSub3 from "../../assets/images/resources/education-sub3.webp";
import EducationSub4 from "../../assets/images/resources/education-sub4.webp";
import EducationSub5 from "../../assets/images/resources/education-sub5.webp";
import HospitalityCatering from "../../assets/images/banners/Hospitality-Catering-banner.webp";
import HospitalityCatering1 from "../../assets/images/resources/HospitalityCatering1.jpeg";
import Hospitality1 from "../../assets/images/resources/Hospitality1.jpg";
import Hospitality2 from "../../assets/images/resources/Hospitality2.webp";
import Hospitality3 from "../../assets/images/resources/Hospitality3.jpg";
import Hospitality4 from "../../assets/images/resources/Hospitality4.webp";
import InteriorBanner from "../../assets/images/banners/interior-design-banner.webp";
import InteriorDesign1 from "../../assets/images/resources/interior/interior-design1.jpg";
import interiordesignsub1 from "../../assets/images/resources/interior/interior-design-sub1.jpg";
import interiordesignsub2 from "../../assets/images/resources/interior/interior-design-sub2.webp";
import interiordesignsub3 from "../../assets/images/resources/interior/interior-design-sub3.jpg";
import interiordesignsub4 from "../../assets/images/resources/interior/interior-design-sub4.webp";
import interiordesignsub5 from "../../assets/images/resources/interior/interior-design-sub5.jpg";
import LifestyleBanner from "../../assets/images/banners/lifestyle-banner.jpg";
import Lifestyle1 from "../../assets/images/resources/lifestyle/Lifestyle1.webp";
import Lifestylesub1 from "../../assets/images/resources/lifestyle/Lifestyle-sub1.jpeg";
import Lifestylesub2 from "../../assets/images/resources/lifestyle/Lifestyle-sub2.jpeg";
import Lifestylesub3 from "../../assets/images/resources/lifestyle/Lifestyle-sub3.webp";
import Lifestylesub4 from "../../assets/images/resources/lifestyle/Lifestyle-sub4.webp";
import Lifestylesub5 from "../../assets/images/resources/lifestyle/Lifestyle-sub5.jpeg";
import RealestateBanner from "../../assets/images/banners/real-estate-banner.jpg";
import Realestate1 from "../../assets/images/resources/realestate/realestate1.png";
import realestatesub1 from "../../assets/images/resources/realestate/realestate-sub1.jpg";
import realestatesub2 from "../../assets/images/resources/realestate/realestate-sub2.webp";
import realestatesub3 from "../../assets/images/resources/realestate/realestate-sub3.jpg";
import realestatesub4 from "../../assets/images/resources/realestate/realestate-sub4.webp";
import realestatesub5 from "../../assets/images/resources/realestate/realestate-sub5.jpeg";
import SpaSalonBanner from "../../assets/images/banners/Spa-Salon-banner.jpg";
import SpaSalon from "../../assets/images/resources/Spa&Salon/Spa-Salon.avif";
import SpaSalonSub1 from "../../assets/images/resources/Spa&Salon/SpaSalon-sub1.avif";
import SpaSalonSub2 from "../../assets/images/resources/Spa&Salon/SpaSalon-sub2.jpg";
import SpaSalonSub3 from "../../assets/images/resources/Spa&Salon/SpaSalon-sub3.jpeg";
import SpaSalonSub4 from "../../assets/images/resources/Spa&Salon/SpaSalon-sub4.jpeg";
import SpaSalonSub5 from "../../assets/images/resources/Spa&Salon/SpaSalon-sub5.jpg";

const industries = [
  {
    banner: industrise,
    title: "Healthcare (Doctors & Hospitals)",
    keyword: "Digital Marketing For Healthcare In Mumbai",
    metaTitle:
      "Digital marketing for healthcare in Mumbai | Shree Krishna Digital",
    metaDes:
      "Get expert healthcare digital marketing in Mumbai. We help clinics and hospitals attract more patients via SEO, Google Ads, and social media.",
    canonical: "https://skdm.in/digital-marketing-for-healthcare-mumbai",
    shortdesc:
      "Designed specifically for the healthcare sector, our strategies help increase your reach, improve patient connection, and ensure your medical services are found, valued, and remembered online.",
    slug: "/digital-marketing-for-healthcare-mumbai",
    description: {
      mode: "light",
      title: "Digital Growth for Healthcare Professionals",
      shortdesc:
        "Empowering clinics and hospitals with digital solutions that drive trust and patient engagement.",
      desc: [
        "The healthcare industry is evolving, and so are the ways patients seek medical services. A robust digital presence is no longer optional but essential. Our digital marketing solutions are crafted specifically for healthcare providers, focusing on increasing online visibility and patient trust. We utilize a mix of strategic content creation, search engine optimization, and targeted advertising to position your practice prominently in search results. Understanding the sensitive nature of healthcare, we ensure all marketing efforts are compliant and ethically sound. Our team works closely with you to highlight your specialties and strengths, making it easier for patients to choose your services. With a proven track record in digital marketing for healthcare in Mumbai, we aim to be your partner in achieving sustained growth and patient satisfaction.",
      ],
      image: DigitalGrowth,
    },

    clients: {
      mode: "gray",
      title: "We have served these clients",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim debitis, rem magni, exercitationem iste dolor quidem repellat similique saepe mollitia omnis nobis nostrum, inventore hic cupiditate officiis tenetur ducimus?",
      list: [
        "https://drsonikshah.com/static/media/logo.8d8cd9d98148e6b3c5cc.png",
        "https://www.drrahulrane.in/assets/img/logo.png",
        "data:image/png;base64,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",
        "https://thungasthhospital.com/static/media/logo.4ccdd47939fcd909328a.png",
      ],
    },
    testimonial: {
      mode: "dark",
      title: "What our client say",
      shortdesc: "Real stories from clients who’ve experienced success.",
      review: [
        {
          name: "Rajiv Malhotra",
          company: "Skyline Realtors",
          review:
            "Thanks to Shree Krishna Digital Solutions Pvt Ltd GMB optimization, our agency started receiving daily walk-in clients. Our local visibility has grown significantly, and we’re now ranking higher in Google Maps for key property searches.",
        },
        {
          name: "Sneha Kulkarni",
          company: "Elite Homes",
          review:
            "Their SEO work helped our real estate website rank on the first page within three months. We now receive organic inquiries from serious homebuyers, saving us ad spend and boosting our credibility.",
        },
        {
          name: "Arjun Desai",
          company: "UrbanRise Properties",
          review:
            "TWith Shree Krishna Digital Solutions Pvt Ltd Google Ads campaign, we generated over 100 qualified leads in the first month. Their ad strategy is sharp and ROI-focused—perfect for real estate marketing.",
        },
        {
          name: "Meena Shah",
          company: "BlueSky Developers",
          review:
            "YouTube marketing changed the game for us. The property walkthrough videos created by Shree Krishna Digital Solutions Pvt Ltd brought in virtual leads that converted. Buyers feel more connected even before site visits",
        },
        {
          name: "Harshil Mehta",
          company: "Apex Realtors",
          review:
            "We were struggling with online visibility until Shree Krishna Digital Solutions Pvt Ltd stepped in. From GMB to SEO, their holistic approach brought more traffic, more calls, and faster sales for our listings.",
        },
        {
          name: "Tanvi Rane",
          company: "Crescent Realty",
          review:
            "Their team understands real estate marketing deeply. We received more quality leads in 30 days than we did in the three months prior. Highly professional, transparent, and results-driven agency!",
        },
      ],
    },
    casestudy: {
      mode: "dark",
      title: "See our case study of our clients doctor or hospital",
      shortdesc:
        "Empowering brands with results-driven digital marketing success.",
      list: [
        {
          img: RealEstate,
          type: "Real Estate",
          title: "Luxury Living Realty – SEO Transformation",
          desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
        },
        {
          img: Hospitality,
          type: "Hospitality",
          title: "ResortEase – Application Development",
          desc: "Developed a booking and resort management app used by over 100+ resorts.",
        },
        {
          img: ECommerce,
          type: "E-Commerce",
          title: "UrbanCart – Digital Marketing Overhaul",
          desc: "Revamped performance marketing and email automation for a 5x ROI.",
        },
        {
          img: Education,
          type: "Education",
          title: "STEM Boost Academy – Website & CRM",
          desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
        },
        {
          img: InteriorDesign,
          type: "Interior Design",
          title: "DecoraNest – Portfolio Website",
          desc: "Created a stylish web presence and social strategy for luxury interiors.",
        },
        {
          img: Logistics,
          type: "Logistics",
          title: "FastTrack Movers – Branding & CRM Setup",
          desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
        },
      ],
    },
    whychoose: {
      mode: "gray",
      title: "Why We Are The Perfect Fit For this Industries",
      shortdesc:
        "Every industry is unique. With Digital Marketing for Healthcare in Mumbai, we tailor strategies using the right tools, insights, and creativity to meet specific needs and deliver real, measurable results.",
      whychoosepoints: [
        {
          image: industry1,
          title: "Trusted Experts in Doctor Marketing",
          desc: "We create customized digital marketing strategies tailored for doctors and hospitals, focusing on increasing patient engagement and boosting your online presence. Understanding the unique needs of healthcare providers, we deliver data-driven solutions with transparent reporting. Our digital marketing for healthcare in Mumbai continuous optimization helps grow your practice confidently in a competitive digital space, building trust with patients and ensuring long-term success in your field.",
        },
        {
          image: industry2,
          title: "Marketing That Connects with Patients",
          desc: "Our team crafts patient-focused campaigns for doctors and hospitals that build credibility and enhance online visibility. We use ethical strategies aligned with industry standards to attract new patients and retain existing ones. Clear communication and regular updates keep you informed on campaign progress, helping your practice grow sustainably while maintaining the trust and satisfaction of your patient community.",
        },
        {
          image: industry3,
          title: "Your Growth Partners in Healthcare Services",
          desc: "We understand the challenges doctors and hospitals face in attracting patients online. Our tailored digital marketing solutions focus on generating quality leads and strengthening patient relationships. With dedicated support and transparent reporting, you stay informed at every step. Our approach empowers your practice to stand out confidently in a crowded market, allowing you to focus on delivering exceptional care.",
        },
        {
          image: industry4,
          title: "Patient-Focused Digital Solutions",
          desc: "To succeed in today’s competitive environment, doctors and hospitals need more than excellent services; they need effective online marketing. We develop campaigns emphasizing trust, accessibility, and reputation building, designed to bring quality patients to your practice. Respecting privacy and compliance, our strategies improve patient acquisition and retention while giving you clear insights and continuous support to help your growth.",
        },
        {
          image: industry5,
          title: "Innovative Growth for Doctors and Hospitals",
          desc: "We combine industry expertise with creative marketing to expand patient reach and enhance the reputations of doctors and hospitals. Our transparent communication and ongoing campaign refinement maximize your investment’s impact. By handling your digital presence strategically and ethically, we enable you to focus on patient care while helping your practice grow steadily in a specialized and competitive sector.",
        },
      ],
    },
    ourworks: {
      mode: "image",
      title: "Services which helps your business grow",
      shortdesc: "Smart digital solutions to grow your business fast.",
      worklist: [
        {
          image: GoogleMyBusiness,
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Boost your hospital or clinic's local visibility with GMB optimization. Appear in top local searches, build trust through reviews, and make it easy for patients to find and contact you instantly.",
            keywords: [],
          },
          link: "/google-my-business-listing-service  ",
        },
        {
          image: seo,
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: "Rank higher on Google when patients search for healthcare services. Our healthcare-specific SEO strategies help hospitals and doctors attract organic traffic and increase appointment bookings through relevant, high-intent keyword targeting.",
            keywords: [],
          },
          link: "/best-seo-company-mumbai",
        },
        {
          image: ppc,
          title: "PPC (Google Ads)",
          desc: {
            para: "Drive instant leads with targeted PPC campaigns for hospitals and clinics. Appear above competitors on Google when potential patients search, ensuring you get clicks, calls, and conversions at the right time.",
            keywords: [],
          },
          link: "/ppc-agency-mumbai",
        },
        {
          image: YouTubeMarketing,
          title: "YouTube Marketing",
          desc: {
            para: "Establish authority with YouTube videos showcasing treatments, success stories, and doctor introductions. Build trust, educate viewers, and attract new patients through visual content tailored for the healthcare and wellness audience.",
            keywords: [],
          },
          link: "/social-media-marketing-agency-mumbai",
        },
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
          question:
            "How can digital marketing help hospitals attract more patients?",
          answer: {
            para: "Digital marketing improves hospital visibility on search engines and social media, bringing in more patient inquiries and bookings.",
            list: [],
            note: "",
          },
        },
        {
          question: "What role does SEO play for doctors or clinics?",
          answer: {
            para: 'SEO helps clinics rank higher in search results for keywords like "best dentist near me," increasing organic traffic.',
            list: [],
            note: "",
          },
        },
        {
          question: "How can Google Ads benefit healthcare services?",
          answer: {
            para: "Google Ads show your services at the top of search results, bringing in targeted leads for specific treatments.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Is social media marketing effective for medical professionals?",
          answer: {
            para: "Yes, platforms like Instagram and Facebook help build trust, share testimonials, and highlight success stories.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "What kind of content should healthcare providers post online?",
          answer: {
            para: "Educational blogs, video consultations, patient testimonials, and treatment explanations work well.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How can digital reviews and ratings affect hospital reputation?",
          answer: {
            para: "Positive online reviews can influence patient trust and decision-making significantly.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Can digital marketing help in building trust for new healthcare setups?",
          answer: {
            para: "Yes, through content marketing, reviews, and professional branding, trust can be built online.",
            list: [],
            note: "",
          },
        },
        {
          question: "How does local SEO help doctors get more footfall?",
          answer: {
            para: "It helps you appear in Google Maps and local search results when users look for healthcare services nearby.",
            list: [],
            note: "",
          },
        },
        {
          question: "What are the best platforms for healthcare marketing?",
          answer: {
            para: "Google, Facebook, YouTube, and LinkedIn are effective depending on the specialty.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How can appointment booking be streamlined with digital strategies?",
          answer: {
            para: "Integrating booking systems with websites and Google Business Profile allows direct online appointments.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Does Shree Krishna Digital Solution PVT. LTD offer SEO services in India?",
          answer: {
            para: "Yes, Shree Krishna Digital Solution PVT. LTD specializes in providing tailored SEO solutions to boost your online presence across India.",
            list: [],
            note: "",
          },
        },
      ],
    },
    contact: {
      mode: "light",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Have any query about our services or solutions? Our expert team is here to guide and support you. Let’s discuss now!",
      form: [
        {
          label: "Full Name",
          name:"name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          name:"email",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          name:"phone",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Industry",
          name:"industry",
          placeholder: "Industry Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          name:"message",
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

    schemaData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can digital marketing help hotels and caterers get more bookings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By increasing online visibility, digital marketing brings targeted traffic from people searching for hospitality services.",
          },
        },
        {
          "@type": "Question",
          name: "What is the role of SEO in hospitality marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'SEO helps your hotel or catering business rank higher for keywords like "wedding caterers near me" or "best hotel in [city].',
          },
        },
        {
          "@type": "Question",
          name: "Are social media platforms effective for catering businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Instagram and Facebook help showcase events, menus, and client testimonials.",
          },
        },
        {
          "@type": "Question",
          name: "How do online reviews impact the hospitality industry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Positive reviews on platforms like Google and TripAdvisor can influence booking decisions.",
          },
        },
        {
          "@type": "Question",
          name: "Can Google Ads help generate leads for catering services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Targeted ads ensure your business appears when someone searches for catering in your location.",
          },
        },
        {
          "@type": "Question",
          name: "How important is mobile optimization for hospitality websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Very important. Many users book hotels and catering services via mobile devices.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of content works best for promoting hospitality services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mouth-watering food photos, customer testimonials, behind-the-scenes videos, and service highlights.",
          },
        },
        {
          "@type": "Question",
          name: "How can email marketing help in customer retention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By sending special offers, festive menus, and loyalty discounts to past clients.",
          },
        },
        {
          "@type": "Question",
          name: "Can influencer marketing be effective for boutique hotels or chefs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, collaborations with food bloggers or travel influencers drive high visibility.",
          },
        },
        {
          "@type": "Question",
          name: "How to measure ROI in digital marketing for hospitality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By tracking bookings, form fills, calls, and online inquiries through analytics tools.",
          },
        },
      ],
    },
  },
  {
    banner: RealestateBanner,
    title: "Real Estate",
    keyword: "Digital Marketing For Real Estate In Mumbai",
    metaTitle:
      "Digital Marketing for real estate in Mumbai | Shree Krishna Digital",
    metaDes:
      "Digital Marketing For Real Estate In Mumbai – Boost your property sales with expert SEO, PPC, social media, & lead generation tailored for builders, & brokers.",
    canonical: "https://skdm.in/digital-marketing-for-real-estate-mumbai",
    shortdesc:
      "Reach potential buyers faster with proven marketing techniques that help real estate brands boost visibility, generate leads, and increase overall property sales online.",
    slug: "/digital-marketing-for-real-estate-mumbai",
    description: {
      mode: "light",
      title: "Digital Solutions For Real Estate",
      shortdesc:
        "Engage potential buyers, grow presence, and close more deals through smart marketing efforts.",
      desc: [
        "The real estate sector in Mumbai is evolving at a rapid pace, driven by changing buyer behavior and increasing competition. In this ever-changing climate, digital marketing is critical to keeping real estate businesses visible, relevant, and competitive. A strong digital presence is no longer optional; it is necessary.",
        "At Shree Krishna Digital Solutions Pvt Ltd, we specialize in creating customized marketing strategies designed specifically for the real estate industry. Our approach is rooted in understanding your brand, audience, and sales goals. We craft compelling digital campaigns that resonate with your target buyers and position your properties where they are most likely to be seen online.",
        "By leveraging the latest tools and technologies, we enhance your brand’s presence across multiple digital touchpoints. From optimizing your online profiles and creating engaging content to managing paid campaigns that deliver real-time results, our focus remains on generating high-quality leads.",
        "Our dedicated team works closely with real estate developers, brokers, and agencies to deliver measurable outcomes that drive growth. Discover the power of digital marketing for real estate in Mumbai and let your business reach new heights.",
      ],
      image: Realestate1,
    },

    clients: {
      mode: "gray",
      title: "We have served these clients",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim debitis, rem magni, exercitationem iste dolor quidem repellat similique saepe mollitia omnis nobis nostrum, inventore hic cupiditate officiis tenetur ducimus?",
      list: [
        "https://drsonikshah.com/static/media/logo.8d8cd9d98148e6b3c5cc.png",
        "https://www.drrahulrane.in/assets/img/logo.png",
        "data:image/png;base64,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",
        "https://thungasthhospital.com/static/media/logo.4ccdd47939fcd909328a.png",
      ],
    },
    testimonial: {
      mode: "dark",
      title: "What our client say",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa quisquam ex dolorum ut quam quaerat iure exercitationem deleniti minima reiciendis magnam, quas doloremque repudiandae ad asperiores eligendi architecto itaque!",
      review: [
        {
          name: "Ramesh Sharma",
          company: "Ramesh Realty",
          review:
            "Shree Krishna Digital Solutions Pvt Ltd helped us optimize our GMB and rank higher on local searches. We've seen a 40% increase in walk-ins since we started. Highly recommended for serious real estate professionals!",
        },
        {
          name: "Priya Mehta",
          company: "Mehta Properties",
          review:
            "Their SEO strategy brought our listings to the first page of Google. We now get consistent inquiries from serious buyers every week. Their team truly understands the real estate space.",
        },
        {
          name: "Amit Patel",
          company: "UrbanNest Realty",
          review:
            "Thanks to their PPC campaign, our property ads started converting in just a few days. Their ad copy and targeting are spot on. We've closed multiple sales directly from Google Ads leads.",
        },
        {
          name: "Sunita Rao",
          company: "Rao Developers",
          review:
            "Our YouTube video campaigns gave buyers a complete feel of the property even before site visits. Shree Krishna Digital Solutions Pvt Ltd creative team nailed the walkthroughs and helped us stand out in a crowded market.",
        },
        {
          name: "Kunal Desai",
          company: "Desai Realty Group",
          review:
            "With Shree Krishna Digital Solutions Pvt Ltd end-to-end digital marketing, we’ve seen a noticeable rise in branded search and inquiries. They’re professional, data-driven, and deliver results. We finally have a reliable partner for online lead generation",
        },
        {
          name: "Nidhi Agarwal",
          company: "Elite Homes Realty",
          review:
            "Their GMB and SEO efforts gave our new projects immediate visibility. Clients often tell us they found us on Google. We appreciate the transparency and regular performance updates from their team.",
        },
      ],
    },
    casestudy: {
      mode: "dark",
      title: "See our case study of our clients doctor or hospital",
      shortdesc:
        "Empowering brands with results-driven digital marketing success.",
      list: [
        {
          img: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Real Estate",
          title: "Luxury Living Realty – SEO Transformation",
          desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
        },
        {
          img: "https://images.pexels.com/photos/4508641/pexels-photo-4508641.jpeg?auto=compress&cs=tinysrgb&w=1200",
          type: "Hospitality",
          title: "ResortEase – Application Development",
          desc: "Developed a booking and resort management app used by over 100+ resorts.",
        },
        {
          img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "E-Commerce",
          title: "UrbanCart – Digital Marketing Overhaul",
          desc: "Revamped performance marketing and email automation for a 5x ROI.",
        },
        {
          img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Education",
          title: "STEM Boost Academy – Website & CRM",
          desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
        },
        {
          img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Interior Design",
          title: "DecoraNest – Portfolio Website",
          desc: "Created a stylish web presence and social strategy for luxury interiors.",
        },
        {
          img: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Logistics",
          title: "FastTrack Movers – Branding & CRM Setup",
          desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
        },
      ],
    },
    whychoose: {
      mode: "gray",
      title: "Why We Are The Perfect Fit For this Industries",
      shortdesc:
        "We understand real estate dynamics and create targeted campaigns that increase your property inquiries and accelerate sales, helping your business grow effectively in a competitive market.",
      whychoosepoints: [
        {
          image: realestatesub1,
          title: "Effective Marketing For Residential Success",
          desc: "Our marketing solutions are crafted to address the unique needs of developers and sellers. By understanding buyer behavior and market trends, we design engaging campaigns that generate qualified leads and make your listings stand out. Through focused digital marketing for real estate in Mumbai, we attract the right audience and accelerate the sales process, ensuring your residential projects achieve maximum visibility and faster conversions.",
        },
        {
          image: realestatesub2,
          title: "Expert Marketing For Property Success",
          desc: "With extensive experience in the housing market, we provide marketing services designed to maximize the reach and appeal of your listings. Our approach combines digital branding, targeted lead nurturing, and multi-channel advertising focused on attracting motivated buyers. We prioritize delivering measurable results by customizing campaigns to fit your specific goals, ensuring your developments receive the attention they deserve to consistently increase visibility, generate quality leads, and boost sales effectively.",
        },
        {
          image: realestatesub3,
          title: "Enhancing Business Reach Digitally",
          desc: "Our expertise lies in utilizing various digital platforms to increase your market visibility and attract the right customers. By focusing on search engine optimization, paid campaigns, and video promotion, we generate targeted leads and improve engagement. This multi-channel approach helps your developments stand out and accelerates growth. We work closely with you to ensure each campaign aligns perfectly with your business objectives for maximum impact.",
        },
        {
          image: realestatesub4,
          title: "Your Real Estate Growth Catalyst",
          desc: "In a competitive real estate market, our personalized marketing methods can help your firm flourish. We focus on enhancing your brand visibility and driving targeted traffic to your listings. Using a combination of content marketing, search optimization, and paid campaigns, we ensure your properties reach the right buyers, helping you close deals faster while building lasting client relationships.",
        },
        {
          image: realestatesub5,
          title: "Strategic Growth For Builders",
          desc: "We work closely with builders and agencies to strengthen their digital footprint through search visibility, ad campaigns, and engaging content. Our strategies are designed to target serious buyers and generate quality inquiries. With a strong focus on lead generation and branding, we use online platforms effectively to expand your audience, boost credibility, and deliver results. To help you succeed in a cutthroat industry, we specialize in digital marketing for real estate in Mumbai ",
        },
      ],
    },
    ourworks: {
      mode: "image",
      title: "Services that help your business grow",
      shortdesc:
        "Drive measurable growth with our business-centric services that align with your goals and deliver increased brand awareness, lead generation, and online credibility in competitive markets.",
      worklist: [
        {
          image: GoogleMyBusiness,
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Maximize local reach for your real estate agency with GMB optimization. Get found on Google Maps, showcase property listings, collect reviews, and generate walk-in or call-in leads from serious property seekers near you.",
            keywords: [],
          },
          link: "/google-my-business-listing-service",
        },
        {
          image: seo,
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: "Get your real estate website ranked on Google for high-converting keywords. Our SEO strategy attracts quality leads actively searching for properties, helping you sell or rent faster by boosting organic traffic and visibility.",
            keywords: [],
          },
          link: "/best-seo-company-mumbai",
        },
        {
          image: ppc,
          title: "PPC (Google Ads)",
          desc: {
            para: "Launch high-intent Google Ads targeting property buyers and renters. Appear at the top when prospects search for homes, offices, or plots, driving quality leads with tailored ad creatives and budget-focused campaign management.",
            keywords: [],
          },
          link: "/ppc-agency-mumbai",
        },
        {
          image: YouTubeMarketing,
          title: "YouTube Marketing",
          desc: {
            para: "Showcase property walkthroughs, client testimonials, and investment tips on YouTube. Build trust and attract interested buyers through compelling real estate videos, helping your brand stand out in a highly visual, competitive market.",
            keywords: [],
          },
          link: "/social-media-marketing-agency-mumbai",
        },
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
          question:
            "How can digital marketing help real estate agents get more leads?",
          answer: {
            para: "By targeting users actively searching for properties through ads, SEO, and social media.",
            list: [],
            note: "",
          },
        },
        {
          question: "Is SEO important for property listings?",
          answer: {
            para: "Yes, SEO ensures your listings appear when users search for properties online.",
            list: [],
            note: "",
          },
        },
        {
          question: "How does social media influence real estate buyers?",
          answer: {
            para: "Platforms like Instagram and Facebook help visualize properties and reach potential buyers.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Can virtual tours and video marketing improve property interest?",
          answer: {
            para: "Yes, they offer immersive experiences, increasing trust and conversion.",
            list: [],
            note: "",
          },
        },
        {
          question: "What role do Google Ads play in real estate marketing?",
          answer: {
            para: "They offer quick exposure to a large audience and can target buyers based on location and intent.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How does content marketing build trust for real estate companies?",
          answer: {
            para: "Blogs and videos that educate buyers help build authority and trust.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "What is the ROI of using digital platforms for property sales?",
          answer: {
            para: "High ROI due to measurable results and targeted audience reach.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How important is it to have a mobile-friendly real estate website?",
          answer: {
            para: "Vital. Most users search for properties on mobile devices.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Can digital marketing reduce dependency on traditional agents?",
          answer: {
            para: "Yes. Direct digital campaigns can generate qualified leads.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "What platforms are best for promoting real estate listings?",
          answer: {
            para: "Google, Facebook, Instagram, MagicBricks, and 99acres.",
            list: [],
            note: "",
          },
        },
      ],
    },
    contact: {
      mode: "light",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Have any query about our services or solutions? Our expert team is here to guide and support you. Let’s discuss now!",
      form: [
        {
          label: "Full Name",
          name:"name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          name:"email",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          name:"phone",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Industry",
          name:"industry",
          placeholder: "Industry Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          name:"message",
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
    schemaData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can digital marketing help real estate agents get more leads?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By targeting users actively searching for properties through ads, SEO, and social media.",
          },
        },
        {
          "@type": "Question",
          name: "2. Is SEO important for property listings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, SEO ensures your listings appear when users search for properties online.",
          },
        },
        {
          "@type": "Question",
          name: "How does social media influence real estate buyers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Platforms like Instagram and Facebook help visualize properties and reach potential buyers.",
          },
        },
        {
          "@type": "Question",
          name: "Can virtual tours and video marketing improve property interest?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, they offer immersive experiences, increasing trust and conversion.",
          },
        },
        {
          "@type": "Question",
          name: "5. What role do Google Ads play in real estate marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They offer quick exposure to a large audience and can target buyers based on location and intent.",
          },
        },
        {
          "@type": "Question",
          name: "How does content marketing build trust for real estate companies?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blogs and videos that educate buyers help build authority and trust.",
          },
        },
        {
          "@type": "Question",
          name: "What is the ROI of using digital platforms for property sales?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "High ROI due to measurable results and targeted audience reach.",
          },
        },
        {
          "@type": "Question",
          name: "8.How important is it to have a mobile-friendly real estate website?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Vital. Most users search for properties on mobile devices.",
          },
        },
        {
          "@type": "Question",
          name: "Can digital marketing reduce dependency on traditional agents?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Direct digital campaigns can generate qualified leads.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms are best for promoting real estate listings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Google, Facebook, Instagram, MagicBricks, and 99acres.",
          },
        },
      ],
    },
  },
  {
    banner: EducationBanner,
    title: "Education",
    keyword: "Digital Marketing For Education In Mumbai",
    metaTitle:
      "Digital Marketing for Education in Mumbai | Shree Krishna Digital",
    metaDes:
      "Promote your Mumbai school, college, or coaching center with SEO, social media, Google Ads, and content marketing to boost student inquiries.",
    canonical: "https://skdm.in/digital-marketing-for-education-in-mumbai",
    shortdesc:
      "Empower your educational brand with proven marketing strategies that boost admissions, increase engagement, and build a strong presence where students and parents search for trusted institutions.",
    slug: "/digital-marketing-for-education-in-mumbai",
    description: {
      mode: "light",
      title: "Reach More Students Through Search",
      shortdesc:
        "Strengthen your presence with effective digital campaigns tailored for education.",
      desc: [
        "In today’s digital-first world, educational institutions need more than traditional advertising to succeed. With rising competition, it’s essential to build a strong presence where students and parents are searching online. Our digital marketing services are tailored to help schools, colleges, training centers, and online education platforms grow visibility and generate quality leads. We use data-driven strategies across search engines, local listings, and video platforms to capture attention and boost engagement.",
        "Our approach includes optimizing your Google Business Profile for maximum local visibility, creating targeted ad campaigns, and producing YouTube content that connects with students. We focus on getting real results, more inquiries, higher engagement, and better admissions. From keyword-rich SEO to conversion-focused landing pages, we help you build a long-term digital presence that stands out in a competitive space.",
        "We understand the education sector’s unique challenges and deliver solutions that reflect your goals. Whether you're launching a new course or expanding your student base, our expertise ensures steady digital growth. Trust us for effective, transparent, and impactful digital marketing for education in Mumbai.",
      ],
      image: education1,
    },

    clients: {
      mode: "gray",
      title: "We have served these clients",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim debitis, rem magni, exercitationem iste dolor quidem repellat similique saepe mollitia omnis nobis nostrum, inventore hic cupiditate officiis tenetur ducimus?",
      list: [
        "https://drsonikshah.com/static/media/logo.8d8cd9d98148e6b3c5cc.png",
        "https://www.drrahulrane.in/assets/img/logo.png",
        "data:image/png;base64,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",
        "https://thungasthhospital.com/static/media/logo.4ccdd47939fcd909328a.png",
      ],
    },
    testimonial: {
      mode: "dark",
      title: "What our client say",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa quisquam ex dolorum ut quam quaerat iure exercitationem deleniti minima reiciendis magnam, quas doloremque repudiandae ad asperiores eligendi architecto itaque!",
      review: [
        {
          name: "Ankit Tiwari",
          company: "Student, Career Boost Academy",
          review:
            "I found my coaching center through Google and enrolled the same day. Their visibility was top-notch, thanks to Shree Krishna Digital Solutions Pvt Ltd local SEO and GMB setup",
        },
        {
          name: "Pooja Nair",
          company: "Parent, Rising Minds School",
          review:
            "We discovered Rising Minds through a local Google search. The reviews, photos, and quick contact option helped us decide instantly. Great work by the Shree Krishna Digital Solutions Pvt Ltd team!",
        },
        {
          name: "Shubham Verma",
          company: "Digital Marketing Instructor",
          review:
            "My YouTube leads tripled after Shree Krishna Digital Solutions Pvt Ltd video strategy. Their content planning and promotion helped me attract students from all over India. Highly recommended!",
        },
        {
          name: "Kavita Rao",
          company: "Principal, Bright Future Junior College",
          review:
            "Our admissions increased by 60% after their SEO campaign. Now, we rank for multiple keywords related to our courses. Shree Krishna Digital Solutions Pvt Ltd knows education marketing!",
        },
        {
          name: "Manan Shah",
          company: "Student, Concept Classes",
          review:
            "I saw their institute’s Google Ad and enrolled right away. The details were clear and easy to understand. The campaign brought me exactly where I needed to go.",
        },
        {
          name: "Neha Joshi",
          company: "Director, CodeSphere Academy",
          review:
            "Shree Krishna Digital Solutions Pvt Ltd helped us grow our YouTube presence with demo class videos. We’re now getting regular inquiries through video leads. Their education marketing strategy really works!",
        },
      ],
    },
    casestudy: {
      mode: "dark",
      title: "See our case study of our clients doctor or hospital",
      shortdesc:
        "Empowering brands with results-driven digital marketing success.",
      list: [
        {
          img: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Real Estate",
          title: "Luxury Living Realty – SEO Transformation",
          desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
        },
        {
          img: "https://images.pexels.com/photos/4508641/pexels-photo-4508641.jpeg?auto=compress&cs=tinysrgb&w=1200",
          type: "Hospitality",
          title: "ResortEase – Application Development",
          desc: "Developed a booking and resort management app used by over 100+ resorts.",
        },
        {
          img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "E-Commerce",
          title: "UrbanCart – Digital Marketing Overhaul",
          desc: "Revamped performance marketing and email automation for a 5x ROI.",
        },
        {
          img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Education",
          title: "STEM Boost Academy – Website & CRM",
          desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
        },
        {
          img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Interior Design",
          title: "DecoraNest – Portfolio Website",
          desc: "Created a stylish web presence and social strategy for luxury interiors.",
        },
        {
          img: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Logistics",
          title: "FastTrack Movers – Branding & CRM Setup",
          desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
        },
      ],
    },
    whychoose: {
      mode: "gray",
      title: "Why We Are The Perfect Fit For this Industries",
      shortdesc:
        "With deep industry insights, we help educational institutions build awareness, reach ideal learners, and generate high-quality leads through carefully structured digital campaigns.",
      whychoosepoints: [
        {
          image: EducationSub1,
          title: "Empowering Educational Brands To Thrive",
          desc: "We specialize in helping educational institutions boost visibility and drive student engagement through smart digital strategies. Our team understands the evolving education landscape and crafts marketing campaigns that align with your admissions goals. From increasing inquiries to enhancing reputation, we provide measurable results. Whether you're a school, college, or edtech platform, our customized approach ensures your institution stands out in today’s digitally competitive learning environment with effective digital marketing for education in Mumbai.",
        },
        {
          image: EducationSub2,
          title: "Growth-Focused Solutions For Education",
          desc: "With years of experience working with educational brands, we offer powerful marketing strategies that increase student enrollments and build lasting credibility. We focus on search visibility, engaging ad creatives, and content that speaks to students and parents alike. Our campaigns are driven by data and purposefully optimized for results, making us a trusted partner for education-focused businesses looking to scale their digital reach effectively.",
        },
        {
          image: EducationSub3,
          title: "Student-Centric Marketing That Performs",
          desc: "Our deep understanding of learner behavior allows us to create digital marketing plans that truly connect. We position your institute where students and parents are looking, through video content, paid ads, and search marketing. Our mission is to help educational brands get discovered, trusted, and chosen by their target audience. Every campaign is designed to increase awareness, generate leads, and contribute directly to enrollment growth.",
        },
        {
          image: EducationSub4,
          title: "Smart Digital Strategy For Institutions",
          desc: "We bring marketing expertise that aligns with the unique challenges and goals of educational brands. From coaching centers to universities, we create custom solutions that generate inquiries and build trust. Our campaigns span SEO, video promotion, and lead-focused ad funnels. By putting your brand in front of the right audience, we ensure consistent digital growth and improved admissions through thoughtful execution and continual performance tracking.",
        },
        {
          image: EducationSub5,
          title: "Proven Digital Growth For Educators",
          desc: "We’ve helped numerous institutions across the education sector establish a strong online presence. Through detailed market research, compelling content, and targeted campaigns, we ensure that your institute reaches students effectively. Our team focuses on driving quality leads and building long-term digital equity. If your goal is to expand your student base and strengthen your digital identity, we are the strategic marketing partner you've been looking for, specializing in digital marketing for education in Mumbai.",
        },
      ],
    },
    ourworks: {
      mode: "image",
      title: "Services that help your business grow",
      shortdesc:
        "Whether you're starting out or scaling up, our marketing services are designed to generate leads, drive conversions, and accelerate business growth across multiple online channels.",
      worklist: [
        {
          image: GoogleMyBusiness,
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Stand out in local searches with an optimized GMB profile. Highlight your courses, timings, reviews, and campus photos. Help parents and students easily find directions, contact you, and read real success stories online.",
            keywords: [],
          },
          link: "/google-my-business-listing-service",
        },
        {
          image: seo,
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: "Reach students and parents searching for courses, coaching, or schools online. SEO boosts your website’s visibility on Google, helping you attract more admissions, demo class registrations, and inquiries through organic traffic.",
            keywords: [],
          },
          link: "/best-seo-company-mumbai",
        },
        {
          image: ppc,
          title: "PPC (Google Ads)",
          desc: {
            para: "Promote courses, entrance batches, or admission drives using targeted Meta Ads. Capture leads by showcasing testimonials, faculty highlights, and student results to generate high-quality inquiries and grow enrollments quickly.",
            keywords: [],
          },
          link: "/ppc-agency-mumbai",
        },
        {
          image: YouTubeMarketing,
          title: "YouTube Marketing",
          desc: {
            para: "Create engaging Reels that showcase student achievements, daily learning moments, faculty intros, and campus life. Build brand trust, attract youth, and increase inquiries by sharing real educational impact in short, powerful videos.",
            keywords: [],
          },
          link: "/social-media-marketing-agency-mumbai",
        },
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
          question: "How can digital marketing increase student enrollments?",
          answer: {
            para: "By using targeted ads, SEO, and social content to reach students and parents online.",
            list: [],
            note: "",
          },
        },
        {
          question: "Is social media effective for promoting courses?",
          answer: {
            para: "Yes, Instagram, Facebook, and YouTube are powerful tools to share course highlights and testimonials.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How do educational institutions use SEO to gain visibility?",
          answer: {
            para: "By optimizing their websites and blogs for relevant course and location-based queries.",
            list: [],
            note: "",
          },
        },
        {
          question: "What role do paid ads play in student admissions?",
          answer: {
            para: "They help reach a larger audience quickly and drive inquiries and registrations.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How to target the right audience for a coaching institute?",
          answer: {
            para: "Use location, age, education level, and interest-based targeting on ad platforms.",
            list: [],
            note: "",
          },
        },
        {
          question: "Can email campaigns help retain students?",
          answer: {
            para: "Yes, email is excellent for keeping students updated on admissions, courses, and exam tips.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "What kind of content works best for educational marketing?",
          answer: {
            para: "Tutorials, FAQs, webinar promotions, and success stories are highly effective.",
            list: [],
            note: "",
          },
        },
        {
          question: "How can YouTube help in student acquisition?",
          answer: {
            para: "Educational content and testimonials build trust and attract learners through visual appeal.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Is mobile marketing effective for colleges and coaching centers?",
          answer: {
            para: "Yes, SMS campaigns and mobile-optimized websites are crucial for student engagement.",
            list: [],
            note: "",
          },
        },
        {
          question: "How to measure ROI in educational digital marketing?",
          answer: {
            para: "By tracking leads, enrollments, website visits, and cost per acquisition (CPA).",
            list: [],
            note: "",
          },
        },
      ],
    },
    contact: {
      mode: "light",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Have any query about our services or solutions? Our expert team is here to guide and support you. Let’s discuss now!",
      form: [
        {
          label: "Full Name",
          name:"name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          name:"email",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          name:"phone",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Industry",
          name:"industry",
          placeholder: "Industry Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          name:"message",
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
    schemaData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can digital marketing increase student enrollments?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By using targeted ads, SEO, and social content to reach students and parents online.",
          },
        },
        {
          "@type": "Question",
          name: "Is social media effective for promoting courses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Instagram, Facebook, and YouTube are powerful tools to share course highlights and testimonials.",
          },
        },
        {
          "@type": "Question",
          name: "How do educational institutions use SEO to gain visibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By optimizing their websites and blogs for relevant course and location-based queries.",
          },
        },
        {
          "@type": "Question",
          name: "What role do paid ads play in student admissions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They help reach a larger audience quickly and drive inquiries and registrations.",
          },
        },
        {
          "@type": "Question",
          name: "How to target the right audience for a coaching institute?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use location, age, education level, and interest-based targeting on ad platforms.",
          },
        },
        {
          "@type": "Question",
          name: "Can email campaigns help retain stu",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, email is excellent for keeping students updated on admissions, courses, and exam tips.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of content works best for educational marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tutorials, FAQs, webinar promotions, and success stories are highly effective.",
          },
        },
        {
          "@type": "Question",
          name: "How can YouTube help in student acquisition?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Educational content and testimonials build trust and attract learners through visual appeal.",
          },
        },
        {
          "@type": "Question",
          name: "Is mobile marketing effective for colleges and coaching centers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, SMS campaigns and mobile-optimized websites are crucial for student engagement.",
          },
        },
        {
          "@type": "Question",
          name: "How to measure ROI in educational digital marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By tracking leads, enrollments, website visits, and cost per acquisition (CPA).",
          },
        },
      ],
    },
  },
  {
    banner: HospitalityCatering,
    title: "Hospitility & Caterers",
    keyword: "Digital Marketing For Hospitility & Caterers In Mumbai",
    metaTitle: "Digital Marketing For Hospitility & Caterers In Mumbai | SKD",
    metaDes:
      "Boost your hospitality or catering business in Mumbai with digital marketing. SEO, social media, and ads drive bookings and engagement.",
    canonical:
      "https://skdm.in/digital-marketing-for-hospitality-and-caterers-mumbai",
    shortdesc:
      "Grow your event and food services with proven marketing techniques that increase bookings, build audience loyalty, and enhance your visibility through high-impact digital engagement.",
    slug: "/digital-marketing-for-hospitality-and-caterers-mumbai",
    description: {
      mode: "light",
      title: "Expand Bookings Through Digital Visibility",
      shortdesc:
        "Gain exposure online and turn interest into real-time bookings and loyal customers.",
      desc: [
        "In today’s highly competitive landscape, having a strong digital presence is essential for businesses in the hospitality and catering industry. Customers search online for the best experiences, and your brand needs to appear where they’re looking. We help you achieve that by crafting customized digital marketing strategies focused on attracting bookings, inquiries, and loyal customers.",
        "Our services are designed to boost your visibility through search engine rankings, local business optimization, and social engagement. Whether you’re a catering company or a full-scale hospitality service provider, we understand the unique challenges you face. From managing reputation to showcasing your menus and venues through engaging content, we take care of it all.",
        "We also focus on converting interest into action—driving direct inquiries, event bookings, and customer retention. By analyzing audience behavior and creating campaigns that speak their language, we ensure you stay ahead of the competition.",
        "If you’re looking to grow and scale your business in the right direction, explore the power of digital marketing for hospitality & caterers in Mumbai with our expert team. We’re here to take your brand to the next level.",
      ],
      image: HospitalityCatering1,
    },

    clients: {
      mode: "gray",
      title: "We have served these clients",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim debitis, rem magni, exercitationem iste dolor quidem repellat similique saepe mollitia omnis nobis nostrum, inventore hic cupiditate officiis tenetur ducimus?",
      list: [
        "https://drsonikshah.com/static/media/logo.8d8cd9d98148e6b3c5cc.png",
        "https://www.drrahulrane.in/assets/img/logo.png",
        "data:image/png;base64,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",
        "https://thungasthhospital.com/static/media/logo.4ccdd47939fcd909328a.png",
      ],
    },
    testimonial: {
      mode: "dark",
      title: "What our client say",
      shortdesc: "",
      review: [
        {
          name: "Priya Shah",
          company: "Kings Resorts",
          review:
            "Our event bookings doubled after working with this marketing team. Their strategies helped us gain consistent leads!",
        },
        {
          name: "Rahul Mehta",
          company: "Royal Caterers",
          review:
            "heir PPC campaigns brought us real results. Highly recommended for anyone in the catering industry!",
        },
        {
          name: "Natasha Fernandez",
          company: "Nature Full Reosrt",
          review:
            "Thanks to their SEO and GMB expertise, our restaurant ranks at the top locally. Amazing transformation!",
        },
        {
          name: "Alex Thompson",
          company: "Banquet Hall",
          review:
            "The Reels they created got viral! We saw a huge spike in enquiries for our banquet hall.",
        },
        {
          name: "Sunita Kaur",
          company: "Caterers",
          review:
            "Professional team and great insights. Their digital marketing completely changed how we get catering leads!",
        },
        {
          name: "Michael Rossi",
          company: "Premuim Villa",
          review:
            "From zero visibility to fully booked weekends — their Meta Ads strategy truly works for hospitality businesses",
        },
      ],
    },
    casestudy: {
      mode: "dark",
      title: "See our case study of our clients doctor or hospital",
      shortdesc:
        "Empowering brands with results-driven digital marketing success.",
      list: [
        {
          img: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Real Estate",
          title: "Luxury Living Realty – SEO Transformation",
          desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
        },
        {
          img: "https://images.pexels.com/photos/4508641/pexels-photo-4508641.jpeg?auto=compress&cs=tinysrgb&w=1200",
          type: "Hospitality",
          title: "ResortEase – Application Development",
          desc: "Developed a booking and resort management app used by over 100+ resorts.",
        },
        {
          img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "E-Commerce",
          title: "UrbanCart – Digital Marketing Overhaul",
          desc: "Revamped performance marketing and email automation for a 5x ROI.",
        },
        {
          img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Education",
          title: "STEM Boost Academy – Website & CRM",
          desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
        },
        {
          img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Interior Design",
          title: "DecoraNest – Portfolio Website",
          desc: "Created a stylish web presence and social strategy for luxury interiors.",
        },
        {
          img: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Logistics",
          title: "FastTrack Movers – Branding & CRM Setup",
          desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
        },
      ],
    },
    whychoose: {
      mode: "gray",
      title: "Why We Are The Perfect Fit For this Industries",
      shortdesc:
        "We understand what your guests seek and craft personalized digital strategies that help you build trust, engage your market, and stay ahead in the competitive hospitality landscape.",
      whychoosepoints: [
        {
          image: Hospitality1,
          title: "Local Engagement That Drives Bookings",
          desc: "Hospitality and catering thrive on local visibility and customer experience. We help your brand get discovered by optimizing local presence, running geo-targeted campaigns, and creating engaging reels that reflect your service quality. With our industry know-how and expertise in digital marketing for hospitality & Caterers In Mumbai, we align marketing efforts with your business goals, boosting footfall, event inquiries, and customer retention. We’re here to ensure your business stays top-of-mind for diners, event planners, and hospitality seekers.",
        },
        {
          image: HospitalityCatering1,
          title: "Enhancing Brand Trust Digitally",
          desc: "Trust and presentation are everything in this industry. We help hospitality and catering businesses build strong reputations online through high-impact visuals, consistent branding, and client-focused content. Our digital strategy includes review management, short-form video marketing, and keyword-based ad targeting to keep your brand in front of high-intent customers. From restaurant bookings to wedding catering leads, we deliver growth where it matters most: your bottom line.",
        },
        {
          image: Hospitality2,
          title: "Consistent Leads Through Smart Marketing",
          desc: "We focus on bringing high-quality leads to your hospitality and catering business by combining creativity with analytics. Whether it’s showcasing dishes through reels or positioning your venue on top of search results, we use every platform to increase bookings and inquiries. Our deep understanding of audience behavior allows us to connect with those actively searching for your services and convert them into loyal customers.",
        },
        {
          image: Hospitality3,
          title: "Result-Driven Marketing For Caterers",
          desc: "We know how important reputation, visibility, and timely customer engagement are in the catering and hospitality world. Our strategic approach focuses on showcasing your best offerings through reels, customer reviews, and local ads. We help you stand out online, drive meaningful inquiries, and build repeat business. With data-backed campaigns, we bring you measurable results that match your business goals and help you grow consistently in the digital landscape.",
        },
        {
          image: Hospitality4,
          title: "Digital Success For Hospitality Brands",
          desc: "Hospitality thrives on trust, visibility, and memorable experiences. We translate these qualities into compelling digital campaigns that reflect your brand’s strengths. From GMB optimization to ad campaigns and video storytelling, our expertise in digital marketing for hospitality & caterers in Mumbai helps you engage your audience where they’re already searching. Whether you're promoting a new menu, venue, or event, our solutions are built to convert curiosity into action and drive long-term loyalty across digital platforms.",
        },
      ],
    },
    ourworks: {
      mode: "image",
      title: "Services that help your business grow",
      shortdesc:
        "We focus on performance marketing, branding, and local visibility strategies that align with your business goals and deliver consistent growth through high-quality leads and a strong online presence.",
      worklist: [
        {
          image: GoogleMyBusiness,
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Maximize your hospitality visibility with GMB optimization. Show up in local searches, gather positive reviews, and attract bookings with an updated profile. Ideal for restaurants, banquets, and catering businesses targeting nearby customers",
            keywords: [],
          },
          link: "/google-my-business-listing-service",
        },
        {
          image: seo,
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: " Boost your hospitality website’s ranking with strategic SEO. From keyword-rich content to local listings, drive organic traffic and inquiries for your catering and event services. Stay ahead with consistent, long-term lead generation.",
            keywords: [],
          },
          link: "/best-seo-company-mumbai",
        },
        {
          image: ppc,
          title: "PPC (Google Ads)",
          desc: {
            para: "Target your ideal clients through Meta Ads. Generate direct leads for catering orders, event bookings, or hotel reservations. Fast, cost-effective results to keep your hospitality business at the top of customer minds.",
            keywords: [],
          },
          link: "/best-seo-company-mumbai",
        },
        {
          image: SocialMedia,
          title: "Reels (Instagram/Facebook)",
          desc: {
            para: "Showcase your food, ambiance, and events through engaging Reels. Reach thousands with short, visual stories that highlight your brand’s uniqueness and attract instant attention from event planners, diners, and hospitality seekers.",
            keywords: [],
          },
          link: "/social-media-marketing-agency-mumbai",
        },
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
          question:
            "How can digital marketing help hotels and caterers get more bookings?",
          answer: {
            para: "By increasing online visibility, digital marketing brings targeted traffic from people searching for hospitality services.",
            list: [],
            note: "",
          },
        },
        {
          question: "What is the role of SEO in hospitality marketing?",
          answer: {
            para: 'SEO helps your hotel or catering business rank higher for keywords like "wedding caterers near me" or "best hotel in [city]."',
            list: [],
            note: "",
          },
        },
        {
          question:
            "Are social media platforms effective for catering businesses?",
          answer: {
            para: "Yes, Instagram and Facebook help showcase events, menus, and client testimonials.",
            list: [],
            note: "",
          },
        },
        {
          question: "How do online reviews impact the hospitality industry?",
          answer: {
            para: "Positive reviews on platforms like Google and TripAdvisor can influence booking decisions.",
            list: [],
            note: "",
          },
        },
        {
          question: "Can Google Ads help generate leads for catering services?",
          answer: {
            para: "Absolutely. Targeted ads ensure your business appears when someone searches for catering in your location.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How important is mobile optimization for hospitality websites?",
          answer: {
            para: "Very important. Many users book hotels and catering services via mobile devices.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "What kind of content works best for promoting hospitality services?",
          answer: {
            para: "Mouth-watering food photos, customer testimonials, behind-the-scenes videos, and service highlights.",
            list: [],
            note: "",
          },
        },
        {
          question: "How can email marketing help in customer retention?",
          answer: {
            para: "By sending special offers, festive menus, and loyalty discounts to past clients.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Can influencer marketing be effective for boutique hotels or chefs?",
          answer: {
            para: "Yes, collaborations with food bloggers or travel influencers drive high visibility.",
            list: [],
            note: "",
          },
        },
        {
          question: "How to measure ROI in digital marketing for hospitality?",
          answer: {
            para: "By tracking bookings, form fills, calls, and online inquiries through analytics tools.",
            list: [],
            note: "",
          },
        },
      ],
    },
    contact: {
      mode: "light",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Have any query about our services or solutions? Our expert team is here to guide and support you. Let’s discuss now!",
      form: [
        {
          label: "Full Name",
          name:"name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          name:"email",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          name:"phone",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Industry",
          name:"industry",
          placeholder: "Industry Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          name:"message",
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
    schemaData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can digital marketing help hotels and caterers get more bookings?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By increasing online visibility, digital marketing brings targeted traffic from people searching for hospitality services.",
          },
        },
        {
          "@type": "Question",
          name: "What is the role of SEO in hospitality marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'SEO helps your hotel or catering business rank higher for keywords like "wedding caterers near me" or "best hotel in [city].',
          },
        },
        {
          "@type": "Question",
          name: "Are social media platforms effective for catering businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Instagram and Facebook help showcase events, menus, and client testimonials.",
          },
        },
        {
          "@type": "Question",
          name: "How do online reviews impact the hospitality industry?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Positive reviews on platforms like Google and TripAdvisor can influence booking decisions.",
          },
        },
        {
          "@type": "Question",
          name: "Can Google Ads help generate leads for catering services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. Targeted ads ensure your business appears when someone searches for catering in your location.",
          },
        },
        {
          "@type": "Question",
          name: "How important is mobile optimization for hospitality websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Very important. Many users book hotels and catering services via mobile devices.",
          },
        },
        {
          "@type": "Question",
          name: "What kind of content works best for promoting hospitality services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Mouth-watering food photos, customer testimonials, behind-the-scenes videos, and service highlights.",
          },
        },
        {
          "@type": "Question",
          name: "How can email marketing help in customer retention?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By sending special offers, festive menus, and loyalty discounts to past clients.",
          },
        },
        {
          "@type": "Question",
          name: "Can influencer marketing be effective for boutique hotels or chefs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, collaborations with food bloggers or travel influencers drive high visibility.",
          },
        },
        {
          "@type": "Question",
          name: "How to measure ROI in digital marketing for hospitality?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By tracking bookings, form fills, calls, and online inquiries through analytics tools.",
          },
        },
      ],
    },
  },
  {
    banner: ResortVilla,
    title:"Resorts & Villa",
    keyword: "Digital Marketing For Resort & Villas In Mumbai",
    metaTitle: "Digital Marketing For Resort & Villas in Mumbai | SKD",
    metaDes:
      "Promote your Mumbai resort or villa with expert digital marketing—SEO, social media, Google Ads, and content strategies to boost bookings.",
    canonical:
      "https://skdm.in/digital-marketing-for-resorts-and-villas-in-mumbai",
    shortdesc:
      "Boost your resort or villa’s visibility with expert digital marketing strategies. Engage more travelers through optimized listings, targeted ads, and captivating reels that showcase your unique hospitality experience.",
    slug: "/digital-marketing-for-resorts-and-villas-in-mumbai",
    description: {
      mode: "light",
      title: "Boost Your Resort Bookings Fast",
      shortdesc:
        "Reach travelers effectively with targeted ads and engaging reels that inspire bookings.",
      desc: [
        "Resorts and villas thrive when they connect with the right audience at the right time, creating memorable experiences that turn visitors into loyal customers. Our digital marketing strategies are designed to help you build a strong and visible local presence by leveraging the latest tools and techniques. We focus on comprehensive search engine optimization (SEO) to improve your rankings on search results, ensuring travelers find you easily. Alongside SEO, we manage targeted paid campaigns (PPC) that attract qualified leads actively seeking unique accommodations.",
        "To further engage potential guests, we create creative video content and reels that showcase your property’s best features, ambiance, and experiences, capturing attention on social media platforms. Our team optimizes your Google My Business listings to increase visibility and trust in local searches. By analyzing traveler behavior and current market trends, we tailor campaigns that not only increase inquiries and bookings but also maximize your return on investment. Experience the power of digital marketing for resorts & villas in Mumbai, crafted specifically to elevate your hospitality business and drive sustainable growth.",
      ],
      image: resort1,
    },

    clients: {
      mode: "gray",
      title: "We have served these clients",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim debitis, rem magni, exercitationem iste dolor quidem repellat similique saepe mollitia omnis nobis nostrum, inventore hic cupiditate officiis tenetur ducimus?",
      list: [
        "https://drsonikshah.com/static/media/logo.8d8cd9d98148e6b3c5cc.png",
        "https://www.drrahulrane.in/assets/img/logo.png",
        "data:image/png;base64,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",
        "https://thungasthhospital.com/static/media/logo.4ccdd47939fcd909328a.png",
      ],
    },
    testimonial: {
      mode: "dark",
      title: "What our client say",
      shortdesc: "",
      review: [
        {
          name: "Rohan Mehta",
          company: "Owner, SeaView Retreat Villas",
          review:
            "After Shree Krishna Digital Solutions Pvt Ltd optimized our GMB, our property started appearing in top searches. Bookings doubled within a month, all organic, no commission. Totally worth it!",
        },
        {
          name: "Neha Shah",
          company: "Manager, Blissful Escapes Resort",
          review:
            "Our SEO rankings improved drastically! Guests now find us through Google and mention our website often. Thank you, Shree Krishna Digital Solutions Pvt Ltd, for the smooth and result-driven approach.",
        },
        {
          name: "Aryan Desai",
          company: "Owner, Hillside Hideaway",
          review:
            "Meta Ads brought us high-quality leads and weekend bookings even during the off-season. Shree Krishna Digital Solutions Pvt Ltd creatives and targeting strategy made a big difference in our ad performance.",
        },
        {
          name: "Priya Nair",
          company: "Guest, Sunset Luxe Villas",
          review:
            "I discovered the villa through an Instagram Reel. It looked exactly like the video! Beautifully done marketing and a stay worth remembering.",
        },
        {
          name: "Kunal Thakur",
          company: "Co-owner, Palm Bliss Resorts",
          review:
            "Earlier we relied on OTAs. Now with GMB, SEO, and Reels, our direct bookings are growing every month. Shree Krishna Digital Solutions Pvt Ltd has given our brand real digital strength.",
        },
        {
          name: "Tanya Rao",
          company: "Influencer & Travel Blogger",
          review:
            "The resort's Reels caught my eye, and I instantly booked a stay. Their content was visually stunning and honest, definitely one of the best finds through Instagram!",
        },
      ],
    },
    casestudy: {
      mode: "dark",
      title: "See our case study of our clients doctor or hospital",
      shortdesc:
        "Empowering brands with results-driven digital marketing success.",
      list: [
        {
          img: RealEstate,
          type: "Real Estate",
          title: "Luxury Living Realty – SEO Transformation",
          desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
        },
        {
          img: Hospitality,
          type: "Hospitality",
          title: "ResortEase – Application Development",
          desc: "Developed a booking and resort management app used by over 100+ resorts.",
        },
        {
          img: ECommerce,
          type: "E-Commerce",
          title: "UrbanCart – Digital Marketing Overhaul",
          desc: "Revamped performance marketing and email automation for a 5x ROI.",
        },
        {
          img: Education,
          type: "Education",
          title: "STEM Boost Academy – Website & CRM",
          desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
        },
        {
          img: InteriorDesign,
          type: "Interior Design",
          title: "DecoraNest – Portfolio Website",
          desc: "Created a stylish web presence and social strategy for luxury interiors.",
        },
        {
          img: Logistics,
          type: "Logistics",
          title: "FastTrack Movers – Branding & CRM Setup",
          desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
        },
      ],
    },
    whychoose: {
      mode: "gray",
      title: "Why We Are The Perfect Fit For this Industries",
      shortdesc:
        "We align our marketing efforts with your industry's unique dynamics, ensuring your brand communicates effectively, attracts the right audience, and converts interest into long-term relationships.",
      whychoosepoints: [
        {
          image: villa1,
          title: "More Bookings, Less Empty Rooms",
          desc: "We help resorts and villas increase bookings through tailored digital marketing strategies. Using SEO, GMB optimization, paid ads, and engaging reels, we bring you the right guests at the right time. The goals of our campaigns are to fill more rooms, get more direct leads, and create long-term digital value. With our expertise in digital marketing for resorts & villas in Mumbai, we don’t just create visibility; we drive real results that keep your property fully booked and ahead of the competition.",
        },
        {
          image: villa2,
          title: "Turning Travel Searches into Stays",
          desc: "Travelers are searching; are they finding you? We make sure they do. From GMB optimization to SEO and high-converting Meta ads, we connect your resort or villa with people actively planning their next getaway. With engaging content and video reels, we showcase your space the way it deserves. Our strategies turn curiosity into clicks and clicks into confirmed bookings, giving you better ROI and higher guest inflow.",
        },
        {
          image: villa3,
          title: "Your Resort Deserves to Be Seen",
          desc: "In a market full of beautiful stays, standing out is a must. We specialize in showcasing your resort or villa through stunning visuals, optimized listings, and targeted ads. Whether it's honeymooners, families, or weekend travelers, we tailor campaigns to reach your perfect guest. Using GMB, SEO, and Meta ads, we help build awareness, increase inquiries, and drive direct bookings for long-term business success.",
        },
        {
          image: villa4,
          title: "Local Reach. Global Attention.",
          desc: "Whether your resort serves locals or tourists, visibility is key. Our marketing approach combines GMB optimization, localized SEO, and eye-catching reels to help your property shine. We focus on attracting guests who are actively looking to book. With strategic targeting and smart content, we turn online interest into real-life visits. Let us assist you in creating a powerful digital brand that is as memorable as your property.",
        },
        {
          image: villa5,
          title: "Digital Marketing That Fills Rooms",
          desc: "Your property should do more than just look good; it should be booked solid. We create digital strategies that fill your rooms using performance-driven tools like SEO, GMB, Meta ads, and video content. Our team understands traveler behavior and tailors every campaign to maximize occupancy and guest engagement. From boosting seasonal bookings to building your brand online, our expertise in digital marketing for resorts & villas in Mumbai ensures your villa or resort stays in high demand.",
        },
      ],
    },
    ourworks: {
      mode: "image",
      title: "Services that help your business grow",
      shortdesc:
        "We focus on performance marketing, branding, and local visibility strategies that align with your business goals and deliver consistent growth through high-quality leads and a strong online presence.",
      worklist: [
        {
          image: GoogleMyBusiness,
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Boost direct bookings with a professionally optimized GMB profile. Showcase stunning resort images, collect guest reviews, appear in top local searches, and make it easy for travelers to find, trust, and contact your property.",
            keywords: [],
          },
          link: "/google-my-business-listing-service",
        },
        {
          image: seo,
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: " Attract travelers searching online for weekend getaways or luxury stays. Our SEO strategy helps your resort or villa rank for high-intent keywords like `best villas near me` or `resort booking.`",
            keywords: [],
          },
          link: "/best-seo-company-mumbai",
        },
        {
          image: ppc,
          title: "PPC (Google Ads)",
          desc: {
            para: "Drive instant resort bookings with targeted Meta Ads. Reach travelers based on location, interests, and behavior. Showcase your best offers and packages with scroll-stopping creatives that convert viewers into paying guests.",
            keywords: [],
          },
          link: "/ppc-agency-mumbai",
        },
        {
          image: SocialMedia,
          title: "Reels (Instagram/Facebook)",
          desc: {
            para: "Captivate travel lovers with immersive Reels showcasing your property, views, food, and guest experiences. Leverage trending music and storytelling to build engagement, boost shares, and inspire direct bookings via social media.",
            keywords: [],
          },
          link: "/social-media-marketing-agency-mumbai",
        },
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
          question:
            "How can digital marketing help increase bookings for resorts?",
          answer: {
            para: "By targeting travelers with offers and visual content on social media and Google.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "What is the impact of Google Business Profile on resort visibility?",
          answer: {
            para: "It enhances local SEO and makes it easy for guests to find and review your resort.",
            list: [],
            note: "",
          },
        },
        {
          question: "How can Instagram and Facebook help market villas?",
          answer: {
            para: "Through engaging reels, stories, and testimonials that create a desire to book.",
            list: [],
            note: "",
          },
        },
        {
          question: "Are influencer collaborations effective for luxury stays?",
          answer: {
            para: "Yes, influencers drive high engagement and bookings.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "What digital tools can showcase property amenities better?",
          answer: {
            para: "360° videos, drone photography, and virtual walkthroughs.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How do online travel platforms integrate with digital marketing?",
          answer: {
            para: "They can sync with your website and marketing campaigns to improve reach.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Can customer reviews on digital platforms attract more guests?",
          answer: {
            para: "Absolutely. High ratings improve trust and bookings.",
            list: [],
            note: "",
          },
        },
        {
          question: "What SEO practices work for vacation villas and resorts?",
          answer: {
            para: "Location-based keywords, optimized listings, and backlinks.",
            list: [],
            note: "",
          },
        },
        {
          question: "How can retargeting ads bring back website visitors?",
          answer: {
            para: "They remind users who visited your site to come back and book.",
            list: [],
            note: "",
          },
        },
        {
          question: "How to market seasonal offers digitally for resorts?",
          answer: {
            para: "Use email campaigns, social media banners, and Google Ads.",
            list: [],
            note: "",
          },
        },
      ],
    },
    contact: {
      mode: "light",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Have any query about our services or solutions? Our expert team is here to guide and support you. Let’s discuss now!",
      form: [
        {
          label: "Full Name",
          name:"name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          name:"email",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          name:"phone",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Industry",
          name:"industry",
          placeholder: "Industry Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          name:"message",
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
    schemaData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can digital marketing help increase bookings for resorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By targeting travelers with offers and visual content on social media and Google.",
          },
        },
        {
          "@type": "Question",
          name: "What is the impact of Google Business Profile on resort visibility?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It enhances local SEO and makes it easy for guests to find and review your resort.",
          },
        },
        {
          "@type": "Question",
          name: "How can Instagram and Facebook help market villas?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through engaging reels, stories, and testimonials that create a desire to book.",
          },
        },
        {
          "@type": "Question",
          name: "Are influencer collaborations effective for luxury stays?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, influencers drive high engagement and bookings.",
          },
        },
        {
          "@type": "Question",
          name: "What digital tools can showcase property amenities better?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "360° videos, drone photography, and virtual walkthroughs.",
          },
        },
        {
          "@type": "Question",
          name: "How do online travel platforms integrate with digital marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They can sync with your website and marketing campaigns to improve reach.",
          },
        },
        {
          "@type": "Question",
          name: "Can customer reviews on digital platforms attract more guests?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Absolutely. High ratings improve trust and bookings.",
          },
        },
        {
          "@type": "Question",
          name: "What SEO practices work for vacation villas and resorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Location-based keywords, optimized listings, and backlinks.",
          },
        },
        {
          "@type": "Question",
          name: "How can retargeting ads bring back website visitors?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "They remind users who visited your site to come back and book.",
          },
        },
        {
          "@type": "Question",
          name: "How to market seasonal offers digitally for resorts?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use email campaigns, social media banners, and Google Ads.",
          },
        },
      ],
    },
  },
  {
    banner: InteriorBanner,
    title:"Interior Design",
    keyword: "Digital Marketing For Interior Designer In Mumbai",
    metaTitle: "Digital Marketing for Interior Designer in Mumbai | SKD",
    metaDes:
      "Attract high-end clients with tailored digital marketing for Mumbai interior designers—SEO, social media, and ads to grow your business.",
    canonical: "https://skdm.in/digital-marketing-for-interior-designer-mumbai",
    shortdesc:
      "Showcase your creativity to the right audience. We help interior designers attract more clients through optimized Google listings, targeted ads, SEO, and high-quality visual content that drives inquiries.",
    slug: "/digital-marketing-for-interior-designer-mumbai",
    description: {
      mode: "light",
      title: "More Views, More Design Projects",
      shortdesc:
        "Let our strategies connect your designs with homeowners actively looking for help.",
      desc: [
        "Interior design is a visually driven industry, and standing out in a competitive market like Mumbai requires more than just great work; it requires smart marketing. We help interior designers grow their client base by creating a digital presence that reflects their design excellence. From optimizing your Google My Business profile to running targeted Meta Ads and creating captivating Instagram Reels, we help your portfolio reach the right audience. Our SEO strategies make sure you’re visible when potential clients search for services, while PPC campaigns ensure consistent inquiries from those ready to hire. With data-backed targeting and a deep understanding of the interior design market, we focus on increasing your visibility, building credibility, and driving conversions. Whether you’re an independent designer or a full-service studio, we create customized campaigns that align with your goals. Our content strategies highlight your style and projects, building a brand that clients trust. Partner with us to experience the impact of digital marketing for interior designers in Mumbai and turn your creativity into consistent business growth.",
      ],
      image: InteriorDesign1,
    },

    clients: {
      mode: "gray",
      title: "We have served these clients",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim debitis, rem magni, exercitationem iste dolor quidem repellat similique saepe mollitia omnis nobis nostrum, inventore hic cupiditate officiis tenetur ducimus?",
      list: [
        "https://drsonikshah.com/static/media/logo.8d8cd9d98148e6b3c5cc.png",
        "https://www.drrahulrane.in/assets/img/logo.png",
        "data:image/png;base64,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",
        "https://thungasthhospital.com/static/media/logo.4ccdd47939fcd909328a.png",
      ],
    },
    testimonial: {
      mode: "dark",
      title: "What our client say",
      shortdesc: "",
      review: [
        {
          name: "Ritu Jain",
          company: "Homeowner, Mumbai",
          review:
            "I found my designer through Google Maps and was impressed by their photos and reviews. Their GMB profile gave me full confidence to call and book a consultation.",
        },
        {
          name: "Ankur Shah",
          company: "Founder, LuxeSpaces Studio",
          review:
            "Thanks to Shree Krishna Digital Solutions Pvt Ltd SEO, we started receiving quality leads from clients searching for luxury interiors. It helped us cut dependency on paid ads and grow organically.",
        },
        {
          name: "Sneha Mehta",
          company: "Architect & Collaborator",
          review:
            "Our Meta Ads campaign brought in high-end leads we never imagined reaching. Shree Krishna Digital Solutions Pvt Ltd strategy helped us land a large-scale office project through Instagram ads!",
        },
        {
          name: "Pranav Deshpande",
          company: "Owner, Studio Nest",
          review:
            "Reels brought our work to life. Shree Krishna Digital Solutions Pvt Ltd video concepts helped us show transformations in seconds, and inquiries shot up through Instagram messages and shares.",
        },
        {
          name: "Kavya Nair",
          company: "Renovation Client, Pune",
          review:
            "I contacted the designer after seeing their reviews and photos on Google. The entire experience was transparent and professional. Glad I found them through GMB!",
        },
        {
          name: "Amit Tandon",
          company: "Partner, Element Interiors",
          review:
            "From SEO to Meta Ads, Shree Krishna Digital Solutions Pvt Ltd helped us build a strong digital footprint. We now get consistent project leads across Mumbai and Thane without relying on word-of-mouth alone.",
        },
      ],
    },
    casestudy: {
      mode: "dark",
      title: "See our case study of our clients doctor or hospital",
      shortdesc:
        "Empowering brands with results-driven digital marketing success.",
      list: [
        {
          img: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Real Estate",
          title: "Luxury Living Realty – SEO Transformation",
          desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
        },
        {
          img: "https://images.pexels.com/photos/4508641/pexels-photo-4508641.jpeg?auto=compress&cs=tinysrgb&w=1200",
          type: "Hospitality",
          title: "ResortEase – Application Development",
          desc: "Developed a booking and resort management app used by over 100+ resorts.",
        },
        {
          img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "E-Commerce",
          title: "UrbanCart – Digital Marketing Overhaul",
          desc: "Revamped performance marketing and email automation for a 5x ROI.",
        },
        {
          img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Education",
          title: "STEM Boost Academy – Website & CRM",
          desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
        },
        {
          img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Interior Design",
          title: "DecoraNest – Portfolio Website",
          desc: "Created a stylish web presence and social strategy for luxury interiors.",
        },
        {
          img: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Logistics",
          title: "FastTrack Movers – Branding & CRM Setup",
          desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
        },
      ],
    },
    whychoose: {
      mode: "gray",
      title: "Why We Are The Perfect Fit For this Industries",
      shortdesc:
        "Our team specializes in promoting interior brands with powerful visuals, optimized listings, and targeted campaigns to increase online visibility and convert views into premium client inquiries.",
      whychoosepoints: [
        {
          image: interiordesignsub1,
          title: "Crafting Visibility for Creative Minds",
          desc: "Interior designers thrive on visual appeal and client trust. Our team understands the goals and aesthetics of design businesses, creating tailored digital campaigns using SEO, Meta Ads, GMB, and engaging reels. We highlight your best projects to the right audience, generate quality leads, and position your brand for success. With our expertise in digital marketing for interior designers in Mumbai, we ensure your designs get discovered and appreciated by the right clientele.",
        },
        {
          image: interiordesignsub2,
          title: "Turning Interior Talent Into Demand",
          desc: "We help interior designers convert their creative potential into consistent business opportunities. Our marketing approach combines performance-focused strategies with your unique design identity, ensuring you get noticed online. From boosting local search visibility to running targeted ad campaigns, we understand how to present your work to high-intent audiences and turn digital engagement into project inquiries.",
        },
        {
          image: interiordesignsub3,
          title: "Marketing Designed for Designers",
          desc: "Your creativity deserves the right exposure. We specialize in promoting interior design businesses with a blend of digital storytelling and technical marketing. Whether it’s optimizing your Google presence, running Meta ads, or producing attention-grabbing reels, we ensure your portfolio reaches potential clients, builders, or realtors who matter. Our results-driven approach positions your brand where style meets strategy.",
        },
        {
          image: interiordesignsub4,
          title: "Creative Strategy Meets Design Excellence",
          desc: "We know that design is detail-oriented, and so is our marketing. Our campaigns are tailored to reflect your brand’s elegance, professionalism, and unique style. With a deep understanding of the interior design market, we craft digital solutions that increase online engagement, bring in premium leads, and reinforce your brand as a trusted expert in the design space.",
        },
        {
          image: interiordesignsub5,
          title: "Your Partner In Design Growth",
          desc: "We don’t just market; we position your design firm as a go-to expert in the interior design industry. By understanding both design trends and buyer psychology, we create campaigns tailored to your niche. Whether your focus is luxury homes or office spaces, our strategies reflect your aesthetic. With Digital Marketing for Interior Designers in Mumbai, we use SEO, Meta Ads, and video content to attract high-value clients and boost your digital presence.",
        },
      ],
    },
    ourworks: {
      mode: "image",
      title: "Services that help your business grow",
      shortdesc:
        "We focus on performance marketing, branding, and local visibility strategies that align with your business goals and deliver consistent growth through high-quality leads and a strong online presence.",
      worklist: [
        {
          image: GoogleMyBusiness,
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Boost direct bookings with a professionally optimized GMB profile. Showcase stunning resort images, collect guest reviews, appear in top local searches, and make it easy for travelers to find, trust, and contact your property.",
            keywords: [],
          },
          link: "/google-my-business-listing-service",
        },
        {
          image: seo,
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: " Attract travelers searching online for weekend getaways or luxury stays. Our SEO strategy helps your resort or villa rank for high-intent keywords like `best villas near me` or `resort booking.`",
            keywords: [],
          },
          link: "/best-seo-company-mumbai",
        },
        {
          image: ppc,
          title: "PPC (Google Ads)",
          desc: {
            para: "Drive instant resort bookings with targeted Meta Ads. Reach travelers based on location, interests, and behavior. Showcase your best offers and packages with scroll-stopping creatives that convert viewers into paying guests.",
            keywords: [],
          },
          link: "/ppc-agency-mumbai",
        },
        {
          image: SocialMedia,
          title: "Reels (Instagram/Facebook)",
          desc: {
            para: "Captivate travel lovers with immersive Reels showcasing your property, views, food, and guest experiences. Leverage trending music and storytelling to build engagement, boost shares, and inspire direct bookings via social media.",
            keywords: [],
          },
          link: "/social-media-marketing-agency-mumbai",
        },
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
          question:
            "How can interior designers attract high-paying clients online?",
          answer: {
            para: "Through professional branding, showcasing portfolios, and client testimonials.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Is Pinterest useful for marketing interior design services?",
          answer: {
            para: "Yes, it's a top platform for visual discovery and inspiration.",
            list: [],
            note: "",
          },
        },
        {
          question: "How can a blog improve brand authority for designers?",
          answer: {
            para: "By educating users and showing design expertise.",
            list: [],
            note: "",
          },
        },
        {
          question: "What are the best social platforms for interior projects?",
          answer: {
            para: "Instagram, Pinterest, and YouTube.",
            list: [],
            note: "",
          },
        },
        {
          question: "Can digital portfolios help win interior projects?",
          answer: {
            para: "Yes, clients prefer seeing real projects before contacting.",
            list: [],
            note: "",
          },
        },
        {
          question: "How does SEO benefit interior design websites?",
          answer: {
            para: "It brings organic traffic from users searching for interior services.",
            list: [],
            note: "",
          },
        },
        {
          question: "Can video testimonials help in building trust?",
          answer: {
            para: "Definitely. They offer proof of client satisfaction.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How to showcase before-and-after transformations effectively?",
          answer: {
            para: "Through time-lapse videos or photo sliders on the website and social media.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How can Google Ads bring in more local interior design inquiries?",
          answer: {
            para: 'By targeting users searching for "interior designer near me."',
            list: [],
            note: "",
          },
        },
        {
          question: "How important is website UI/UX for interior firms?",
          answer: {
            para: "Very. A well-designed site reflects the firm's aesthetic and builds credibility.",
            list: [],
            note: "",
          },
        },
      ],
    },
    contact: {
      mode: "light",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Have any query about our services or solutions? Our expert team is here to guide and support you. Let’s discuss now!",
      form: [
        {
          label: "Full Name",
          name:"name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          name:"email",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          name:"phone",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Industry",
          name:"industry",
          placeholder: "Industry Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          name:"message",
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
    schemaData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can interior designers attract high-paying clients online?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through professional branding, showcasing portfolios, and client testimonials.",
          },
        },
        {
          "@type": "Question",
          name: "Is Pinterest useful for marketing interior design services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, it's a top platform for visual discovery and inspiration.",
          },
        },
        {
          "@type": "Question",
          name: "How can a blog improve brand authority for designers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "By educating users and showing design expertise.",
          },
        },
        {
          "@type": "Question",
          name: "What are the best social platforms for interior projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Instagram, Pinterest, and YouTube.",
          },
        },
        {
          "@type": "Question",
          name: "Can digital portfolios help win interior projects?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, clients prefer seeing real projects before contacting.",
          },
        },
        {
          "@type": "Question",
          name: "How does SEO benefit interior design websites?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It brings organic traffic from users searching for interior services.",
          },
        },
        {
          "@type": "Question",
          name: "Can video testimonials help in building trust?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Definitely. They offer proof of client satisfaction.",
          },
        },
        {
          "@type": "Question",
          name: "How to showcase before-and-after transformations effectively?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Through time-lapse videos or photo sliders on the website and social media.",
          },
        },
        {
          "@type": "Question",
          name: "How can Google Ads bring in more local interior design inquiries?",
          acceptedAnswer: {
            "@type": "Answer",
            text: 'By targeting users searching for "interior designer near me."',
          },
        },
        {
          "@type": "Question",
          name: "How important is website UI/UX for interior firms?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Very. A well-designed site reflects the firm's aesthetic and builds credibility.",
          },
        },
      ],
    },
  },
  {
    banner: SpaSalonBanner,
    title:"Spa & Salon",
    keyword: "Digital Marketing For Spa & Salon In Mumbai",
    metaTitle: "Digital Marketing for Spa & Salon in Mumbai | SKD",
    metaDes:
      "Boost your Mumbai spa or salon with SEO, social media, and ads to increase visibility, attract clients, and drive bookings.",
    canonical: "https://skdm.in/digital-marketing-for-spa-and-salon-mumbai",
    shortdesc:
      "Showcase your creativity to the right audience. We help interior designers attract more clients through optimized Google listings, targeted ads, SEO, and high-quality visual content that drives inquiries.",
    slug: "/digital-marketing-for-spa-and-salon-mumbai",
    description: {
      mode: "light",
      title: "Spa Marketing Made Simple",
      shortdesc:
        "Drive appointments and grow your client base with targeted marketing strategies.",
      desc: [
        "In today’s highly competitive beauty industry, offering excellent services alone is no longer enough. Standing out as a spa or salon brand requires a smart, strategic approach to digital marketing. Your business needs more than just a presence—it needs consistent visibility, strong engagement, and ongoing trust-building with the right audience. That’s where we come in.",
        "Our digital marketing strategies are fully customized for spa and salon businesses, ensuring every campaign reflects your brand’s essence. We begin by understanding your unique services, target market, and growth goals. From there, we craft a comprehensive digital roadmap that includes engaging content creation, visually compelling brand storytelling, and well-targeted outreach efforts that connect you with potential clients.",
        "We focus on building your authority in the market while improving local reach and credibility. Whether you're looking to increase walk-ins, boost appointment bookings, or build a loyal client base, we offer proven methods that generate measurable results. With our expertise in digital marketing for spas & salons, we help you establish a powerful online reputation. Drive consistent bookings and create long-term brand loyalty that positions you as a leader in the beauty and wellness space.",
      ],
      image: SpaSalon,
    },

    clients: {
      mode: "gray",
      title: "We have served these clients",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim debitis, rem magni, exercitationem iste dolor quidem repellat similique saepe mollitia omnis nobis nostrum, inventore hic cupiditate officiis tenetur ducimus?",
      list: [
        "https://drsonikshah.com/static/media/logo.8d8cd9d98148e6b3c5cc.png",
        "https://www.drrahulrane.in/assets/img/logo.png",
        "data:image/png;base64,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",
        "https://thungasthhospital.com/static/media/logo.4ccdd47939fcd909328a.png",
      ],
    },
    testimonial: {
      mode: "dark",
      title: "What our client say",
      shortdesc: "",
      review: [
        {
          name: " Meenal Sharma",
          company: "Client, Bliss Beauty Lounge",
          review:
            "I discovered Bliss through Google and loved how easy it was to check services and book an appointment. Their reviews and photos really helped me trust them.",
        },
        {
          name: "Karan Patel",
          company: "Owner, The Skin Studio",
          review:
            "Shree Krishna Digital Solutions Pvt Ltd SEO strategy helped us rank on Google for skin treatments and spa services. We’ve seen a steady rise in walk-ins and calls from organic search.",
        },
        {
          name: "Pooja Desai",
          company: "Client, Luxe Hair Bar",
          review:
            "An Instagram ad for a festive hair color offer got my attention. I booked immediately. The ad visuals and clarity made it super convenient!",
        },
        {
          name: "Reema Joshi",
          company: "Manager, UrbanGlow Spa",
          review:
            "Our Reels started going viral after Shree Krishna Digital Solutions Pvt Ltd helped us plan the right content. From facial routines to client makeovers, each video brings real footfall now!",
        },
        {
          name: "Ajay Rane",
          company: "Regular Client, The Men's Corner",
          review:
            "I always search for barbershops nearby on Google. These guys showed up first, had great reviews, and the booking process was instant. Clean, professional, and easy.",
        },
        {
          name: "Tanvi Bhagat",
          company: "Owner, Nature’s Touch Salon",
          review:
            "With Meta Ads and GMB optimization, we now get inquiries daily. Shree Krishna Digital Solutions Pvt Ltd transformed our digital presence and brought real results, not just likes.",
        },
      ],
    },
    casestudy: {
      mode: "dark",
      title: "See our case study of our clients doctor or hospital",
      shortdesc:
        "Empowering brands with results-driven digital marketing success.",
      list: [
        {
          img: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Real Estate",
          title: "Luxury Living Realty – SEO Transformation",
          desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
        },
        {
          img: "https://images.pexels.com/photos/4508641/pexels-photo-4508641.jpeg?auto=compress&cs=tinysrgb&w=1200",
          type: "Hospitality",
          title: "ResortEase – Application Development",
          desc: "Developed a booking and resort management app used by over 100+ resorts.",
        },
        {
          img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "E-Commerce",
          title: "UrbanCart – Digital Marketing Overhaul",
          desc: "Revamped performance marketing and email automation for a 5x ROI.",
        },
        {
          img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Education",
          title: "STEM Boost Academy – Website & CRM",
          desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
        },
        {
          img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Interior Design",
          title: "DecoraNest – Portfolio Website",
          desc: "Created a stylish web presence and social strategy for luxury interiors.",
        },
        {
          img: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Logistics",
          title: "FastTrack Movers – Branding & CRM Setup",
          desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
        },
      ],
    },
    whychoose: {
      mode: "gray",
      title: "Why We Are The Perfect Fit For this Industries",
      shortdesc:
        "We understand your customers, competition, and goals. Our marketing blends creativity and analytics to position your brand strongly in the market and bring consistent, long-term results.",
      whychoosepoints: [
        {
          image: SpaSalonSub1,
          title: "Beauty Industry Marketing That Works",
          desc: "We understand the pulse of the spa and salon industry. Our marketing strategies are crafted to reflect your brand’s elegance, attract quality clientele, and build lasting loyalty. From seasonal campaigns to everyday visibility, we ensure your business stands out in a competitive market. Our deep industry insights allow us to position your brand effectively, grow bookings, and make your spa or salon the top choice in your area.",
        },
        {
          image: SpaSalonSub2,
          title: "Crafted Strategies For Spa Success",
          desc: "We specialize in marketing solutions designed for spas and salons. With a focus on aesthetics, customer experience, and booking behavior, we deliver campaigns that speak your clients’ language. Whether you're targeting walk-ins or premium packages, we create consistent engagement and brand recognition. Our team helps you grow sustainably with campaigns that convert views into visits and visits into repeat clients, keeping your appointment calendar full year-round.",
        },
        {
          image: SpaSalonSub3,
          title: "Where Wellness Meets Smart Marketing",
          desc: "The wellness industry demands more than just great services; it requires strong digital visibility. We help spas and salons amplify their brand through visually compelling campaigns, strategic storytelling, and precise audience targeting. By aligning your services with digital trends and client expectations, we generate a steady stream of quality leads. Our approach to digital marketing for spa & salons in Mumbai ensures you attract new clients and retain loyal ones in a competitive market.",
        },
        {
          image: SpaSalonSub4,
          title: "Designed For The Beauty Business",
          desc: "From bridal makeovers to luxury facials, your services deserve to be seen. We create marketing strategies that highlight your spa or salon's unique offerings and target your intended clientele. With expertise in customer behavior, branding, and digital outreach, we build awareness and trust for your brand. Our solutions are tailored to help you stand out, increase bookings, and position your business as a beauty industry leader.",
        },
        {
          image: SpaSalonSub5,
          title: "Spa & Salon Growth Partners",
          desc: "We’re more than marketers; we’re your growth partners in the beauty industry. With deep insight into the spa and salon space, we craft strategies focused on visibility, lead generation, and customer retention. Every campaign conveys your brand's exclusivity and professionalism.. With our expertise in digital marketing for spas & salons in Mumbai, we ensure a strong online presence, consistent bookings, and a loyal clientele that values your services time and again.",
        },
      ],
    },
    ourworks: {
      mode: "image",
      title: "Services that help your business grow",
      shortdesc:
        "We focus on performance marketing, branding, and local visibility strategies that align with your business goals and deliver consistent growth through high-quality leads and a strong online presence.",
      worklist: [
        {
          image: GoogleMyBusiness,
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Appear in local searches when people look for nearby salons and spas. With an optimized GMB profile, showcase your services, pricing, reviews, and photos, making it easy for clients to book or visit instantly.",
            keywords: [],
          },
          link: "/google-my-business-listing-service",
        },
        {
          image: seo,
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: "Attract organic traffic from people searching for best salon near me or spa deals in [city] SEO helps your business rank higher on Google and generate appointment-ready leads without paid promotions.",
            keywords: [],
          },
          link: "/",
        },
        {
          image: ppc,
          title: "PPC (Google Ads)",
          desc: {
            para: "Promote special offers, new treatments, or festive packages using targeted Meta Ads. Reach potential customers in your area and convert scrollers into bookings with eye-catching visuals and compelling calls to action.",
            keywords: [],
          },
          link: "/pay-per-click",
        },
        {
          image: SocialMedia,
          title: "Reels (Instagram/Facebook)",
          desc: {
            para: "Share mini-makeovers, skincare regimes, client transformations, and behind-the-scenes footage with Mini Reels. Showcase your stylists’ skills and build engagement that turns into foot traffic and online bookings.",
            keywords: [],
          },
          link: "/social-media-marketing",
        },
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
          question:
            "How does digital marketing increase footfall for spas and salons?",
          answer: {
            para: "It promotes your services to local audiences using Google Maps, Instagram, and Facebook, increasing bookings.",
            list: [],
            note: "",
          },
        },
        {
          question: "What platforms are best for advertising spa services?",
          answer: {
            para: "Instagram, Facebook, and Google Ads are highly effective for promotions and visibility.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Can appointment booking systems be integrated into digital marketing?",
          answer: {
            para: "Yes, platforms like Google My Business, websites, and Facebook can allow direct appointment booking.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How can discounts be promoted digitally to attract new customers?",
          answer: {
            para: "Use email marketing, SMS campaigns, and social ads with offer-driven messaging.",
            list: [],
            note: "",
          },
        },
        {
          question: "Are Facebook and Instagram ads effective for salons?",
          answer: {
            para: "Yes, they allow targeting by location, gender, age, and beauty interests.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How important are online reviews for beauty and wellness brands?",
          answer: {
            para: "Crucial—they help establish trust and influence customer choices.",
            list: [],
            note: "",
          },
        },
        {
          question: "What role do influencers play in spa marketing?",
          answer: {
            para: "Local influencers can provide authentic exposure and attract new clients.",
            list: [],
            note: "",
          },
        },
        {
          question: "How can content like tips and tutorials help build trust?",
          answer: {
            para: "It positions your brand as an expert, attracting followers and potential customers.",
            list: [],
            note: "",
          },
        },
        {
          question: "What keywords are important for spa SEO?",
          answer: {
            para: "Keywords like “best spa near me” or “bridal makeup in [city]” boost search visibility.",
            list: [],
            note: "",
          },
        },
        {
          question: "Can customer loyalty programs be marketed digitally?",
          answer: {
            para: "Yes, through email and SMS automation, you can retain customers and drive repeat visits.",
            list: [],
            note: "",
          },
        },
      ],
    },
    contact: {
      mode: "light",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Have any query about our services or solutions? Our expert team is here to guide and support you. Let’s discuss now!",
      form: [
        {
          label: "Full Name",
          name:"name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          name:"email",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          name:"phone",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Industry",
          name:"industry",
          placeholder: "Industry Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          name:"message",
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
    schemaData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How does digital marketing increase footfall for spas and salons?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It promotes your services to local audiences using Google Maps, Instagram, and Facebook, increasing bookings.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms are best for advertising spa services?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Instagram, Facebook, and Google Ads are highly effective for promotions and visibility.",
          },
        },
        {
          "@type": "Question",
          name: "Can appointment booking systems be integrated into digital marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, platforms like Google My Business, websites, and Facebook can allow direct appointment booking.",
          },
        },
        {
          "@type": "Question",
          name: "How can discounts be promoted digitally to attract new customers?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use email marketing, SMS campaigns, and social ads with offer-driven messaging.",
          },
        },
        {
          "@type": "Question",
          name: "Are Facebook and Instagram ads effective for salons?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, they allow targeting by location, gender, age, and beauty interests.",
          },
        },
        {
          "@type": "Question",
          name: "How important are online reviews for beauty and wellness brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Crucial—they help establish trust and influence customer choices.",
          },
        },
        {
          "@type": "Question",
          name: "What role do influencers play in spa marketing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Local influencers can provide authentic exposure and attract new clients.",
          },
        },
        {
          "@type": "Question",
          name: "How can content like tips and tutorials help build trust?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It positions your brand as an expert, attracting followers and potential customers.",
          },
        },
        {
          "@type": "Question",
          name: "What keywords are important for spa SEO?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Keywords like “best spa near me” or “bridal makeup in [city]” boost search visibility.",
          },
        },
        {
          "@type": "Question",
          name: "Can customer loyalty programs be marketed digitally?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, through email and SMS automation, you can retain customers and drive repeat visits.",
          },
        },
      ],
    },
  },
  {
    banner: LifestyleBanner,
    title:"Lifestyle",
    keyword: "Digital Marketing For Real Life Style In Mumbai",
    metaTitle: "Digital Marketing for real life style in Mumbai | SKD",
    metaDes:
      "Promote your lifestyle brand in Mumbai with custom digital marketing. We use SEO, social media, and influencer marketing to grow your brand online.",
    canonical: "https://skdm.in/digital-marketing-for-real-lifestyle-mumbai ",
    shortdesc:
      "Showcase your creativity to the right audience. We help interior designers attract more clients through optimized Google listings, targeted ads, SEO, and high-quality visual content that drives inquiries.",
    slug: "/digital-marketing-for-real-lifestyle-mumbai",
    description: {
      mode: "light",
      title: "Connect With Lifestyle Audience",
      shortdesc:
        "Engage your ideal customers using data-driven campaigns and creative content.",
      desc: [
        "In today’s competitive lifestyle market, standing out requires more than just great products; it demands strategic digital marketing that connects deeply with your audience. We specialize in creating tailored campaigns that highlight your brand's distinct personality and appeal to lifestyle customers. To attract and convert high-quality leads, we use intriguing storytelling, engaging imagery, and accurate targeting. By optimizing your local presence and leveraging paid ads alongside creative video content, we help you build lasting customer relationships and boost sales.",
        "We continuously analyze market trends and consumer behavior to ensure every campaign is data-driven and results-focused. With our expertise in digital marketing for real-life style in Mumbai, we help your brand achieve measurable growth, enhanced visibility, and a loyal customer base. Whether you’re a fashion, wellness, or home décor brand, our tailored digital strategies ensure your business flourishes in a crowded marketplace. Partner with us to transform your lifestyle brand’s digital presence and drive sustainable success through innovative marketing solutions designed for your unique business needs.",
      ],
      image: Lifestyle1,
    },

    clients: {
      mode: "gray",
      title: "We have served these clients",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim debitis, rem magni, exercitationem iste dolor quidem repellat similique saepe mollitia omnis nobis nostrum, inventore hic cupiditate officiis tenetur ducimus?",
      list: [
        "https://drsonikshah.com/static/media/logo.8d8cd9d98148e6b3c5cc.png",
        "https://www.drrahulrane.in/assets/img/logo.png",
        "data:image/png;base64,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",
        "https://thungasthhospital.com/static/media/logo.4ccdd47939fcd909328a.png",
      ],
    },
    testimonial: {
      mode: "dark",
      title: "What our client say",
      shortdesc: "",
      review: [
        {
          name: "Anjali Verma",
          company: "Client, Urban Zen Wellness",
          review:
            "Shree Krishna Digital Solutions Pvt Ltd GMB optimization helped our wellness center reach more locals. We’ve seen a surge in new clients booking yoga sessions thanks to their professional approach.",
        },
        {
          name: "Rohit Malhotra",
          company: "Owner, Luxe Fashion Hub",
          review:
            "Our SEO rankings improved drastically, bringing organic visitors who became regular customers. Shree Krishna Digital Solutions Pvt Ltd strategies truly boosted our online presence.",
        },
        {
          name: "Karan Singh",
          company: "Owner, Urban Vibe Events",
          review:
            "Shree Krishna Digital Solutions Pvt Ltd Meta Ads and SEO combo brought quality leads and event bookings. Their professional handling made all the difference!",
        },
        {
          name: "Meera Joshi",
          company: "Lifestyle Blogger",
          review:
            "I booked a personal coaching session after seeing a Meta ad. The ad was so targeted and appealing that I couldn’t resist!",
        },
        {
          name: "Sanjay Gupta",
          company: "Founder, FitLife Studio",
          review:
            "The Reels strategy helped us showcase client transformations and workout tips, which increased our Instagram engagement and bookings significantly.",
        },
        {
          name: "Priya Nair",
          company: "Client, Glow & Go Spa",
          review:
            "Google reviews and photos made it easy to trust this spa. The GMB profile gave me all the info I needed before visiting",
        },
      ],
    },
    casestudy: {
      mode: "dark",
      title: "See our case study of our clients doctor or hospital",
      shortdesc:
        "Empowering brands with results-driven digital marketing success.",
      list: [
        {
          img: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Real Estate",
          title: "Luxury Living Realty – SEO Transformation",
          desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
        },
        {
          img: "https://images.pexels.com/photos/4508641/pexels-photo-4508641.jpeg?auto=compress&cs=tinysrgb&w=1200",
          type: "Hospitality",
          title: "ResortEase – Application Development",
          desc: "Developed a booking and resort management app used by over 100+ resorts.",
        },
        {
          img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "E-Commerce",
          title: "UrbanCart – Digital Marketing Overhaul",
          desc: "Revamped performance marketing and email automation for a 5x ROI.",
        },
        {
          img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Education",
          title: "STEM Boost Academy – Website & CRM",
          desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
        },
        {
          img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Interior Design",
          title: "DecoraNest – Portfolio Website",
          desc: "Created a stylish web presence and social strategy for luxury interiors.",
        },
        {
          img: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
          type: "Logistics",
          title: "FastTrack Movers – Branding & CRM Setup",
          desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
        },
      ],
    },
    whychoose: {
      mode: "gray",
      title: "Why We Are The Perfect Fit For this Industries",
      shortdesc:
        "Our deep industry insights help create impactful strategies that deliver visibility, engagement, and leads, ensuring your brand reaches the right audience and stays ahead of the competition.",
      whychoosepoints: [
        {
          image: Lifestylesub1,
          title: "Deep Understanding of Lifestyle Trends",
          desc: "Our team closely follows lifestyle trends, consumer behaviors, and aesthetic shifts to create marketing strategies that resonate. From wellness to fashion, we understand how to position your brand with content that inspires and connects. Our experience in lifestyle campaigns helps you gain visibility, attract the right audience, and convert interest into lasting loyalty—all while maintaining your brand’s unique voice and visual appeal across every digital platform.",
        },
        {
          image: Lifestylesub2,
          title: "Custom Campaigns for Lifestyle Brands",
          desc: "Every lifestyle brand has a story, and we know how to tell it. Our campaigns focus on building brand identity, increasing awareness, and attracting loyal audiences. By blending storytelling, influencer strategy, and targeting, we create meaningful connections. With our expertise in digital marketing for real-life style in Mumbai, we align with your goals to make your brand trusted, admired, and impossible to ignore in the lifestyle space.",
        },
        {
          image: Lifestylesub3,
          title: "Connecting Brands with Lifestyle Audiences",
          desc: "We specialize in connecting lifestyle brands with audiences that value style, purpose, and authenticity. Through well-planned digital strategies and engaging content, we ensure your brand message stands out. Our goal is to help you build lasting relationships, increase online engagement, and convert traffic into loyal customers. We focus on both aesthetics and performance to create campaigns that reflect your brand’s values and attract the right market segment.",
        },
        {
          image: Lifestylesub4,
          title: "Designed for Aspirational Living Brands",
          desc: "Wifestyle is about aspiration, and we make sure your brand reflects that. Whether it’s fashion, wellness, home, or travel, we help you tap into the mindset of your ideal customer. Our strategies create desire and drive action—building emotional connections that foster loyalty. We’re your partner in brand storytelling, online presence, and growth, helping you rise above the noise in a fast-moving lifestyle market.",
        },
        {
          image: Lifestylesub5,
          title: "Authentic Growth for Lifestyle Businesses",
          desc: "We believe lifestyle marketing must feel authentic, engaging, and relatable. That’s why we tailor strategies that showcase your brand’s uniqueness using strong visuals, consistent messaging, and audience insights. We go beyond views to spark engagement and emotional connection. With our expertise in digital marketing for real-life style in Mumbai, your brand becomes a daily source of inspiration, ensuring visibility, trust, and meaningful presence across all relevant digital channels.",
        },
      ],
    },
    ourworks: {
      mode: "image",
      title: "Services that help your business grow",
      shortdesc:
        "Unlock business growth with services designed to attract customers, boost visibility, and generate consistent leads across digital channels. We create solutions that match your goals and market potential.",
      worklist: [
        {
          image: GoogleMyBusiness,
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Enhance local visibility with an optimized GMB profile showcasing your lifestyle brand’s services, reviews, and images. Make it easy for customers to find, engage, and visit your store or book consultations instantly.",
            keywords: [],
          },
          link: "/google-my-business-listing-service",
        },
        {
          image: seo,
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: "Drive organic traffic by ranking for lifestyle-related searches like “best wellness coach” or “fashion boutique near me.” SEO helps your brand appear in top search results and attract quality leads interested in your offerings.",
            keywords: [],
          },
          link: "/best-seo-company-mumbai",
        },
        {
          image: ppc,
          title: "PPC (Google Ads)",
          desc: {
            para: "Target lifestyle enthusiasts with compelling Meta Ads showcasing products, events, or services. Use audience segmentation and eye-catching creatives to convert browsers into loyal customers and increase sales rapidly.",
            keywords: [],
          },
          link: "/ppc-agency-mumbai",
        },
        {
          image: SocialMedia,
          title: "Reels (Instagram/Facebook)",
          desc: {
            para: "Showcase your brand’s vibe through engaging Reels, featuring behind-the-scenes, tips, tutorials, or client stories. Captivate your audience with visual storytelling that builds community and drives bookings or sales.",
            keywords: [],
          },
          link: "/social-media-marketing-agency-mumbai",
        },
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
          question:
            "How can digital marketing boost brand awareness for a lifestyle brand?",
          answer: {
            para: "Digital marketing uses platforms like Instagram, Pinterest, and YouTube to visually promote lifestyle products or services. This helps build brand identity and increase exposure to a wider audience.",
            list: [],
            note: "",
          },
        },
        {
          question: "What platforms are best for marketing lifestyle products?",
          answer: {
            para: "Platforms like Instagram, Facebook, YouTube, and Pinterest are ideal for lifestyle brands because they support rich visuals, influencer partnerships, and storytelling.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "Can influencer marketing really help lifestyle businesses?",
          answer: {
            para: "Yes, influencer marketing is highly effective in the lifestyle niche. Collaborating with relevant influencers can increase credibility, engagement, and drive more traffic to your brand.",
            list: [],
            note: "",
          },
        },
        {
          question: "How does SEO help lifestyle businesses?",
          answer: {
            para: "Search Engine Optimization (SEO) helps your website appear in search results when people look for related lifestyle products or tips. This drives organic traffic and leads to more conversions.",
            list: [],
            note: "",
          },
        },
        {
          question: "Is social media marketing enough for lifestyle brands?",
          answer: {
            para: "While social media is essential, combining it with SEO, email marketing, and paid ads ensures a well-rounded digital presence and better results.",
            list: [],
            note: "",
          },
        },
        {
          question: "How can email marketing support lifestyle businesses?",
          answer: {
            para: "Email campaigns keep your audience engaged with updates, product launches, seasonal trends, and personalized recommendations, boosting customer loyalty and repeat purchases.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "What role does content marketing play for lifestyle brands?",
          answer: {
            para: "Blogs, videos, and tutorials build authority and trust. For example, a fitness brand might post workout videos or diet plans, driving traffic and establishing brand credibility.",
            list: [],
            note: "",
          },
        },
        {
          question: "Can paid ads help lifestyle brands grow faster?",
          answer: {
            para: "Yes, platforms like Google Ads, Meta Ads, and Instagram Ads allow you to target specific interests, age groups, and locations to quickly reach your ideal customer.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "How do analytics help improve digital marketing efforts for lifestyle businesses?",
          answer: {
            para: "Analytics tools show which campaigns perform best, who your audience is, and what they respond to — helping you refine your strategy and boost ROI.",
            list: [],
            note: "",
          },
        },
        {
          question:
            "What makes digital marketing cost-effective for small lifestyle businesses?",
          answer: {
            para: "Unlike traditional ads, digital marketing allows flexible budgets, detailed targeting, and real-time tracking, making it a cost-effective option for small to mid-size lifestyle brands.",
            list: [],
            note: "",
          },
        },
      ],
    },
    contact: {
      mode: "light",
      title: "Have Any Query! Let's discuss",
      image: contactImage,
      shortdesc:
        "Have any query about our services or solutions? Our expert team is here to guide and support you. Let’s discuss now!",
      form: [
        {
          label: "Full Name",
          name:"name",
          placeholder: "Enter Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaUser />,
        },
        {
          label: "Email ID",
          name:"email",
          placeholder: "example@dmail.com",
          formType: "input",
          inputType: "text",
          class: "col-span-6 mr-2",
          icon: <FaEnvelope />,
        },
        {
          label: "Phone Number",
          name:"phone",
          placeholder: "1234567890",
          formType: "input",
          inputType: "number",
          class: "col-span-6 ml-2",
          icon: <MdPhone />,
        },
        {
          label: "Industry",
          name:"industry",
          placeholder: "Industry Name",
          formType: "input",
          inputType: "text",
          class: "col-span-12",
          icon: <FaBriefcase />,
        },
        {
          label: "Describe your requirments",
          name:"message",
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
    schemaData: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How can digital marketing boost brand awareness for a lifestyle brand?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Digital marketing uses platforms like Instagram, Pinterest, and YouTube to visually promote lifestyle products or services. This helps build brand identity and increase exposure to a wider audience.",
          },
        },
        {
          "@type": "Question",
          name: "What platforms are best for marketing lifestyle products?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Platforms like Instagram, Facebook, YouTube, and Pinterest are ideal for lifestyle brands because they support rich visuals, influencer partnerships, and storytelling.",
          },
        },
        {
          "@type": "Question",
          name: "Can influencer marketing really help lifestyle businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, influencer marketing is highly effective in the lifestyle niche. Collaborating with relevant influencers can increase credibility, engagement, and drive more traffic to your brand.",
          },
        },
        {
          "@type": "Question",
          name: "How does SEO help lifestyle businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Search Engine Optimization (SEO) helps your website appear in search results when people look for related lifestyle products or tips. This drives organic traffic and leads to more conversions.",
          },
        },
        {
          "@type": "Question",
          name: "Is social media marketing enough for lifestyle brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "While social media is essential, combining it with SEO, email marketing, and paid ads ensures a well-rounded digital presence and better results.",
          },
        },
        {
          "@type": "Question",
          name: "How can email marketing support lifestyle businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Email campaigns keep your audience engaged with updates, product launches, seasonal trends, and personalized recommendations, boosting customer loyalty and repeat purchases.",
          },
        },
        {
          "@type": "Question",
          name: "What role does content marketing play for lifestyle brands?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Blogs, videos, and tutorials build authority and trust. For example, a fitness brand might post workout videos or diet plans, driving traffic and establishing brand credibility.",
          },
        },
        {
          "@type": "Question",
          name: "Can paid ads help lifestyle brands grow faster?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, platforms like Google Ads, Meta Ads, and Instagram Ads allow you to target specific interests, age groups, and locations to quickly reach your ideal customer.",
          },
        },
        {
          "@type": "Question",
          name: "How do analytics help improve digital marketing efforts for lifestyle businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Analytics tools show which campaigns perform best, who your audience is, and what they respond to — helping you refine your strategy and boost ROI.",
          },
        },
        {
          "@type": "Question",
          name: "What makes digital marketing cost-effective for small lifestyle businesses?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Unlike traditional ads, digital marketing allows flexible budgets, detailed targeting, and real-time tracking, making it a cost-effective option for small to mid-size lifestyle brands.",
          },
        },
      ],
    },
  },
];

export default industries;
