import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Col, Row } from 'react-bootstrap';
import { apis } from '../components/apis';
import { CONSTANTS } from '../components/constants';
import CustomModals from '../components/customModals';
import { getRandomColor } from '../components/utils';
import CreateNewPost from './CreateNewPost';
import PostCardListing from './PostCardListing';
import PostTableListing from './PostTableListing';

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [colorCode, setColorCode] = useState([]);
  const [postDataViewFormat, setPostDataViewFormat] = useState(
    CONSTANTS.postDataViewFormat.CARDVIEW
  );
  const [showModal, setshowModal] = useState(false);
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    apis(CONSTANTS.apis.GET, 'https://jsonplaceholder.typicode.com/posts').then(
      (resp) => updateColorCodeAndPosts(resp)
    );
    return () => {};
  }, []);

  const closeModalHandler = () => setshowModal(false);
  const showModalHandler = (id) => {
    apis(CONSTANTS.apis.GET, 'https://jsonplaceholder.typicode.com/posts/' + id)
      .then((resp) => setSinglePost(resp))
      .then(() => setshowModal(true));
  };

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
    showModalHandler,
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
              ? 'primary'
              : 'secondary'
          }
          value={CONSTANTS.postDataViewFormat.CARDVIEW}
        >
          Card View
        </Button>
        <Button
          variant={
            postDataViewFormat === CONSTANTS.postDataViewFormat.TABLEVIEW
              ? 'primary'
              : 'secondary'
          }
          value={CONSTANTS.postDataViewFormat.TABLEVIEW}
        >
          Table View
        </Button>
      </ButtonGroup>
    );
  };

  return (
    <>
      <Row>
        <Col md={4}>
          <CreateNewPost />
        </Col>
        <Col>
          {switchBUtton()}
          {postDataViewFormat === CONSTANTS.postDataViewFormat.TABLEVIEW ? (
            <PostTableListing {...commonProps} />
          ) : (
            <PostCardListing {...commonProps} />
          )}
        </Col>
      </Row>

      <CustomModals
        closeModalHandler={closeModalHandler}
        showModal={showModal}
        modalData={singlePost}
      />
    </>
  );
};

export default Index;
