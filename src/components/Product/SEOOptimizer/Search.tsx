import { Button, ConfigProvider, Form, Input, Radio } from "antd";
import { useEffect, useState } from "react";
import { FaDesktop, FaMobileScreenButton } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Search({ handleSubmit, loading, form }: any) {
  const options = [
    { label: "Desktop", value: "desktop", icon: <FaDesktop /> },
    { label: "Mobile", value: "mobile", icon: <FaMobileScreenButton /> },
  ];

  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ConfigProvider
      theme={{
        components: {
          Radio: {
            buttonSolidCheckedActiveBg: "#e98c14",
            buttonSolidCheckedBg: "#e98c14",
            buttonSolidCheckedHoverBg: "#e98c14",
          },
        },
        token: {
          colorPrimary: "#e98c14",
        },
      }}
    >
      <div className="search_panel">
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <div className="grid grid-cols-12 gap-5">
            <Form.Item
              style={{ margin: 0, padding: 0 }}
              className="col-span-4 p-0 m-0"
              rules={[{ required: true }]}
              name="strategy"
            >
              <Radio.Group
                block
                options={options.map((val) => ({
                  ...val,
                  value: val?.value,
                  label: (
                    <div className="flex items-center">
                      {val?.icon}&nbsp;{val?.label}
                    </div>
                  ),
                }))}
                buttonStyle="solid"
                optionType="button"
              />
            </Form.Item>
            <Form.Item
              style={{ margin: 0, padding: 0 }}
              rules={[{ required: true }, { type: "url" }]}
              name="url"
              label="Analyze a URL"
              className="p-0 m-0 col-span-12 lg:col-span-9"
            >
              <Input className="formInput" placeholder="Enter a Web Page URL" />
            </Form.Item>

            <Form.Item
              style={{ margin: 0, padding: 0 }}
              className="p-0 m-0 col-span-12 lg:col-span-3"
              label={size?.width < 990 ? "" : " "}
            >
              <Button
                htmlType="submit"
                className="comman-button"
                style={{
                  borderRadius: 5,
                  background: "var(--primary-color)",
                  color: "#fff",
                }}
                loading={loading}
              >
                Analyze <HiMagnifyingGlass />
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
}
