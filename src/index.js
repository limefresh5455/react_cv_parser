import React from "react";
import ReactDOM from "react-dom/client";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
// import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
// import "./assets/css/demo.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";
import Home from "Home";
import SignIn from "views/SignIn";
import SignUp from "views/SignUp";
// import ProtectedRoute from "protectedRoute";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Switch>
      <Route exact path="/" render={(props) => <Home authorized={true}/>} />
      <Route path="/signin" render={(props) => <SignIn />} />
      <Route path="/signup" render={(props) => <SignUp />} />
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
  </Router>

  );