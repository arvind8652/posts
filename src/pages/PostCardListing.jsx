import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { CONSTANTS } from "../components/constants";
import {  maxChar } from "../components/utils";
const PostCardListing = (props) => {
  const {posts, colorCode, pickColor} = props
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
export default PostCardListing;
