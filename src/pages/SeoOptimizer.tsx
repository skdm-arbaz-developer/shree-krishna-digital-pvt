import { useEffect, useRef, useState } from "react";
import Banner from "../components/Product/SEOOptimizer/Banner";
import Report from "../components/Product/SEOOptimizer/Report";
import "../css/products/seoOptimizer.css";
import { Empty, Form, Spin } from "antd";
import axios from "axios";
import { getData, storeData } from "../services/StorageControl";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function SeoOptimizer() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = async (value: any) => {
    try {
      setLoading(true);
      const resp = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${value.url}&key=AIzaSyByLlzaSbLi-04zve63rrjxK5RE4EKRK3Y&strategy=${value?.strategy}&category=performance&category=accessibility&category=best-practices&category=seo`
      );

      setData(resp?.data?.lighthouseResult);
      storeData({
        name: "seoData",
        data: resp?.data?.lighthouseResult,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { data } = getData({ name: "seoData" });
    if (data && data.length !== 0) {
      setData(data);
      form.setFieldsValue({
        url: data?.requestedUrl,
        strategy: data?.configSettings?.formFactor,
      });
    }
  }, []);

  const printRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    if (!element) return;

    console.log(element)

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL("image/png");

    console.log(imgData)

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "px",
      format: [canvas.width, canvas.height],
    });

    pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
    pdf.save("download.pdf");
  };

  return (
    <>
      <Banner form={form} handleSubmit={handleSubmit} loading={loading} />
      {data ? (
        <Spin spinning={loading}>
          <Report printRef={printRef} handleDownloadPdf={handleDownloadPdf} data={data} />
        </Spin>
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
