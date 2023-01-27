import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const CustomModals = ({closeModalHandler,showModal, modalData}) => {
  console.log(modalData)
  return (
    <Modal show={showModal} onHide={closeModalHandler}>
        <Modal.Header closeButton>
          <Modal.Title>{modalData.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalData.body}</Modal.Body>
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

export default CustomModals