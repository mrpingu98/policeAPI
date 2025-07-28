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

const MockNavBar = () => {
  const router = createMemoryRouter([
    {
      path: "/",
      element: <NavBar />,
    },
  ]);

  return <RouterProvider router={router} />;
};

describe("NavBar mobile tests", () => {
  const componentPrefix = "nav-";

  describe("useIsMobile is true with valid props", () => {
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
      expect(links.length).toBeGreaterThan(0);
    });
  });
});
