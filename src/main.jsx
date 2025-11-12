import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import FindPartner from "./pages/FindPartner.jsx";
import CreatePartnerProfile from "./pages/CreatePartnerProfile.jsx";
import MyConnection from "./pages/MyConnection.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import { Toaster } from "react-hot-toast";
import HowItWorks from "./pages/HowItWorks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "Navbar",
        Component: Navbar,
      },
      {
        path: "Login",
        Component: Login,
      },
      {
        path: "Register",
        Component: Register,
      },
      {
        path: "FindPartner",
        Component: FindPartner,
      },
      {
        path: "CreatePartnerProfile",
        Component: CreatePartnerProfile,
      },
      {
        path: "MyConnection",
        Component: MyConnection,
      },
      {
        path: "FindPartner",
        Component: FindPartner,
      },
      {
        path: "HowItWorks",
        Component: HowItWorks
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} /> 

    </AuthProvider>
  </StrictMode>
);
