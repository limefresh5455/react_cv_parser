
import Dashboard from "views/Dashboard.js";
import UserProfile from "views/UserProfile.js";
// import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import MyResume from "views/MyResume";


const dashboardRoutes = [
 
  {
    path: "/dashboard",
    name: "Profile Generator",
    icon: "nc-icon nc-grid-45",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: "nc-icon nc-credit-card",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Templates",
    icon: "nc-icon nc-album-2",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: "Profile",
    icon: "nc-icon nc-chart-bar-32",
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/myresume",
    name: "Saved Resume",
    icon: "nc-icon nc-chart-bar-32",
    component: MyResume,
    layout: "/admin"
  }
];

export default dashboardRoutes;
