import GaugeChart from "../graph";
import desktop from "../../../../assets/images/frames/desktop.png";
import phone from "../../../../assets/images/frames/phone.png";

export default function PerformanceGraph({ data }: any) {
  const progressBar = ["Performance", "Accessibility", "Best Practices", "SEO"];

  function slugify(input: string): string {
    return input
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // remove non-alphanumeric except space and hyphen
      .replace(/\s+/g, "-") // replace spaces with hyphen
      .replace(/-+/g, "-") // collapse multiple hyphens
      .replace(/^-+|-+$/g, ""); // trim hyphens from start/end
  }

  const overAllRank = () => {
    const perform =
      parseFloat(data?.categories["performance"]?.score) * 100 || 0;
    const access =
      parseFloat(data?.categories["accessibility"]?.score) * 100 || 0;
    const practice =
      parseFloat(data?.categories["best-practices"]?.score) * 100 || 0;
    const seo = parseFloat(data?.categories["seo"]?.score) * 100 || 0;

    const total = perform + access + practice + seo;

    return total / 4; // average out of 100
  };
  
  return (
    <div className="performance-graph">
      <div className="grid grid-cols-12">
        <div className="graph col-span-5">
          <GaugeChart value={overAllRank()} type="grade" />
          <div className="otherGraphs">
            <div className="grid grid-cols-4 ">
              {progressBar?.map((val: any, index: number) => (
                <div key={index} className="mb-5 flex flex-col items-center">
                  <GaugeChart
                    key={index}
                    value={
                      parseFloat(data?.categories[slugify(val)]?.score) * 100
                    }
                    type="ring"
                  />
                  <h5 style={{ fontSize: ".85rem" }}>
                    {data?.categories[slugify(val)]?.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="preview col-span-7">
          {data?.configSettings?.emulatedFormFactor !== "desktop" ? (
            <div
              className="relative w-[300px] h-[500px] bg-contain bg-no-repeat bg-center m-auto overflow-hidden"
              style={{ backgroundImage: "url(" + phone + ")" }}
            >
              <img
                src={data?.fullPageScreenshot?.screenshot?.data}
                alt="Phone preview"
                className="absolute top-[2%] left-[12.5%] w-[75%] h-[95%] object-cover object-top rounded-[30px]"
              />
            </div>
          ) : (
            <div
              className="relative w-[600px] h-[400px] bg-contain bg-no-repeat bg-center m-auto overflow-hidden"
              style={{ backgroundImage: "url(" + desktop + ")" }}
            >
              <img
                src={data?.fullPageScreenshot?.screenshot?.data}
                alt="Desktop preview"
                className="absolute top-[3%] left-[14%] w-[72%] h-[57%] object-cover object-top rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
