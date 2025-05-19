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

      <div className="container mx-auto">
        <div className="section-body flex justify-center flex-col items-center">
          <h2 className="section-title text-center">Our Leadership & Team</h2>
          <p className="section-content text-center">
            Guiding with Vision, Delivering with Passion
          </p>
        </div>
        <div className="about-team mt-20">
          <div className="owner-detail relative">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
              <div className="owner-image">
                <img src={boss} alt="Owner" />
              </div>
              <div className="owner-content col-span-2">
                <h2>Mr. Ambrish Kumar</h2>
                <span>Founder & CEO</span>
                <p>
                  Ambrish Kumar is the driving force behind SKDM. With a vision
                  to deliver innovative digital solutions, he founded the
                  company to help businesses grow through cutting-edge
                  technology and strategic insights. His leadership and
                  expertise continue to shape the company’s success and client
                  satisfaction.
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
            <div className="grid grid-cols-4 gap-8">
              <div className="team-card-list">
                <h3>Our Team</h3>
                <p>
                  Our team combines diverse skills and a shared vision to
                  deliver excellence in everything we do.
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
      <p className="team-content">{data?.desc}</p>

      <div className="team-title">
        <h3>{data?.name}</h3>
        <h4>{data?.designation}</h4>
      </div>
    </div>
  </div>
);
