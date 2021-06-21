import React from "react";

// slick imports
import Slider from "react-slick/lib";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

const EventSlider = ({ title, data, category }) => {
  const settings = {
    arrows: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const Card = ({ name, year }) => {
    return (
      <div className=" m-2 d-flex flex-column align-items-center p-1">
        <div
          style={{
            height: 40,
            width: 3,
            background: "orange",
            borderRadius: 40,
          }}
        />
        <div className="mt-1">
          <div>
            <div>
              <div
                className="btn btn-warning text-light"
                style={{
                  fontWeight: "bolder",
                }}
              >
                {year}
              </div>
            </div>
            <h5
              style={{
                fontWeight: "bolder",
                color: "#414141",
              }}
            >
              {name}
            </h5>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex justify-content-center  flex-column align-items-center ">
      <div
        className="col-lg-8 col-md-10"
        style={{
          position: "relative",
        }}
      >
        <div className="mt-5">
          {title && (
            <div>
              <div
                style={{
                  height: 3,
                  width: 40,
                  background: "orange",
                  borderRadius: 40,
                }}
              />
              <h3
                style={{
                  fontWeight: "bolder",
                  color: "gray",
                  margin: "0px 0 0px ",
                  textAlign: "left",
                  width: "100%",
                }}
              >
                {title}
              </h3>
            </div>
          )}
        </div>
        <div
          style={{
            height: 3,
            width: "100%",
            background: "rgba(0,0,0,.2",
            position: "absolute",
            marginTop: 30,
          }}
        />
        <Slider {...settings}>
          {data
            .filter((item) => item.category === category)
            .map((item) => (
              <Card name={item.name} year={item.year} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default EventSlider;
