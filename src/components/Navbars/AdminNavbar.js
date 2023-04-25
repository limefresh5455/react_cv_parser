import React, { Component } from "react";
import { useLocation ,useHistory} from "react-router-dom";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import '../index.css'
import routes from "routes.js";
import logo from "../../assets/img/profile_img.jpg"; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Header() {
  let history = useHistory();
  const location = useLocation();
  const mobileSidebarToggle = (e) => {
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function () {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  };

  const getBrandText = () => {
    for (let i = 0; i < routes.length; i++) {
      if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        return routes[i].name;
      }
    }
    return "Brand";
  };

  const logOut = () => {
    localStorage.removeItem('login')
   
    toast.error('Logout ' ,{
      position: toast.POSITION.TOP_CENTER,
      className: 'toast-message'
    })
    history.push("/signin")

  }
  return (
    <Navbar bg="dark" expand="lg">

      <Container fluid>
        <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
          <Button
            variant="dark"
            className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
            onClick={mobileSidebarToggle}
          >
            <i className="fas fa-ellipsis-v"></i>
          </Button>
          
        {/* One */}

          <div className="navbar_text" >
          <h4>Welcome back, Jenny</h4>
          <p>Hey Jenny, what's happening!</p>
          </div>
          
           
       
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
          <span className="navbar-toggler-bar burger-lines"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
        
          <Nav className="ml-auto" navbar style={{backgroundColor:'',display:'flex', alignItems:'center'}}>

          <form class="nosubmit">
             <input class="nosubmit" type="search" placeholder="Search for something...."/>
        </form>
            <Nav.Item>
              <Nav.Link
                className="m-0"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <span className="nav_free_btn">Free Trial</span>
              </Nav.Link>
            </Nav.Item>
            <Button variant="success"className="nav_upgrade_btn">Upgrade Plan</Button>{' '}
            

{/* Message Icon */}
<Dropdown as={Nav.Item}>
<Dropdown.Toggle
  as={Nav.Link}
  data-toggle="dropdown"
  id="dropdown-67443507"
  variant="default"
  className="m-0"
>
  <i className="nc-icon nc-email-83"></i>
  <span className="notification">1</span>
  <span className="d-lg-none ml-1">Notification</span>
</Dropdown.Toggle>
<Dropdown.Menu>
<Dropdown.Item
  href="#pablo"
  onClick={(e) => e.preventDefault()}
>
  Notification 1
</Dropdown.Item>
<Dropdown.Item
  href="#pablo"
  onClick={(e) => e.preventDefault()}
>
  Notification 2
</Dropdown.Item>
<Dropdown.Item
  href="#pablo"
  onClick={(e) => e.preventDefault()}
>
  Notification 3
</Dropdown.Item>
<Dropdown.Item
  href="#pablo"
  onClick={(e) => e.preventDefault()}
>
  Notification 4
</Dropdown.Item>
<Dropdown.Item
  href="#pablo"
  onClick={(e) => e.preventDefault()}
>
  Another notification
</Dropdown.Item>
</Dropdown.Menu>
 </Dropdown>

            {/* Notification*/}
            <Dropdown as={Nav.Item}>
            <Dropdown.Toggle
              as={Nav.Link}
              data-toggle="dropdown"
              id="dropdown-67443507"
              variant="default"
              className="m-0"
            >
              <i className="nc-icon nc-bell-55"></i>
              <span className="notification">2</span>
              <span className="d-lg-none ml-1">Notification</span>
            </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Notification 1
            </Dropdown.Item>
            <Dropdown.Item
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Notification 2
            </Dropdown.Item>
            <Dropdown.Item
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Notification 3
            </Dropdown.Item>
            <Dropdown.Item
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Notification 4
            </Dropdown.Item>
            <Dropdown.Item
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Another notification
            </Dropdown.Item>
          </Dropdown.Menu>
             </Dropdown>

             
            <Nav.Item>
            <Dropdown as={Nav.Item}>
            <Dropdown.Toggle
              as={Nav.Link}
              data-toggle="dropdown"
              id="dropdown-67443507"
              variant="default"
              className="m-0"
            >
            <img src={logo} alt="" srcset="" style={{width:'30px', borderRadius:'30px'}} />
          
              <span className="notification">2</span>
              <span className="d-lg-none ml-1">Notification</span>
            </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item
              href="#pablo"
          
            >
              Setting
            </Dropdown.Item>
            <ToastContainer autoClose={2000}/>
            <Dropdown.Item
              href="#pablo"
              onClick={logOut}
            >
            <span>Logout</span>
            </Dropdown.Item>
      
          </Dropdown.Menu>
             </Dropdown>

            </Nav.Item>
           
          </Nav>
        </Navbar.Collapse>
      

      </Container>
    </Navbar>
  );
}

export default Header;
