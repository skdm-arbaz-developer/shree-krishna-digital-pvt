import "../../css/layout/Header.css";
import logo from "../../assets/images/logo.png";
import { NavLink, useLocation } from "react-router-dom";
import DropDown from "./DropDown";
import LeftDrawerNav from "./LeftDrawerNav";
import EnquiryForm from "../Modal/EnquiryForm";
import NavigationLinks from "../support/NavigationLinks";
import { Dropdown, Space } from "antd";
import { useEffect } from "react";

export default function Header() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [pathname]);

  return (
    <header className="header-css">
      <div className="container mx-auto px-0 sm:px-5 xl:px-0 flex flex-row items-center justify-between">
        <LeftDrawerNav />
        <NavLink to="/" className="logo">
          <img alt="Shree Krishna Digital" src={logo} />
        </NavLink>
        <nav className="nav-links xl:flex hidden">
          {NavigationLinks.map((val, index) =>
            val.icon ? (
              val.name === "PR & Advertising" ? (
                <Dropdown
                  menu={{
                    items: val?.link.map((valLink, index) => ({
                      key: index + 1,
                      label: (
                        <NavLink rel="noopener noreferrer" to={valLink?.link}>
                          {valLink?.name}
                        </NavLink>
                      ),
                    })),
                  }}
                >
                  <NavLink to={val?.link[0]?.link}>
                    <Space>
                      {val.name}
                      {val.icon}
                    </Space>
                  </NavLink>
                </Dropdown>
              ) : (
                <DropDown
                  key={index}
                  desc={val.desc}
                  nav={val.name}
                  links={val.link}
                >
                  <NavLink
                    className="active"
                    key={index}
                    to={Array.isArray(val.link) ? val.link[0].link : val.link}
                  >
                    {val.name}&nbsp;{val.icon}
                  </NavLink>
                </DropDown>
              )
            ) : (
              val.name !== "Home" && (
                <NavLink
                  className="active"
                  key={index}
                  to={Array.isArray(val.link) ? val.link[0].link : val.link}
                >
                  {val.name}&nbsp;{val.icon}
                </NavLink>
              )
            )
          )}
        </nav>
        <div className="right-layout text-center flex items-center">
          {/* <ModeControl /> */}
          <EnquiryForm />
        </div>
      </div>
    </header>
  );
}
