// import { Tag } from "antd";

export default function PortfolioSectionCard({ portfolio, index }: any) {
  return (
    <div key={index}>
      <h5 className="text-center">Credit By <span style={{color:"red"}}>Kunal Khatoi</span></h5>

      <iframe
        title="vimeo-player"
        src={"https://player.vimeo.com/video/" + portfolio}
        width={"100%"}
        className="min-h-[250px] h-full"
        frameBorder={0}
      />
    </div>

    // <section className="section" key={index}>
    //   <div className="container mx-auto px-0 sm:px-5 xl:px-0">
    //     <div className="grid grid-cols-4 gap-10">

    //       {/* {index % 2 === 0 ? null : ( */}
    //       {/* <video controls style={{ width: "100%", height: "100%" }}>
    //         <source src={portfolio?.video}></source>
    //       </video> */}
    //       {/* )} */}
    //       {/* <div className="col-span-4">
    //         <Tag color={portfolio?.type === "Advertisment" ? "green" : "blue"}>
    //           {portfolio?.type === "Advertisment" ? "" : "PR : "}
    //           {portfolio?.type}
    //         </Tag>
    //         <div className="clientDetail my-2">
    //           <strong>Client: </strong>
    //           <span>{portfolio?.client}</span>
    //         </div>
    //         <div className="clientDetail my-2">
    //           <strong>Category: </strong>
    //           <span>{portfolio?.category}</span>
    //         </div>
    //         <div className="clientDetail my-2">
    //           <strong>Content: </strong>
    //           <span>{portfolio?.desc}</span>
    //         </div>
    //       </div>
    //       {index % 2 === 0 ? (
    //         <div className="col-span-3">
    //           <video controls style={{ width: "100%", height: "100%" }}>
    //             <source src={portfolio?.video}></source>
    //           </video>
    //         </div>
    //       ) : null} */}
    //     </div>
    //   </div>
    // </section>
  );
}
