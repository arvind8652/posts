import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { apis } from "./apis";
import { CONSTANTS } from "./constants";
import { getRandomColor, maxChar } from "./utils";
const PostListing = () => {
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
      <Row>
        {posts &&
          colorCode &&
          posts?.map((data) => {
            return (
              <Col key={data.id}>
                <Card
                  style={{
                    width: "18rem",
                    marginBottom: "3rem",
                    backgroundColor: pickColor(data.userId) || "white",
                  }}
                >
                  <Card.Body>
                    <Card.Title>
                      {maxChar(data.title, CONSTANTS.cardMaxDataCount.TITLE)}
                    </Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      {`User ID: ${data.userId}`}
                    </Card.Subtitle>
                    <Card.Text>
                      {maxChar(data.body, CONSTANTS.cardMaxDataCount.BODY)}
                    </Card.Text>
                    <Card.Link href='#'>Card Link</Card.Link>
                    <Card.Link href='#'>Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
};
export default PostListing;
