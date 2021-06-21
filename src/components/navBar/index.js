import React, { useEffect, useState } from "react";
// bootstrap imports
import { Navbar, Nav } from "react-bootstrap";
// react router import
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

import { FiBarChart2 } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import "./navBar.css";

const NavBar = () => {
  // fetching the logo data from API
  const [expanded, setExpanded] = useState(false);
  const [navScroll, setNavScroll] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY <= 100) {
        setNavScroll(false);
      } else {
        setNavScroll(true);
      }
    };
  }, []);

  return (
    <div>
      <Navbar
        expand="lg "
        className="text-white d-flex align-items-start pt-4"
        fixed="top"
        style={{
          height: !navScroll && 100,
          background: navScroll
            ? "black"
            : "linear-gradient(to bottom, rgba(0,0,0,.6), rgba(0,0,0,0))",
          transition: ".5s",
        }}
        expanded={expanded}
      >
        {/* logo */}
        <Navbar.Brand>
          <div
            style={{
              width: 65,
              objectFit: "cover",
              marginTop: -25,
              overflow: "hidden",
            }}
          >
            <NavLink to="/" onClick={() => setExpanded(false)}>
              <div>
                <img
                  src="goldLogo.png"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="d-inline-block align-top"
                  alt="360_global_limited_logo"
                />
              </div>
            </NavLink>
          </div>

          {/* /logo */}
        </Navbar.Brand>
        {!expanded ? (
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            <FiBarChart2 style={{ color: "white", fontSize: 30 }} />
          </Navbar.Toggle>
        ) : (
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            <IoMdClose style={{ color: "white", fontSize: 30 }} />
          </Navbar.Toggle>
        )}

        <Navbar.Collapse id="basic-navbar-nav bg-danger">
          <Nav className="mr-auto positioning d-flex justify-content-center align-items-center ">
            {/* home link */}
            <Link
              to="home"
              duration={500}
              smooth={true}
              offset={-70}
              onClick={() => {
                setExpanded(false);
              }}
            >
              <div
                className="d-flex align-items-center m-1 mx-3"
                style={{
                  fontSize: 13,
                  fontWeight: "bolder",
                }}
                activeClass="active"
              >
                HOME
              </div>
            </Link>

            {/* /home link */}
            {/* about Link */}
            <Link
              to="about"
              duration={500}
              smooth={true}
              offset={-70}
              onClick={() => setExpanded(false)}
            >
              <div
                className="d-flex align-items-center m-1 mx-3"
                style={{
                  fontSize: 13,
                  fontWeight: "bolder",
                }}
              >
                ABOUT US
              </div>
            </Link>

            {/* /about us link */}

            {/* services link */}
            <Link
              to="services"
              duration={500}
              smooth={true}
              offset={-170}
              onClick={() => setExpanded(false)}
            >
              <div
                className="d-flex align-items-center m-1 mx-3"
                style={{
                  fontSize: 13,
                  fontWeight: "bolder",
                }}
              >
                SERVICES
              </div>
            </Link>

            {/* /services link */}
            {/* people Link */}
            <Link
              to="works"
              duration={500}
              smooth={true}
              offset={-60}
              onClick={() => setExpanded(false)}
            >
              <div
                className="d-flex align-items-center m-1 mx-3"
                style={{
                  fontSize: 13,
                  fontWeight: "bolder",
                }}
              >
                WORKS
              </div>
            </Link>

            {/* /people us link */}
            {/* /works us link */}
            <Link
              to="events"
              duration={500}
              smooth={true}
              offset={-70}
              onClick={() => setExpanded(false)}
            >
              <div
                className="d-flex align-items-center m-1 mx-3"
                style={{
                  fontSize: 13,
                  fontWeight: "bolder",
                }}
              >
                EVENTS
              </div>
            </Link>

            {/* works Link */}
            <Link
              to="gallery"
              duration={500}
              smooth={true}
              offset={-50}
              onClick={() => setExpanded(false)}
            >
              <div
                className="d-flex align-items-center m-1 mx-3"
                style={{
                  fontSize: 13,
                  fontWeight: "bolder",
                }}
              >
                Gallery
              </div>
            </Link>

            {/* works Link */}
            <Link
              to="clients"
              duration={500}
              smooth={true}
              offset={-70}
              onClick={() => setExpanded(false)}
            >
              <div
                className="d-flex align-items-center m-1 mx-3"
                style={{
                  fontSize: 13,
                  fontWeight: "bolder",
                }}
              >
                Clients
              </div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
