import { ConfigProvider, Popover } from "antd";
import Comopnay from "./DropdownLayout/Comopnay";
import { ReactNode } from "react";
import ServicesLayout from "./DropdownLayout/ServicesLayout";

interface DropDownProps {
  nav: string;
  links: Array<{
    link: string;
    name: string;
    desc: string;
    logos: Array<string>;
  }>; // Corrected type
  children?: ReactNode; // Allow children
}

export default function DropDown({ nav, links, children }: DropDownProps) {
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
          nav === "Company" ? <Comopnay links={links} /> : <ServicesLayout links={links} />
        }
        trigger="hover"
      >
        {children} {/* Ensure children are rendered */}
      </Popover>
    </ConfigProvider>
  );
}
