export default function CommanBanner({
  title,
  keyword,
  desc,
  image,
}: {
  keyword: string;
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
        <h1 style={{ fontSize: "1rem" }}>
          {keyword}
        </h1>
        <h2 className="mb-5">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
}
