import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Routes } from "../../Types";
import React from "react";
import { NavbarDropdown } from "./NavbarDropdown";

export const validRoutes: Routes[] = [
  { routeUrl: "/policeAPI", name: "Home" },
  { routeUrl: "/policeAPI/API", name: "API" },
  { routeUrl: "/policeAPI/Test", name: "Test" },
];

export const noValidRoutes: Routes[] = [
  { routeUrl: "", name: "" },
  { routeUrl: "", name: "" },
];

export const invalidRouteUrl: Routes[] = [
  { routeUrl: "", name: "API" },
  { routeUrl: "/policeAPI/Test", name: "Test" },
];

export const invalidName: Routes[] = [
  { routeUrl: "/policeAPI/API", name: "" },
  { routeUrl: "/policeAPI/Test", name: "Test" },
];

export const MockDropdown = (routes: Routes[]) => {
  const router = createMemoryRouter([
    {
      path: "/",
      element: (
        <>
          <div data-testid="dropdown-outside-click">test area</div>
          <NavbarDropdown routesArray={routes} />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
