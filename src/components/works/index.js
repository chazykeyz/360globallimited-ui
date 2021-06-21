import React, { useState, useEffect } from "react";
import WorkSlider from "./workSlider";

import axios from "axios";
import { startAPI } from "../../constant";

const Works = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetch = async () => {
      await axios.get(startAPI).then((res) => {
        setData(res.data);
      });
    };
    dataFetch();
  }, []);
  return (
    <div
      style={{
        background: "black",
        padding: "100px 0",
      }}
      id="works"
    >
      <h1
        style={{
          fontWeight: "bolder",
          color: "white",
        }}
      >
        People Works With
      </h1>
      {/* stars */}
      <WorkSlider
        subTitle="International Start"
        data={data}
        category="international"
      />
      <WorkSlider subTitle="Tanzanian Start" data={data} category="local" />
      {/* stars */}
    </div>
  );
};

export default Works;
