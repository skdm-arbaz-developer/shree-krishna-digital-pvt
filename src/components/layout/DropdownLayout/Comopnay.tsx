import { Divider } from "antd";
import { NavLink } from "react-router-dom";

interface DropDownProps {
  links: Array<{
    link: string;
    name: string;
    desc: string;
    logos: Array<string>;
  }>; // Corrected type
}

export default function Comopnay({ links }: DropDownProps) {
  const firstRow = ["About Us", "Our Team", "Why Choose Us"];
  const secondRow = ["News", "Case Study", "Privacy Policy", "Events"];
  const thirdRow = ["Partnership"];

  return (
    <div className="container mx-auto dropdown-style">
      <div className="grid grid-flow-col gap-4">
        <div className="row-span-3">
          <ul style={{ maxWidth: 300 }}>
            {links
              ?.filter((val) => firstRow.includes(val.name))
              ?.map((val, index) => (
                <li key={index} className="para">
                  <NavLink to={val.link}>{val.name}</NavLink>
                  <p>{val?.desc}</p>
                </li>
              ))}
          </ul>
        </div>
        <div className="col-span-2">
          <ul>
            {links
              ?.filter((val) => secondRow.includes(val.name))
              ?.map((val, index) => (
                <li key={index}>
                  <NavLink to={val.link}>{val.name}</NavLink>
                </li>
              ))}
          </ul>

          <Divider />

          {links
            ?.filter((val) => thirdRow.includes(val.name))
            ?.map((val, index) => (
              <>
                <NavLink key={index} to={val.link}>
                  {val.name}
                </NavLink>
                <p>{val.desc}</p>
                <div className="grid grid-cols-3 gap-4 partnerLogos">
                  {val?.logos?.map((val, index) => (
                    <img key={index} src={val} />
                  ))}
                </div>
              </>
            ))}
        </div>
      </div>
    </div>
  );
}
