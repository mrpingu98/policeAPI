import { fireEvent, render } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../Types";
import { Dropdown } from "./Dropdown";

const routes: Routes[] = [
  { routeUrl: "#", name: "Home" },
  { routeUrl: "#", name: "API" },
  { routeUrl: "#", name: "Test" },
];

const MockDropdown = () => {
  return (
    <BrowserRouter>
      <Dropdown dropdownOptions={routes} />;
    </BrowserRouter>
  );
};

describe("Dropdown tests", () => {
  const componentPrefix = "dropdown-";
  const buttonId = "dropdown-button";
  //#region dropdown closed
  it("SHOULD render the dropdown container WHEN the dropdown is closed or open", async () => {
    //arrange
    const { getByTestId } = render(MockDropdown());

    //act
    const dropdown = getByTestId(`${componentPrefix}container`);

    //assert
    expect(dropdown).toBeInTheDocument();
  });

  it("SHOULD render the button with className dropdownButtonClosed WHEN dropdown isn't open", async () => {
    //arrange
    const { getByTestId } = render(MockDropdown());

    //act
    const button = getByTestId(buttonId);

    //assert
    expect(button).toHaveClass("dropdownButtonClose");
  });

  it("SHOULD not render the ul element WHEN dropdown is closed", async () => {
    //arrange
    const { queryByTestId } = render(MockDropdown());

    //act
    const ul = queryByTestId(`${componentPrefix}ul-container`);

    //assert
    expect(ul).not.toBeInTheDocument();
  });

  it("SHOULD update the button with className dropdownButtonClosed WHEN the button is clicked twice", async () => {
    //arrange
    const { getByTestId } = render(MockDropdown());
    const button = getByTestId(buttonId);

    //act 1
    fireEvent.click(button);
    //assert 1
    expect(button).toHaveClass("dropdownButtonOpen");

    //act 2
    fireEvent.click(button);
    //assert 2
    expect(button).toHaveClass("dropdownButtonClose");
  });
  //#endregion

  //#region dropdown open
  it("SHOULD update the button className to dropdownButtonOpen WHEN dropdown is open", async () => {
    //arrange
    const { getByTestId } = render(MockDropdown());

    //act
    const button = getByTestId(buttonId);

    //assert
    fireEvent.click(button);
    expect(button).toHaveClass("dropdownButtonOpen");
  });

  it("SHOULD display the ul element WHEN dropdown is open", async () => {
    //arrange
    const { getByTestId } = render(MockDropdown());

    //act
    const button = getByTestId(buttonId);

    //assert
    fireEvent.click(button);
    const ul = getByTestId(`${componentPrefix}ul-container`);
    expect(ul).toBeInTheDocument();
  });

  it("SHOULD display the correct amount of links on the dropdown WHEN the dropdown is open", async () => {
    //arrange
    const { getByTestId, getAllByTestId } = render(MockDropdown());

    //act
    const button = getByTestId(buttonId);

    //assert
    fireEvent.click(button);
    const link = getAllByTestId(/dropdown-link-\d+/);
    expect(link).toHaveLength(3);
  });

  it("SHOULD display the correct name for the Link WHEN the dropdown is open", async () => {
    //arrange
    const { getByTestId } = render(MockDropdown());

    //act
    const button = getByTestId(buttonId);

    //assert
    fireEvent.click(button);
    const link = getByTestId(`${componentPrefix}link-1`);
    expect(link).toHaveTextContent("API");
  });

  //#endregion
});
