import { Divider } from "antd";
import { GrServices } from "react-icons/gr";
import { NavLink } from "react-router-dom";

interface DropDownProps {
  links: Array<{
    link: string;
    name: string;
    desc: string;
    logos: Array<string>;
  }>; // Corrected type
}

export default function ServicesLayout({ links }: DropDownProps) {
  return (
    <div className="container mx-auto dropdown-style">
      <div className="service_desc flex">
        <GrServices />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia,
          animi illum earum quos explicabo, ratione quasi libero facere soluta
          vero ut! Magni consequuntur quisquam quos aliquid ea repudiandae.
          Eius, nesciunt.
        </p>
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
