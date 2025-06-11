import { ReactNode } from "react";
import CommanBanner from "../components/support/CommanBanner";
import { Tag } from "antd";
import "../css/home/blogs.css";
import { NavLink } from "react-router-dom";
import blogsdata from "../components/support/BlogsArrayList";
import BlogBanner from "../assets/images/banners/blog-banner.jpeg";

interface Data {
  image: string;
  title: string;
  slug: string;
  content: string;
  tags: string[];
  summary: string;
  altTag: string;
}

interface CardProps {
  type: string;
  hideStyle: boolean;
  data: Data;
  children?: ReactNode; // Allow children
}

export default function Blog() {
  return (
    <>
      <CommanBanner
        image={BlogBanner}
        keyword={"Internet Marketing In Mumbai"}
        title="Blogs"
        desc={
          "Explore our latest blogs to stay updated with the latest trends, insights, and tips in the industry."
        }
      />

      <section className="section section-gray">
        <div className="container mx-auto px-0 sm:px-5 xl:px-0">
          <div className="section-body">
            <h1 className="section-title">Recent Blogs</h1>
          </div>

          <div className="blog-list mt-15">
            <div className="grid lg:grid-cols-2 gap-6">
              <BlogCard
                type="grid-card"
                hideStyle={false}
                data={blogsdata[0]}
              />
              <div className="blogs-list">
                {blogsdata.slice(1).map((blog, index) => (
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
      {blogsdata.splice(4).length > 0 && (
        <section className="section">
          <div className="container mx-auto px-0 sm:px-5 xl:px-0">
            <div className="section-body">
              <h1 className="section-title">All Blogs</h1>
            </div>

            <div className="blog-list mt-15">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogsdata.splice(4).map((blog, index) => (
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
      )}
    </>
  );
}

const BlogCard = ({ type, data, hideStyle }: CardProps) => (
  <NavLink
    to={`/view/${data?.slug}`}
    className={"blog-card cursor-pointer " + type}
  >
    <div className="blog-card-image">
      <img
        style={{
          maxHeight: hideStyle ? "230px" : "unset",
          minHeight: hideStyle ? "230px" : "unset",
        }}
        className="min-h-[250px] lg:min-h-auto"
        src={data?.image}
        alt={data?.altTag}
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
