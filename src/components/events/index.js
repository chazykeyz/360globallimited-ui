import React, { useState, useEffect } from "react";
import EventSlider from "./eventSlider";

import axios from "axios";
import { eventAPI } from "../../constant";

const Events = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(eventAPI).then((res) => {
        setData(res.data);
      });
    };
    dataFetch();
  }, []);

  return (
    <div
      style={{
        position: "relative",
      }}
      id="events"
    >
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: 0,
        }}
        className="  d-flex align-items-center justify-content-center"
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
          Events
        </h1>
      </div>
      <div>
        <h1
          style={{
            fontWeight: "bolder",
            color: "gray",
          }}
        >
          Events
        </h1>
      </div>

      <EventSlider
        title="Festival & Media Tour "
        data={data}
        category="festival"
      />
      <EventSlider
        title="Concert & Event Campaign "
        data={data}
        category="concert"
      />
    </div>
  );
};

export default Events;
