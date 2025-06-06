import "../../css/team.css";
import SvgIcon from "../../assets/images/icons/home-about-right.svg";
import boss from "../../assets/images/team/ambrish-sir.png";
import arbaz from "../../assets/images/team/arbaz-ansari.png";
import priyanka from "../../assets/images/team/priyanka-salvi.jpeg";
import rahul from "../../assets/images/team/rahul-shjul.jpeg";
import saba from "../../assets/images/team/saba-patel.jpeg";
import jyoti from "../../assets/images/team/jyoti-shukla.jpeg";
import prem from "../../assets/images/team/prem-singh.jpeg";
import aayush from "../../assets/images/team/aayush-choubey.jpeg";
import vaisnavi from "../../assets/images/team/vaishnavi-alhat.jpg";
import lovkush from "../../assets/images/team/lovkush.jpeg";
import siddesh from "../../assets/images/team/siddesh.jpeg";
import { FaPeopleGroup } from "react-icons/fa6";

export default function AboutOwner() {
  const teamlist = [
    {
      image: jyoti,
      name: "Jyoti Shukla",
      designation: "Co-founder & Director",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel ?",
    },
    {
      image: arbaz,
      name: "Arbaz Ansari",
      designation: "Sr. Developer & Team Lead",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image: aayush,
      name: "Aayush Choubey",
      designation: "Creative Head",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image: priyanka,
      name: "Priyanka Salvi",
      designation: "Sr. Sales Executive & Team Lead",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image: prem,
      name: "Prem Singh",
      designation: "Sr. Sales Executive",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image: rahul,
      name: "Rahul Sehjul",
      designation: "SEO Executive",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },

    {
      image: vaisnavi,
      name: "Vaisnavi  Alhat",
      designation: "Social Media Manager",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwjvpBuQrRshUzLmvqkdagLuKzRtYM4_9-dYFq1J83V0NjVI_qC2tGdCHtYzrCiDxFhdc&usqp=CAU",
      name: "Noor Khan",
      designation: "Graphic Designer",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image: saba,
      name: "Saba Patel",
      designation: "Project Manager",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image: lovkush,
      name: "Lovkush",
      designation: "Frontend Developer",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image: siddesh,
      name: "Siddesh Thamekar",
      designation: "Backend Developer",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
  ];

  return (
    <section className="section relative section-gray">
      <img src={SvgIcon} className="absolute top-0 right-0" />

      <div className="container mx-auto px-0 sm:px-5 xl:px-0">
        <div className="section-body flex justify-center flex-col lg:items-center">
          <h2 className="section-title">Our Leadership & Team</h2>
          <p className="section-content lg:text-center max-w-[900px]">
            Get a glimpse of the passionate team behind Shree Krishna Digital
            Solution Pvt Ltd exceptional work. With creativity, dedication, and
            expertise, they work together to craft smart solutions that drive
            digital success. Every member brings unique value, turning
            challenges into opportunities. They don’t just complete tasks they
            build results. As the best digital marketing agency in Mumbai, our
            team commitment and energy help take your brand to new heights.
          </p>
        </div>
        <div className="about-team mt-20">
          <div className="owner-detail relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="owner-image">
                <img src={boss} alt="Owner" />
              </div>
              <div className="owner-content lg:col-span-2">
                <h2>Mr. Ambrish Kumar</h2>
                <span>Founder & CEO</span>
                <p style={{ fontSize: "1rem", color: "#000" }}>
                  Mr. Ambrish Kumar is the founder and CEO of Shree Krishna
                  Digital Solution Pvt Ltd, leading the company’s vision to
                  provide impactful digital solutions. With deep expertise in
                  business growth and marketing strategy, he started Shree
                  Krishna Digital Solution Pvt Ltd to empower ambitious brands.
                  Mr. Ambrish Kumar is recognized for his forward-thinking
                  mindset, strategic planning, and focus on innovation. His
                  leadership has built a culture that values performance,
                  flexibility, and client success. Under his direction, it is
                  the best digital marketing agency in Mumbai. We have earned a
                  solid reputation as a reliable digital partner, delivering
                  results that matter. Our drive for creative and effective
                  solutions continues to guide the team. helping businesses
                  navigate the digital world and grow confidently in a
                  fast-evolving industry.
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <h5>10+ Years</h5>
                    <h6>Industry Experience</h6>
                  </div>
                  <img src="https://www.pngall.com/wp-content/uploads/14/Signature-PNG-Picture.png" />
                </div>
              </div>
            </div>
          </div>

          <div className="team-list mt-30">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="team-card-list">
                <h3>Our Team</h3>
                <FaPeopleGroup style={{fontSize:"8rem"}} color="var(--primary-color)" />
                <p>
                  Take a closer look at the professionals driving Shree Krishna
                  Digital Solution Pvt Ltd mission forward. Their expertise and
                  dedication help clients reach new digital heights.
                </p>
              </div>
              {teamlist.map((val, index) => (
                <TeamCard data={val} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const TeamCard = ({ data }: any) => (
  <div className="team-card">
    <div className="team-image">
      <img src={data?.image} alt={data?.name} />
    </div>
    <div className="team-detail">
      {/* <p className="team-content">{data?.desc}</p> */}

      <div className="team-title">
        <h3>{data?.name}</h3>
        <h4>{data?.designation}</h4>
      </div>
    </div>
  </div>
);
