import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import { Routes } from "../Types";
import { Dropdown } from "./Dropdown";

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
      element: <Dropdown dropdownOptions={routes} />,
    },
  ]);

  return <RouterProvider router={router} />;
};

describe("Dropdown tests", () => {
  const componentPrefix = "dropdown-";
  const buttonId = "dropdown-button";
  const buttonOpen = "dropdownButtonOpen";
  const buttonClose = "dropdownButtonClose";

  describe("Dropdown closed", () => {
    it("SHOULD render the main container WHEN the page loads", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));

      //act
      const dropdown = getByTestId(`${componentPrefix}container`);

      //assert
      expect(dropdown).toBeInTheDocument();
    });

    //toHaveStyle / attributes.style - can check specific styling is present (so the exact colour is shown)
    it("SHOULD render button with primary colour WHEN dropdown isn't open", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));

      //act
      const button = getByTestId(buttonId);

      //assert
      expect(button).toHaveClass(buttonClose);
    });

    it("SHOULD not render the dropdown WHEN dropdown is closed", async () => {
      //arrange
      const { queryByTestId } = render(MockDropdown(validRoutes));

      //act
      const ul = queryByTestId(`${componentPrefix}ul-container`);

      //assert
      expect(ul).not.toBeInTheDocument();
    });

    it("SHOULD change button colour WHEN the button is clicked twice", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act 1
      fireEvent.click(button);
      //assert 1
      expect(button).toHaveClass(buttonOpen);

      //act 2
      fireEvent.click(button);
      //assert 2
      expect(button).toHaveClass(buttonClose);
    });
  });

  describe("Dropdown open", () => {
    it("SHOULD change the button colour WHEN dropdown is open", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);

      //assert
      expect(button).toHaveClass(buttonOpen);
    });

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
