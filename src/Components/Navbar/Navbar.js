import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";
import NavLinkGroup from "./NavLinkGroup";
import ButtonGroup from "./ButtonGroup";

import "./Navbar.css";
const Navbar = () => {
  const [scroll, setScroll] = useState(window.scrollY);
  const prevScroll = useRef(0);
  const rightNav = useRef(null);

  const links = [
    {
      id: 1,
      path: "/",
      link: "home",
      dropDown: false,
    },
    {
      id: 2,
      path: "/programs",
      link: "programs",
      dropDown: true,
      dropLinks: [
        {
          id: "drop_1",
          path: "weightGain",
          link: "weight gain",
        },
        {
          id: "drop_2",
          path: "muscleGain",
          link: "muscle gain",
        },
      ],
    },
    {
      id: 3,
      path: "/membership",
      link: "membership",
      dropDown: false,
    },
    {
      id: 4,
      path: "/gallery",
      link: "gallery",
      dropDown: true,
      dropLinks: [
        {
          id: "drop_1",
          path: "building",
          link: "building",
        },
        {
          id: "drop_2",
          path: "equipments",
          link: "equipments",
        },
      ],
    },
    {
      id: 5,
      path: "/aboutUs",
      link: "about us",
      dropDown: false,
    },
    {
      id: 6,
      path: "/contactUs",
      link: "contact us",
      dropDown: true,
      dropLinks: [
        {
          id: "drop_1",
          path: "franchise",
          link: "franchise",
        },
        {
          id: "drop_2",
          path: "advertise",
          link: "advertise",
        },
      ],
    },
  ];

  const location = useLocation();

  const handleWindowScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => {
      window.removeEventListener("scroll", handleWindowScroll);
    };
  }, []);

  useEffect(() => {
    prevScroll.current = scroll;
  }, [scroll]);

  return (
    <nav
      className="nav-container"
      style={{
        top: scroll > 200 && scroll > prevScroll.current ? "-15%" : "0%",
        backgroundColor: scroll > 200 ? "black" : "black",
        boxShadow: scroll > 200 ? "0 0 12px 0px #141414" : "",
      }}
    >
      <div className="top-nav">
        <Logo />
        <div
          ref={rightNav}
          className="right-nav"
          onMouseEnter={(e) => {
            let rect = rightNav.current.getBoundingClientRect();
            if (e.clientX > rect.left && e.clientX < rect.left + 150) {
              rightNav.current.scrollLeft = 0;
            } else if (e.clientX < rect.right && e.clientX > rect.right - 150) {
              rightNav.current.scrollLeft = 400;
            }
          }}
        >
          <div className={"nav-link-group"}>
            {links.map((value, index) => {
              return (
                <NavLinkGroup
                  currentLink={location.pathname}
                  value={value}
                  className={"nav-link-group"}
                />
              );
            })}
          </div>
          <ButtonGroup />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
