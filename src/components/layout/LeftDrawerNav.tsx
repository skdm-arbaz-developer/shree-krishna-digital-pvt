import { Button, Collapse, Divider, Drawer, List } from "antd";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
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
import { BsWhatsapp } from "react-icons/bs";
import "../../css/contactus.css";

export default function LeftDrawerNav() {
  const [open, setOpen] = useState(false);
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
      <span className="toggle-button xl:hidden block" onClick={showDrawer}>
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
      </span>

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
                src={logo}
                alt="logo"
              />
              <div>
                <h2 className="text-xl header-drawer-nav-link">
                  Shree Krishna Digital
                </h2>
                <p className="header-drawer-nav-link">
                  Solutions Private Limited
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
                <NavLink
                  target="_blank"
                  to="https://www.facebook.com/shree.krishnadigitalsolutions/"
                  className="icon"
                >
                  <FaFacebook />
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  to="https://www.linkedin.com/company/shree-krishna-digital-marketing/?originalSubdomain=in"
                  className="icon"
                >
                  <FaLinkedin />
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  to="https://www.instagram.com/shreekrishna_digitalsolutions/"
                  className="icon"
                >
                  <FaInstagram />
                </NavLink>
              </li>
              <li>
                <NavLink
                  target="_blank"
                  to="https://api.whatsapp.com/send/?phone=%2B917021390953&text=Hello%2C%20I%27m%20interested%20in%20your%20digital%20marketing%20services.%20Please%20share%20more%20details%20about%20how%20you%20can%20help%20grow%20my%20business%20online.&type=phone_number&app_absent=0"
                  className="icon"
                >
                  <BsWhatsapp />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Drawer>
    </>
  );
}
