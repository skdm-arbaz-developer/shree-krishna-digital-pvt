import { Button, Tag } from "antd";
import { BsArrowRight } from "react-icons/bs";
import "../../css/home/blogs.css";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import blogsdata from "../support/BlogsArrayList";

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
  hideStyle: boolean;
  children?: ReactNode; // Allow children
}

export default function Blog() {


  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="section-body">
          <div className="lg:flex justify-between">
            <h2 className="section-title">
              Explore Our Blog <br />
              and Articles
            </h2>
            <Button className="comman-button">
              View all blogs <BsArrowRight />
            </Button>
          </div>
        </div>

        <div className="blog-list mt-5 lg:mt-0">
          <div className="lg:grid lg:grid-cols-2 gap-6">
            <BlogCard type="grid-card" data={blogsdata[0]} hideStyle={false} />
            <div className="blogs-list">
              {blogsdata.slice(1).map((blog, index) => (
                <BlogCard
                  key={index}
                  type="list"
                  data={blog}
                  hideStyle={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const BlogCard = ({ type, data, hideStyle }: CardProps) => (
  <NavLink
    to={`/blog-view/${data?.slug}`}
    className={"blog-card cursor-pointer " + type}
  >
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
