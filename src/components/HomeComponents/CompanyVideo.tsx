export default function CompanyVideo() {
  return (
    <div className="container mx-auto mt-15 mb-15">
      <iframe
        width={"100%"}
        height={"550"}
        src="https://www.youtube-nocookie.com/embed/r1uKGjwrpZk?si=KMUv0tK_Ftf4l3W2&controls=0"
        title="YouTube video player"
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
