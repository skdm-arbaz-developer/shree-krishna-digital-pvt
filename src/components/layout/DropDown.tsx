import { ConfigProvider, Popover } from "antd";
import Comopnay from "./DropdownLayout/Comopnay";
import ServicesLayout from "./DropdownLayout/ServicesLayout";


export default function DropDown({ nav, desc, links, children }: any) {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadiusLG: 0,
          borderRadiusXS: 0,
        },
      }}
    >
      <Popover
        style={{ borderRadius: 0 }}
        arrow={false}
        placement={nav === "Company" ? "bottomLeft" : "bottom"}
        content={
          nav === "Company" ? <Comopnay links={links} /> : <ServicesLayout name={nav} desc={desc} links={links} />
        }
        trigger="hover"
      >
        {children} {/* Ensure children are rendered */}
      </Popover>
    </ConfigProvider>
  );
}
