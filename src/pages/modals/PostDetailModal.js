import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import accordion from '../../components/accordion'

const PostDetailModal = ({closeModalHandler,showModal, modalData,commentsData}) => {
  console.log(modalData)
  return (
    <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}
          <p className="text-secondary">{`User ID: ${modalData.userId}`}</p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalData.body}
        <br/>
        <br/>
        <b>Comments</b>
        {commentsData?.map((data)=>accordion(data))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={closeModalHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default PostDetailModal