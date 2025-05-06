import thumbnail from "../../assets/images/banners/shree-krishna-thumbnail.png";

export default function CompanyVideo() {
  return (
    <div className="container mx-auto mt-15 mb-15">
      <iframe
        width={"100%"}
        height={"550"}
        src="https://www.youtube-nocookie.com/embed/r1uKGjwrpZk?si=KMUv0tK_Ftf4l3W2&amp;controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
