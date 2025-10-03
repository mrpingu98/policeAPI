import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Map from "./Map";
import { MapProps } from "../../Interfaces";

const mockSetLatLng = jest.fn();

const validProps: MapProps = {
  setLatitudeLongitude: mockSetLatLng,
};

const renderComponent = () => render(<Map {...validProps} />);

describe("Map tests", () => {
  const componentPrefix = "map";
  describe("Valid props", () => {
    it("SHOULD render the map WHEN the page loads", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const map = getByTestId(componentPrefix);

      //assert
      expect(map).toBeInTheDocument();
    });

    it("SHOULD call the setState WHEN user clicks the map", async () => {
      //arrange
      const { getByTestId } = renderComponent();

      //act
      const map = getByTestId(componentPrefix);
      fireEvent.click(map);

      //assert
      expect(mockSetLatLng).toHaveBeenCalled();
    });
  });
});
