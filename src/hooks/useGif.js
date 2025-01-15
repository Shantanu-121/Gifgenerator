import React, { useEffect } from "react";
import { useState } from "react";
export const Gif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(true);
  async function fetchData() {
    setLoading(false);
    const url = tag
      ? `https://api.giphy.com/v1/gifs/random?api_key=PkCa3wRqvoI76qoLTo6H2WZ2qVETXcCP&tag=${tag}`
      : "https://api.giphy.com/v1/gifs/random?api_key=PkCa3wRqvoI76qoLTo6H2WZ2qVETXcCP";
    try {
      let response = await fetch(url);
      let output = await response.json();
      let imageUrl = output.data.images.original.url;
      setGif(imageUrl);
    } catch (error) {
      console.log("Error agaya.");
    }
    setLoading(true);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return { gif, loading, fetchData };
};
