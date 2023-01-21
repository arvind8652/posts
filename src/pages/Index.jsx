import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import { apis } from "../components/apis";
import { CONSTANTS } from "../components/constants";
import { getRandomColor } from "../components/utils";
import PostCardListing from "./PostCardListing";
import PostTableListing from "./PostTableListing";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [colorCode, setColorCode] = useState([]);
  const [postDataViewFormat, setPostDataViewFormat] = useState(
    CONSTANTS.postDataViewFormat.CARDVIEW
  );

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

  const commonProps = {
    posts,
    colorCode,
    pickColor,
  };

  const switchBUtton = () => {
    return (
      <ButtonGroup
        onClick={(e) => {
          setPostDataViewFormat(e.target.value);
        }}
      >
        <Button
          variant={
            postDataViewFormat === CONSTANTS.postDataViewFormat.CARDVIEW
              ? "primary"
              : "secondary"
          }
          value={CONSTANTS.postDataViewFormat.CARDVIEW}
        >
          Card View
        </Button>
        <Button
          variant={
            postDataViewFormat === CONSTANTS.postDataViewFormat.TABLEVIEW
              ? "primary"
              : "secondary"
          }
          value={CONSTANTS.postDataViewFormat.TABLEVIEW}
        >
          Table View
        </Button>
      </ButtonGroup>
    );
  };

  return (
    <Row>
      <Col md={4}>adsas</Col>
      <Col>
        {switchBUtton()}
        {postDataViewFormat === CONSTANTS.postDataViewFormat.TABLEVIEW ? (
          <PostTableListing {...commonProps} />
        ) : (
          <PostCardListing {...commonProps} />
        )}
      </Col>
    </Row>
  );
};

export default Index;
