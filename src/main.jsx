import "./index.css";
import { createRoot } from "react-dom/client";
import router from "./routes/router";
import { RouterProvider } from "react-router";
import { Toaster } from "react-hot-toast";
import { StrictMode } from "react";
import AuthProvider from "./context/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  </StrictMode>
);
