import { Tag } from "antd";

export default function PortfolioSectionCard({ portfolio, index }: any) {
  return (
    <section className="section" key={index}>
      <div className="container mx-auto">
        <div className="grid grid-cols-7 gap-10">
          {index % 2 === 0 ? null : (
            <div className="col-span-3">
              <video controls style={{ width: "100%", height: "100%" }}>
                <source src={portfolio?.video}></source>
              </video>
            </div>
          )}
          <div className="col-span-4">
            <Tag color={portfolio?.type === "Advertisment" ? "green" : "blue"}>
              {portfolio?.type === "Advertisment" ? "" : "PR : "}
              {portfolio?.type}
            </Tag>
            <div className="clientDetail my-2">
              <strong>Client: </strong>
              <span>{portfolio?.client}</span>
            </div>
            <div className="clientDetail my-2">
              <strong>Category: </strong>
              <span>{portfolio?.category}</span>
            </div>
            <div className="clientDetail my-2">
              <strong>Content: </strong>
              <span>{portfolio?.desc}</span>
            </div>
          </div>
          {index % 2 === 0 ? (
            <div className="col-span-3">
              <video controls style={{ width: "100%", height: "100%" }}>
                <source src={portfolio?.video}></source>
              </video>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
