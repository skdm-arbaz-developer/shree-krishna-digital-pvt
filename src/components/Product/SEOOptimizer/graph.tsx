// GaugeChart.tsx
import React, { useEffect, useRef } from "react";
import ReactECharts from "echarts-for-react";

type GaugeType = "grade" | "ring";

type GaugeChartProps = {
  type?: GaugeType; // 'grade' (half) or 'ring' (full)
  value: number;
};

const GaugeChart: React.FC<GaugeChartProps> = ({ type = "grade", value }) => {
  const chartRef = useRef<any>(null);

  useEffect(() => {
    const handleResize = () => {
      chartRef.current?.getEchartsInstance().resize();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const option = {
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        center: ["50%", "75%"],
        radius: "90%",
        min: 0,
        max: 100,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 6,
            color: [
              [0.25, "#FF6E76"],
              [0.5, "#FDDD60"],
              [0.75, "#58D9F9"],
              [1, "#228B22"],
            ],
          },
        },
        pointer: {
          icon: "path://M12.8,0.7l12,40.1H0.7L12.8,0.7z",
          length: "12%",
          width: 20,
          offsetCenter: [0, "-60%"],
          itemStyle: {
            color: "auto",
          },
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: "auto",
            width: 2,
          },
        },
        splitLine: {
          length: 20,
          lineStyle: {
            color: "auto",
            width: 5,
          },
        },
        axisLabel: {
          color: "#464646",
          fontSize: 20,
          distance: -60,
          rotate: "tangential",
          formatter: function (value: number) {
            if (value === 87.5) {
              return "Excellent";
            } else if (value === 62.5) {
              return "Good";
            } else if (value === 37.5) {
              return "Basic";
            } else if (value === 12.5) {
              return "Bad";
            }
            return "";
          },
        },
        title: {
          offsetCenter: [0, "-10%"],
          fontSize: 20,
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, "-35%"],
          valueAnimation: true,
          formatter: function (value: number) {
            return value + "%";
          },
          color: "inherit",
        },
        data: [
          {
            value: value,
            name: "Website Rank",
          },
        ],
      },
    ],
  };

  const getColorByValue = (value: number) => {
    if (value >= 90) return "#228B22"; // Green
    if (value >= 50) return "#fa3"; // Orange
    return "#FF6E76"; // Red
  };

  const optionRing = {
    series: [
      {
        type: "gauge",
        startAngle: 90,
        endAngle: -270,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          overlap: false,
          roundCap: true,
          clip: false,
          itemStyle: {
            color: getColorByValue(value), // ✅ use color instead of borderColor
          },
        },
        axisLine: {
          lineStyle: {
            width: 6,
            color: [[1, "#E6E6E6"]], // ✅ light background ring
          },
        },
        splitLine: { show: false },
        axisTick: { show: false },
        axisLabel: { show: false },
        data: [
          {
            value: value,
            name: "",
            title: {
              offsetCenter: ["0%", "0%"],
            },
            detail: {
              valueAnimation: true,
              offsetCenter: ["0%", "0%"],
            },
          },
        ],
        title: {
          fontSize: 14,
        },
        detail: {
          width: 50,
          height: 50,
          fontSize: 16,
          color: getColorByValue(value),
          formatter: "{value}%",
        },
      },
    ],
  };

  return type === "ring" ? (
    <ReactECharts
      ref={chartRef}
      option={optionRing}
      opts={{ renderer: "svg" }} // or 'canvas'
      style={{ width: "100px", height: "100px" }}
    />
  ) : (
    <div style={{ width: "100%", height: "300px" }}>
      <ReactECharts
        ref={chartRef}
        option={option}
        opts={{ renderer: "canvas" }} // or 'canvas'
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default GaugeChart;
