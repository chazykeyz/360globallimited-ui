import React from "react";

import SingleSlider from "../../components/slider/singleSlider";
import About from "../../components/about";
import Services from "../../components/services";
import Works from "../../components/works";
import Gallery from "../../components/gallery";
import Clients from "../../components/client";
import Events from "../../components/events";

const Home = () => {
  return (
    <div>
      <SingleSlider />
      <About />
      <Services />
      <Works />
      <Events />

      <Gallery />
      <Clients />
      {/* contact */}
      <div
        className="d-flex flex-column align-items-center justify-content-center"
        style={{
          padding: "30px 0 70px",
        }}
      >
        <div
          style={{
            height: 3,
            width: 40,
            background: "orange",
            marginTop: 10,
            borderRadius: 40,
          }}
        />
        <h4>
          <b>Do you have a project you would like us to work on?</b>
        </h4>
        <h1
          style={{
            fontWeight: "bolder",
          }}
        >
          <b>Let’s work,</b>{" "}
          <a
            href="tel: +255787064145"
            style={{
              textDecoration: "none",
              color: "orange",
              fontWeight: "bolder",
            }}
          >
            together!
          </a>
        </h1>
        <h3>
          <b>+255 787 064 145</b>
        </h3>
        <div>
          <a
            href="tel:+255787064145"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <div
              style={{
                padding: 10,
                background: "orange",
              }}
            >
              <b>Brief Us</b>
            </div>
          </a>
        </div>
      </div>
      {/* contact */}
    </div>
  );
};

export default Home;
