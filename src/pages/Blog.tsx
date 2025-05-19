import { ReactNode } from "react";
import CommanBanner from "../components/support/CommanBanner";
import { Tag } from "antd";
import blog_one from "../assets/images/resources/blog1.jpeg";
import blog_two from "../assets/images/resources/blog2.jpeg";
import blog_three from "../assets/images/resources/blog3.jpeg";
import "../css/home/blogs.css";
import { NavLink } from "react-router-dom";

interface Data {
  image: string;
  title: string;
  slug: string;
  author: string;
  published_date: string;
  category: string;
  tags: string[];
  summary: string;
  content: string;
}

interface CardProps {
  type: string;
  hideStyle: boolean;
  data: Data;
  children?: ReactNode; // Allow children
}

const blogs = [
  {
    image: blog_one,
    title: "Top 5 Digital Marketing Trends to Watch in 2025",
    slug: "digital-marketing-trends-2025",
    author: "Vinay Mishra",
    published_date: "2025-04-04",
    category: "Trends",
    tags: ["AI", "Marketing Automation", "Voice Search", "Social Media", "SEO"],
    summary:
      "Stay ahead of the curve with these 5 digital marketing trends that will dominate in 2025, from AI to voice-activated search.",
    content:
      "The digital marketing landscape is evolving rapidly. In 2025, expect major shifts with the rise of AI-driven tools, marketing automation, hyper-personalization, and the growing importance of voice search. Brands will need to focus more on delivering seamless omnichannel experiences. Embracing video content, micro-influencers, and data-driven strategies will also be key to staying competitive. Make sure your digital strategy is ready for the future.",
  },
  {
    image: blog_two,
    title: "Why Every Business Needs a Strong Social Media Strategy",
    slug: "importance-of-social-media-strategy",
    author: "Vinay Mishra",
    published_date: "2025-04-04",
    category: "Social Media",
    tags: ["Facebook", "Instagram", "LinkedIn", "Engagement", "Branding"],
    summary:
      "Discover how a powerful social media strategy can boost your brand presence, engagement, and sales in 2025.",
    content:
      "Social media isn't just about likes and followers — it's about building relationships, trust, and brand loyalty. A solid strategy across platforms like Instagram, LinkedIn, and Facebook allows businesses to engage their target audience, provide customer service, and build communities. Consistency, storytelling, and understanding your audience are key to leveraging social media effectively. With algorithm changes and new features rolling out regularly, staying informed is crucial to success.",
  },
  {
    image: blog_three,
    title: "SEO in 2025: What Has Changed and What Still Matters",
    slug: "seo-2025-guide",
    author: "Vinay Mishra",
    published_date: "2025-04-04",
    category: "SEO",
    tags: [
      "Search Engine Optimization",
      "Google Ranking",
      "Keywords",
      "Content Marketing",
      "Core Web Vitals",
    ],
    summary:
      "A look at how SEO has evolved in 2025, and the top practices businesses should continue focusing on for higher Google rankings.",
    content:
      "While the fundamentals of SEO — like high-quality content and keyword optimization — remain important, 2025 brings new areas to prioritize. Core Web Vitals, user experience (UX), and mobile-first indexing are now key ranking factors. Google’s algorithms are also favoring intent-based searches, voice search queries, and structured data. Businesses that focus on creating valuable content and a seamless user journey will continue to outperform competitors in search results.",
  },
  {
    image: blog_three,
    title: "SEO in 2025: What Has Changed and What Still Matters",
    slug: "seo-2025-guide",
    author: "Vinay Mishra",
    published_date: "2025-04-04",
    category: "SEO",
    tags: [
      "Search Engine Optimization",
      "Google Ranking",
      "Keywords",
      "Content Marketing",
      "Core Web Vitals",
    ],
    summary:
      "A look at how SEO has evolved in 2025, and the top practices businesses should continue focusing on for higher Google rankings.",
    content:
      "While the fundamentals of SEO — like high-quality content and keyword optimization — remain important, 2025 brings new areas to prioritize. Core Web Vitals, user experience (UX), and mobile-first indexing are now key ranking factors. Google’s algorithms are also favoring intent-based searches, voice search queries, and structured data. Businesses that focus on creating valuable content and a seamless user journey will continue to outperform competitors in search results.",
  },
];

export default function Blog() {
  return (
    <>
      <CommanBanner
        image={
          "https://media.licdn.com/dms/image/v2/D4E12AQHuRQYQs_8vvA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679471108342?e=2147483647&v=beta&t=jN3Ij1IgujiyMZ5zAJNJWE1l3hzhgWC7mveoYquRp1k"
        }
        title={"Read blogs of how to make top of your comapny on online market"}
        desc={
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere rem aut reprehenderit, dignissimos, deleniti neque, repellendus doloribus nisi similique tenetur veniam culpa! Omnis ipsum, esse vitae unde officia commodi sint."
        }
      />

      <section className="section section-gray">
        <div className="container mx-auto">
          <div className="section-body">
            <h1 className="section-title">Recent Blogs</h1>
            <p className="section-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
              aliquam rerum aut sunt inventore iure maxime mollitia accusamus
              nihil laboriosam ad magnam, velit architecto illo eius. Saepe non
              ratione omnis!
            </p>
          </div>

          <div className="blog-list mt-15">
            <div className="grid grid-cols-2 gap-6">
              <BlogCard type="grid-card" hideStyle={false} data={blogs[0]} />
              <div className="blogs-list">
                {blogs.slice(1).map((blog, index) => (
                  <BlogCard
                    key={index}
                    hideStyle={false}
                    type="list"
                    data={blog}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="section-body">
            <h1 className="section-title">All Blogs</h1>
            <p className="section-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              amet, suscipit accusamus minima et ipsam odio similique nemo
              maiores unde impedit dicta neque accusantium repudiandae magni
              blanditiis fuga. Dolor, sint.
            </p>
          </div>

          <div className="blog-list mt-15">
            <div className="grid grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <div className="blogs-list">
                  <BlogCard
                    key={index}
                    hideStyle={true}
                    type="grid-card"
                    data={blog}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const BlogCard = ({ type, data, hideStyle }: CardProps) => (
  <NavLink to={`/blog-view/${data?.slug}`} className={"blog-card cursor-pointer " + type}>
    <div className="blog-card-image">
      <img
        style={{
          maxHeight: hideStyle ? "230px" : "unset",
          minHeight: hideStyle ? "230px" : "unset",
        }}
        src={data?.image}
        alt={data?.slug}
      />
    </div>
    <div className="blog-card-body">
      {type === "grid-card" ? (
        data?.tags?.map((val, index) => (
          <Tag key={index} color="#e98c14">
            {val}
          </Tag>
        ))
      ) : (
        <Tag color="#e98c14">{data?.tags[0]}</Tag>
      )}
      <h4
        className="blog-card-title"
        style={{ fontSize: hideStyle ? "1rem" : "" }}
      >
        {data?.title}
      </h4>
      <p
        className="blog-card-content"
        style={{ fontSize: hideStyle ? ".8rem" : "" }}
      >
        {data?.summary}
      </p>
    </div>
  </NavLink>
);
