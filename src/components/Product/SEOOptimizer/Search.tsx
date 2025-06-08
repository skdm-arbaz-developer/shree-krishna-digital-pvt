import { Button, ConfigProvider, Form, Input, Radio } from "antd";
import { FaDesktop, FaMobileScreenButton } from "react-icons/fa6";
import { HiMagnifyingGlass } from "react-icons/hi2";

export default function Search({ handleSubmit, loading }: any) {
  const options = [
    { label: "Desktop", value: "desktop", icon: <FaDesktop /> },
    { label: "Mobile", value: "mobile", icon: <FaMobileScreenButton /> },
  ];

  const [form] = Form.useForm();

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
              className="p-0 m-0 col-span-9"
            >
              <Input className="formInput" placeholder="Enter a Web Page URL" />
            </Form.Item>

            <Form.Item
              style={{ margin: 0, padding: 0 }}
              className="p-0 m-0 col-span-3"
              label=" "
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
