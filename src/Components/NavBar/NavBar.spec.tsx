import { render } from "@testing-library/react";
import { NavBar } from "./NavBar";
import { useIsMobile } from "../../Hooks/useIsMobile";
import React from "react";

jest.mock("../../Hooks/useIsMobile", () => ({
  //this is saying we want to mock the whole module defined here
  //so useIsMobile file is now 'mockable'
  __esModule: true,
  //JS modules can be in two types (CommonJS/ES)
  //ES Modules use export/import
  //if code imports a ES module default export, need to tell Jest this
  useIsMobile: jest.fn(),
  //the constant exported is 'useIsMobile' - and this is a function that spits out true/false based on the screen size
  //as it's a function, we have to say 'hey, we want to mock this function'
  //if the module just returned a const/value, then we wouldn't need this bit
  //so we are saying that we want to mock the function that is returned from this mocked module
}));

describe("NavBar mobile tests", () => {
  const componentPrefix = "nav-";
  const mockUseIsMobile = useIsMobile as jest.Mock;
  //useIsMobile is still picked up by TS normally with it's import - as the normal default function that returns a boolean
  //so we have to tell TS to 'view' it as a mock-type at runtime
  //jest.Mock is the general type used to define something as a mock

  it("SHOULD render mobile view WHEN isMobile is true", async () => {
    //arrange
    mockUseIsMobile.mockReturnValue(true);
    //So the module has been mocked, and the default function exported within it has been mocked
    //we can now reference this mocked function, and apply various 'mock methods' on the item
    const { getByTestId } = render(<NavBar />);

    //act
    const dropdown = getByTestId(`${componentPrefix}dropdown`);

    //assert
    expect(dropdown).toBeInTheDocument();
  });
});
