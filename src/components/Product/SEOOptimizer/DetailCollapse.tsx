import React from "react";
import { Collapse, Image, Table } from "antd";

const DetailCollapse = ({ data, status }: any) => {
  const panelStyle: React.CSSProperties = {
    marginBottom: 10,
    background: "transparent",
    borderRadius: "unset",
    borderBottom: ".5px solid #808080",
  };

  const getScoreClass = (s: number) => {
    if (s >= 0.9) return "success"; // 90-100
    if (s >= 0.5) return "warning"; // 50-89
    return "error"; // 0-49
  };

  interface DataType {
    key: string;
    totalBytes: number;
    url: string;
    wastedBytes: number;
    wastedPercent: number;
    node: object;
  }

  function bytesToKB(bytes: number): string {
    if (!bytes || isNaN(bytes)) return "0 KB";
    return `${(bytes / 1024).toFixed(2)} KB`;
  }

  return (
    data?.details &&
    (status === "failed"
      ? data?.score < 0.9
      : status === "passed"
      ? data?.score > 0.9
      : data?.score === null) && (
      <Collapse
        bordered={false}
        expandIconPosition="right"
        style={{ background: "transparent", borderRadius: "unset" }}
        items={[
          {
            key: "1",
            label: (
              <div
                className="text-gray-950 flex items-center"
                style={{ fontSize: ".9rem" }}
              >
                <span className={`${getScoreClass(data?.score)} shape`}></span>
                {data?.title}
                {data?.displayValue ? (
                  <span
                    style={{ fontSize: ".8rem" }}
                    className={`${getScoreClass(data?.score)} text`}
                  >
                    &nbsp;- {data?.displayValue}
                  </span>
                ) : (
                  ""
                )}
              </div>
            ),
            children: (
              <>
                <div
                  dangerouslySetInnerHTML={{ __html: data?.description }}
                ></div>
                {data?.details?.headings && (
                  <Table<DataType>
                    pagination={false}
                    className="mt-5"
                    columns={data?.details?.headings?.map((val: any) => ({
                      title: val?.label ?? "",
                      dataIndex: val?.key,
                      render: (text: any, rowData: any) => {
                        if (
                          val?.key === "totalBytes" ||
                          val?.key === "wastedBytes"
                        ) {
                          return bytesToKB(text);
                        } else if (val?.key === "node") {
                          return (
                            <div className="flex gap-2 items-center">
                              <Image
                                className="max-w-[80px]"
                                src={rowData?.url}
                              />
                              <div className="detail mx-2">
                                <span>{rowData?.node?.selector}</span>
                                <h5
                                  style={{ fontSize: ".8rem" }}
                                  className="text-blue-400"
                                >
                                  {rowData?.node?.snippet}
                                </h5>
                              </div>
                            </div>
                          );
                        }
                        return typeof text === "number"
                          ? text.toFixed(2)
                          : text;
                      },
                    }))}
                    dataSource={data?.details?.items}
                  />
                )}
              </>
            ),
            style: panelStyle,
          },
        ]}
      />
    )
  );
};

export default DetailCollapse;
