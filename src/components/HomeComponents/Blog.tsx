import { Button, Tag } from "antd";
import { BsArrowRight } from "react-icons/bs";
import "../../css/home/blogs.css";
import { ReactNode } from "react";
import blog_one from "../../assets/images/resources/blog1.jpeg";
import blog_two from "../../assets/images/resources/blog2.jpeg";
import blog_three from "../../assets/images/resources/blog3.jpeg";

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
  data: Data;
  children?: ReactNode; // Allow children
}

export default function Blog() {
  const blogs = [
    {
      image: blog_one,
      title: "Top 5 Digital Marketing Trends to Watch in 2025",
      slug: "digital-marketing-trends-2025",
      author: "Vinay Mishra",
      published_date: "2025-04-04",
      category: "Trends",
      tags: [
        "AI",
        "Marketing Automation",
        "Voice Search",
        "Social Media",
        "SEO",
      ],
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

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="section-body">
          <div className="flex justify-between">
            <h2 className="section-title">
              Explore Our Blog <br />
              and Articles
            </h2>
            <Button className="comman-button">
              View all blogs <BsArrowRight />
            </Button>
          </div>
        </div>

        <div className="blog-list">
          <div className="grid grid-cols-2 gap-6">
            <BlogCard type="grid-card" data={blogs[0]} />
            <div className="blogs-list">
              {blogs.slice(1).map((blog, index) => (
                <BlogCard key={index} type="list" data={blog} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BlogCard = ({ type, data }: CardProps) => (
  <div className={"blog-card " + type}>
    <div className="blog-card-image">
      <img src={data?.image} alt={data?.slug} />
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
      <h4 className="blog-card-title">{data?.title}</h4>
      <p className="blog-card-content">{data?.summary}</p>
    </div>
  </div>
);
