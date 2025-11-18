import { createBrowserRouter } from "react-router";

//import RootLayout from "../layouts/RootLayout";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import Register from "../pages/Register";
// import FindPartner from "../pages/FindPartner";
// import CreatePartnerProfile from "../pages/CreatePartnerProfile";
// import MyConnection from "../pages/MyConnection";
// import ErrorPage from "../pages/ErrorPage";
// import HowItWorks from "../pages/HowItWorks";
// import PartnerDetails from "../pages/PartnerDetails";

// import PrivateRoute from "./PrivateRoute";
// //import RootLayout from "../src/layouts/RootLayout";
// import HowItWorks from "../src/pages/HowItWorks";
// import FindPartner from "../src/pages/FindPartner";
// import ErrorPage from "../pages/ErrorPage.jsx";

import RootLayout from "../layouts/RootLayout.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import FindPartner from "../pages/FindPartner.jsx";
import CreatePartnerProfile from "../pages/CreatePartnerProfile.jsx";
import MyConnection from "../pages/MyConnection.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import HowItWorks from "../pages/HowItWorks.jsx";
import PartnerDetails from "../pages/PartnerDetails.jsx";

import PrivateRoute from "./PrivateRoute.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, Component: Home },

      { path: "Login", Component: Login },
      { path: "Register", Component: Register },
      { path: "FindPartner", Component: FindPartner },

      {
        path: "CreatePartnerProfile",
        element: (
          <PrivateRoute>
            <CreatePartnerProfile />
          </PrivateRoute>
        ),
      },

      {
        path: "MyConnection",
        element: (
          <PrivateRoute>
            <MyConnection />
          </PrivateRoute>
        ),
      },

      { path: "HowItWorks", Component: HowItWorks },

      {
        path: "/partner/:id",
        element: (
          <PrivateRoute>
            <PartnerDetails />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
