import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./routes/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    errorElement: <div>Error</div>,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
