import React from "react";
import "./services.css";
// aos imports
import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";

const Services = () => {
  AOS.init({
    duration: 1000,
  });

  const Card = ({ title }) => {
    return (
      <div
        data-aos="zoom-in"
        id="services"
        className="carding m-2 d-flex flex-column align-items-center p-1"
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

        <div className="mt-3 ">
          <h5
            style={{
              fontWeight: "bolder",
              color: "#414141",
            }}
          >
            {title}
          </h5>
          <div>
            <div
              style={{
                height: 1,
                width: "100%",
                background: "rgba(0,0,0,.1)",
                marginTop: 10,
                borderRadius: 40,
              }}
            />
            <p>
              placeholder text commonly used to demonstrate the visual form of a
              document
            </p>
          </div>
          <div>
            <div
              className="btn btn-warning"
              style={{
                fontWeight: "bolder",
                borderRadius: 10,
              }}
            >
              Contact Us
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div
      class="d-flex flex-column align-items-center"
      style={{
        position: "relative",
      }}
    >
      <h1
        style={{
          fontWeight: "bolder",
          color: "gray",
          zIndex: 3,
        }}
        className="my-4"
      >
        Our Services
      </h1>
      <div
        className="d-flex flex-wrap justify-content-around col-md-8 mb-4 pb-3"
        style={{
          zIndex: 3,
        }}
      >
        <Card title="Communication Support" />
        <Card title="Consultation, Events and  Project" />
        <Card title="Brand Partnership or Sponsorship" />
        <Card title="Artist or Talent Bookings and Liaison" />
      </div>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: 0,
        }}
        className=" d-flex align-items-center justify-content-center"
      >
        <h1
          style={{
            fontWeight: "bolder",
            color: "gray",
            WebkitTextStroke: 1,
            WebkitTextStrokeColor: "gray",
            fontSize: 200,
            opacity: 0.1,
          }}
          className="mt-5"
        >
          Our Services
        </h1>
      </div>
    </div>
  );
};

export default Services;
