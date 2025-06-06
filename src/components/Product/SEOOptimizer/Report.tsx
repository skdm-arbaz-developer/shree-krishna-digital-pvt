import { Button, Divider } from "antd";
import { FaFilePdf } from "react-icons/fa6";
import dayjs from "dayjs";
import PerformanceGraph from "./Report/PerformanceGraph";

export default function Report({ data }: any) {

  return (
    <section className="section">
      <div className="container mx-auto">
        <div className="data_title flex justify-between">
          <h2>
            <h2>
              Report from {dayjs(new Date()).format("MMM DD, YYYY, h:mm:ss A")}
            </h2>
          </h2>
          <Button className="bg-red-600" icon={<FaFilePdf />}>
            Download Report
          </Button>
        </div>
        <Divider />
        <h3 className="text-xl mb-5">Diagnose performance issues</h3>
        <div className="shadow rounded-[20px] p-10 bg-[#f2f2f2e2]">
          <PerformanceGraph data={data} />
        </div>
      </div>
    </section>
  );
}
