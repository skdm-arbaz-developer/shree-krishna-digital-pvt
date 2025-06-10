/**
 * Represents information about an animal.
 */
export interface Animal {
  name: string;
  link: string;
  // desc: string;
}

/**
 * Asynchronously retrieves all animal information.
 *
 * @returns A promise that resolves to an array of Animal objects.
 */
export async function getAnimalInformation(): Promise<Animal[]> {
  const data = [
    {
      name: "Home",
      link: "",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
      name: "About Us",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-company-mumbai",
    },
    {
      name: "Our Team",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-experts-mumbai",
    },
    {
      name: "Why Choose Us",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/top-digital-marketing-services-mumbai",
    },
    {
      name: "Life at SKD",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/life-at-digital-marketing-agency-mumbai",
    },
    {
      name: "News",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-mumbai",
    },

    {
      name: "Case Study",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/top-digital-marketing-company-mumbai",
    },
    {
      name: "Privacy Policy",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "privacy-policy",
    },
    {
      name: "Partnership",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-mumbai",
    },
    {
      name: "Search Engine Optimization",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/best-seo-company-mumbai",
    },
    {
      name: "Social Media Marketing",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/social-media-marketing-agency-mumbai",
    },
    {
      name: "Google My Business",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/google-my-business-listing-service",
    },
    {
      name: "Web Development",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/web-development-company-in-mumbai",
    },
    {
      name: "Application Development",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/app-development-company-mumbai",
    },
    {
      name: "CRM Development",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/crm-development-company-mumbai",
    },
    {
      name: "Healthcare (Doctor & Hospital)",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-for-healthcare-mumbai",
    },
    {
      name: "Hospitality & Catering",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-for-hospitality-and-caterers-mumbai",
    },
    {
      name: "Real Estate",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-for-real-estate-mumbai",
    },
    {
      name: "Resorts & Villa",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-for-resorts-and-villas-in-mumbai",
    },

    {
      name: "Interior Designs",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-for-interior-designer-mumbai",
    },
    {
      name: "Spa & Salon",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-for-spa-and-salon-mumbai",
    },
    {
      name: "Education",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-for-education-in-mumbai",
    },
    {
      name: "Lifestyle",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "/digital-marketing-for-real-lifestyle-mumbai ",
    },
    // {
    //   name: "Who We Are",
    //   // desc: "Get to know our team of seasoned PR professionals who craft compelling narratives and build brand reputation.",
    //   link: "who-we-are-pr-advertising",
    // },
    // {
    //   name: "Our Portfolio",
    //   // desc: "Explore our past PR and advertising campaigns that have successfully elevated brands and driven engagement.",
    //   link: "our-portfolio",
    // },
    {
      name: "Career",
      link: "/best-digital-marketing-agency-mumbai",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      name: "Blogs",
      link: "/internet-marketing-mumbai",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      name: "Contact Us",
      link: "/online-marketing-near-mumbai",
      // desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return data;
}
