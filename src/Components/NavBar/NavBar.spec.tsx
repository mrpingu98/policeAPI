import { render } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { useIsMobile } from "../../Hooks/useIsMobile/useIsMobile";
import React from "react";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
// import { navRoutes } from "../../constants/navRoutes";

jest.mock("../../Hooks/useIsMobile/useIsMobile", () => ({
  __esModule: true,
  useIsMobile: jest.fn(),
}));

const mockUseIsMobile = useIsMobile as jest.Mock;

jest.mock("../../constants/navRoutes", () => ({
  __esModule: true,
  navRoutes: [
    { routeUrl: "/", name: "Home" },
    { routeUrl: "/API", name: "API" },
    { routeUrl: "/TEST", name: "TEST" },
    { routeUrl: "  ", name: "A" },
    { routeUrl: "B", name: "" },
  ],
}));

// const mockNavRoutes = navRoutes as jest.Mock

// const validRoutes =
// [
//     { routeUrl: "/", name: "Home" },
//     { routeUrl: "/API", name: "API" },
//     { routeUrl: "/TEST", name: "TEST" },
//     { routeUrl: "  ", name: "A" },
//     { routeUrl: "B", name: "" },
//   ],

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

  describe("useIsMobile is true", () => {
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

  describe("useIsMobile is false", () => {
    it("SHOULD render desktop view WHEN isMobile is false", async () => {
      //arrange
      mockUseIsMobile.mockReturnValue(false);
      const { getAllByTestId } = render(MockNavBar());

      //act
      const links = getAllByTestId((testId) => testId.includes(`${componentPrefix}links`));

      //assert
      expect(links.length).toEqual(3);
    });
    it("SHOULD render desktop view with correct links WHEN isMobile is false", async () => {
      //arrange
      mockUseIsMobile.mockReturnValue(false);
      const { getByTestId } = render(MockNavBar());

      //act
      const linkOne = getByTestId(`${componentPrefix}links-0`);
      const linkTwo = getByTestId(`${componentPrefix}links-1`);
      const linkThree = getByTestId(`${componentPrefix}links-2`);

      //assert
      expect(linkOne).toHaveTextContent("Home");
      expect(linkOne).toHaveAttribute("href", "/");
      expect(linkTwo).toHaveTextContent("API");
      expect(linkTwo).toHaveAttribute("href", "/API");
      expect(linkThree).toHaveTextContent("TEST");
      expect(linkThree).toHaveAttribute("href", "/TEST");
    });
  });
});
