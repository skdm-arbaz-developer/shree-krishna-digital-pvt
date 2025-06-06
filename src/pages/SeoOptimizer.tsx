import { useState } from "react";
import Banner from "../components/Product/SEOOptimizer/Banner";
import Report from "../components/Product/SEOOptimizer/Report";
import "../css/products/seoOptimizer.css";
import { Empty } from "antd";
import axios from "axios";

export default function SeoOptimizer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (value: any) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${value.url}&key=AIzaSyByLlzaSbLi-04zve63rrjxK5RE4EKRK3Y&strategy=${value?.strategy}&category=performance&category=accessibility&category=best-practices&category=seo`
      );

      setData(resp?.data?.lighthouseResult);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Banner handleSubmit={handleSubmit} loading={loading} />
      {data ? (
        <Report data={data} />
      ) : (
        <div className="container mx-auto my-20 rounded-[20px] p-20 bg-[#eff5ff]">
          <Empty
            image={
              "https://foyr.com/learn/wp-content/uploads/2022/01/seo-for-interior-designers.jpg"
            }
            style={{ maxWidth: 500, margin: "auto" }}
            styles={{ image: { width: "100%", height: "300px" } }}
            description={
              <div>
                <h5 style={{ fontSize: "1.4rem" }}>No Report Searched Yet!</h5>
                <p>Search your URL to get your Website SEO report</p>
              </div>
            }
          />
        </div>
      )}
    </>
  );
}
