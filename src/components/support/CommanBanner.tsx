

export default function CommanBanner({
  title,
  desc,
  image,
}: {
  desc: string;
  title: string;
  image: string;
}) {
  return (
    <div
      className="comman-banner"
      style={{ backgroundImage: "url(" + image + ")" }}
    >
      <div className="banner-content">
        <h1 className="mb-5">{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
}
