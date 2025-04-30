export default function CaseStudyCard({data}: any) {
  return (
    <div className="case-study-card">
      <div className="case-study-img">
        <img src={data?.img} />
      </div>
      <div className="case-study-content-body">
        <span>{data?.type}</span>
        <h5>{data?.title}</h5>
        <p>{data?.desc}</p>
      </div>
    </div>
  );
}
