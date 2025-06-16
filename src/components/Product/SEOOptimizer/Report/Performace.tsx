import { useState } from "react";
import GaugeChart from "../graph";
import { Image } from "antd";
import DetailCollapse from "../DetailCollapse";

export default function Performace({ data }: any) {
  const [showMatrix, setShowMatrix] = useState(false);

  // ======================= Performance Matrix ====================
  const matrixList = [
    {
      title: "First Contentful Paint",
      name: "fcp",
      value: data?.audits?.["first-contentful-paint"],
      desc: (
        <p style={{ fontSize: ".8rem", margin: "0" }}>
          First Contentful Paint marks the time at which the first text or image
          is painted.
          <a
            href="https://developer.chrome.com/docs/lighthouse/performance/first-contentful-paint/?utm_source=lighthouse&utm_medium=lr"
            target="_blank"
            className="text-blue-500"
          >
            Learn more about the First Contentful Paint metric.
          </a>
        </p>
      ),
    },
    {
      title: "Largest Contentful Paint",
      name: "lcp",
      value: data?.audits?.["largest-contentful-paint"],
      desc: (
        <p style={{ fontSize: ".8rem", margin: "0" }}>
          Largest Contentful Paint marks the time at which the largest text or
          image is painted.
          <a
            href="https://developer.chrome.com/docs/lighthouse/performance/lighthouse-largest-contentful-paint/?utm_source=lighthouse&utm_medium=lr"
            target="_blank"
            className="text-blue-500"
          >
            Learn more about the Largest Contentful Paint metric
          </a>
        </p>
      ),
    },
    {
      title: "Total Blocking Time",
      name: "tbt",
      value: data?.audits?.["total-blocking-time"],
      desc: (
        <p style={{ fontSize: ".8rem", margin: "0" }}>
          Sum of all time periods between FCP and Time to Interactive, when task
          length exceeded 50ms, expressed in milliseconds.
          <a
            href="https://developer.chrome.com/docs/lighthouse/performance/lighthouse-total-blocking-time/?utm_source=lighthouse&utm_medium=lr"
            target="_blank"
            className="text-blue-500"
          >
            Learn more about the Total Blocking Time metric.
          </a>
        </p>
      ),
    },
    {
      title: "Cumulative Layout Shift",
      name: "cls",
      value: data?.audits?.["cumulative-layout-shift"],
      desc: (
        <p style={{ fontSize: ".8rem", margin: "0" }}>
          Cumulative Layout Shift measures the movement of visible elements
          within the viewport.
          <a
            href="https://web.dev/articles/cls?utm_source=lighthouse&utm_medium=lr"
            target="_blank"
            className="text-blue-500"
          >
            Learn more about the Cumulative Layout Shift metric.
          </a>
        </p>
      ),
    },
    {
      title: "Speed Index",
      name: "speedIndex",
      value: data?.audits?.["speed-index"],
      desc: (
        <p style={{ fontSize: ".8rem", margin: "0" }}>
          Speed Index shows how quickly the contents of a page are visibly
          populated.
          <a
            href="https://developer.chrome.com/docs/lighthouse/performance/speed-index/?utm_source=lighthouse&utm_medium=lr"
            target="_blank"
            className="text-blue-500"
          >
            Learn more about the Speed Index metric.
          </a>
        </p>
      ),
    },
  ];

  // ========================== Images Snapshot Array =============

  const images = data?.audits?.["screenshot-thumbnails"]?.details?.items;

  return (
    <div className="details">
      <div className="mb-5 flex flex-col items-center col-span-5">
        <GaugeChart
          value={parseFloat(data?.categories["performance"]?.score) * 100}
          type="ring"
          size={200}
        />
        <h5 style={{ fontSize: "1.4rem" }}>
          {data?.categories["performance"]?.title}
        </h5>
        <p className="text-center max-w-[500px] text-[.9rem]">
          Values are estimated and may vary. The
          <a
            className="text-blue-400 mx-1"
            href="https://developer.chrome.com/docs/lighthouse/performance/performance-scoring/?utm_source=lighthouse&utm_medium=lr"
            target="_blank"
          >
            performance score is calculated
          </a>
          directly from these metrics.
          <a
            className="text-blue-400 mx-1"
            href="https://googlechrome.github.io/lighthouse/scorecalc/#FCP=3073&LCP=8457&TBT=145&CLS=0&SI=9828&TTI=8539&device=mobile&version=12.6.0"
            target="_blank"
          >
            See calculator.
          </a>
        </p>
      </div>

      <div className="matrix">
        <div className="matrix-title flex justify-between">
          <h5 className="text-gray-500 uppercase">Metrics</h5>
          <span
            onClick={() => setShowMatrix((prev) => !prev)}
            style={{ fontSize: ".85rem", cursor: "pointer" }}
            className="hover:underline"
          >
            Expand View
          </span>
        </div>
        <div className="grid grid-cols-2 gap-x-15 mt-5">
          {matrixList?.map((val: any, index: number) => (
            <ScoreCard data={val} showMatrix={showMatrix} key={index} />
          ))}
        </div>
      </div>

      <div className="spanshots mt-5">
        <div className="matrix-title flex justify-between mb-5">
          <h5 className="text-gray-500 uppercase">Timestamp Snapshot</h5>
          {/* <Button style={{ fontSize: ".85rem", cursor: "pointer" }}>
            Expand View
          </Button> */}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-10">
          {images.map((val: any, index: number) => (
            <TimeSpanSnapShot image={val?.data} key={index} />
          ))}
        </div>
      </div>

      {/* ==================== Diagnostic ========================= */}

      <div className="spanshots mt-10">
        <div className="matrix-title flex justify-between mb-5">
          <h5 className="text-gray-500 uppercase">Diagnostics</h5>
          {/* <Button style={{ fontSize: ".85rem", cursor: "pointer" }}>
            Expand View
          </Button> */}
        </div>
        {data?.categories["performance"]?.auditRefs
          ?.filter((val: any) => val?.group === "diagnostics")
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
      {/* ==================== Passed Audits ========================= */}
      {/* 
      <div className="spanshots mt-10">
        <div className="matrix-title flex justify-between mb-5">
          <h5 className="text-gray-500 uppercase">Passed Audits</h5>
         
        </div>
        {data?.categories["performance"]?.auditRefs
          ?.filter((val: any) => val?.group === "diagnostics")
          ?.sort((a: any, b: any) => {
            const scoreA = data?.audits?.[a.id]?.score ?? 0;
            const scoreB = data?.audits?.[b.id]?.score ?? 0;
            return scoreA - scoreB; // Ascending order. Use `scoreB - scoreA` for descending.
          })
          ?.map((val: any, number: any) => {
            return (
              <DetailCollapse status="passed" data={data?.audits?.[val.id]} key={number} />
            );
          })}
      </div> */}
    </div>
  );
}

const ScoreCard = ({ data, showMatrix }: any) => {
  const displayScore = Math.round(data?.value?.score * 100);
  const getScoreClass = (s: number) => {
    if (s >= 0.9) return "success"; // 90-100
    if (s >= 0.5) return "warning"; // 50-89
    return "error"; // 0-49
  };

  return (
    <div className="matrixCard border-t-1 pt-2 pb-2 border-gray-300">
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <span
            className={`${getScoreClass(displayScore)} shape mt-1 mx-auto`}
          ></span>
        </div>
        <div className="col-span-11">
          <h3 style={{ fontSize: ".9rem" }}>{data?.title}</h3>
          <h4
            style={{ fontSize: "1.2rem" }}
            className={`${getScoreClass(displayScore)} text my-1`}
          >
            {data?.value?.displayValue}
          </h4>
          <div className={` ${showMatrix ? "visible" : "hidden"}`}>
            {data?.desc}
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeSpanSnapShot = ({ image }: any) => {
  return <Image src={image} />;
};
