import React from "react";


// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Modal
} from "react-bootstrap";
// Modal Code

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
    
    

      <Modal.Body>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


function MyResume() {
// Modal State
const [modalShow, setModalShow] = React.useState(false);



  return (
    <>
      <Container fluid>
     

    <MyVerticallyCenteredModal
      show={modalShow}
      onHide={() => setModalShow(false)}
    />
        <Row>
          <Col md="12">
          <Table className="saved_resume_table" striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>CV Name</th>
          <th>Preview</th>
          <th>Download</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Ravi</td>
          <td style={{ textAlign:'center'}}>  <Button variant="warning"  onClick={() => setModalShow(true)}>Preview</Button></td>
          <td style={{background:'', display:'flex', justifyContent:'space-around'}}> <Button variant="primary" style={{background: '#3472F7',color: '#fff'}}>Download in English</Button> <Button variant="success" style={{background: '#87CB1B',color: '#fff'}} >Download in German</Button></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Ravi</td>
          <td style={{ textAlign:'center'}}>  <Button variant="warning"  onClick={() => setModalShow(true)}>Preview</Button></td>
          <td style={{background:'', display:'flex', justifyContent:'space-around'}}> <Button variant="primary" style={{background: '#3472F7',color: '#fff'}}>Download in English</Button> <Button variant="success" style={{background: '#87CB1B',color: '#fff'}} >Download in German</Button></td>

        </tr>
        <tr>
          <td>3</td>
          <td>Ravi</td>
          <td style={{ textAlign:'center'}}>  <Button variant="warning"  onClick={() => setModalShow(true)}>Preview</Button></td>
          <td style={{background:'', display:'flex', justifyContent:'space-around'}}> <Button variant="primary" style={{background: '#3472F7',color: '#fff'}}>Download in English</Button> <Button variant="success" style={{background: '#87CB1B',color: '#fff'}} >Download in German</Button></td>

        </tr>
      </tbody>
    </Table>
          </Col>
         
        </Row>
        
      </Container>
    </>
  );
}

export default MyResume;
