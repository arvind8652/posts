import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { apis } from '../components/apis';
import { CONSTANTS } from '../components/constants';
import { inputFields } from '../components/inputFields';

const initalVal = {
  title: '',
  body: '',
};
const CreateNewPost = () => {
  const [postForm, setPostForm] = useState(initalVal);

  const onChangeHadler = (name, value) =>
    setPostForm({ ...postForm, [name]: value });

  const fieldsHandler = () => {
    return inputFields[
      CONSTANTS.inputFieldsArrayList.CREATE_NEW_POST_FIELDS
    ].map((field) => {
      return (
        <Form.Group className='mb-3' key={field.key}>
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            value={postForm?.[field.name]}
            name={field.name}
            type={field.type}
            placeholder={field.placeHolder}
            onChange={(e) => {
              onChangeHadler(field.name, e.target.value);
            }}
          />
        </Form.Group>
      );
    });
  };

  function onSubmitHandler(e) {
    e.preventDefault();
    apis(CONSTANTS.apis.POST, 'https://jsonplaceholder.typicode.com/posts', {
      data: postForm,
    }).then((resp) => console.log(resp));
    setPostForm(initalVal);
  }

  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        {fieldsHandler()}
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CreateNewPost;
