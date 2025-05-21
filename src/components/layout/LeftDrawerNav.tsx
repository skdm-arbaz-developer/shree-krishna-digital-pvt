import { Button, Collapse, Divider, Drawer, List } from "antd";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import whiteLogo from "../../assets/images/logo-white.png";
import { GrClose } from "react-icons/gr";
import NavigationLinks from "../support/NavigationLinks";
import { NavLink, useLocation } from "react-router-dom";
import "../../css/layout/Header.css";
import {
  FaAngleDown,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { useTheme } from "../../context/ThemeContext";
import { BsYoutube } from "react-icons/bs";
import "../../css/contactus.css";

export default function LeftDrawerNav() {
  const [open, setOpen] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <>
      <button className="toggle-button lg:hidden block" onClick={showDrawer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <Drawer
        title=""
        placement={"left"}
        width={500}
        closable={false}
        onClose={onClose}
        open={open}
        key={"left"}
        className="left-drawer-nav"
      >
        <div className="sidebar">
          <div className="sidebar-header flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                className="w-20"
                src={theme === "dark" ? whiteLogo : logo}
                alt="logo"
              />
              <div>
                <h2 className="text-xl header-drawer-nav-link">
                  Shree Krishna Digital
                </h2>
                <p className="header-drawer-nav-link">
                  Solution Private Limited
                </p>
              </div>
            </div>
            <Button
              onClick={onClose}
              icon={<GrClose style={{ color: "#fff" }} />}
              style={{
                background: "red",
                borderRadius: "100px",
                width: 35,
                height: 35,
                boxShadow: "unset",
              }}
            />
          </div>
          <Divider />
          <List
            dataSource={NavigationLinks}
            renderItem={(item) => (
              <List.Item className="sidebar-list-item">
                {Array.isArray(item?.link) ? (
                  <Collapse
                    bordered={false}
                    expandIcon={({ isActive }) => (
                      <FaAngleDown
                        className="angle-down"
                        rotate={isActive ? 90 : 0}
                      />
                    )}
                    defaultActiveKey={["1"]}
                    style={{ padding: 0, width: "100%" }}
                    key={item?.name}
                    expandIconPosition="right"
                    items={[
                      {
                        label: (
                          <div className="collapse-text">
                            {item?.prefix}{" "}
                            <h5 className="header-drawer-nav-link">
                              {item?.name}
                            </h5>
                          </div>
                        ),
                        children: (
                          <List>
                            {item?.link.map((val: any) => (
                              <List.Item>
                                <NavLink
                                  className="header-drawer-nav-link"
                                  to={val?.link}
                                >
                                  {val?.name}
                                </NavLink>
                              </List.Item>
                            ))}
                          </List>
                        ),
                      },
                    ]}
                  />
                ) : (
                  <List.Item.Meta
                    avatar={
                      <NavLink
                        to={item?.link}
                        className="header-drawer-nav-link flex items-center justify-center"
                      >
                        {item?.prefix}
                      </NavLink>
                    }
                    title={
                      <NavLink
                        to={item?.link}
                        className="header-drawer-nav-link"
                      >
                        {item?.name}
                      </NavLink>
                    }
                  />
                )}
              </List.Item>
            )}
          />
          <Divider />
          <div className="social-media">
            <h5 className="header-drawer-nav-link">Follow Us</h5>
            <ul>
              <li>
                <NavLink to="#" className="icon">
                  <FaFacebook />
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="icon">
                  <FaLinkedin />
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="icon">
                  <FaInstagram />
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className="icon">
                  <BsYoutube />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
}
