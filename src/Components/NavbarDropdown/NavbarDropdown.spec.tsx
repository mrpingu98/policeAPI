import { fireEvent, render } from "@testing-library/react";
import {
  invalidName,
  invalidRouteUrl,
  MockDropdown,
  noValidRoutes,
  validRoutes,
} from "./NavbarDropdownTestUtils";

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
      const ul = getByTestId(`${componentPrefix}ul-container`);

      //assert
      expect(ul).toBeInTheDocument();
    });

    it("SHOULD close the dropdown WHEN the dropdown is clicked twice", async () => {
      //arrange
      const { getByTestId, queryByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);
      fireEvent.click(button);
      const ul = queryByTestId(`${componentPrefix}ul-container`);

      //assert
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
      const ul = queryByTestId(`${componentPrefix}ul-container`);

      //assert
      expect(ul).not.toBeInTheDocument();
    });

    it("SHOULD display correct number of items on the dropdown WHEN the dropdown is open", async () => {
      //arrange
      const { getAllByTestId, getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);
      const link = getAllByTestId("dropdown-li-container");

      //assert
      expect(link).toHaveLength(3);
    });

    it("SHOULD display the correct name WHEN name is valid", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);
      const linkOne = getByTestId(`${componentPrefix}link-0`);
      const linkTwo = getByTestId(`${componentPrefix}link-1`);
      const linkThree = getByTestId(`${componentPrefix}link-2`);

      //assert
      expect(linkOne).toHaveTextContent("Home");
      expect(linkTwo).toHaveTextContent("API");
      expect(linkThree).toHaveTextContent("Test");
    });

    it("SHOULD display the correct routeUrl WHEN routeUrl is valid", async () => {
      //arrange
      const { getByTestId } = render(MockDropdown(validRoutes));
      const button = getByTestId(buttonId);

      //act
      fireEvent.click(button);
      const linkOne = getByTestId(`${componentPrefix}link-0`);
      const linkTwo = getByTestId(`${componentPrefix}link-1`);
      const linkThree = getByTestId(`${componentPrefix}link-2`);

      //assert
      expect(linkOne).toHaveAttribute("href", "/policeAPI");
      expect(linkTwo).toHaveAttribute("href", "/policeAPI/API");
      expect(linkThree).toHaveAttribute("href", "/policeAPI/Test");
    });
  });

  describe("Dropdown with invalid props", () => {
    it("SHOULD not render the dropdown WHEN the routesArray has no valid items", async () => {
      //arrange
      const { queryByTestId } = render(MockDropdown(noValidRoutes));

      //act
      const ul = queryByTestId(`${componentPrefix}ul-container`);

      //assert
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
      const link = getAllByTestId("dropdown-li-container");
      const linkOne = getByTestId(`${componentPrefix}link-0`);

      //assert
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
      const link = getAllByTestId("dropdown-li-container");
      const linkOne = getByTestId(`${componentPrefix}link-0`);

      //assert
      expect(link).toHaveLength(1);
      expect(linkOne).toHaveAttribute("href", "/policeAPI/Test");
      expect(linkOne).toHaveTextContent("Test");
    });
  });
});
