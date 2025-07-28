import { render } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { useIsMobile } from "../../Hooks/useIsMobile";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";

jest.mock("../../Hooks/useIsMobile", () => ({
  __esModule: true,
  useIsMobile: jest.fn(),
}));

const mockUseIsMobile = useIsMobile as jest.Mock;

jest.mock("../../constants/navRoutes", () => ({
  __esModule: true,
  navRoutes: [
    { routeUrl: "#", name: "Home" },
    { routeUrl: "#", name: "API" },
    { routeUrl: "#", name: "TEST" },
  ],
}));

const MockNavBar = () => {
  const router = createMemoryRouter([
    {
      path: "/",
      element: <NavBar />,
    },
  ]);

  return <RouterProvider router={router} />;
};

describe("NavBar tests", () => {
  const componentPrefix = "nav-";

  describe("useIsMobile is true with valid routes", () => {
    it("SHOULD render mobile view WHEN isMobile is true", async () => {
      //arrange
      mockUseIsMobile.mockReturnValue(true);
      const { getByTestId } = render(<NavBar />);

      //act
      const dropdown = getByTestId(`${componentPrefix}dropdown`);

      //assert
      expect(dropdown).toBeInTheDocument();
    });
  });

  describe("useIsMobile is false with valid props", () => {
    it("SHOULD render desktop view WHEN isMobile is false", async () => {
      //arrange
      mockUseIsMobile.mockReturnValue(false);
      const { getAllByTestId } = render(MockNavBar());

      //act
      const links = getAllByTestId((testId) =>
        testId.includes(`${componentPrefix}links`)
      );

      //assert
      expect(links.length).toEqual(3);
    });

    //links have correct name
    //links have correct route
  });

  //useIsMobile is true with invalid routes
  //SHOULD render mobile view WHEN at least one route is valid
  //SHOULD not render mobile dropdown WHEN all routes are invalid

  //useIsMobile is false with invalid routes
  //SHOULD render desktop view with correct links WHEN at least one route is valid
  //SHOULD render desktop view with no links WHEN all routes are invalid
});
