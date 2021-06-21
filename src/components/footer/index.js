import React from "react";
import { Link } from "react-scroll";

import "./footer.css";

import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="py-5 px-3 text-white d-flex flex-column align-items-center"
      style={{
        background: "black",
        position: "relative",
      }}
    >
      <div className="col-md-8  d-flex justify-content-between flex-wrap">
        <div className="d-flex flex-column align-items-start col-md-6">
          <img src="whiteLogo.png" height="100" alt="logo" />
          <div>
            <h1
              style={{
                textAlign: "left",
                fontWeight: "bolder",
              }}
            >
              HEADQUARTERS
            </h1>
            <p
              style={{
                textAlign: "left",
                fontWeight: "bolder",
                margin: 0,
              }}
            >
              <b>Swala Street, Plot No.45, House No.6, Mikocheni B</b>
            </p>
            <p
              style={{
                textAlign: "left",
                fontWeight: "bolder",
              }}
            >
              <b>Dar es Salaam, Tanzania.</b>
            </p>
          </div>

          <b>
            <a
              href="mailto:info@360globallimited.com"
              style={{
                textDecoration: "none",
              }}
              className="link"
            >
              info@360globallimited.com
            </a>
          </b>
        </div>
        <div className="col-md-6 d-flex justify-content-end ">
          <div>
            <h4
              style={{
                textAlign: "left",
                fontWeight: "bolder",
              }}
            >
              LINKS
            </h4>
            <div className="d-flex flex-column col-12 align-items-start">
              <Link
                to="home"
                duration={500}
                smooth={true}
                offset={-70}
                className="link"
                style={{
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                HOME
              </Link>
              <Link
                to="about"
                duration={500}
                smooth={true}
                offset={-70}
                className="link"
                style={{
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                ABOUT
              </Link>
              <Link
                to="services"
                duration={500}
                smooth={true}
                offset={-70}
                className="link"
                style={{
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                SERVICES
              </Link>
              <Link
                to="works"
                duration={500}
                smooth={true}
                offset={-70}
                className="link"
                style={{
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                WORKS
              </Link>
              <Link
                to="events"
                duration={500}
                smooth={true}
                offset={-70}
                className="link"
                style={{
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                EVENTS
              </Link>
              <Link
                to="gallery"
                duration={500}
                smooth={true}
                offset={-70}
                className="link"
                style={{
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                GALLERY
              </Link>
              <Link
                to="clients"
                duration={500}
                smooth={true}
                offset={-70}
                className="link"
                style={{
                  fontWeight: "bolder",
                  textDecoration: "none",
                }}
              >
                CLIENT
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex ">
        <a href="/" className="link">
          <FaFacebook size={24} className="mx-1" />
        </a>
        <a href="/" className="link">
          <AiOutlineTwitter size={27} className="mx-1" />
        </a>
        <a href="/" className="link">
          <AiFillInstagram size={27} className="mx-1" />
        </a>
        <a href="/" className="link">
          <FaLinkedin size={24} className="mx-1" />
        </a>
      </div>
      <div
        style={{
          height: 3,
          width: 40,
          background: "orange",
          marginTop: 20,
        }}
      />
    </div>
  );
};

export default Footer;
