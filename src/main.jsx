import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Feed from "./routes/Feed";
import Create from "./components/Create";
import Navigator from "./components/Navigator";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Feed />
        <Navigator />
      </>
    ),
    errorElement: <div>Error</div>,
    children: [
      {
        path: "create",
        element: <Create />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <>
        <Login />
        <Navigator />
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Register />
        <Navigator />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
