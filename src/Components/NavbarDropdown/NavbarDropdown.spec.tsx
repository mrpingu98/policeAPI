import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Routes } from "../Types";
import { NavbarDropdown } from "./NavbarDropdown";
import { NonEmptyArray } from "../Types";

const validRoutes: NonEmptyArray<Routes> = [
  { routeUrl: "/policeAPI", name: "Home" },
  { routeUrl: "/policeAPI/API", name: "API" },
  { routeUrl: "/policeAPI/Test", name: "Test" },
];

const noValidRoutes: NonEmptyArray<Routes> = [
  { routeUrl: "", name: "" },
  { routeUrl: "", name: "" },
];

const invalidRouteUrl: NonEmptyArray<Routes> = [
  { routeUrl: "", name: "API" },
  { routeUrl: "/policeAPI/Test", name: "Test" },
];

const invalidName: NonEmptyArray<Routes> = [
  { routeUrl: "/policeAPI/API", name: "" },
  { routeUrl: "/policeAPI/Test", name: "Test" },
];

//const invalidRoutes = ....
//having problems with checking the specific style with toHaveAttribute etc

const MockDropdown = (routes: NonEmptyArray<Routes>) => {
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

describe("Dropdown tests", () => {
  const componentPrefix = "dropdown-";
  const buttonId = "navbar-dropdown-button";

  describe("Dropdown button visible when page loads", () => {
    it("SHOULD render the main dropdown container WHEN the page loads", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));

      //act
      const dropdown = getByTestId(`${componentPrefix}container`);

      //assert
      expect(dropdown).toBeInTheDocument();
    });

    it("SHOULD render the dropdown button WHEN the page loads", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));

      //act
      const dropdown = getByTestId(buttonId);

      //assert
      expect(dropdown).toBeInTheDocument();
    });

    it("SHOULD not render the dropdown options WHEN the page initially loads as it should be closed", async () => {
      //arrange
      const { queryByTestId } = render(MockDropdown(validRoutes));

      //act
      const ul = queryByTestId(`${componentPrefix}ul-container`);

      //assert
      expect(ul).not.toBeInTheDocument();
    });
  });

  describe("Dropdown with valid props", () => {
    it("SHOULD display the dropdown options WHEN dropdown is open", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);

      //assert
      const ul = getByTestId(`${componentPrefix}ul-container`);
      expect(ul).toBeInTheDocument();
    });

    it("SHOULD close the dropdown WHEN the dropdown is clicked twice", async () => {
      //arrange
      const { getByTestId, queryByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);
      fireEvent.click(button);

      //assert
      const ul = queryByTestId(`${componentPrefix}ul-container`);
      expect(ul).not.toBeInTheDocument();
    });

    it("SHOULD close the dropdown WHEN an element outside the dropdown button is clicked", async () => {
      //arrange
      const { queryByTestId, getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);
      const elementOutsideDropdownButton = getByTestId(
        `${componentPrefix}outside-click`
      );

      //act
      fireEvent.click(button);
      fireEvent.click(elementOutsideDropdownButton);

      //assert
      const ul = queryByTestId(`${componentPrefix}ul-container`);
      expect(ul).not.toBeInTheDocument();
    });

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
    });

    it("SHOULD display the correct routeUrl WHEN routeUrl is valid", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);

      //assert
      const linkOne = getByTestId(`${componentPrefix}link-0`);
      expect(linkOne).toHaveAttribute("href", "/policeAPI");

      const linkTwo = getByTestId(`${componentPrefix}link-1`);
      expect(linkTwo).toHaveAttribute("href", "/policeAPI/API");

      const linkThree = getByTestId(`${componentPrefix}link-2`);
      expect(linkThree).toHaveAttribute("href", "/policeAPI/Test");
    });
  });

  describe("Dropdown with invalid props", () => {
    it("SHOULD not render the dropdown WHEN clicked and the routesArray has no valid items", async () => {
      //arrange
      const { queryByTestId, getByTestId } = render(
        MockDropdown(noValidRoutes)
      );
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);

      //assert
      const ul = queryByTestId(`${componentPrefix}ul-container`);
      expect(ul).not.toBeInTheDocument();
    });

    it("SHOULD not render a dropdown item WHEN it's routeUrl is empty", async () => {
      //arrange
      const { getByTestId, getAllByTestId } = render(
        MockDropdown(invalidRouteUrl)
      );
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);

      //assert
      const link = getAllByTestId("dropdown-li-container");
      const linkOne = getByTestId(`${componentPrefix}link-0`);

      expect(link).toHaveLength(1);
      expect(linkOne).toHaveAttribute("href", "/policeAPI/Test");
      expect(linkOne).toHaveTextContent("Test");
    });

    it("SHOULD not render a dropdown item WHEN it's name is empty", async () => {
      //arrange
      const { getByTestId, getAllByTestId } = render(MockDropdown(invalidName));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);

      //assert
      const link = getAllByTestId("dropdown-li-container");
      const linkOne = getByTestId(`${componentPrefix}link-0`);

      expect(link).toHaveLength(1);
      expect(linkOne).toHaveAttribute("href", "/policeAPI/Test");
      expect(linkOne).toHaveTextContent("Test");
    });
  });
});
