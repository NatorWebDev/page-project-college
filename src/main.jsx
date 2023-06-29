import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Root from "./routes/root.jsx";
import "./index.css";
import ErrorPage from "./routes/ErrorPage.jsx";
import Contact from "./routes/Contact.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
