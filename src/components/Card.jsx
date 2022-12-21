import React, { useEffect } from "react";
import { apis } from "./apis";

const Card = () => {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => resp.json())
      .then((res) => console.log("dtata---", res));
    return () => {};
  }, []);
  return <div></div>;
};
export default Card;
