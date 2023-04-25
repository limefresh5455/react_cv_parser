import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import site from "../assets/img/site_logo_2.png";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { SignUpSchema } from "./validationSchema";
import { error } from "jquery";

function SignIn() {
  // using Formik

  const formInitialValues = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    password1: "",
    phone_no: "",
  };

  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: validationSchema,
    onSubmit: (values,action) => {
      const user = {
        first_name: values.first_name,
        last_name: values.last_name,
        username: values.username,
        email: values.email,
        password: values.password,
        password1: values.password1,
        phone_no: values.phone_no,
      };

      fetch(`${process.env.REACT_APP_BASE_URL}register/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("object", data);
        })
        .catch((e) => {
          console.log("errors", e);
        });
        action.resetForm();
    },
  });

  return (
    <>
      <Container
        fluid
        style={{ backgroundColor: "", height: "100vh", padding: "0px" }}
      >
        <Row style={{ backgroundColor: "red" }}>
          <Col
            md={6}
            style={{
              backgroundColor: "#161816",
              padding: "40px",
              height: "100vh",
              position: "relative",
            }}
          >
            <img
              src={site}
              alt=""
              srcset=""
              width="60"
              style={{ marginLeft: "50px" }}
            />

            <div
              style={{
                border: "",
                width: "70%",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
              }}
            >
              <h1
                style={{
                  fontWeight: "800",
                  fontFamily: "Nunito Sans",
                  color: "#fff",
                }}
              >
                Get started with <br /> Ui Fry....{" "}
              </h1>
              <p
                style={{ color: "gray", margin: "30px 0", fontWeight: "bold" }}
              >
                Join hundreds of job seekers who use Postlander to submit better
                job applications in seconds—not hours.
              </p>
              <p style={{ color: "gray", fontWeight: "bold" }}>
                Already have an account?{" "}
                <span
                  style={{
                    color: "#2ddb81",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  <Link to="/signin"> Sign In </Link>
                </span>{" "}
              </p>
            </div>
          </Col>

          {/* Column 2 */}

          <Col
            md={6}
            style={{
              backgroundColor: "#212221",
              padding: "40px",
              height: "100vh",
            }}
          >
            <Form onSubmit={formik.handleSubmit}>
              <Row
                style={{
                  backgroundColor: "",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {/* First Name*/}
                <Col sm={6} style={{ backgroundColor: "" }}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#fff", fontWeight: "bold" }}>
                      First Name
                    </Form.Label>
                    <Form.Control
                      className="signin_form"
                      type="text"
                      placeholder="Enter Your First Name"
                      name="first_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.first_name}
                    />

                    {formik.errors.first_name && formik.touched.first_name ? ( <span style={{color:'red', fontSize:'13px'}}>  {formik.errors.first_name} </span>) : null }
                  </Form.Group>
                </Col>

                {/* Last Name*/}
                <Col sm={6} style={{ backgroundColor: "" }}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#fff", fontWeight: "bold" }}>
                      Last Name
                    </Form.Label>
                    <Form.Control
                      className="signin_form"
                      type="text"
                      placeholder="Enter Your Last Name"
                      name="last_name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.last_name}
                    />
                    {formik.errors.last_name && formik.touched.last_name ? ( <span style={{color:'red', fontSize:'13px'}}>  {formik.errors.last_name} </span>) : null }

                  </Form.Group>
                </Col>

                {/* User Name*/}
                <Col sm={6} style={{ backgroundColor: "" }}>
                  {/*  First Name */}
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#fff", fontWeight: "bold" }}>
                      User Name
                    </Form.Label>
                    <Form.Control
                      className="signin_form"
                      type="text"
                      placeholder="Enter Your User Name"
                      name="username"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.username}
                    />
                    {formik.errors.username && formik.touched.username ? ( <span style={{color:'red', fontSize:'13px'}}>  {formik.errors.username} </span>) : null }

                  </Form.Group>
                </Col>

                {/* Email*/}

                <Col sm={6} style={{ backgroundColor: "" }}>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#fff", fontWeight: "bold" }}>
                      Email
                    </Form.Label>
                    <Form.Control
                      className="signin_form"
                      type="text"
                      placeholder="Enter Your Email "
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  
                    {formik.errors.email && formik.touched.email ? ( <span style={{color:'red', fontSize:'13px'}}>  {formik.errors.email} </span>) : null }
                  </Form.Group>
                </Col>

                {/* PassWord*/}
                <Col sm={6} style={{ backgroundColor: "" }}>
                  {/*  First Name */}
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#fff", fontWeight: "bold" }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      className="signin_form"
                      type="password"
                      placeholder="Enter Your Password"
                      name="password"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.password}
                    />

                    {formik.errors.password && formik.touched.password ? ( <span style={{color:'red', fontSize:'13px'}}>  {formik.errors.password} </span>) : null }

                  </Form.Group>
                </Col>

                {/* Confirm Password*/}
                <Col sm={6} style={{ backgroundColor: "" }}>
                  {/* Last Name */}

                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#fff", fontWeight: "bold" }}>
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      className="signin_form"
                      type="password"
                      placeholder="Confirm Your Password"
                      name="password1"
                      value={formik.values.password1}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.password1 && formik.touched.password1 ? ( <span style={{color:'red', fontSize:'13px'}}>  {formik.errors.password1} </span>) : null }


                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group className="" controlId="formBasicEmail">
                    <Form.Label style={{ color: "#fff", fontWeight: "bold" }}>
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      className="signin_form"
                      type="text"
                      placeholder="Enter Your Number"
                      name="phone_no"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.phone_no}
                    />
                    {formik.errors.phone_no && formik.touched.phone_no ? ( <span style={{color:'red', fontSize:'13px'}}>  {formik.errors.phone_no} </span>) : null }

                  </Form.Group>
                </Col>
              </Row>

              <Button
                variant="primary btn-block"
                type="submit"
                style={{
                  backgroundColor: "#2ddb81",
                  color: "#fff",
                  border: "none",
                  margin: "30px 0",
                }}
              >
                Create Account
              </Button>
            </Form>

            <p
              style={{
                color: "gray",
                textAlign: "center",
                fontSize: "12px",
              }}
            >
              By signing up, you agree to our Privacy Policy, Terms of Service,{" "}
              <br /> and Fair Use Policy.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default SignIn;
