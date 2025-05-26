import { NavLink, useParams } from "react-router-dom";
import { Button, Divider, Tag } from "antd";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import "../css/home/blogs.css";
import { ReactNode } from "react";
import blogsdata from "../components/support/BlogsArrayList";

interface Data {
  image: string;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  summary: string;
}

interface CardProps {
  type: string;
  data: Data;
  children?: ReactNode; // Allow children
}


export default function BlogView() {
  const { id } = useParams();

  const data = blogsdata.find((val) => val.slug === id);
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

                  <div
                    className="section-content"
                    dangerouslySetInnerHTML={{ __html: data?.content }}
                  ></div>
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
                    {blogsdata.slice(1).map((blog, index) => (
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
