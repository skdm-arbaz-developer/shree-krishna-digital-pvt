import { NavLink, useParams } from "react-router-dom";
import blog_one from "../assets/images/resources/blog1.jpeg";
import blog_two from "../assets/images/resources/blog2.jpeg";
import blog_three from "../assets/images/resources/blog3.jpeg";
import { Button, Divider, Tag } from "antd";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import "../css/home/blogs.css";
import { ReactNode } from "react";

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

export default function BlogView() {
  const { id } = useParams();

  const data = blogs.find((val) => val.slug === id);
  return (
    data && (
      <>
        <section className="section">
          <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-7">
                <div className="section-body">
                  <div className="section-tags">
                    {data?.tags?.map((val, index) => (
                      <Tag key={index} color="#e98c14">
                        {val}
                      </Tag>
                    ))}
                  </div>
                  <h1 className="section-title">{data?.title}</h1>
                  <p className="section-content">{data?.summary}</p>
                  <img
                    className="my-5"
                    src={data?.image}
                    style={{
                      maxHeight: 400,
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: 10,
                    }}
                  />

                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illo voluptatibus, nostrum molestiae ipsam voluptatem
                    sapiente assumenda inventore! Odit tempore at dignissimos
                    dicta atque vel itaque tempora officia. Eveniet, corporis
                    ipsa. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Delectus repellat, quos ut vitae commodi eligendi
                    nostrum provident veniam aspernatur, sapiente fugit
                    praesentium laboriosam eius fuga nisi modi ad quo vero.
                  </p>
                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illo voluptatibus, nostrum molestiae ipsam voluptatem
                    sapiente assumenda inventore! Odit tempore at dignissimos
                    dicta atque vel itaque tempora officia. Eveniet, corporis
                    ipsa. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Delectus repellat, quos ut vitae commodi eligendi
                    nostrum provident veniam aspernatur, sapiente fugit
                    praesentium laboriosam eius fuga nisi modi ad quo vero.
                  </p>

                  <p className="mb-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Illo voluptatibus, nostrum molestiae ipsam voluptatem
                    sapiente assumenda inventore! Odit tempore at dignissimos
                    dicta atque vel itaque tempora officia. Eveniet, corporis
                    ipsa. Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Delectus repellat, quos ut vitae commodi eligendi
                    nostrum provident veniam aspernatur, sapiente fugit
                    praesentium laboriosam eius fuga nisi modi ad quo vero.
                  </p>
                </div>

                <Divider />

                <div className="next-previous-button flex justify-between">
                  <Button className="comman-button">
                    <BiLeftArrowAlt />
                    Previous
                  </Button>
                  <Button className="comman-button">
                    Next
                    <BiRightArrowAlt />
                  </Button>
                </div>
              </div>

              <div className="col-span-5">
                <div className="sticky top-25">
                  <h2 style={{ fontSize: "1.8rem" }}>Related Blogs</h2>
                  <Divider />
                  <div className="blogs-list">
                    {blogs.slice(1).map((blog, index) => (
                      <BlogCard key={index} type="list" data={blog} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  );
}

const BlogCard = ({ type, data }: CardProps) => (
  <NavLink to={`/blog-view/${data?.slug}`} className={"blog-card " + type}>
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
  </NavLink>
);
