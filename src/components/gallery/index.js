import React, { useState, useEffect } from "react";
import "./gallery.css";
import axios from "axios";
import { galleryAPI } from "../../constant";

const Gallery = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(galleryAPI).then((res) => {
        setData(res.data);
      });
    };
    dataFetch();
  }, []);
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center "
      style={{
        background: "black",
        padding: "30px 0 100px 0 ",
      }}
      id="gallery"
    >
      <h1
        style={{
          fontWeight: "bolder",
          color: "white",
        }}
      >
        Gallery
      </h1>
      <div className="d-flex flex-wrap col-md-10 col-lg-8 justify-content-center">
        {data.map((item) => (
          <div
            style={{
              overflow: "hidden",
              width: 200,
              height: 200,
              position: "relative",
              margin: 5,
            }}
          >
            <div className="gallery-card ">
              <div className="fader d-flex  justify-content-center">
                <div
                  style={{
                    height: 2,
                    width: 40,
                    marginTop: 170,
                    background: "orange",
                  }}
                />
              </div>
              <img
                src={item.image}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
                alt="pic"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
