import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MainTabs from './Components/MainTabs';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} size="lg" className="position-absolute top-50 start-50 translate-middle">
        Open Pop-up
      </Button>

      <Modal show={show} onHide={handleClose} dialogClassName="main-modal">
        <Modal.Header className="background-image" closeButton closeVariant="white">
          <Modal.Title >
            <div>
              <div className="dates">
                <span className="slots">სლოტები</span>
                <span>10 იანვარი - 12 მარტი</span>
              </div>
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-20px">მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი</p>
          <p className='text-16px'>მოხვდი პოკერის ფესტივალზე მალტაში</p>
          <MainTabs/>
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