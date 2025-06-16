import GaugeChart from "../graph";
import DetailCollapse from "../DetailCollapse";

export default function Accessibility({ data }: any) {
  return (
    <div className="details">
      <div className="mb-5 flex flex-col items-center col-span-5">
        <GaugeChart
          value={parseFloat(data?.categories["accessibility"]?.score) * 100}
          type="ring"
          size={200}
        />
        <h5 style={{ fontSize: "1.4rem" }}>
          {data?.categories["accessibility"]?.title}
        </h5>
        <p className="text-center max-w-[500px] text-[.9rem]">
          These checks highlight opportunities to
          <a
            className="text-blue-400 mx-1"
            href="https://developer.chrome.com/docs/lighthouse/accessibility/scoring?utm_source=lighthouse&utm_medium=lr"
            target="_blank"
          >
            improve the accessibility of your web app.
          </a>
          Automatic detection can only detect a subset of issues and does not
          guarantee the accessibility of your web app, so
          <a
            className="text-blue-400 mx-1"
            href="https://googlechrome.github.io/lighthouse/scorecalc/#FCP=3073&LCP=8457&TBT=145&CLS=0&SI=9828&TTI=8539&device=mobile&version=12.6.0"
            target="_blank"
          >
            manual testing
          </a>
          is also encouraged.
        </p>
      </div>

      {/* ==================== ARIA ========================= */}

      <div className="spanshots mt-10">
        <div className="matrix-title flex justify-between mb-5">
          <h5 className="text-gray-500 uppercase text-[0.9rem]">ARIA</h5>
          {/* <Button style={{ fontSize: ".85rem", cursor: "pointer" }}>
            Expand View
          </Button> */}
        </div>
        {data?.categories["accessibility"]?.auditRefs
          ?.filter((val: any) => val?.group === "a11y-aria")
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
        <p style={{ fontSize: ".8rem", fontWeight: "300" }}>
          These are opportunities to improve the usage of ARIA in your
          application which may enhance the experience for users of assistive
          technology, like a screen reader.
        </p>
      </div>

      {/* ====================== Names & Labels ================== */}
      <div className="spanshots mt-10">
        <div className="matrix-title flex justify-between mb-5">
          <h5 className="text-gray-500 uppercase text-[0.9rem]">
            Names and labels
          </h5>
          {/* <Button style={{ fontSize: ".85rem", cursor: "pointer" }}>
            Expand View
          </Button> */}
        </div>
        {data?.categories["accessibility"]?.auditRefs
          ?.filter((val: any) => val?.group === "a11y-names-labels")
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
        <p style={{ fontSize: ".8rem", fontWeight: "300" }}>
          These are opportunities to improve the semantics of the controls in
          your application. This may enhance the experience for users of
          assistive technology, like a screen reader.
        </p>
      </div>

      {/* ====================== Contrast ================== */}
      <div className="spanshots mt-10">
        <div className="matrix-title flex justify-between mb-5">
          <h5 className="text-gray-500 uppercase text-[0.9rem]">Contrast</h5>
          {/* <Button style={{ fontSize: ".85rem", cursor: "pointer" }}>
            Expand View
          </Button> */}
        </div>
        {data?.categories["accessibility"]?.auditRefs
          ?.filter((val: any) => val?.group === "a11y-color-contrast")
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
        <p style={{ fontSize: ".8rem", fontWeight: "300" }}>
          These are opportunities to improve keyboard navigation in your
          application.
        </p>
      </div>

      {/* ====================== Navigation ================== */}
      <div className="spanshots mt-10">
        <div className="matrix-title flex justify-between mb-5">
          <h5 className="text-gray-500 uppercase text-[0.9rem]">Navigation</h5>
          {/* <Button style={{ fontSize: ".85rem", cursor: "pointer" }}>
            Expand View
          </Button> */}
        </div>
        {data?.categories["accessibility"]?.auditRefs
          ?.filter((val: any) => val?.group === "a11y-navigation")
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
        <p style={{ fontSize: ".8rem", fontWeight: "300" }}>
          These are opportunities to improve keyboard navigation in your
          application.
        </p>
      </div>
    </div>
  );
}
