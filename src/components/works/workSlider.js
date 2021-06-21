import React from "react";

// slick imports
import Slider from "react-slick/lib";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import "./works.css";
const WorkSlider = ({ data, subTitle, category }) => {
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

  const Card = ({ name, pic }) => {
    return (
      <div
        className="work  d-flex flex-column align-items-center "
        style={{
          position: "relative",
          height: 300,
          width: 230,
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <div className="cardImage">
          <img
            src={pic}
            style={{
              width: 300,
              height: 230,
              objectFit: "cover",
            }}
            alt="pic"
          />
        </div>
        <div
          style={{
            position: "absolute",
            width: 300,
            height: 230,
            backgroundImage:
              " linear-gradient(to bottom, rgba(0,0,0,0), black)",
          }}
          className="d-flex flex-column justify-content-end align-items-center"
        >
          <h5
            style={{
              fontWeight: "bolder",
              color: "white",
            }}
            className="workTitle"
          >
            {name}
          </h5>
          <div
            style={{
              height: 3,
              background: "orange",
              borderRadius: 40,
            }}
            className="workLine"
          />
        </div>
      </div>
    );
  };
  return (
    <div className="d-flex justify-content-center  flex-column align-items-center ">
      <div className="col-lg-8 col-md-10">
        <div className="mt-5">
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
                color: "white",
                margin: "0px 0 10px  ",
                textAlign: "left",
                width: "100%",
              }}
            >
              {subTitle}
            </h3>
          </div>
        </div>
        <Slider {...settings}>
          {data
            .filter((item) => item.category === category)
            .map((item) => (
              <Card name={item.name} pic={item.image} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default WorkSlider;
