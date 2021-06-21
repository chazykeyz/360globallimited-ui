import React, { useState, useEffect } from "react";
// slick imports
import Slider from "react-slick/lib";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

import axios from "axios";
import { clientAPI } from "../../constant";

const Clients = () => {
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

  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(clientAPI).then((res) => {
        setData(res.data);
      });
    };
    dataFetch();
  }, []);
  return (
    <div
      className="d-flex justify-content-center  flex-column align-items-center"
      id="clients"
    >
      <h1
        style={{
          fontWeight: "bolder",
          color: "gray",
          margin: "10px 0 50px ",
        }}
      >
        Project Clients
      </h1>
      <Slider {...settings} className="col-lg-8 col-md-10">
        {data.map((item) => (
          <div className="">
            <img src={item.image} width="100" alt="logo" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Clients;
