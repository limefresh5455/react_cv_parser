import React from "react";
import ChartistGraph from "react-chartist";
// react-bootstrap components
import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";
import NavDropdown from "react-bootstrap/NavDropdown";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";

const thumbsContainer = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 0,
  marginBottom: 10,
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 70,
  height: 70,
  padding: 4,
  boxSizing: "border-box",
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

function Dashboard({authorized}) {
  let store =JSON.parse(localStorage.getItem('login'));
  let authToken = store.token
  const [files, setFiles] = React.useState([]);

  const handleFileChange = (e) => {
    
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "pdf/*": [],
    },
    onDrop: (acceptedFiles) => {
      console.log("accepted file is " + acceptedFiles);
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      let kb = acceptedFiles[0].size/1024;

      var formdata = new FormData();
  formdata.append("resume", acceptedFiles[0]);
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${authToken}`);
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
  };
  console.log(requestOptions.body)
     fetch(`${process.env.REACT_APP_BASE_URL}upload/`, requestOptions)
      .then(response => console.log(response))
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
      
    },
  });
  const files1 = JSON.stringify(files);
  const files2 = JSON.parse(files1);
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  React.useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);


// Downnlaod API English

function downloadDataEng()
{
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${authToken}`);

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch('https://ed9d-182-70-252-19.ngrok-free.app/download/ ',requestOptions)
  .then(response => response.blob())
  .then(blob => {
    const url = window.URL.createObjectURL(new Blob([blob]));
    console.log("download is " +url);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'document.docx');
    document.body.appendChild(link);
    link.click();
  });
}


// Download in German
function downloadDataGer()
{
// Options
var myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${authToken}`);

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch('https://ed9d-182-70-252-19.ngrok-free.app/downloadgerman/8',requestOptions)
.then(response => response.blob())
.then(blob => {
  const url = window.URL.createObjectURL(new Blob([blob]));
  console.log("download is " +url);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'document.docx');
  document.body.appendChild(link);
  link.click();
});
}
  return (
    <>
      <Container fluid>
      <Row style={{ background: "#1b1b1b", height: "200px" }}>
          <Col md="12">
            <section className="container">
              <div
                {...getRootProps({ className: "dropzone" })}
                style={{
                  textAlign: "center",
                  color: "#fff",
                  background: "",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
              
                <p style={{ color: "gray", fontWeight: "bold" }}>
                  Drop Down your CV
                </p>
                <aside style={thumbsContainer}>{thumbs}</aside>
                <Button variant="success" className="nav_upgrade_btn">
                  Upload CV
                </Button>{" "}
              </div>
            </section>
          </Col>
        </Row>
      </Container>
      {/* Choose Your Template*/}
      <Container fluid style={{ padding: "30px 15px", backgroundColor: "" }}>
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
            {files2 == "" ? (
              <Button
                variant="success"
                className="nav_upgrade_btn"
                style={{ fontWeight: "bold" }}
              >
                Generate
              </Button>
            ) : (
              <>
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
                style={{ fontWeight: "bold", marginLeft:'40px' }}
                onClick={downloadDataGer}
              >
                Download in German
              </Button>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;