import React, { Component } from "react";
import { useLocation, NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import logo from "../../assets/img/profile_img.jpg";
import site from "../../assets/img/site_logo_2.png"; 


function Sidebar({ color, image, routes }) {
  const location = useLocation();
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  return (
    <div className="sidebar">
      <div
        className="sidebar-background"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      />
      <div className="sidebar-wrapper" style={{ backgroundColor: "#1b1b1b" }}>
        <div className="logo d-flex align-items-center justify-content-start">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini mx-1"
          >
            <div className="logo-img">
              <img src={site} alt="..." />
            </div>
          </a>
          <a className="logo_text" href="#">
            uifry
          </a>
        </div>
        <Nav>
          {routes.map((prop, key) => {
            if (!prop.redirect)
              return (
                <li
                  className={
                    prop.upgrade
                      ? "active active-pro"
                      : activeRoute(prop.layout + prop.path)
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.layout + prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            return null;
          })}
        </Nav>

        {/* Logout */}

        <div
          style={{
            backgroundColor: "",
            width: "260px",
            position: "fixed",
            bottom: "50px",
          }}
        >

        <div style={{
          display: "flex",
          justifyContent: "space-around",
      
        }}>
        <div className="login_img">
        <img
          src={logo}
          alt=""
          srcset=""
          style={{ width: "40px", borderRadius: "50px" }}
        />
      </div>

      <div className="profile_content">
        <h6>Jenny Wilson</h6>
        <p>itiibacha31@gmail.com</p>
      </div>
        </div>
       
   
      
          
        </div>

        
      </div>
    </div>
  );
}

export default Sidebar;
