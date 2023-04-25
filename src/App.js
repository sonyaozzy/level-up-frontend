import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
import banner from './banner.jpg';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} size="lg" className="position-absolute top-50 start-50 translate-middle">
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="main-modal">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={banner} fluid></Image>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} >
            ითამაშე
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;