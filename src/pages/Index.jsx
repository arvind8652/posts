import React, { useEffect, useState } from "react";
import { apis } from "../components/apis";
import { CONSTANTS } from "../components/constants";
import { getRandomColor } from "../components/utils";
import PostCardListing from "./PostCardListing";
import PostTableListing from "./PostTableListing";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [colorCode, setColorCode] = useState([]);

  useEffect(() => {
    apis(CONSTANTS.apis.GET, "https://jsonplaceholder.typicode.com/posts").then(
      (resp) => updateColorCodeAndPosts(resp)
    );
    return () => {};
  }, []);

  const updateColorCodeAndPosts = (data) => {
    let generatedColorCode = [];
    data.map((data) => {
      if (!generatedColorCode.find((x) => x.userId === data.userId)) {
        generatedColorCode.push({
          userId: data.userId,
          cardColor: getRandomColor(),
        });
      }
    });
    setPosts(data);
    setColorCode(generatedColorCode);
  };

  const pickColor = (id) => {
    let selectColorCode = colorCode.filter((val) => val.userId === id);
    return selectColorCode[0]?.cardColor;
  };
  return (
    <div>
      <PostTableListing
        posts={posts}
        colorCode={colorCode}
        pickColor={pickColor}
      />
      <PostCardListing
        posts={posts}
        colorCode={colorCode}
        pickColor={pickColor}
      />
    </div>
  );
};

export default Index;
