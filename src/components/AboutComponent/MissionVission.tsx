export default function MissionVission() {
  const missionVissionContent = [
    {
      image:
        "https://images.pexels.com/photos/8866736/pexels-photo-8866736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Vision",
      content:
        "We aim to provide businesses with effective digital solutions for your business growth heigh't. Our dedicated team is committed to providing quality services in the areas of SEO, web development and online marketing through smart new ideas combined with effective strategies for your business plans.. Our approach will result in tangible growth for clients across all channels.'...",
    },
    {
      image:
        "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Mission",
      content:
        "With a focus on innovation, transparency, and providing top-notch customer service, we aim to become the most prominent Digital Marketing Company In Mumbai. We are experienced in the different categories of business with smart strategies and solutions that take your work to great heights.",
    },
  ];

  return (
    <section className="section section-gray">
      <div className="container mx-auto">
        <div className="section-body md:flex flex-row items-center justify-between">
          <h2 className="section-title" style={{ maxWidth: "600px" }}>
            Making Life Smoother and Easier Every Day
          </h2>
          <p className="section-content" style={{ maxWidth: "600px" }}>
            We are committed to creating innovative solutions that simplify
            everyday tasks, enhance experiences, and drive seamless digital
            transformations.
          </p>
        </div>
        <div className="mission-vission-content">
          {missionVissionContent.map((item, index) => (
            <div
              className={`mission-vission-card ${
                (index + 1) % 2 !== 0 && "right"
              }`}
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="mission-vision-details">
                <h2>{item.title}</h2>
                <p>{item?.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
