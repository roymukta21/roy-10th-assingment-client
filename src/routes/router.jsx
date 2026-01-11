import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import HowItWork from "../pages/HowItWork";
import FindPartner from "../pages/FindPartner";
import PartnerDetails from "../pages/PartnerDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";

import DashboardLayout from "../dashboard/DashboardLayout";
import Overview from "../dashboard/Overview";
import Profile from "../dashboard/Profile";
import EditProfile from "../dashboard/EditProfile";
import CreatePartnerProfile from "../dashboard/CreatePartnerProfile";
import Analytics from "../dashboard/Analytics";
import Settings from "../dashboard/Settings";
//import MyConnection from "../dashboard/MyConnection";

import PrivateRoute from "./PrivateRoute";
import MyConnection from "../dashboard/MyConnection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "HowItWorks", element: <HowItWork /> },
      { path: "FindPartner", element: <FindPartner /> },
      { path: "/partner/:id", element: <PartnerDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },

  
  //DASHBOARD
  
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "Overview", element: <Overview /> },
      { path: "Profile", element: <Profile /> },
      { path: "EditProfile", element: <EditProfile /> },
      { path: "CreatePartnerProfile", element: <CreatePartnerProfile /> },
      { path: "Analytics", element: <Analytics /> },
      { path: "Settings", element: <Settings /> },
      { path: "MyConnection", element: <MyConnection/> },
    ],
  },
]);

export default router;
