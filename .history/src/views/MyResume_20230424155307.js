import React, { useEffect,useState } from "react";
import { FcOpenedFolder } from "react-icons/fc";
import moment from "moment";
import axios from "axios";


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
  Modal,
} from "react-bootstrap";
// Modal Code

function MyResume() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
    let store = JSON.parse(localStorage.getItem("login"));
    let authToken = store.token;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${authToken}`);
    // var requestOptions = {
    //   method: "GET",
    //   headers: myHeaders,
    //   redirect: "follow",
    // };
   

  //   const response = await axios.get('https://ed9d-182-70-252-19.ngrok-free.app/userresume/',{
  //     method: "GET",
  //     headers :{
  //       Authorization: `Bearer ${authToken}`,
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     }
      
  // })
  // console.log(response)
  //   .then((response) =>{
  //     console.log("res is " ,response.json());
  //   }
  //   )
  //   setLoading(false);
  }
  // setTimeout(() => {
  //   // loadPost();
  // }, 1000);
  
  }, []);
    

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6">
            <h6
              className="text-secondary"
              style={{
                color: "#fff",
                textTransform: "capitalize",
                fontSize: "20px",
              }}
            >
              Last Profiles
            </h6>
          </Col>

          <Col md="6">
            <h6
              className="text-secondary"
              style={{
                color: "#fff",
                textTransform: "capitalize",
                fontSize: "20px",
              }}
            >
              History Overview
            </h6>
          </Col>

          <Col md="12" style={{ backgroundColor: "", padding: "40px 0" }}>
            <table class="table table-dark  table-borderless saved_resume_table  table-hover">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Profile Name</th>
                  <th scope="col">File Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-secondary">
                    2 June 2022{" "}
                    <span
                      style={{
                        color: "#fff",
                        padding: "5px 0",
                        display: "block",
                        fontSize: "12px",
                      }}
                    >
                      4:45PM
                    </span>
                  </td>

                  <td className="text-secondary">
                    {" "}
                    <FcOpenedFolder className="profile_name_icon" /> Jenny
                  </td>
                  <td>60KB</td>
                  <td>
                    {" "}
                    <Button
                      variant="success"
                      style={{
                        color: "#fff",
                        backgroundColor: "#05cb65",
                        border: "none",
                      }}
                    >
                      Download
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-secondary">
                    2 June 2022{" "}
                    <span
                      style={{
                        color: "#fff",
                        padding: "5px 0",
                        display: "block",
                        fontSize: "12px",
                      }}
                    >
                      4:45PM
                    </span>
                  </td>

                  <td className="text-secondary">
                    {" "}
                    <FcOpenedFolder className="profile_name_icon" /> Jenny
                  </td>
                  <td>50KB</td>
                  <td>
                    {" "}
                    <Button
                      variant="success"
                      style={{
                        color: "#fff",
                        backgroundColor: "#05cb65",
                        border: "none",
                      }}
                    >
                      Download
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-secondary">
                    2 June 2022{" "}
                    <span
                      style={{
                        color: "#fff",
                        padding: "5px 0",
                        display: "block",
                        fontSize: "12px",
                      }}
                    >
                      4:45PM
                    </span>
                  </td>

                  <td className="text-secondary">
                    {" "}
                    <FcOpenedFolder className="profile_name_icon" /> Jenny
                  </td>
                  <td>45KB</td>
                  <td>
                    {" "}
                    <Button
                      variant="success"
                      style={{
                        color: "#fff",
                        backgroundColor: "#05cb65",
                        border: "none",
                      }}
                    >
                      Download
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-secondary">
                    2 June 2022{" "}
                    <span
                      style={{
                        color: "#fff",
                        padding: "5px 0",
                        display: "block",
                        fontSize: "12px",
                      }}
                    >
                      4:45PM
                    </span>
                  </td>

                  <td className="text-secondary">
                    {" "}
                    <FcOpenedFolder className="profile_name_icon" /> Jenny
                  </td>
                  <td>60KB</td>
                  <td>
                    {" "}
                    <Button
                      variant="success"
                      style={{
                        color: "#fff",
                        backgroundColor: "#05cb65",
                        border: "none",
                      }}
                    >
                      Download
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-secondary">
                    2 June 2022{" "}
                    <span
                      style={{
                        color: "#fff",
                        padding: "5px 0",
                        display: "block",
                        fontSize: "12px",
                      }}
                    >
                      4:45PM
                    </span>
                  </td>
                  <td className="text-secondary">
                    {" "}
                    <FcOpenedFolder className="profile_name_icon" /> Jenny
                  </td>
                  <td>60KB</td>
                  <td>
                    {" "}
                    <Button
                      variant="success"
                      style={{
                        color: "#fff",
                        backgroundColor: "#05cb65",
                        border: "none",
                      }}
                    >
                      Download
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td className="text-secondary">
                    2 June 2022{" "}
                    <span
                      style={{
                        color: "#fff",
                        padding: "5px 0",
                        display: "block",
                        fontSize: "12px",
                      }}
                    >
                      4:45PM
                    </span>
                  </td>

                  <td className="text-secondary">
                    {" "}
                    <FcOpenedFolder className="profile_name_icon" /> Jenny
                  </td>
                  <td>60KB</td>
                  <td>
                    {" "}
                    <Button
                      variant="success"
                      style={{
                        color: "#fff",
                        backgroundColor: "#05cb65",
                        border: "none",
                      }}
                    >
                      Download
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyResume;
