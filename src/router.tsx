import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./Pages/Home/Home";
import React from "react";
import Api from "./Pages/API/Api";

export const router = createBrowserRouter([
  {
    path: "/policeAPI",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "api",
        element: <Api />,
      },
    ],
  },
]);
