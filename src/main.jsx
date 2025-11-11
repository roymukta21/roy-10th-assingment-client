import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layouts/RootLayout.jsx';
import Home from './pages/Home.jsx';
import Navbar from './components/Navbar.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import FindPartner from './pages/FindPartner.jsx';
import CreatePartnerProfile from './pages/CreatePartnerProfile.jsx';
import MyConnections from './pages/MyConnections.Jsx';





const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
      {
        index: true,
        Component: Home
      },
      {
        path: 'Navbar',
        Component: Navbar
      },
      {
        path:"Login",
        Component: Login
      },
      {
        path:"Register",
        Component: Register
      },
      {
        path: "FindPartner",
        Component: FindPartner
      },
      {
        path: "CreatePartnerProfile",
        Component: CreatePartnerProfile
      },
      {
        path:"MyConnections",
        Component:MyConnections
      }
      // {
      //   path: "ThemeToggle",
      //   Component: ThemeToggle
      // }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} />,</AuthProvider>
  </StrictMode>,
)
