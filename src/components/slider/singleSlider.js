import React, { useState, useEffect } from "react";
// slick imports
import Slider from "react-slick/lib";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { galleryAPI } from "../../constant";

import "./singleSlider.css";
const SingleSlider = () => {
  //   react hooks
  const [beforeSlide, setBeforeSlide] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(galleryAPI).then((res) => {
        setData(res.data);
      });
    };
    dataFetch();
  }, []);

  const settings = {
    dots: false,
    infinity: true,
    beforeChange: () => {
      setBeforeSlide(true);
      setTimeout(() => {
        setBeforeSlide(false);
      }, 1000);
    },
    fade: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className=" m-0 p-0 "
      style={{
        overflow: "hidden",
        height: "auto",
      }}
      id="home"
    >
      <Slider {...settings} className="sliding">
        {data.map((item) => (
          <div>
            <div
              style={{
                position: "absolute",
                width: "100vw",
                height: "100vh",
                bottom: 0,
                background: "linear-gradient(to bottom, rgba(0,0,0,0),black)",
              }}
              className="d-flex flex-column justify-content-center "
            >
              <div className="col-5 text-light mx-4 ">
                {/* title */}
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <div style={{}}>
                    <h1
                      style={{
                        fontWeight: "bolder",
                        fontSize: 60,
                        textAlign: "left",
                      }}
                    >
                      360 Global Limited
                    </h1>
                  </div>
                </div>
                {/* title */}
                {/* first word */}
                <div
                  style={{
                    height: 70,
                    overflow: "hidden",
                  }}
                  on
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      textAlign: "left",
                      fontSize: 60,
                      transition: ".5s",

                      transitionTimingFunction: "ease-in",
                      transform: beforeSlide
                        ? "translateY(100px) "
                        : "translateY(0px)",
                    }}
                  >
                    Produces High Quality
                  </h1>
                </div>
                <div
                  style={{
                    height: 70,
                    overflow: "hidden",
                  }}
                >
                  <h1
                    style={{
                      fontWeight: "bolder",
                      textAlign: "left",
                      fontSize: 60,
                      transitionDelay: ".13s",
                      transitionTimingFunction: "ease-in",
                      transition: ".5s",

                      transform: beforeSlide
                        ? "translateY(100px) "
                        : "translateY(0px)",
                    }}
                  >
                    Service
                  </h1>
                </div>
                {/* /second word */}

                {/* small words */}
                <div
                  className="d-flex justify-content-start mt-3"
                  style={{
                    height: 40,
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="btn btn-warning"
                    style={{
                      opacity: beforeSlide ? 0 : 1,
                      transition: ".5s",
                      transitionDelay: ".26s",
                      fontWeight: "bolder",
                      borderRadius: 10,
                      transitionTimingFunction: "ease-in",
                      transform: beforeSlide
                        ? "translateY(100px) "
                        : "translateY(0px)",
                    }}
                  >
                    Discover More
                  </div>
                </div>
              </div>
            </div>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "100vh",
                width: "100vw",
              }}
            >
              <img
                src={item.image}
                alt="2"
                style={{
                  width: beforeSlide ? "70%" : "100%",
                  height: beforeSlide ? "70%" : "100%",
                  transition: ".5s",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
      <div className="sliding-mobile">
        {data
          .filter((item, i) => i === 0)
          .map((item) => (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                height: "100vh",
                width: "100vw",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: "100vw",
                  height: "100vh",

                  bottom: 0,
                  background: "linear-gradient(to bottom, rgba(0,0,0,0),black)",
                }}
                className="d-flex flex-column justify-content-end "
              >
                <div
                  className="col-12 text-light mx-1 "
                  style={{ padding: "50px 0" }}
                >
                  <div
                    style={{
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                      }}
                    >
                      <h1
                        style={{
                          fontWeight: "bolder",
                          fontSize: 60,
                          textAlign: "left",
                        }}
                      >
                        360 Global Limited
                      </h1>
                    </div>
                  </div>

                  <div
                    style={{
                      overflow: "hidden",
                    }}
                    on
                  >
                    <h1
                      style={{
                        fontWeight: "bolder",
                        textAlign: "left",
                      }}
                    >
                      Produces High Quality
                    </h1>
                  </div>
                  <div
                    style={{
                      overflow: "hidden",
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: "bolder",
                        textAlign: "left",
                      }}
                    >
                      Service
                    </h1>
                  </div>
                </div>
              </div>
              <img
                src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="2"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SingleSlider;
