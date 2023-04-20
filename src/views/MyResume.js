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
} from "react-bootstrap";

import React, { useEffect, useState } from "react"

function MyResume() {
  const [users, setUsers] = useState()
   
  useEffect(() => {
     const url = "https://b021-182-70-252-19.ngrok-free.app/userresume/";
 
     const fetchData = async () => {
       try {
         const response = await fetch(url);
         console.log(response)
         const json = await response.json();
         console.log(json);
       } catch (error) {
         console.log("error", error);
       }
     };
 
     fetchData();
 }, []);
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
          <h6>MyResume</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyResume;
