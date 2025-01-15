import React, { useEffect, useState } from "react";
import { Spinner } from "./spinner";
import { Gif } from "../hooks/useGif";
export const Random = () => {
  const { gif, loading, fetchData } = Gif();
  function clickHandler() {
    fetchData();
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {" "}
      <div className="random">
        <h1>A RANDOM GIF</h1>
        {loading ? (
          <img src={gif} style={{ borderRadius: "5px", marginTop: "15px" }} />
        ) : (
          <Spinner />
        )}
        <button onClick={clickHandler}>Generate</button>
      </div>
    </div>
  );
};
