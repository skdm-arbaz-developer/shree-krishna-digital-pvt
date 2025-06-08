import { NavLink } from "react-router-dom";

export default function CaseStudyCard({ data }: any) {
  return (
    <NavLink to={`/case-study-view/${data?.title}`}>
      <div className="case-study-card h-[100%]">
        <div className="case-study-img">
          <img src={data?.img} alt={data?.altTag}/>
        </div>
        <div className="case-study-content-body">
          <span>{data?.type}</span>
          <h5>{data?.title}</h5>
          <p>{data?.desc}</p>
        </div>
      </div>
    </NavLink>
  );
}
