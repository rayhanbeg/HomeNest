import React from "react";
import ReactDOM from "react-dom/client";
import {Toaster} from "react-hot-toast"
import "./index.css";
import AuthProvider from "./provider/AuthProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>
  </HelmetProvider>
);