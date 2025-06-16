import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Home } from "./Pages/Home";
import React from "react";

export const router = createBrowserRouter([
  {
    path: "/policeAPI",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
