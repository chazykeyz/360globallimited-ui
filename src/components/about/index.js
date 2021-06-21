import React from "react";
import "./about.css";
const About = () => {
  return (
    <div
      className="about d-flex flex-column align-items-center "
      id="about"
      style={{
        padding: "100px 0",
      }}
    >
      <div className=" d-flex  align-items-center justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="d-flex flex-column align-items-center">
            <h1
              style={{
                fontWeight: "bolder",
                color: "white",
              }}
            >
              About Us
            </h1>
            <p className="text-light" style={{}}>
              <b>360 global limited</b> is an events and projects executive{" "}
              <b>Guru</b> (Entertainment industry business expert and
              consultant) corperate and products launch creative expert. We
              leverage our media and Entertainment expertise to create starts,
              connect audience and communicate crafted message in unique ways,
              priding ourselves in spotlighting, nurturing and developing
              genuine talents, unique experiences and authenticity. We provides
              quality pre services with a focus on highlighting African
              achievement through the robust art, culture entertainment and
              media scene. We offer consultational and social media support
              because we understand that both strategic consultation and social
              media is vital in increasing brand awareness and building customer
              loyality and engagement
            </p>
            <div
              style={{
                height: 3,
                width: 40,
                background: "orange",
              }}
            />
          </div>
          <div
            style={{
              height: 1,
              width: "100%",
              background: "rgba(255,255,255,.1)",
            }}
            className="my-4"
          />
          <div className="d-flex flex-column align-items-center">
            <h1
              style={{
                fontWeight: "bolder",
                color: "white",
              }}
            >
              Our Values
            </h1>
            <p className="text-light">
              We are experts in identifying and creating authentic stories which
              in turn we morph into narratives with longevity. We are connected
              to audiences across the continent in unique ways. We are
              passionate, daring and results-driven who always ensure that the
              job is done , a creative and always love to collaborate with
              clients. We enact different strategies for each market not only to
              ensure efficient but because we understand the value of influence,
              and localizing content to server a market or an audience
            </p>
            <div
              style={{
                height: 3,
                width: 40,
                background: "orange",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
