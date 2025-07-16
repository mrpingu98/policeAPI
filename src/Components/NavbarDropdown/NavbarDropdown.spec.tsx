import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Routes } from "../Types";
import { NavbarDropdown } from "./NavbarDropdown";

const validRoutes: Routes[] = [
  { routeUrl: "#", name: "Home" },
  { routeUrl: "#", name: "API" },
  { routeUrl: "#", name: "Test" },
];

//const invalidRoutes = ....
//having problems with checking the specific style with toHaveAttribute etc

const MockDropdown = (routes: Routes[]) => {
  const router = createMemoryRouter([
    {
      path: "/",
      element: <NavbarDropdown dropdownOptions={routes} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

describe("Dropdown tests", () => {
  const componentPrefix = "dropdown-";
  const buttonId = "navbar-dropdown-button";

  describe("Dropdown closed", () => {
    it("SHOULD render the main container WHEN the page loads", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));

      //act
      const dropdown = getByTestId(`${componentPrefix}container`);

      //assert
      expect(dropdown).toBeInTheDocument();
    });

    it("SHOULD not render the dropdown WHEN dropdown is closed", async () => {
      //arrange
      const { queryByTestId } = render(MockDropdown(validRoutes));

      //act
      const ul = queryByTestId(`${componentPrefix}ul-container`);

      //assert
      expect(ul).not.toBeInTheDocument();
    });
  });

  describe("Dropdown open", () => {
    it("SHOULD display the dropdown WHEN dropdown is open", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);

      //assert
      const ul = getByTestId(`${componentPrefix}ul-container`);
      expect(ul).toBeInTheDocument();
    });
  });

  describe("Dropdown open with valid props", () => {
    it("SHOULD display correct number of items on the dropdown WHEN the dropdown is open", async () => {
      //arrange
      const { getAllByTestId, getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);

      //assert
      const link = getAllByTestId("dropdown-li-container");
      expect(link).toHaveLength(3);
    });

    it("SHOULD display the correct name WHEN name is valid", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);

      //assert
      const linkOne = getByTestId(`${componentPrefix}link-0`);
      expect(linkOne).toHaveTextContent("Home");

      const linkTwo = getByTestId(`${componentPrefix}link-1`);
      expect(linkTwo).toHaveTextContent("API");

      const linkThree = getByTestId(`${componentPrefix}link-2`);
      expect(linkThree).toHaveTextContent("Test");

      //SHOULD have correct source WHEN routeUrl is valid
    });
  });

  // describe("Dropdown closed with invalid props", () => {
  // })

  // describe("Dropdown open with invalid props", () => {});
});
