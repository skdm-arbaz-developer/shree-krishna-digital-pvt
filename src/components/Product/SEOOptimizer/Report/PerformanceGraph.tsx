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

  const indicator = [
    {
      status: "error",
      value: "0-49",
    },
    {
      status: "warning",
      value: "50–89",
    },
    {
      status: "success",
      value: "90–100",
    },
  ];

  const images = data?.audits?.["screenshot-thumbnails"]?.details?.items;

  return (
    <div className="performance-graph">
      <div className="grid grid-cols-12">
        <div className="graph col-span-12 lg:col-span-5 order-2 lg:order-1">
          <GaugeChart value={overAllRank()} type="grade" />
          <div className="otherGraphs">
            <div className="grid grid-cols-2 lg:grid-cols-4">
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

          <div className="indicator w-full justify-around items-center mt-5">
            {indicator.map((val: any, index: number) => (
              <div className={`flex items-center`} key={index}>
                <span className={`${val?.status} shape`}></span>
                <p>{val?.value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="preview col-span-12 lg:col-span-7 mt-10 lg:mt-0 order-1 lg:order-2">
          {data?.configSettings?.emulatedFormFactor !== "desktop" ? (
            <div
              className="relative w-[300px] h-[500px] bg-contain bg-no-repeat bg-center m-auto overflow-hidden"
              style={{ backgroundImage: "url(" + phone + ")" }}
            >
              <img
                src={images[images?.length - 1]?.data}
                alt="Phone preview"
                className="absolute top-[2%] left-[12.5%] w-[75%] h-[95%] object-cover object-top rounded-[30px]"
              />
            </div>
          ) : (
            <div
              className="relative w-[400px] h-[300px] md:w-[600px] md:h-[400px] bg-contain bg-no-repeat bg-center m-auto overflow-hidden"
              style={{ backgroundImage: "url(" + desktop + ")" }}
            >
              <img
                src={images[images?.length - 1]?.data}
                alt="Desktop preview"
                className="absolute top-[3%] left-[10%] md:left-[14%] w-[80%] h-[57%] md:w-[72%] md:h-[57%] object-cover object-top rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
