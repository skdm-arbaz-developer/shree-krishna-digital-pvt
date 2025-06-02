import { FaAngleRight } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function ServiceViewSideBar({ aboutCountry, data }: any) {
  return (
    <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
      <aside className="sidebar blog-sidebar">
        <div className="sidebar-widget services">
          <div className="widget-inner">
            <div className="sidebar-title">
              <h4>All Services</h4>
            </div>
            <ul>
              {aboutCountry?.services?.map((val: any, index: any) => (
                <li
                  className={data?.link === val?.link ? "active" : ""}
                  key={index}
                >
                  <NavLink
                    to={val?.link}
                    className="flex flex-row items-center justify-between"
                  >
                    <span>{val?.title}</span>
                    <FaAngleRight />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="sidebar-widget call-up">
          <div className="widget-inner">
            <div className="sidebar-title">
              <h4>need Linoor help?</h4>
            </div>
            <div className="text">
              Prefer speaking with a human to filling out a form? call corporate
              office and we will connect you with a team member who can help.
            </div>
            <div className="phone">
              <NavLink
                to="tel:+917021390953"
                className="flex items-center text-xl"
              >
                <IoCall style={{ marginRight: 10 }} />
                +91 70213 90953
              </NavLink>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
