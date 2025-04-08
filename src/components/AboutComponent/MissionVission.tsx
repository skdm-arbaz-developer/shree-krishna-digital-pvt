export default function MissionVission() {
  const missionVissionContent = [
    {
      image:
        "https://images.pexels.com/photos/8866736/pexels-photo-8866736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Vision",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloribus?",
    },
    {
      image:
        "https://images.pexels.com/photos/6147381/pexels-photo-6147381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Mission",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, doloribus?",
    },
  ];

  return (
    <section className="section section-gray">
      <div className="container mx-auto">
        <div className="section-body flex flex-row items-center justify-between">
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
            <div className={`mission-vission-card ${(index+1) % 2 !== 0 && "right" }`} key={index} style={{backgroundImage: `url(${item.image})`}}>
              <div className="mission-vision-details">
                <h2>{item.title}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita hic, ut perferendis esse molestias explicabo sed
                  corrupti quae tenetur quo reiciendis? Nam corporis quos nihil
                  voluptatem ullam dolore modi nemo. Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Voluptas, magnam pariatur
                  dolores ut neque labore officiis sed assumenda in suscipit
                  quibusdam expedita fuga! Perspiciatis aliquid quo a quaerat.
                  Architecto, dolore.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
