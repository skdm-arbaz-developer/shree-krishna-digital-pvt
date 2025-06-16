import { Divider } from "antd";
import dayjs from "dayjs";
import PerformanceGraph from "./Report/PerformanceGraph";
import Performace from "./Report/Performace";
import Accessibility from "./Report/Accessibility";
import BestPractice from "./Report/BestPractice";
import SEO from "./Report/SEO";

export default function Report({ data, printRef }: any) {

  
  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="data_title flex justify-between">
          <h2>
            <h2>
              Report from {dayjs(new Date()).format("MMM DD, YYYY, h:mm:ss A")}
            </h2>
          </h2>
          {/* <Button
            onClick={handleDownloadPdf}
            className="bg-red-600"
            icon={<FaFilePdf />}
          >
            Download Report
          </Button> */}
        </div>
        <Divider />
        <h3 className="text-xl mb-5">Diagnose performance issues</h3>
        <div
          className="pdf-area p-[10px] lg:p-[40px]"
          ref={printRef}
          style={{
            backgroundColor: "#f2f2f2",
            borderRadius: "20px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            color: "#000",
          }}
        >
          <PerformanceGraph data={data} />
          <Divider />
          <Performace data={data} />
          <Divider />
          <Accessibility data={data} />
          <Divider />
          <BestPractice data={data} />
          <Divider />
          <SEO data={data} />
        </div>
      </div>
    </section>
  );
}
