import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./routes/Login";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <></>,
    errorElement: <div>Error</div>,
  },
  {
    path:'/login',
    element: <Login />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
