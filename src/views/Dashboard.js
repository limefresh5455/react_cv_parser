import React, { useState } from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";

import { Button, Card, Container, Row, Col } from "react-bootstrap";

function Dashboard() {
  // 3 State for PDF,LOGO,TEXT
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      file1Name: file1.name,
      file2Name: file2.name,
      file3Name: file3,
    };
    console.log(data);

//Upload Resume
var autoToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzODA2ODQwLCJpYXQiOjE2ODM3MjA0NDAsImp0aSI6ImZkNWM2MjJjN2MyZjQyNzhhMzdmMDYwNjQ2Y2UwNDUwIiwidXNlcl9pZCI6NX0.rpIQXAEP2Bz8OZLA7rlXVwJjkxJWyH0LPTVMuR_dSZM'
var formdata = new FormData();
console.log('formis ' ,formdata);

const nameIs = formdata.get('name')
console.log('name is', nameIs);

 formdata.append("resume", file1);
 formdata.append("resume_logo", file2);
 formdata.append("company_name", file3);

  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${autoToken}`);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
 
     fetch(`https://311b-182-70-252-19.ngrok-free.app/upload/`, requestOptions)
      .then(response => response.json())
  .then((result) =>{if(result.success){
    toast.success('Successfully Upload!',{
      position: toast.POSITION.TOP_CENTER,
      className: 'toast-message'
    })
  }} )
  .catch(error => console.error(error));
 


  };




  // Downnlaod API English

  function downloadDataEng() {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `https://44eb-182-70-252-19.ngrok-free.app/download/3`,
      requestOptions
    )
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "document.docx");
        document.body.appendChild(link);
        link.click();
      });
  }

  // Download in German
  function downloadDataGer() {
    // Options
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://ed9d-182-70-252-19.ngrok-free.app/downloadgerman/8",
      requestOptions
    )
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        console.log("download is " + url);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "document.docx");
        document.body.appendChild(link);
        link.click();
      });
  }

  return (
    <>
      <Container fluid>
        <form onSubmit={handleSubmit}>
          <Row style={{ background: "#1b1b1b", height: "" }}>
            <Col style={{ backgroundColor: "black",height:'200px' }}>
              {/*  <label for="images" class="drop-container">
                <span class="drop-title">Drop CV here</span>
                or
                <input type="file" id="images" accept="image/*" required />
              </label> */}

              <label htmlFor="file1" class="drop-container">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
         
                <span class="drop-title">Drop CV here</span>
                or
                <input
                  type="file"
                  id="file1"
                  name="resume"
                  onChange={(e) => setFile1(e.target.files[0])}
                />
              </label>
            </Col>
            <Col style={{ backgroundColor: "black",height:'200px' }}>
              <label htmlFor="file2" class="drop-container">
              <i class="fa-solid fa-arrow-up-from-bracket"></i>
                <span class="drop-title">Drop Logo here</span>
                or
                <input 
                type="file" 
                id="file2" 
                name="logo"
                accept="image/*" 
                onChange={(e) => setFile2(e.target.files[0])}
                required />
              </label>
            </Col>

            <Col style={{ backgroundColor: "black",height:'200px' }}>
              <label htmlFor="file3" class="drop-container">
                <span class="drop-title">Drop files here</span>
                or
                <input 
                type="text" 
                id="file3" 
                name="company"
                accept="image/*" 
              onChange={(e) => setFile3(e.target.value)}
                required />
              </label>
            </Col>
          </Row>
          <Row style={{margin:'20px 0'}}>
          <button className="btn btn-primary m-auto" style={{ }} type="submit">
            Submit
          </button>

          </Row>
                  </form>
      </Container>
      {/* Choose Your Template*/}
      <Container fluid style={{ padding: "80px 15px", backgroundColor: "" }}>
        <Row style={{ backgroundColor: "" }}>
          <Col md="12">
            <p
              style={{ textAlign: "center", color: "gray", fontWeight: "bold" }}
            >
              Choose Your Template
            </p>
          </Col>

          {/*  5 Boxes */}
        </Row>

        <Row
          style={{
            backgroundColor: "",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Col lg="2" sm="6">
            <Card className="card-stats">
              <Card.Body style={{ height: "150px" }}></Card.Body>
            </Card>
            <p className="template_name">Name of Template</p>
          </Col>
          <Col lg="2" sm="6">
            <Card className="card-stats">
              <Card.Body style={{ height: "150px" }}></Card.Body>
            </Card>
            <p className="template_name">Name of Template</p>
          </Col>
          <Col lg="2" sm="6">
            <Card className="card-stats">
              <Card.Body style={{ height: "150px" }}></Card.Body>
            </Card>
            <p className="template_name">Name of Template</p>
          </Col>
          <Col lg="2" sm="6">
            <Card className="card-stats">
              <Card.Body style={{ height: "150px" }}></Card.Body>
            </Card>
            <p className="template_name">Name of Template</p>
          </Col>
          <Col lg="2" sm="6">
            <Card className="card-stats">
              <Card.Body style={{ height: "150px" }}></Card.Body>
            </Card>
            <p className="template_name">Name of Template</p>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{ padding: "30px 15px", backgroundColor: "#1b1b1b" }}
      >
        {/* Generate Button */}
        <Row>
          <Col lg="12" className="text-center">
            <Button
              variant="success"
              className="nav_upgrade_btn"
              style={{ fontWeight: "bold" }}
            >
              Generate
            </Button>

            <h5 style={{ color: "gray", fontWeight: "bold" }}>
              {" "}
              Your Profile has been generated
            </h5>
            <Button
              variant="success"
              className="nav_upgrade_btn"
              style={{ fontWeight: "bold" }}
              onClick={downloadDataEng}
            >
              Download in English
            </Button>

            <Button
              variant="success"
              className="nav_upgrade_btn"
              style={{ fontWeight: "bold", marginLeft: "40px" }}
              onClick={downloadDataGer}
            >
              Download in German
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
