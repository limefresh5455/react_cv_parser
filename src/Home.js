import { useEffect } from "react";
import logo from "./assets/img/site_logo_2.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import cv from "./assets/img/cv.png";
import { FaStar } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import owl_1 from "./assets/img/owl_1.png";
import owl_2 from "./assets/img/owl_2.png";
import owl_3 from "./assets/img/owl_3.png";
import logoss from "./assets/img/profile_img.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, Redirect } from "react-router-dom";

function Home({ authorized }) {
  useEffect(() => {
    (() => {
      const openNavMenu = document.querySelector(".open-nav-menu"),
        closeNavMenu = document.querySelector(".close-nav-menu"),
        navMenu = document.querySelector(".nav-menu"),
        menuOverlay = document.querySelector(".menu-overlay"),
        mediaSize = 991;

      openNavMenu.addEventListener("click", toggleNav);
      closeNavMenu.addEventListener("click", toggleNav);
      // close the navMenu by clicking outside
      menuOverlay.addEventListener("click", toggleNav);

      function toggleNav() {
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
      }

      navMenu.addEventListener("click", (event) => {
        if (
          event.target.hasAttribute("data-toggle") &&
          window.innerWidth <= mediaSize
        ) {
          // prevent default anchor click behavior
          event.preventDefault();
          const menuItemHasChildren = event.target.parentElement;
          // if menuItemHasChildren is already expanded, collapse it
          if (menuItemHasChildren.classList.contains("active")) {
            collapseSubMenu();
          } else {
            // collapse existing expanded menuItemHasChildren
            if (navMenu.querySelector(".menu-item-has-children.active")) {
              collapseSubMenu();
            }
            // expand new menuItemHasChildren
            menuItemHasChildren.classList.add("active");
            const subMenu = menuItemHasChildren.querySelector(".sub-menu");
            subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          }
        }
      });
      function collapseSubMenu() {
        navMenu
          .querySelector(".menu-item-has-children.active .sub-menu")
          .removeAttribute("style");
        navMenu
          .querySelector(".menu-item-has-children.active")
          .classList.remove("active");
      }
      function resizeFix() {
        // if navMenu is open ,close it
        if (navMenu.classList.contains("open")) {
          toggleNav();
        }
        // if menuItemHasChildren is expanded , collapse it
        if (navMenu.querySelector(".menu-item-has-children.active")) {
          collapseSubMenu();
        }
      }

      window.addEventListener("resize", function () {
        if (this.innerWidth > mediaSize) {
          resizeFix();
        }
      });
    })();
  }, []);

  return (
    <>
      <header className="header">
        <div className="navigation_menu">
          <div className="header-main">
            <div className="logo">
              <img src={logo} alt="" srcset="" width="50" />
            </div>

            <div className="menu-overlay"></div>

            <nav className="nav-menu">
              <div className="close-nav-menu"></div>
              <ul className="menu navigation_menu_home">
                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    About UIFry ? <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">Who we are</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">FAQ</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">About</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Features <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">Home 1</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Home 2</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Home 3</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">Home 4</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Resources <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">page 1</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 2</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 3</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 4</a>
                    </li>
                  </ul>
                </li>

                <li className="menu-item menu-item-has-children">
                  <a href="#" data-toggle="sub-menu">
                    Company <i className="plus"></i>
                  </a>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">page 1</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 2</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 3</a>
                    </li>
                    <li className="menu-item">
                      <a href="#">page 4</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>

            <div className="home_navigation_btn">
              <button>Get Demo</button>
              {/*  <p>Contact Sales</p> */}
              <Link to="/signin" style={{ color: "#fff", lineHeight: "30px" }}>
                Sign In
              </Link>
            </div>

            <div className="open-nav-menu">
              <span></span>
            </div>
          </div>
        </div>
      </header>

      <section className="home-section">
        <Container style={{ backgroundColor: "", padding: "70px 0" }}>
          <Row>
            <Col style={{ backgroundColor: "" }}>
              <div className="star_ratings">
                <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                <span style={{ color: "#fff", marginLeft: "5px" }}>
                  {" "}
                  Based on <span style={{ color: "gray" }}>10,000+</span>{" "}
                  reviews
                </span>
              </div>
              <h1 style={{ color: "#fff", fontFamily: "Nunito Sans" }}>
                Candidate Profiles Easily Generated
              </h1>
              <p
                style={{
                  color: "#fff",
                  margin: "20px 0",
                  color: "gray",
                  fontFamily: "Nunito Sans",
                }}
              >
                Profile generator creates a professional candidate profile from
                the cv of your candidates fully automatically
              </p>
              <Button
                variant="success"
                className="nav_upgrade_btn"
                style={{ fontWeight: "bold" }}
              >
                Get started for Free
              </Button>

              <Row
                style={{
                  width: "70%",
                  backgroundColor: "",
                  marginTop: "20px",
                  color: "#fff",
                }}
              >
                <Col>Logo-1</Col>
                <Col>Logo-2</Col>
                <Col>Logo-3</Col>
              </Row>
            </Col>

            <Col style={{ backgroundColor: "" }}>
              <img
                src={cv}
                alt=""
                width="400"
                style={{ display: "block", marginLeft: "auto" }}
              />
            </Col>
          </Row>
        </Container>

        <Container style={{ backgroundColor: "" }}>
          <Row style={{ padding: "50px 0" }}>
            <Col>
              <h2
                style={{
                  color: "#fff",
                  fontFamily: "Nunito Sans",
                  fontWeight: "bold",
                  margin: "0px",
                }}
              >
                Choose from over 10+ <br />
                cutting edge products
              </h2>
            </Col>

            <Col>
              <Button
                variant="success"
                className="nav_upgrade_btn"
                style={{
                  fontWeight: "bold",
                  display: "block",
                  marginLeft: "auto",
                }}
              >
                See All Products
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <OwlCarousel
                className="owl-theme"
                items={4}
                loop
                margin={10}
                autoplayTimeout={2000}
                dots={false}
                autoplay={true}
                nav
              >
                <div class="item">
                  <img src={owl_1} alt="" srcset="" height="350px" />
                </div>
                <div class="item">
                  <img src={owl_2} alt="" srcset="" height="350px" />
                </div>
                <div class="item">
                  <img src={owl_3} alt="" srcset="" height="350px" />
                </div>
                <div class="item">
                  <img src={owl_1} alt="" srcset="" height="350px" />
                </div>
                <div class="item">
                  <img src={owl_2} alt="" srcset="" height="350px" />
                </div>
                <div class="item">
                  <img src={owl_3} alt="" srcset="" height="350px" />
                </div>
                -
              </OwlCarousel>
              ;
            </Col>
          </Row>
        </Container>

        <Container style={{ backgroundColor: "", padding: "50px 0" }}>
          <Row>
            <Col>
              <h2
                style={{
                  marginTop: "0",
                  color: "#fff",
                  fontFamily: "Nunito Sans",
                }}
              >
                {" "}
                Here's what our{" "}
                <span style={{ color: "#00f777", fontWeight: "bold" }}>
                  customer
                </span>{" "}
                <br /> has to say{" "}
              </h2>
              <button
                style={{
                  borderRadius: "50px",
                  color: "#00f777",
                  border: "1px solid #fff",
                  padding: "10px 15px",
                  background: "transparent",
                }}
              >
                {" "}
                Read Customer Stories
              </button>
            </Col>

            <Col>
              <div style={{ backgroundColor: "", display: "flex" }}>
                <FaRegSnowflake
                  style={{ fontSize: "25px", color: "rgb(0, 247, 119)" }}
                />
                <p
                  style={{
                    color: "#fff",
                    fontSize: "18px",
                    marginLeft: "20px",
                  }}
                >
                  short description goes in here lorem ipsum is a placeholder
                </p>
              </div>
            </Col>
          </Row>

          {/*  2*4 sections */}
          <Row
            className="gx-5"
            style={{ paddingTop: "30px", backgroundColor: "" }}
          >
            <Col
              style={{
                backgroundColor: "#22242f",
                color: "#fff",
                padding: "40px 20px",
                margin: "10px",
                borderRadius: "20px",
              }}
            >
              <h6>Amazing tool! Saved me months</h6>
              <p>
                This is a placeholder for your testimonials and what your client
                has to say, put them here and make sure its 100% true and
                meaningful.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logoss}
                  alt=""
                  srcset=""
                  width="50"
                  style={{ borderRadius: "50px" }}
                />
                <h6 style={{ marginLeft: "10px" }}>John Master</h6>
              </div>
            </Col>

            <Col
              style={{
                backgroundColor: "#131317",
                color: "#fff",
                padding: "40px 20px",
                margin: "10px",
                borderRadius: "20px",
              }}
            >
              <h6>Amazing tool! Saved me months</h6>
              <p>
                This is a placeholder for your testimonials and what your client
                has to say, put them here and make sure its 100% true and
                meaningful.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logoss}
                  alt=""
                  srcset=""
                  width="50"
                  style={{ borderRadius: "50px" }}
                />
                <h6 style={{ marginLeft: "10px" }}>John Master</h6>
              </div>
            </Col>
          </Row>

          <Row
            className="gx-5"
            style={{ padding: "0px 0", backgroundColor: "" }}
          >
            <Col
              style={{
                backgroundColor: "#131317",
                color: "#fff",
                padding: "40px 20px",
                margin: "10px",
                borderRadius: "20px",
              }}
            >
              <h6>Amazing tool! Saved me months</h6>
              <p>
                This is a placeholder for your testimonials and what your client
                has to say, put them here and make sure its 100% true and
                meaningful.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logoss}
                  alt=""
                  srcset=""
                  width="50"
                  style={{ borderRadius: "50px" }}
                />
                <h6 style={{ marginLeft: "10px" }}>John Master</h6>
              </div>
            </Col>

            <Col
              style={{
                backgroundColor: "#22242f",
                color: "#fff",
                padding: "40px 20px",
                margin: "10px",
                borderRadius: "20px",
              }}
            >
              <h6>Amazing tool! Saved me months</h6>
              <p>
                This is a placeholder for your testimonials and what your client
                has to say, put them here and make sure its 100% true and
                meaningful.
              </p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={logoss}
                  alt=""
                  srcset=""
                  width="50"
                  style={{ borderRadius: "50px" }}
                />
                <h6 style={{ marginLeft: "10px" }}>John Master</h6>
              </div>
            </Col>
          </Row>
        </Container>

        {/* PricingTable */}
        <Container fluid style={{ backgroundColor: "#fff" }}>
          <div id="generic_price_table">
            <section
              style={{
                backgroundColor: "#101010",
                margin: "0 -15px",
                padding: "40px 0",
              }}
            >
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="price-heading clearfix">
                      <h1 style={{ color: "#fff" }}> Pricing </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="container">
                <div class="row">
                 

                  <div class="col-md-4">
                    <div class="generic_content active clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <div class="head_bg"></div>
                          <div class="head">
                            <span> Essential</span>
                          </div>
                        </div>

                        <div class="generic_price_tag clearfix">
                          <span class="price">
                            <span class="sign">$</span>
                            <span class="currency">199</span>
                            <span class="cent">.99</span>
                            <span class="month">/MON</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list">
                        <ul>
                          <li>
                            <span>2GB</span> Bandwidth
                          </li>
                          <li>
                            <span>150GB</span> Storage
                          </li>
                          <li>
                            <span>12</span> Accounts
                          </li>
                          <li>
                            <span>7</span> Host Domain
                          </li>
                          <li>
                            <span>24/7</span> Support
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <a class="" href="">
                          Get Essential Plan
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="generic_content clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <div class="head_bg"></div>
                          <div class="head">
                            <span>Pro</span>
                          </div>
                        </div>

                        <div class="generic_price_tag clearfix">
                          <span class="price">
                            <span class="sign">$</span>
                            <span class="currency">299</span>
                            <span class="cent">.99</span>
                            <span class="month">/MON</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list">
                        <ul>
                          <li>
                            <span>2GB</span> Bandwidth
                          </li>
                          <li>
                            <span>150GB</span> Storage
                          </li>
                          <li>
                            <span>12</span> Accounts
                          </li>
                          <li>
                            <span>7</span> Host Domain
                          </li>
                          <li>
                            <span>24/7</span> Support
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <a class="" href="">
                          Get Pro Plan
                        </a>
                      </div>
                    </div>
                  </div>

                  <div class="col-md-4">
                    <div class="generic_content active clearfix">
                      <div class="generic_head_price clearfix">
                        <div class="generic_head_content clearfix">
                          <div class="head_bg"></div>
                          <div class="head">
                            <span>Ultimate</span>
                          </div>
                        </div>

                        <div class="generic_price_tag clearfix">
                          <span class="price">
                            <span class="sign">$</span>
                            <span class="currency">199</span>
                            <span class="cent">.99</span>
                            <span class="month">/MON</span>
                          </span>
                        </div>
                      </div>

                      <div class="generic_feature_list">
                        <ul>
                          <li>
                            <span>2GB</span> Bandwidth
                          </li>
                          <li>
                            <span>150GB</span> Storage
                          </li>
                          <li>
                            <span>12</span> Accounts
                          </li>
                          <li>
                            <span>7</span> Host Domain
                          </li>
                          <li>
                            <span>24/7</span> Support
                          </li>
                        </ul>
                      </div>

                      <div class="generic_price_btn clearfix">
                        <a class="" href="">
                          Get Ultimate Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Home;
