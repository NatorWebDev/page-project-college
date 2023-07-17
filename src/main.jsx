import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Main from "./routes/Main";
import Create from "./components/Create";
import Navigator from "./components/Navigator";
import ProfileCustom from "./routes/ProfileCustom";
import NotFound from "./routes/NotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Main />
        <Navigator />
      </>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "profileedit",
        element: <ProfileCustom />,
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
