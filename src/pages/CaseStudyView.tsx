import { Divider, Empty, Tag } from "antd";
import { useParams } from "react-router-dom";

export default function CaseStudyView() {
  const { id } = useParams();

  const casestudy = [
    {
      img: "https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Real Estate",
      title: "Luxury Living Realty – SEO Transformation",
      desc: "Implemented a high-impact SEO strategy that boosted organic traffic by 300%.",
      casestudy: {
        objective:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
        idea: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. ",
        results:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
      },
    },
    {
      img: "https://images.pexels.com/photos/4508641/pexels-photo-4508641.jpeg?auto=compress&cs=tinysrgb&w=1200",
      type: "Hospitality",
      title: "ResortEase – Application Development",
      desc: "Developed a booking and resort management app used by over 100+ resorts.",
      casestudy: {
        objective:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
        idea: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. ",
        results:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
      },
    },
    {
      img: "https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "E-Commerce",
      title: "UrbanCart – Digital Marketing Overhaul",
      desc: "Revamped performance marketing and email automation for a 5x ROI.",
      casestudy: {
        objective:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
        idea: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. ",
        results:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
      },
    },
    {
      img: "https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Education",
      title: "STEM Boost Academy – Website & CRM",
      desc: "Delivered a custom LMS portal with lead capture and student dashboard.",
      casestudy: {
        objective:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
        idea: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. ",
        results:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
      },
    },
    {
      img: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Interior Design",
      title: "DecoraNest – Portfolio Website",
      desc: "Created a stylish web presence and social strategy for luxury interiors.",
      casestudy: {
        objective:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
        idea: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. ",
        results:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
      },
    },
    {
      img: "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Logistics",
      title: "FastTrack Movers – Branding & CRM Setup",
      desc: "Launched branding campaign and built CRM for real-time delivery tracking.",
      casestudy: {
        objective:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
        idea: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. ",
        results:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
      },
    },
    {
      img: "https://images.pexels.com/photos/4033148/pexels-photo-4033148.jpeg?auto=compress&cs=tinysrgb&w=1200",
      type: "Healthcare",
      title: "CareWell Clinic – Google Ads & SEO",
      desc: "Scaled online appointments through local SEO and lead-gen landing pages.",
      casestudy: {
        objective:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
        idea: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. ",
        results:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
      },
    },
    {
      img: "https://images.pexels.com/photos/845451/pexels-photo-845451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "IT Services",
      title: "TechNova – Corporate Website Redesign",
      desc: "Redesigned corporate site with animations, blogs, and case study sections.",
      casestudy: {
        objective:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
        idea: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. ",
        results:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
      },
    },
    {
      img: "https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Travel",
      title: "WanderScape – Social Media Strategy",
      desc: "Built Instagram and YouTube presence from scratch, now at 80K+ followers.",
      casestudy: {
        objective:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
        idea: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. ",
        results:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
      },
    },
    {
      img: "https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      type: "Fashion",
      title: "StyleLoop – Shopify Store Optimization",
      desc: "Optimized product pages and checkout for a 45% increase in conversions.",
      casestudy: {
        objective:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
        idea: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. ",
        results:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, porro consequatur? Fugiat commodi quibusdam tempore beatae. Amet quaerat distinctio, voluptas officiis harum incidunt, reprehenderit unde in eveniet rem nulla at.",
      },
    },
  ];

  const selectedCaseStudy = casestudy.find((val) => val.title === id);

  return selectedCaseStudy ? (
    <section className="section relative">

      <div className="container mx-auto">
        <div className="section-body">
          <Tag color="black">{selectedCaseStudy?.type}</Tag>
          <h1 className="section-title">{selectedCaseStudy?.title}</h1>
          <p>{selectedCaseStudy?.desc}</p>
          {/* You can add more fields like img, type etc. here */}
          <Divider />
          <p>
            <strong style={{ fontSize: "1.2rem", color: "#e98c14" }}>
              Objective:
            </strong>
            &nbsp;
            {selectedCaseStudy?.casestudy?.objective}
          </p>
          <Divider />
          <p>
            <strong style={{ fontSize: "1.2rem", color: "#e98c14" }}>
              Idea:
            </strong>
            &nbsp;
            {selectedCaseStudy?.casestudy?.idea}
          </p>
          <h5 className="my-3">Bofere and After Result</h5>
          <img
            width={"70%"}
            className="mb-10"
            src="https://searchengineland.com/wp-content/seloads/2023/10/google-ads-overview-carousel-customize.png.webp"
          />
          <h5 className="my-3">Daily Reach</h5>
          <img
            width={"70%"}
            className="mb-10"
            src="https://runningrobots.com/wp-content/uploads/2023/06/google-ads-week-1-1024x476.png"
          />
          <h5 className="my-3">Meta Ads Results</h5>
          <img
            width={"70%"}
            className="mb-10"
            src="https://lifesight.io/wp-content/uploads/Meta-Ads-Dashboard.png"
          />

          <Divider />

          <p>
            <strong style={{ fontSize: "1.2rem", color: "#e98c14" }}>
              Result:
            </strong>
            &nbsp;
            {selectedCaseStudy?.casestudy?.results}
          </p>
        </div>
      </div>
    </section>
  ) : (
    <Empty
      description={
        <div className="container mx-auto">
          <h2>Sorry Case Study Not Found</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            voluptates, possimus nisi corrupti delectus neque illo ad
            consectetur id eius ab, assumenda culpa animi exercitationem
            molestias corporis, debitis quaerat veniam.
          </p>
        </div>
      }
    />
  );
}
