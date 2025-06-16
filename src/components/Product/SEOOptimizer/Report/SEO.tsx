import GaugeChart from "../graph";
import DetailCollapse from "../DetailCollapse";

export default function SEO({ data }: any) {
  return (
    <div className="details">
      <div className="mb-5 flex flex-col items-center col-span-5">
        <GaugeChart
          value={parseFloat(data?.categories["seo"]?.score) * 100}
          type="ring"
          size={200}
        />
        <h5 style={{ fontSize: "1.4rem" }}>
          {data?.categories["seo"]?.title}
        </h5>
      </div>

      {/* ==================== General ========================= */}

      <div className="spanshots mt-10">
        <div className="matrix-title flex justify-between mb-5">
          <h5 className="text-gray-500 uppercase text-[0.9rem]">General</h5>
          {/* <Button style={{ fontSize: ".85rem", cursor: "pointer" }}>
            Expand View
          </Button> */}
        </div>
        
        {data?.categories["seo"]?.auditRefs
          ?.filter((val: any) => val?.group === "seo-content")
          ?.sort((a: any, b: any) => {
            const scoreA = data?.audits?.[a.id]?.score ?? 0;
            const scoreB = data?.audits?.[b.id]?.score ?? 0;
            return scoreA - scoreB; // Ascending order. Use `scoreB - scoreA` for descending.
          })
          ?.map((val: any, number: any) => {
            return (
              <DetailCollapse
                status="failed"
                data={data?.audits?.[val.id]}
                key={number}
              />
            );
          })}
      </div>

    </div>
  );
}
