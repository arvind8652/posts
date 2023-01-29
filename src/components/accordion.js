import React from 'react'
import { Accordion } from 'react-bootstrap'

const accordion = (data) => {
  return (
    <Accordion>
      <Accordion.Item eventKey={data.id}>
        <Accordion.Header>{`Comment ${data.id}`}</Accordion.Header>
        <Accordion.Body>
          {`Name: ${data.name}`}
          <br/>
          {`Email: ${data.email}`}
          <br/>
          {`Comment: ${data.body}`}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  )
}

export default accordion