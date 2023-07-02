import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Feed from './routes/Feed'
import Create from "./components/Create";
import { GoogleOAuthProvider } from "@react-oauth/google";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Feed /> ,
    errorElement: <div>Error</div>,
    children:[
      {
        path:'create',
        element:<Create/>
      }
    ]
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
