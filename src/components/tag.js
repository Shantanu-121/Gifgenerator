import React from "react";
import { useState, useEffect } from "react";
import { Spinner } from "./spinner";
import {Gif} from "../hooks/useGif";
export const Tag = () => {
  const [value, setValue] = useState("Type Something");
  const { gif, fetchData, loading } = Gif(value);
  function clickHandler() {
    fetchData();
  }

  function changeHandler() {}
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {" "}
      <div className="tag">
        <h1>RANDOM {value} GIF</h1>
        {loading ? (
          <img src={gif} style={{ borderRadius: "5px", marginTop: "15px" }} />
        ) : (
          <Spinner />
        )}
        <input
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
        />
        <button onClick={clickHandler}>Generate</button>
      </div>
    </div>
  );
};
