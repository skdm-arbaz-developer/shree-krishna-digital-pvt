import { FaBriefcase, FaEnvelope, FaUser } from "react-icons/fa6";
import { MdMessage, MdPhone, MdSend } from "react-icons/md";
import contactImage from "../../assets/images/contact-us-form.png";

const industries = [
  {
    banner:
      "https://t4.ftcdn.net/jpg/09/42/17/65/360_F_942176592_3E2mJy68yw8KjaOpmomnA87jizwD6WJ7.jpg",
    title:
      "If your doctor or hospital, this is the right place to start online marketing",
    shortdesc:
      "This is where affordable SEO monthly packages come in handy. They give you the opportunity of getting help with your SEO efforts without having to spend too much money up front.",
    slug: "/healthcare",
    description: {
      mode: "light",
      title: "We help to grow your appointments",
      shortdesc:
        "Increase Your Organic Traffic By Ranking Your Website On First Page In SERPs",
      desc: [
        "Get the best value for your money with our affordable SEO monthly packages. Digital X Press is a highly motivated team with 17 years of experience in this industry. We have worked on more than 100+ projects and getting the best organic results for our clients. Our goal is to make a successful business relationship with our clients by offering the best SEO service possible. We help you to boost Your online presence in search engines, Earn more qualified Leads and sales, and generate more revenue.",
        "We target the audience who are interested in your product or services and get the possible conversions with our on-page and off-page SEO strategy.",
        "Our professional SEO experts are able to implement successful SEO marketing funnels to target the right customers and convert them into leads. We offer the best SEO packages that are affordable and include all necessary SEO tasks. Our aim is to boost keywords ranking by targeting informative keywords first, boosting brand awareness, creating informative and valuable, and user-friendly content, and avoiding confusing business jargon. Choose from our range of SEO packages tailored to fit your budget. Let’s discuss what should an SEO package include?",
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
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa quisquam ex dolorum ut quam quaerat iure exercitationem deleniti minima reiciendis magnam, quas doloremque repudiandae ad asperiores eligendi architecto itaque!",
      review: [
        {
          name: "Sai Thunga Hospital",
          company: "Sai Thunga Hospital",
          review:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus hic voluptatibus quas autem quo deserunt omnis accusamus quaerat, id aperiam eligendi, eaque dignissimos recusandae sequi iste vel ea ad illo.",
        },
      ],
    },
    casestudy: {
      mode: "gray",
      title: "See our case study of our clients doctor or hospital",
      shortdesc:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, error. Impedit, sunt corporis, doloremque nostrum vel eum a dolorum quibusdam incidunt nemo temporibus illo nam fugiat laborum maiores quae quas.",
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
      mode: "dark",
      title: "Why We Are The Perfect Fit For Your Needs",
      shortdesc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae ipsa quisquam ex dolorum ut quam quaerat iure exercitationem deleniti minima reiciendis magnam, quas doloremque repudiandae ad asperiores eligendi architecto itaque!",
      whychoosepoints: [
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Website-Audit-300x279-1-280x279-1.png",
          title: "An extensive analysis of your website",
          desc: "To begin your SEO experience, our highly experienced team of experts performs a rigorous website audit and analysis. Through a thorough examination of various aspects like web structure, on-page components such as user experience, site structure, along with technical factors, we can identify areas that need improvement that could greatly affect your search engine ranking. Our thorough audit can help us develop a custom SEO strategy that meets the specific needs and goals of your company.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Keyword_Research-transformed-300x255-1-280x255-1.png",
          title: "Keyword Research and Optimization",
          desc: "Keyword research is the heart of all successful SEO campaigns. Our team uses state-of-the-art technology and techniques to determine relevant keywords with high value that match your niche of business and users. By optimizing your web page’s content, meta tags as well as headings, and URLs using these keywords We increase its relevancy and appeal in search results, thereby increasing your chances of appearing better in the search result.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Content-Creation-300x252-1-280x252-1.png",
          title: "Unique and engaging content creation",
          desc: "Engaging and informative written content has always been the most important aspect of SEO. Our skilled team of copywriters is adept at creating appealing rich, keyword-rich content that draws your viewers while also educating the search engines that you are an expert. We carefully study your field, identifying the issues of your intended audience, and then create content that offers beneficial solutions and builds confidence. In everything from blog articles to landing page pages, we make sure that every piece of content we create is optimized to draw users and crawlers.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Link-Building-Service-300x208-1-280x208-1.png",
          title: "Link Building Strategies",
          desc: "Quality backlinks can be compared to endorsements from reliable sources, which boost your website’s authority and credibility. We implement efficient strategies for building links to gain authoritative and relevant backlinks that will help you stand out from your competition. By establishing relationships with powerful websites and exploiting guest posting opportunities, we will ensure that your site gets the required visibility and prominence within your field.",
        },
        {
          image:
            "https://www.monkeydigital.org/wp-content/uploads/2023/08/Onpage-SEO-300x217-1-280x217-1.jpg",
          title: "On-Page Optimization and Technical Optimization",
          desc: "Optimizing on-page elements as well as technological aspects on your site is essential for higher ranking in search engines. Our SEO experts examine and optimize key elements like title tags, meta descriptions headers images, and URL structure. We ensure that your site is secure, fast, and mobile-friendly. We also make sure your website is accessible improving the user experience overall and the crawlability of your website.",
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

export default industries;
