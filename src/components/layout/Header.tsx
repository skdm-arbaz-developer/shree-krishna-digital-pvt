import "../../css/layout/Header.css";
import logo from "../../assets/images/logo.png";
import logoWhite from "../../assets/images/logo-white.png";
import { NavLink } from "react-router-dom";
import ModeControl from "../support/ModeControl";
import { useTheme } from "../../context/ThemeContext";
import DropDown from "./DropDown";
import LeftDrawerNav from "./LeftDrawerNav";
import EnquiryForm from "../Modal/EnquiryForm";
import NavigationLinks from "../support/NavigationLinks";
import { Dropdown, Space } from "antd";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header className="header-css">
      <div className="container mx-auto flex flex-wrap flex-row items-center">
        <LeftDrawerNav />
        <NavLink to="/" className="logo">
          <img
            alt="Shree Krishna Digital"
            src={theme === "dark" ? logoWhite : logo}
          />
        </NavLink>
        <nav className="nav-links lg:flex hidden">
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
                <DropDown key={index} desc={val.desc} nav={val.name} links={val.link}>
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
          <ModeControl />
          <EnquiryForm />
        </div>
      </div>
    </header>
  );
}
