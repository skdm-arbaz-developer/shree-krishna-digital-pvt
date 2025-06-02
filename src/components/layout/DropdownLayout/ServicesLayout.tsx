import { Divider } from "antd";
import { FaBusinessTime } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { NavLink } from "react-router-dom";

interface DropDownProps {
  desc: string;
  name: string;
  links: Array<{
    link: string;
    name: string;
    desc: string;
    logos: Array<string>;
  }>; // Corrected type
}

export default function ServicesLayout({ name, desc, links }: DropDownProps) {
  return (
    <div className="container mx-auto px-0 sm:px-5 xl:px-0 dropdown-style">
      <div className="service_desc flex">
        {name === "Services" ? (
          <GrServices style={{ color: "#fff" }} />
        ) : (
          <FaBusinessTime style={{ color: "#fff" }} />
        )}
        <p>{desc}</p>
      </div>
      <Divider />
      <div className="grid grid-cols-3 gap-2">
        {links.map((val, index) => (
          <NavLink key={index} to={val.link}>
            {val.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
