import "../../css/team.css";

export default function AboutOwner() {
  const teamlist = [
    {
      image:
        "https://images.pexels.com/photos/8871884/pexels-photo-8871884.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Jyoti Shukla",
      designation: "Co-founder & Director",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel ?",
    },
    {
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=uHzeaBv3V2z6Tp6wvhzGABlTs9HR-SP-tEX1UbYNn4Q",
      name: "Arbaz Ansari",
      designation: "Sr. Developer & Team Lead",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image:
        "https://images.pexels.com/photos/31431924/pexels-photo-31431924/free-photo-of-confident-businessman-in-outdoor-setting.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Aayush Choubey",
      designation: "Sr. Ads Executive",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image:
        "https://images.pexels.com/photos/8528852/pexels-photo-8528852.jpeg?auto=compress&cs=tinysrgb&w=1200",
      name: "Priyanka Salvi",
      designation: "Sr. Sales Executive & Team Lead",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },
    {
      image:
        "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2637",

      name: "Rahul Sehjul",
      designation: "SEO Executive",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sequi in nam perferendis illum iste laudantium recusandae libero quod. Quam, inventore. In optio porro enim magni quo quas sit vel?",
    },

    {
      image:
        "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1200",

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
  ];

  return (
    <section className="section section-gray">
      <div className="container mx-auto">
        <div className="section-body flex justify-center flex-col items-center">
          <h2 className="section-title text-center">Our Leadership & Team</h2>
          <p className="section-content text-center">
            Guiding with Vision, Delivering with Passion
          </p>
        </div>
        <div className="about-team mt-20">
          <div className="owner-detail">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
              <div className="owner-image">
                <img
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Owner"
                />
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
