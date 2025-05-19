/**
 * Represents information about an animal.
 */
export interface Animal {
  name: string;
  link: string;
  desc: string;
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
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },

    {
      name: "About Us",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "about-us",
    },
    {
      name: "Our Team",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "our-team",
    },
    {
      name: "Why Choose Us",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "why-choose-us",
    },
    {
      name: "Life at SKD",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "life-at-skd",
    },
    {
      name: "News",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "news",
    },

    {
      name: "Case Study",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "case-study",
    },
    {
      name: "Privacy Policy",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "privacy-policy",
    },
    {
      name: "Partnership",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "#",
    },
    {
      name: "Search Engine Optimization",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "search-engine-optimization",
    },
    {
      name: "Social Media Marketing",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "social-media-marketing",
    },
    {
      name: "Google My Business",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "google-my-business",
    },
    {
      name: "Web Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "web-development",
    },
    {
      name: "Application Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "application-development",
    },
    {
      name: "CRM Development",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "crm-development",
    },
    {
      name: "Healthcare (Doctor & Hospital)",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "healthcare",
    },
    {
      name: "Hospitality & Catering",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "hospitality",
    },
    {
      name: "Real Estate",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "real-estate",
    },
    {
      name: "Resorts & Villa",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "resort-&-villa",
    },

    {
      name: "Interior Designs",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "interior-design",
    },
    {
      name: "Spa & Salon",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "spa-&-salon",
    },
    {
      name: "Education",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "education",
    },
    {
      name: "Lifestyle",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      link: "lifestyle",
    },
    {
      name: "Who We Are",
      desc: "Get to know our team of seasoned PR professionals who craft compelling narratives and build brand reputation.",
      link: "who-we-are-pr-advertising",
    },
    {
      name: "Our Portfolio",
      desc: "Explore our past PR and advertising campaigns that have successfully elevated brands and driven engagement.",
      link: "our-portfolio",
    },
    {
      name: "Career",
      link: "career",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      name: "Blogs",
      link: "blogs",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      name: "Contact Us",
      link: "contact-us",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
  ];

  return data;
}
