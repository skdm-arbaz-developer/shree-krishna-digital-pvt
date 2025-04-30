import videoBanner from "../../assets/videos/SKD WITH MUSIC.mp4";
import thumbnail from "../../assets/images/banners/shree-krishna-thumbnail.png";

export default function CompanyVideo() {
  return (
    <div className="container mx-auto mt-15 mb-15">
      <video
        style={{ maxWidth: "100%", borderRadius: "20px" }}
        className="w-full h-auto object-cover"
        autoPlay
        poster={thumbnail}
        controls
      >
        <source src={videoBanner} />
      </video>
    </div>
  );
}
