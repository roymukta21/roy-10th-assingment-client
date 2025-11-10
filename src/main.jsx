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
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider><RouterProvider router={router} />,</AuthProvider>
  </StrictMode>,
)
