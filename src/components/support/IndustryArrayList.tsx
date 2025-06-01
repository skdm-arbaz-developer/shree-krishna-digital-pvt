import { FaBriefcase, FaEnvelope, FaUser } from "react-icons/fa6";
import { MdMessage, MdPhone, MdSend } from "react-icons/md";
import contactImage from "../../assets/images/contact-us-form.png";

const industries = [
  {
    banner:
      "https://t4.ftcdn.net/jpg/09/42/17/65/360_F_942176592_3E2mJy68yw8KjaOpmomnA87jizwD6WJ7.jpg",
    title: "Healthcare (Doctor & Hospital)",
    shortdesc:
      "Banner Description: Designed specifically for the healthcare sector, our strategies help increase your reach, improve patient connection, and ensure your medical services are found, valued, and remembered online.",
    slug: "/healthcare",
    description: {
      mode: "light",
      title: "Digital Growth for Healthcare Professionals",
      shortdesc:
        "Empowering clinics and hospitals with digital solutions that drive trust and patient engagement.",
      desc: [
        "The healthcare industry is evolving, and so are the ways patients seek medical services. A robust digital presence is no longer optional but essential. Our digital marketing solutions are crafted specifically for healthcare providers, focusing on increasing online visibility and patient trust. We utilize a mix of strategic content creation, search engine optimization, and targeted advertising to position your practice prominently in search results. Understanding the sensitive nature of healthcare, we ensure all marketing efforts are compliant and ethically sound. Our team works closely with you to highlight your specialties and strengths, making it easier for patients to choose your services. With a proven track record in digital marketing for healthcare in Mumbai, we aim to be your partner in achieving sustained growth and patient satisfaction.",
      ],
      image:
        "https://www.tagmedstaffing.com/wp-content/uploads/2023/12/shutterstock_786971899-scaled.jpg",
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
        "Every industry is unique. With Digital Marketing for Healthcare in Mumbai, we tailor strategies using the right tools, insights, and creativity to meet specific needs and deliver real, measurable results.",
      whychoosepoints: [
        {
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7kQKZDuWqHsgG_VYJBEzR88p9YHBUc77Y6g&s",
          title: "Trusted Experts in Doctor Marketing",
          desc: "We create customized digital marketing strategies tailored for doctors and hospitals, focusing on increasing patient engagement and boosting your online presence. Understanding the unique needs of healthcare providers, we deliver data-driven solutions with transparent reporting. Our digital marketing for healthcare in Mumbai continuous optimization helps grow your practice confidently in a competitive digital space, building trust with patients and ensuring long-term success in your field.",
        },
        {
          image:
            "https://methodistmckinneyhospital.com/wp-content/uploads/2017/12/AdobeStock_159229128-4.jpeg",
          title: "Marketing That Connects with Patients",
          desc: "Our team crafts patient-focused campaigns for doctors and hospitals that build credibility and enhance online visibility. We use ethical strategies aligned with industry standards to attract new patients and retain existing ones. Clear communication and regular updates keep you informed on campaign progress, helping your practice grow sustainably while maintaining the trust and satisfaction of your patient community.",
        },
        {
          image:
            "https://cdn.physiciansweekly.com/wp-content/uploads/2016/12/hands-patient-doctor-physician.png",
          title: "Your Growth Partners in Healthcare Services",
          desc: "We understand the challenges doctors and hospitals face in attracting patients online. Our tailored digital marketing solutions focus on generating quality leads and strengthening patient relationships. With dedicated support and transparent reporting, you stay informed at every step. Our approach empowers your practice to stand out confidently in a crowded market, allowing you to focus on delivering exceptional care.",
        },
        {
          image:
            "https://etimg.etb2bimg.com/thumb/msid-70788518,imgsize-67265,width-1200,height=765,overlay-ethealth/health-it/76-of-healthcare-professionals-in-india-use-digital-health-records-report.jpg",
          title: "Patient-Focused Digital Solutions",
          desc: "To succeed in today’s competitive environment, doctors and hospitals need more than excellent services; they need effective online marketing. We develop campaigns emphasizing trust, accessibility, and reputation building, designed to bring quality patients to your practice. Respecting privacy and compliance, our strategies improve patient acquisition and retention while giving you clear insights and continuous support to help your growth.",
        },
        {
          image:
            "https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611211.jpg?semt=ais_hybrid&w=740",
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
          image:
            "https://admin.wac.co/uploads/Blog_Cover_2_Page_06_a08af74054.png",
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Boost your hospital or clinic's local visibility with GMB optimization. Appear in top local searches, build trust through reviews, and make it easy for patients to find and contact you instantly.",
            keywords: [],
          },
          link: "/google-my-business",
        },
        {
          image:
            "https://intersmart.ae/wp-content/uploads/2024/08/SEO-for-Small-Business.webp",
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: "Rank higher on Google when patients search for healthcare services. Our healthcare-specific SEO strategies help hospitals and doctors attract organic traffic and increase appointment bookings through relevant, high-intent keyword targeting.",
            keywords: [],
          },
          link: "/search-engine-optimization",
        },
        {
          image:
            "https://www.mindstick.com/MindStickArticle/aa10fba4-254a-42e2-a6ad-54eee2a0f8ed/images/564ca89f-7d03-4d69-b2d3-65e4e8d06899.jpg",
          title: "PPC (Google Ads)",
          desc: {
            para: "Drive instant leads with targeted PPC campaigns for hospitals and clinics. Appear above competitors on Google when potential patients search, ensuring you get clicks, calls, and conversions at the right time.",
            keywords: [],
          },
          link: "/pay-per-click",
        },
        {
          image:
            "https://298957.fs1.hubspotusercontent-na1.net/hubfs/298957/Imported_Blog_Media/YouTube-Marketing-Strategies-and-Tips.jpg",
          title: "YouTube Marketing",
          desc: {
            para: "Establish authority with YouTube videos showcasing treatments, success stories, and doctor introductions. Build trust, educate viewers, and attract new patients through visual content tailored for the healthcare and wellness audience.",
            keywords: [],
          },
          link: "/social-media-marketing",
        },
      ],
    },
    faq: {
      image: "https://cdn2.mageplaza.com/media/general2/UBsDQPo.jpg",
      mode: "gray",
      title: "Helpfull SEO F.A.Q.",
      shortdesc:
        "If you can not find any answers here, please feel free to contact us anytime via the chat box or using our contact form.",
      list: [
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
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
      "https://strapi.aurumproptech.in/uploads/Future_of_real_estate_market_933684ecef.webp",
    title: "REAL ESTATE",
    shortdesc:
      "Reach potential buyers faster with proven marketing techniques that help real estate brands boost visibility, generate leads, and increase overall property sales online.",
    slug: "/real-estate",
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
      image:
        "https://madeira.estate/wp-content/uploads/2024/02/What-Is-Digital-Real-Estate-and-How-Does-It-Work-Google-Docs-1024x680.png",
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
          image:
            "https://sterlingdevelopers.com/blog/wp-content/uploads/2018/06/The-Future-of-Real-Estate-in-the-Digital-Age.jpg",
          title: "Effective Marketing For Residential Success",
          desc: "Our marketing solutions are crafted to address the unique needs of developers and sellers. By understanding buyer behavior and market trends, we design engaging campaigns that generate qualified leads and make your listings stand out. Through focused digital marketing for real estate in Mumbai, we attract the right audience and accelerate the sales process, ensuring your residential projects achieve maximum visibility and faster conversions.",
        },
        {
          image:
            "https://www.pridepurpleproperties.com/blog/wp-content/uploads/2023/07/Pride-purple-blog-banner-12-1.jpg",
          title: "Expert Marketing For Property Success",
          desc: "With extensive experience in the housing market, we provide marketing services designed to maximize the reach and appeal of your listings. Our approach combines digital branding, targeted lead nurturing, and multi-channel advertising focused on attracting motivated buyers. We prioritize delivering measurable results by customizing campaigns to fit your specific goals, ensuring your developments receive the attention they deserve to consistently increase visibility, generate quality leads, and boost sales effectively.",
        },
        {
          image:
            "https://www.exoedge.com/wp-content/uploads/2024/05/Untitled-design-7.jpg",
          title: "Enhancing Business Reach Digitally",
          desc: "Our expertise lies in utilizing various digital platforms to increase your market visibility and attract the right customers. By focusing on search engine optimization, paid campaigns, and video promotion, we generate targeted leads and improve engagement. This multi-channel approach helps your developments stand out and accelerates growth. We work closely with you to ensure each campaign aligns perfectly with your business objectives for maximum impact.",
        },
        {
          image:
            "https://cdn.hashnode.com/res/hashnode/image/upload/v1699327388447/233d19d4-ba29-4ca6-b005-c1ff504c4586.jpeg",
          title: "Your Real Estate Growth Catalyst",
          desc: "In a competitive real estate market, our personalized marketing methods can help your firm flourish. We focus on enhancing your brand visibility and driving targeted traffic to your listings. Using a combination of content marketing, search optimization, and paid campaigns, we ensure your properties reach the right buyers, helping you close deals faster while building lasting client relationships.",
        },
        {
          image:
            "https://media.licdn.com/dms/image/v2/D5612AQGQ-pve0A5LbA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697844285374?e=2147483647&v=beta&t=RhUITrLRqt2nQNqanwZkQlHaBL3ZDNXHdXKzOvelRbA",
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
          image:
            "https://admin.wac.co/uploads/Blog_Cover_2_Page_06_a08af74054.png",
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Maximize local reach for your real estate agency with GMB optimization. Get found on Google Maps, showcase property listings, collect reviews, and generate walk-in or call-in leads from serious property seekers near you.",
            keywords: [],
          },
          link: "/google-my-business",
        },
        {
          image:
            "https://intersmart.ae/wp-content/uploads/2024/08/SEO-for-Small-Business.webp",
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: "Get your real estate website ranked on Google for high-converting keywords. Our SEO strategy attracts quality leads actively searching for properties, helping you sell or rent faster by boosting organic traffic and visibility.",
            keywords: [],
          },
          link: "/search-engine-optimization",
        },
        {
          image:
            "https://www.mindstick.com/MindStickArticle/aa10fba4-254a-42e2-a6ad-54eee2a0f8ed/images/564ca89f-7d03-4d69-b2d3-65e4e8d06899.jpg",
          title: "PPC (Google Ads)",
          desc: {
            para: "Launch high-intent Google Ads targeting property buyers and renters. Appear at the top when prospects search for homes, offices, or plots, driving quality leads with tailored ad creatives and budget-focused campaign management.",
            keywords: [],
          },
          link: "/pay-per-click",
        },
        {
          image:
            "https://298957.fs1.hubspotusercontent-na1.net/hubfs/298957/Imported_Blog_Media/YouTube-Marketing-Strategies-and-Tips.jpg",
          title: "YouTube Marketing",
          desc: {
            para: "Showcase property walkthroughs, client testimonials, and investment tips on YouTube. Build trust and attract interested buyers through compelling real estate videos, helping your brand stand out in a highly visual, competitive market.",
            keywords: [],
          },
          link: "/social-media-marketing",
        },
      ],
    },
    faq: {
      image: "https://cdn2.mageplaza.com/media/general2/UBsDQPo.jpg",
      mode: "gray",
      title: "Helpfull SEO F.A.Q.",
      shortdesc:
        "If you can not find any answers here, please feel free to contact us anytime via the chat box or using our contact form.",
      list: [
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
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
      "https://miro.medium.com/v2/resize:fit:1400/1*Cj619pQGDMDtIxvQi5YQ4g.png",
    title: "Education",
    shortdesc:
      "Empower your educational brand with proven marketing strategies that boost admissions, increase engagement, and build a strong presence where students and parents search for trusted institutions.",
    slug: "/education",
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
      image:
        "https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork-1568x882.jpg",
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
          image:
            "https://www.eschoolnews.com/files/2024/12/k-12-tech-innovation-news.jpeg",
          title: "Empowering Educational Brands To Thrive",
          desc: "We specialize in helping educational institutions boost visibility and drive student engagement through smart digital strategies. Our team understands the evolving education landscape and crafts marketing campaigns that align with your admissions goals. From increasing inquiries to enhancing reputation, we provide measurable results. Whether you're a school, college, or edtech platform, our customized approach ensures your institution stands out in today’s digitally competitive learning environment with effective digital marketing for education in Mumbai.",
        },
        {
          image:
            "https://www.nimrindia.com/images/courses/bachelor-education.jpg",
          title: "Growth-Focused Solutions For Education",
          desc: "With years of experience working with educational brands, we offer powerful marketing strategies that increase student enrollments and build lasting credibility. We focus on search visibility, engaging ad creatives, and content that speaks to students and parents alike. Our campaigns are driven by data and purposefully optimized for results, making us a trusted partner for education-focused businesses looking to scale their digital reach effectively.",
        },
        {
          image:
            "https://sanjeevdatta.com/wp-content/uploads/2022/02/formal-education.jpg",
          title: "Student-Centric Marketing That Performs",
          desc: "Our deep understanding of learner behavior allows us to create digital marketing plans that truly connect. We position your institute where students and parents are looking, through video content, paid ads, and search marketing. Our mission is to help educational brands get discovered, trusted, and chosen by their target audience. Every campaign is designed to increase awareness, generate leads, and contribute directly to enrollment growth.",
        },
        {
          image:
            "https://www.csharptek.com/Content/globex/images/resource/Edtech.webp",
          title: "Smart Digital Strategy For Institutions",
          desc: "We bring marketing expertise that aligns with the unique challenges and goals of educational brands. From coaching centers to universities, we create custom solutions that generate inquiries and build trust. Our campaigns span SEO, video promotion, and lead-focused ad funnels. By putting your brand in front of the right audience, we ensure consistent digital growth and improved admissions through thoughtful execution and continual performance tracking.",
        },
        {
          image:
            "https://i0.wp.com/daarulmumtaz.com/wp-content/uploads/2023/07/World-Education.jpg?fit=900%2C519&ssl=1",
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
          image:
            "https://admin.wac.co/uploads/Blog_Cover_2_Page_06_a08af74054.png",
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Stand out in local searches with an optimized GMB profile. Highlight your courses, timings, reviews, and campus photos. Help parents and students easily find directions, contact you, and read real success stories online.",
            keywords: [],
          },
          link: "/google-my-business",
        },
        {
          image:
            "https://intersmart.ae/wp-content/uploads/2024/08/SEO-for-Small-Business.webp",
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: "Reach students and parents searching for courses, coaching, or schools online. SEO boosts your website’s visibility on Google, helping you attract more admissions, demo class registrations, and inquiries through organic traffic.",
            keywords: [],
          },
          link: "/search-engine-optimization",
        },
        {
          image:
            "https://www.mindstick.com/MindStickArticle/aa10fba4-254a-42e2-a6ad-54eee2a0f8ed/images/564ca89f-7d03-4d69-b2d3-65e4e8d06899.jpg",
          title: "PPC (Google Ads)",
          desc: {
            para: "Promote courses, entrance batches, or admission drives using targeted Meta Ads. Capture leads by showcasing testimonials, faculty highlights, and student results to generate high-quality inquiries and grow enrollments quickly.",
            keywords: [],
          },
          link: "/pay-per-click",
        },
        {
          image:
            "https://298957.fs1.hubspotusercontent-na1.net/hubfs/298957/Imported_Blog_Media/YouTube-Marketing-Strategies-and-Tips.jpg",
          title: "YouTube Marketing",
          desc: {
            para: "Create engaging Reels that showcase student achievements, daily learning moments, faculty intros, and campus life. Build brand trust, attract youth, and increase inquiries by sharing real educational impact in short, powerful videos.",
            keywords: [],
          },
          link: "/social-media-marketing",
        },
      ],
    },
    faq: {
      image: "https://cdn2.mageplaza.com/media/general2/UBsDQPo.jpg",
      mode: "gray",
      title: "Helpfull SEO F.A.Q.",
      shortdesc:
        "If you can not find any answers here, please feel free to contact us anytime via the chat box or using our contact form.",
      list: [
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
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
      "https://miro.medium.com/v2/resize:fit:1400/1*Cj619pQGDMDtIxvQi5YQ4g.png",
    title: "Hospitality & Catering",
    shortdesc:
      "Grow your event and food services with proven marketing techniques that increase bookings, build audience loyalty, and enhance your visibility through high-impact digital engagement.",
    slug: "/hospitality",
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
      image:
        "https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork-1568x882.jpg",
    },

    clients: {
      mode: "gray",
      title: "We have served these clients",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet enim debitis, rem magni, exercitationem iste dolor quidem repellat similique saepe mollitia omnis nobis nostrum, inventore hic cupiditate officiis tenetur ducimus?",
      list: [
        "https://drsonikshah.com/static/media/logo.8d8cd9d98148e6b3c5cc.png",
        "https://www.drrahulrane.in/assets/img/logo.png",
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAL8AAABQCAYAAABI+KRRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACU7SURBVHhe7X0JfFTl1f4ze2aSyUrYdwEBBQHBlWqRpYA71gr+VdyxFfdd23+tReveurZad/uJdf/Uqmjdvs+2igIuCCEsCVsSSMiemczMnZnvOe/cCTdDZjIJ2cnD7+VuM3fLc877nPMuYwqHw+hk9GGZzHIw72WsLFkGseSwuEwmUxr3+7ley1KpL3ezbOCxPFmyrGEpY+lFL5JGZ5DfxTKT1z2ByxksE0likxxoLXgueYjvWT7lqT7h8mMWD0svehEXHUV+M8tsXut8Lk8mQVPV3nYCr1PHxTu8znNcfsQSkv296IUR7U3+NJaLeY2rSMThkV0dC167kNd+iKtPsYhk6kUvFNqL/E6WpTz3jSSeaPpOB++ljPdyH1cfYfGqnb04oNEe5F/Ic95Dog3Vt7sUeG/beG83cfXlyJ5eHKhoS/IP47n+QmLN1be7NHivK3ivS7i6NbKnFwca2or85/A8j5FM6fp2twDvuZr3fDlX/xbZ07Vx72NP3/3EC3+XWkvhszeeP2jIoAFb9M24+NfK1bPOu+JmCfzj4pCDR606cdbxry4576x79F37IPY8d95y9ZKFp81/Ut9shNv+8KcnXn7rvUtlXe5R7lUdiIHxc4LNX324X5m/lkCyMPuDFBLoaS5f7G7EF+j3/CKf4RkuU9TOLoyX33i3gSSC9z7+nzP11f3Gjxs2HS7G9dMFizdv31k8Ut/do7E/5O9L0nxCAl2ob3db8BkukGfhat/Inq4HIXpVbV2Wvqmw3OAxW4L5M4979cbLL7o5Woy1hxD/trsfekLf7NFoLflHkCz/JmmO1re7PeRZ5Jm4OiKyp2vh/Sa8vBBVpIi+mTSOPWLKP0XeRItIEpE9+mElb6pqahsZWk9Ea8g/jiT5gmRpUsN1Z8gzybNxdVxkT9eAEDGexGkr6SN6X19VqK6u6SV/DEaRHB+SJAP17R4HeTZ5Rq6OiuzpfLz85j8ayRuRLfoq3v/n52e2hZfeFqPz09PdFfpqj0VLyJ9LUrxPcgzWt3ss5BnlWbmaG9nTufgHCa6vqqyMMSMjcUCscbQUkkEyZlxEFmW403rJr8NOMkhfmS7jDdsb8qzyzFx1RPZ0DtbmbTxcMjH6ppInh44dvcoYpBqNIxlIevGgI+eEo0WyPPohlZa88+arpP2jWcSex1iMxtRVkRT5SYLHSYYj9c0DBvLMfPbH9M1OQaymj0oeo/QR4xAj0Tf3C0OTaDfoKUiG/OeQBBfp6wcc9Gc/J7LV8TDm9kXyRD2+kfyClgS+salOkTn6IZXpObeZBrEoYs9jLMbsUVdFc+SXLgud6vm6AvR3MCyy1XGIze0bMzKx0ie2ASwRYlOdLzxy92xjHCEp1GSMKfY8xjJh3JjuTX7+0Z+g52tRy204GERVfh62/305Cq67CcULFqF88WLU3LcM9R+8CW1LHsL+ev3TbYugFkBFwRasf/VV5N19LwrPvgB7fr4IlTdeDc/yZxBY+w3C1eXyYPo3koO8A3kX+maHITa3L9rcqKuNLbFiJPuT9oytSQ6EVt5E5F/IP/rP9PWksGdzPl674nI8NX8B3l96C/L/603UfL0W2rrN8K9cBe8H78Hz5kvwffgGgts2kK0B/Zv7j12FW/DGsjvwp9nz8I8l1+DHB59A9ecrEcwr4PU3wvu/X8DzzuvwrngD2sZvAc2nfzM56O9iUWSr/ZEotx8PTTWEJYsDIbsTi3jkd9HTxe3gFIsQvf13K97DNbNn4+VnnsOmHTtRF9Rg4TG7xQxTWgpM6S5Y0t2wOJ0I19UhkL8Owa3rW0zCpvDV++/iynnz8dx9D6B0WzEsdOxOswVOmwVmtwOmDF47IxUWt5tenzZXtA3BLT8AfhnwlTz4TiQrIsMw2x2x6UvpQNactlYyqZU5/399vabFLcXdHfHIv5SeLqn++EL8Dd98hWvOvxDfF2xDXcAPzRyG1WyGy2SB3Wkj+UlAt5MGkMqSAVNmJsw0glBNFUK7C/fLAD5/+01cd/GlyMvbALPPD7vdCqfVgjRe32mn+aVHr50WuW4WC+8BoTBC5UVcytj45KC/k6WRrfaFMX2ZkZZaIT0om9LWZy84qVGvytbk/MVo7n3krw3pToExCO6paIr8MlvCDfp6syjbuR3XnbcYm0t2qe2wyQSbyYw0KSSgmURUClsLMh7QeJwkSiEhWQuYXalAIEAdzu8GkydhFF+ytrntiqtQVFRMQwMc9PZpFhuyzDakWyywWm3qfsKBoLo+1LWdrA3SVTHJ49eztg/zWJLgu7mRCxme2W6Ize3Pi+l6YMQ8anUxDn0zqZx/bH7+iluXvWIMrMWoJKDWN3ssmiL/BfRwSQ09DNTX44sPV+Dr/E2qJUg6YttItlSzFW4Sz04DQCCEcJUH2q4KaEW7ESoto+zxiBuFyZkCkIxh1hZhLwPRiJkkhU3frsayW29DwbbtkNHwFFZwk/g5VjuyrfT+FF3mIK9dW49QWSWCJaVc7gEoudSdpthpLXaE61nraMmPauS7kSlVLohstQ+WJ+jOEAvR6sceeXiDlxajaU1ntyiickrf7NGIHcxi5vYm/oGT6tlYW1GOy045GR9/8W9kcltIONJmxyRXNqamZmCkyYZUen5Tmp2ent4+OxW2Yf1hG38w7IeMh3X4COpxShBlNvw/lWexN59cqq0sx+8uX4qXXlqurinXHkBjG+fM5LXTMcrmQE7YDAc1v8lphzmV0quPG9ZRg+GYOBa2yVNgGzKE13LQ8DSYXC4W2juNNhnwHcmgeOnY1y6zQkjraJWhY5l4Yn21SUhNYSS8SBaj5042ddncdWLPE3sdI+RzxoxRvHMn+7n2QCz5JaPxQWS1eWz+/lssmDYN1X5NjQTJIofH2F04MrUPJjtT0Z+aX+hkMtPL26yUOSx9ScLRg2CfOB6OSZNgHUkOpVJFhMgjyhYTDQdmeuUEWP7QH3HHrb+Gz+OBmEofBtWjHW4c5srEIQ4X+vG6Dj4WLyueGiYaoCXNBvPgbNgmjITj6CPhGD+eRulGmHGCibWAuc8wVlsy7j5pzGNJ+l31ouuhkeyhIci8OvtCiEm9bsyPh7lv56aN8JP4ktURmOnB7ZJlYUmh5JH98o1QkMFlvYZglQ+h4mpoG4vgX5ePwMaNlEGlkXNTssh1wr4ada54KFy3Fi889TTqSHwxOKFrLqXOMJJ+qD0FOXJtXpScV9cOM7AN8h5D1X5eqxrBHbsR3FkEjdcNVVQgVFXJwJdyyBh0y3PKPclzx0Hcd9WLbgMj+SWFd3JktTFC1dTMu4sBn0Ebk11mi1UXLI0hJ40NJsL8F6IGD9UGENpdg+CWYvjzNiKwtZABb5WwlB6a5xMSak2nIAM+H5598AHkb9igiC/1QwYD28E2Ep9euy9li1MnvtyX8d5CGg2LBhiu9ZLsfJ6yMpZSBMUIKKOkcS4KiUGCpSVqfwKcxNKuk2/1on1h5OgcSoQm/5jBoh3Q8tbRCKr1PUIwEwYMHw4LJYf4R/GyQXpMjSSmfwdppjI7DdDXFQlrpAaooOffhkBeHrTt2wAPCW/m7dBzh728ThPZn9Uff4h3Xn8LIep0Ib+bumYAST/ckUoDcCCDF7HKjQiU22cRQ5BriwaSDRogGKiH6fWDu0n83SU0CNY2xpv1+6Btyoe2ZbO+Y1/o72p2ZKsX3REN5Gc1HnfKkXBFJQLr1yNMT2mEOzsbA4cPJdEjkKU3FEQNJYOXRtBINOikVDWAn8eqKEOKyuHfVAht8xaE6Ikl7SnkBz1vqIo1jQE+EvQvd96FispK5fElu5RNqTREyR2nkjsOElgRPQp9XdmAnnaFFMkC1dQitGcPC6UPZRFYi0UR9npI/k0IFpfoe5pGonfWi64Po+eXiWObRIiyJPBjHqVA44mQHSlOHDZ1GqKCQTor1IY0lGsBVIWD8JN1Ouf3glcMcm+QBhCurEdwexkCmwro/beq67BqUB8Ll5fS6PaS74c3X8Xm1d8qjy8lXby+1amI34/EFTdsUqZFKLbLCsF1kxiFlRdOIcEZ3IZYQ4Vq66j5K6FRApkzcxns7u22L/sD6/N4f7yfxIj7znrR9RHN9sisBZFWqiZQ99zTqH36eaT//1vhnL3X2dXX1eJdHrt66dUqYGDIily63jEpaTjWnYOJdheywpHAVyHqiRUhaQd2Kyy5qbAePACOIyfBcdRRsA8bTr6aoBUXUZIUw370PITqavDn2fPxwdofUEmjsvH4IJJ+gisTk5xuDDfb4IoSXj0Ooa+LmrGYLLC4bTD3z4BlcB+Y+2bB5HCoTI/IK/cV18E6fCy/E7lB/3/+harf/BYpJ86F+5rr1b4E6MciU6a3KSR12ZZz5MSerzlIrr+5tKN0pZgya0FDYCT3J/epbyaE3Etz7RFyPkmnNtXOIaPPjINwkoWcT3qxynrU80/Rl00iRA8YXLsJJsoRIxxOFyYcdTTSGHSKvxaZ4yGz9zBoLfb7UUHpo7qu6aSPIrJJLy2tvtUMQHfuofTZqjS2VsJAs6aaxKTu3rED/s8+QOkfHoSjsBQjUtwYRtKL1BnhiKznSnan4Zw6ZCNqBGS/2cbHlG4WTgomG02UwW3I42HgWwVzdg4Lbd+gl0Leemhr85UsSgJtMoikOyK2K0VbjSeOQgxaWp/FuPVdbYqo0J2kL/cFyRwmGYM0gFB14zSk6OgBw0bgmOnTseLzz5UOl87KFcEAdga8KNGcyLRZlKe2RLkV9dDyn/SvqQ/CVEGNvbWY8iOf57TClNsHpnovAwgf6l5/HaH/5ONgK4nLWKKMZLfYbRhIyTWI+1Jpv8qCGxFeX3KfRYJohxkml53k5x1SLoXr/Qj7AzTqatinHgVTSuM432QKIlhWyZpnD8KMQ0xiMPFxGIuM9+1WEG+aqAtDMt0bYrtSSBcJ6Vkar4aKB+mesWTxwoZaRgbTG4dByrqMMDPWRHJ/sS3Rsd9r6hkzDAPzFfkpfUZJ9qYphEnCYJEoIgap0j1AaZa9n3VlZGLxVUsV+aOBbzU/UxTwYJuPgSj1uIuyJDVKyCh4CjkVNBpAjR+mYupsRwFrgwDM0uorJJWglAG0PScNIyldnDUe7KFRSYCaHgjz3OS13IsYaOSsEURvj17forQ+ie9ykOTSlsDaxkPi13hVHGCfMJkSSOqOvQju2o2wpGUZXIcq9sDSt79+ZF8kenddGVL9t5SkRsT2P4pCWmxbet70jPSKWIm16PQTnzx18eXf6JvK0IyfkfuXom8qiIwykr+5Z4zKnrjdGUJlpQiVRCSttqOIHrNxD0wrveLknxyPQ4cNhRwREvr4Xzkl0jafBzsC9agyhaBFr2SE8Fb+SbalisHvjjL412yAf/2mSFf/AUNgHjEGNQcNgW/udAy78hIcsuRCDJ87E5kD+sHmC8BCY2kgXwPphZR8OFY3phQLTNK9Qby+fM5PycMaJVRVi5Tjj4M5J2aSNkq14LadXCH5JRMkjXCJ0eMHfTSFeN0lhIBtMRBGPLZR6zdlaPuLKCXjzsMTKi9HsJoaXKhNnRz27TsKS7z/NXcuU8Gl6H7hbQ2/sTNQh4J6D4o1P6TZSo4riIVIUSD5uR4Ub0zvH6rVYJt+AtyXXo10lsxf346So47AFzsLoJ02B0N+dxvGvfQM+v3pLmhHT4FPemuKNDEYl5yatGdAbUE4hTJKPL+sS4qTxA9XelQtkDL/5H28vnR0C5VX8BzSIk2pV9HsGI8B+vKAgnHYZGxAGs8wWor0dh5gE6VMtr7cB5J/N4l3tbkYnNIIquQ34RpDvP/0E0/CtEPGKe8vqCcDy0IBFPjrsMXnxe6QBq+QP2oABghZA5J6pApzLV6MjAsuhjUrSyQF1n+7BitffR3pr3yA/GtvRu32HeoUubNOQP9H74HvJ4fDW1cLM+OH6LkEZkoakxCfckf14JQvUeuH6rwkfzVcJ82FZeAw7m9cJYU9lFqMcUwMpiFxAWVPM4j77noqhNzGLtDSrdpoAE88/3LDTNL7A+MAG2O37bZC9C8ft0eXtrUQpqwMOKZNoQavQ3B3NKtHminRHoHLnY5r77yLGtuq8v6i/z2sBnZR9hT46ih/fKgmvWW/4n/UCESK0LgEllnHwX3BuWpdzl9eUozXfrkEI774DscPGAXnJ1+ibOVKaNLvhsgcNhyOsxagtl8WgowPTDqRRQaZGWjDQY3vpNcX3S9dq+vo9auo9cXrz51Pg5bmMsHe5xCZF66oYiA8CdbRIxDcuk0/EhcdMrKrrefI2Z/zGYdLCimF+Eb9vb/jiUU2SSrUKJ8SjWloLRRbSBa32moC0gnMOmQwUk74CYK1tTSASMOPyJ+wZ2/2x2yxYNrsOThp7hxoepcHqQUqQyFs93uwub4O2xkHVJFomhBfbEe+SIQ8XlhGDEHGRec02IRPxgq8+BwGf5uPqX2Hws8AOINBrn/1d5Rhe6+bcdRUBA8Zg1oG5qo9gSeQINfktMDssqu2BIGSO556hKrrkLr4bFgGidePXC3sqePzRPotBXcxxqmpQcr0I0j+kdA2FfADe40jFnx37TqwpashdmxxlJTi/dUOHS0ZTywkNxqfTJNubAOQtosbl17c5mMMFPkpL5oeRkXiBjZuhjk3G7bDD5PWIhX0CrS8tfC+85Zaj8Ke4sStDz+MYQMGKO8vRSi1m5p/k78W+QyAi+i1o/rfLBkdH03ETk/802PhnLY3pqlkDbPp+RcxzZ2rOBrknTpMFgQ3MBiWwTA60oYOBQ4aDi+PmxjMWswkvSOi85Xn5zUgvTprKXlqfLD0zYTztAWsDfamL32f/VPNKiEI7iymoXhhm3IYLP37cXunynh1NsS7RgeaxJbWzJGT6HyJ0pyxuf2ox5dBNUbpo6RRG+T8JVvz388/NrU9Btgr8hNN9iNWwS2LyeqAdeQomNPTGxp+pEGq/r3GwzxFbvQbPgI3/P4OWF2uBgOopeMs8Xux2VvDGMCDPeGgag+QltwwPbxl4AA458+UUyj4eM31//MZ0jZvR64rTXWYk89aGFtoJbuhefeS3yoGkZmOevHwDGiV3HHaEFYNWlyXhjSROyzSpSHtssUwZ/Bvont9Qf0H/4R/pZ5VCwdUrGGhpJL8f4gSKMyYIh742Q75hUchmaT6miqtmSMn0fkSkT92bLGR8EbpI0h2PLGcJ2p4xvMJJL/fXjNLJCS/BHvBHcUw98mmTBjCHeHIMES/D74vVyHw7VpuN+4VIbp77jnnYtGZP0dYb/mVaqWC393G4HeDr5YGUI9yCiOfjN/lZ+yUGK7jfqK+L/DXMUh+6y2MM7tIeemxI4YixCapyysYtO4lv0gdcypJyvOYLGGYpSWXml4yPep+vbyGkL+2Ho7jj4DzxNNFF0W+TIjk8a9cQ+//hXou6dtvttvVIBvL4IEq3RksTdh74YD5sevY3L5oe6NciW2JTWY8sSCa55ey7JarlxiDWwme27LV2IiE5A8WF/NPWw/r8OEwZ/eBKTsz0hd+53YEVn1LL1yEwPff6p/eCwslxZUPPIBxkycr8ov+F0+/hzKqkORfX1+LQk1DOT1qqH8uHJQ8JpJXIJ/dXViAmi++xLA0Xo/XF8KHq+pglkYrxgeSjoyqcHkASwZrJFcKDYDbTpE8lDTi2X1CfNH5DHJ5/szf3MRYoHFrrrYxD8GKMvi/Ws1gdxdCu8r4fSdrh0yYc3IonawM+hMGvQk7/fcktDSIFUNp6Ryi4uWNrb1iYK2ZkSIZRMnfZEtOqIT6VzIlGYyHSSbroIGqu2+waDu0bTvp9SvgX7Mv+QXZOX3w8BN/xqijjmho/FL6n96+wFeDDZ4qFHrrUD9uFFKPO0a+ouCjJ87/7FPk7KqApU8WvKf+FI4LFyE0biS8PBbcuhVBSi9jCGpzk/xuF0I2M722rvNVTp86v5pXN9vhvuZCSpnRjeSOwP/1NwgW8lm2FXO5hecuY6BLyWNP4cEgjYlGtTth1+bE/Z57EIy5fRWEGuKEaBHvrX9EoTVZn4Wnn/hkR3j/KPkL9GUjBH5cBxODRpM9ks0z98lVssf30cew5GSpINX79gcI/LCGxNmMAIPgwA+rSaj/IPDpRxgc8OM81hoplBFCfKX/WYqCPvxYW4Z8N2XMjOmw9t3bylq+qwTfP/ssxrtzoFH+bFu3HnmDM+F+8TH0f/tF4JR5auB80KD77fT8yEqDZqNIEvKL3PFEAtxwHb0/95v79YH/m6/g/361uk+tYCO0Det4/++p5zCT8F4+VyB/C8w0cjESeV5TGs/744/6lZpE/BEvPQgqgDXk9hcxEI1KFWMRA2jtHKJRdJT3V+SvWfbbyeVLf4nSU09H6Yy5KDt9AcrPORvVdz4Yqf7VDAuUF0MGUSYUoPbJv8E28RC4b7wa/v+swu5jfoZdx85C6ezTUDpnAUpP+gVKf34eak5ehDkrvsDMgKbkj0gfMYDKYBibQ0H4J47FgBPnNHjjwm0FePe+e5C9oRCDMnJg44cHbS1F6PEX8OX99yMwfSoOfvIx5M48AWZDtsYq5GfQq1H2yJlCPl6t1ocgyR8QaVVUgIpLrkHZ/DNQOpdl9qnYfewcltmof+dDpF27VKVyPc8sJ9HzKHciM7eYs7Ng6dsHNQ8/jT2LFqLsDH53xjyUnngqyn91Gapu/w1v3bRJfbibIVGeX4rxJ08FsanL2MDUCDEMfbXVOf+O8P6K/IH8ApO2Jk91E7AMyiHJ+yMctMJ+7DFIXbyQBIh4ZnN2NoNCP2OBIn5mMBwz56DvlyuQ89ozyH7yIbivvw7um29ExrLfIvPx++F66gH0ffdvuHfVv3HuWQuU9xcJJIYgyx82bcJD112HR89fjGcvWIwVF1+KlDdW4JisQQgpg4jMATTSE0LWS+9i9VXXw5/qQOqAASrzE4Xd7VYzsmkmBsVaECaPD1qFFxrXM375C97D35H5yD1I/8PtSL/pBt7ntch64k/IfvmvyP3sbcYcs2AdMRQag3vwu5Y+UfJnw/mLBXDMmoGwZua76c/nlmNhBPi+tHWK99/Lfz0Zkoc3EliyOkbvHot9sj6taIQT729s2BIjijXI/YUazKJt2HBc2Ov7HE4HZY60iFr5x2boSe9ske7FaRHNH/huDcqXXonAl6uQ89JTcJ55duQs0VkOoo1BQtxo0VFN3fzba6/Dy//1khp1JW2rQl9pIRpEkh/sSMNYRyrGOt3oT5kVklnU5HQ8hUx9KI1U26uo9ZcuxqRlv0OKIXAtozHmLbsD6Ss+wbCMvqguq4aPnj/957OQe/+dMLllZh9C7tN4j9ElS/37b6HsnCWwZmYie/mzsB8hcUiYsklatSUkoqSyyXvRoAbBeOvVu7KOG9sug1maIly8FKR8ztgaKvJDX21A7Pmag1wrSuLY7xqPxUMsUWPvSQyiubmJYq8r3ZET9dJsyTsTNMzbw+VGVuEJf3ZI27wRldffAP8P69Dnlb/BPuUI/UhyKC3agZvPOw//+PhTRXpJODpYpF4ZbUvFpLQcjE9NQw7JLl2gzcJVHhMDsEjXhVoPCoIe2G+5EqOWXIysLJk8jRUWy+oH70Powcd5niyUV9TAMqIfhi7/M2xjJ6jPNActfx3KzjoXMotc9pOPw3aodNNPDP2djdE3e9HNYLn99tv1VRzKP2TCtJTK73/6GcwOB9IuvVSlBFuCVHc6xh96CH5cuRJbSnYp7y+Q7g4MS1mkBjEjxWKFk2SXmRiiDlqM1JxCyePVUJOXh2IG2IWFG7FxzWpsXL0SNSu/QcbWXbDVagik2dH/+kvgmv0zniAa0yeGidLJ99mn/LgFzlNOoeSJGFYzeI3v7F19vRfdDA3k5x9RHPFCtREPrPJF+pjdqXCdfsZeZrYA2f36Y+zYMdjy/ffYWlKivL9Q3i9TnoR4fqmJSFiZdNZhoQHwmDlSOanPpbhcSKPsCBVsge+776B9vQrh//0SOQUlcPvNYESC3F8uRNYlF9E4k+9zZqLBaT+sUSnOlBNmRGZybgZ8Z3dyEekX0YtuB6Nb/IjetenZonSY7HbYDhoB6+jR/GZyHjUWMvRx0nE/xc13LcPEcWNV6lMyQBIMlwaD2OKvxVpvFfJ8HhSHNXhoX3JcpI9cMWihVMrJwOCcHBziTMNUCqepPisG8gSBOi9cM49CzmWX7NX5LYBlzGjYxo2m0YgYSwz9XSU9ILwXXQ9G2SPSeSK92aGRzaYgHdHq1Bz31oNaL3XFAPoPG4HBA/rhx1WrsKui0lADhOFnDaCJ5mcNID9uIbWASCTVaU367aRYEJL2B5pDuD4IDz9cXsdYYMJIDLvjJthGt/IH1OuqYc7JhpX3ZrI3awBv8l0t19d70Q1hJL9U4+KI4/7yII+rzm1mShezTC67H5Au0ENGj8HA3BxsoAQqqaiIeHYWMQBfKKCWMu2IzP2ZKlLIboUpVUZlcanJxFf18Hr9KJeuytw//NdXI3Xm7NbXSpRUltx+rDXSlfZPBL4L+Q2Dbpnj70UEDdkeHTJF+Wb+YYfr2+2OAIPoj//+Mh74/TLkbdykpiGRFKiE0n1pIGOdGZjCMtHuRN+0FBqfPlFJDYPvOhLf74fHX4+DbrgUfZf+isRtXqvvL/iOtvIdSWpRKqt2hzTuSAvn8rfeu9SY0hRIivDYaZP3GcydCHK+zppvJwo5R1vPI9RSxLrIEP+oD+rrHQIb5cXsRf8PN/3+DoxmPCGNX9EYoJwxwM6AByUBP7zBCM9MQcm9k/heHyqDGm3Ah4FnzUPuxed3CPEFfEd/5KJDiC8kmXHauZtlgqZY4gskny4kaskETrFdBbrbfDtthVjPL5CfJZIfX0gq19dWCIVC+OSV5bj71l9jY0Ghyv+Ljx9A7z/VlY1ZqdkYTVlit5opdTQ1HWJFdQ2ypx2KsX+5H7ZRY9V52ht8N3v0mrHd+/FLj0jj9B0C8abScBM7R40gWe94ynm/+iZ2NoREM8IZYfT80v0g0Xw7gnj3FOv5o8+lb+6DZBrWWoqmyC+Q351q0yomGYgBfPbaK/j9zbeggAYgbbj9qd8nuzJxQloOxlpTYOPtVpnCKKPOTxmQhUMfuQtpMxLWwm0Nabm8N7LavpDhfEZvL9PsGQkgxnHe5Td+FO1wJmRc/fGbCQfUN2VQAjlvdBq/RDCSv6mpEWPPL6PM3n7h8an6ZgNiyZ+s8bUl4kWGj9Iomh253dYwk+gzzjwLyx76I8aOGaMGwdDV8ibNCJDwtSZ6e3MY5YEAgwILDr7jBqQeM119tyOgv5NHI1vtCyGHkfjiQWM9n3jDhYZfYxQjaK7/fLwuDrHXay3knoxavz3m22krxCO/h1V7p/woGa+LY046Ffc+/VdMnjAeKTQIkT+hUBg1NIQ9AR+8jAHG/+YKZM6bv8+8O+0J3tstXHTIyK3Y38WNV+XHSoXmyN8T5ttpKyTKCS6np1uhr3coxAAmTj8OD7/5FuafcQZy3G41qW0tA+DaOg9GnH0y+iw8e59RWe0JvosPuXgpstX+MJJY5Ew8PSwE3vzVh6ZoSSQdhNxRiSTorvPttBUSJsRJwsv4R9/7cywdjP4HjcaS55/DKX9+AOkTRqG2tg6D5x2PEbfdFBmE3kGQdyDvQt/scAxO0H24JejK8+209bxEySAh+QnJ+nTIL47HgzXFiRGnno4jn3oMU+6+CRMevR+2fh07Q6D+DgoiWx2PzIz0/faekso0Ers7z7fTVmiO/IIX6fme1tc7De6DxmDEr66ANZfEb0WHutaCz/4MFy9GtrovYnP7UY8vg0aM0kdJozbI+Yv8asl8O3IPEtQ3VeJJvv1FMuQXz3c5SfCVvnnAQJ5Znl3f7DRI/lxfbTW6+nw7cg/SHtBU6VTyEz6S4GSS4YDpyyLPKs/M1X2npe4AGImTKAUpx6SVN1qayvbIvp40305bIVnyC0pJhnkkhUxe36MhzyjPytVmJ+dvL8R6u3iBqOyXrg3R0lQt0dIgtqvPt9NWaAn5BeINZ5Mc2/XtHgd5NnlGrnZqLRcrI/4SJw2ZTHtAT5tvp63QUvIL1pMcx5Ik6/TtHgN5Jnk2rq6P7Ok8CEmNhBRvbEwjylI6jxmzK0L8WJ2tAlhDbr8nzLfTVmgN+QXiHX9Csvxb3+72kGeRZ+Jql6nVhJDGGZiF6JJOjKYVjd5ZPO6dN1+1T7fk7jLfTkvnEWoLtJb8gnKS5QSSpkP6urQn5BnkWbja5ebdlE5hzXX4EkL/Nz9n9NwCqR2MBJaaIfYzRuyT9WlF45J4//aeb6etEK9XZ0txOs/zDAnU8oGznQjecyXv+SKuvhHZ07XRFIlEsuir+yCW/BJENxUTGBF7jdjzi0G0xXw7sZ9pDsnce0vRVuQXDOO5niCZfqZvd2nwXlfwXqXLQmFkTy8ONOyP7ImFDO2by+XZJFaHd4dOFvq9na3fay/xD2C0pec3QobgXsFz30CSRSa+7GTwXsp4L/dz9WEWGSXZiwMc7UX+KOSH7i7iNa4i8TpsULwRvLZ0znuIq9I/qckf4ejFgYn2Jn8UIq+kcex8Lk8mGdu1Iz6vIxNKvcPrPMelDJXrkMHmvehe6CjyGyFzCM7kdeUX6GawTCBJ96ubJs8lD/EDy6c81cdcSjlgfiurF61DZ5A/Frksk1nG8F5kCoaDWQaxyOwRqdFagsfEm0uRn4OU/kUbeEzmycxnWcPSaf1wetEdAfwfhUbERKWK+BUAAAAASUVORK5CYII=",
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
        "We understand what your guests seek and craft personalized digital strategies that help you build trust, engage your market, and stay ahead in the competitive hospitality landscape.",
      whychoosepoints: [
        {
          image:
            "https://www.eschoolnews.com/files/2024/12/k-12-tech-innovation-news.jpeg",
          title: "Local Engagement That Drives Bookings",
          desc: "Hospitality and catering thrive on local visibility and customer experience. We help your brand get discovered by optimizing local presence, running geo-targeted campaigns, and creating engaging reels that reflect your service quality. With our industry know-how and expertise in digital marketing for hospitality & Caterers In Mumbai, we align marketing efforts with your business goals, boosting footfall, event inquiries, and customer retention. We’re here to ensure your business stays top-of-mind for diners, event planners, and hospitality seekers.",
        },
        {
          image:
            "https://www.nimrindia.com/images/courses/bachelor-education.jpg",
          title: "Enhancing Brand Trust Digitally",
          desc: "Trust and presentation are everything in this industry. We help hospitality and catering businesses build strong reputations online through high-impact visuals, consistent branding, and client-focused content. Our digital strategy includes review management, short-form video marketing, and keyword-based ad targeting to keep your brand in front of high-intent customers. From restaurant bookings to wedding catering leads, we deliver growth where it matters most: your bottom line.",
        },
        {
          image:
            "https://sanjeevdatta.com/wp-content/uploads/2022/02/formal-education.jpg",
          title: "Consistent Leads Through Smart Marketing",
          desc: "We focus on bringing high-quality leads to your hospitality and catering business by combining creativity with analytics. Whether it’s showcasing dishes through reels or positioning your venue on top of search results, we use every platform to increase bookings and inquiries. Our deep understanding of audience behavior allows us to connect with those actively searching for your services and convert them into loyal customers.",
        },
        {
          image:
            "https://www.csharptek.com/Content/globex/images/resource/Edtech.webp",
          title: "Result-Driven Marketing For Caterers",
          desc: "We know how important reputation, visibility, and timely customer engagement are in the catering and hospitality world. Our strategic approach focuses on showcasing your best offerings through reels, customer reviews, and local ads. We help you stand out online, drive meaningful inquiries, and build repeat business. With data-backed campaigns, we bring you measurable results that match your business goals and help you grow consistently in the digital landscape.",
        },
        {
          image:
            "https://i0.wp.com/daarulmumtaz.com/wp-content/uploads/2023/07/World-Education.jpg?fit=900%2C519&ssl=1",
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
          image:
            "https://admin.wac.co/uploads/Blog_Cover_2_Page_06_a08af74054.png",
          title: "Google My Business (GMB) Optimization",
          desc: {
            para: "Stand out in local searches with an optimized GMB profile. Highlight your courses, timings, reviews, and campus photos. Help parents and students easily find directions, contact you, and read real success stories online.",
            keywords: [],
          },
          link: "/google-my-business",
        },
        {
          image:
            "https://intersmart.ae/wp-content/uploads/2024/08/SEO-for-Small-Business.webp",
          title: "SEO (Search Engine Optimization)",
          desc: {
            para: "Reach students and parents searching for courses, coaching, or schools online. SEO boosts your website’s visibility on Google, helping you attract more admissions, demo class registrations, and inquiries through organic traffic.",
            keywords: [],
          },
          link: "/search-engine-optimization",
        },
        {
          image:
            "https://www.mindstick.com/MindStickArticle/aa10fba4-254a-42e2-a6ad-54eee2a0f8ed/images/564ca89f-7d03-4d69-b2d3-65e4e8d06899.jpg",
          title: "PPC (Google Ads)",
          desc: {
            para: "Promote courses, entrance batches, or admission drives using targeted Meta Ads. Capture leads by showcasing testimonials, faculty highlights, and student results to generate high-quality inquiries and grow enrollments quickly.",
            keywords: [],
          },
          link: "/pay-per-click",
        },
        {
          image:
            "https://298957.fs1.hubspotusercontent-na1.net/hubfs/298957/Imported_Blog_Media/YouTube-Marketing-Strategies-and-Tips.jpg",
          title: "YouTube Marketing",
          desc: {
            para: "Create engaging Reels that showcase student achievements, daily learning moments, faculty intros, and campus life. Build brand trust, attract youth, and increase inquiries by sharing real educational impact in short, powerful videos.",
            keywords: [],
          },
          link: "/social-media-marketing",
        },
      ],
    },
    faq: {
      image: "https://cdn2.mageplaza.com/media/general2/UBsDQPo.jpg",
      mode: "gray",
      title: "Helpfull SEO F.A.Q.",
      shortdesc:
        "If you can not find any answers here, please feel free to contact us anytime via the chat box or using our contact form.",
      list: [
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
            note: "",
          },
        },
        {
          question: "What are the key component of an SEO Package",
          answer: {
            para: "An SEO package typically includes a range of services such as:",
            list: [
              "Keyword research and optimization",
              "On-page optimization (meta tags, content optimization, URL structure)",
              "Off-page optimization (link building, social media signals)",
              "Technical SEO (website structure, site speed, mobile optimization)",
              "Content creation and optimization",
              "Competitor analysis",
              "Performance tracking and reporting",
            ],
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

export default industries;
