import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsChevronDown } from "react-icons/all";
import "./NavDropdown/Dropdown.css";
import Dropdown from "./NavDropdown/Dropdown";

const NavLinkGroup = (props) => {
  const value = props.value;
  const [dropDown, setdropDown] = useState(false);
  return (
    <div className='ttee'>
      <div className="drop-link-div" onMouseOver={() => setdropDown(!dropDown)}>
        {value.dropDown ? <BsChevronDown className="drop-link-icon" /> : null}
        <Link
          to={value.path}
          id={props.currentLink === value.path ? "nav-link-active" : ""}
        >
          {value.link}
        </Link>
      </div>
      {value.dropLinks ? (
        <div>{dropDown ? <Dropdown dropLinks={value.dropLinks} /> : null}</div>
      ) : null}
    </div>
  );
};

export default NavLinkGroup;
