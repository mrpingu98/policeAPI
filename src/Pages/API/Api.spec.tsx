import { fireEvent, render } from "@testing-library/react";
import Api from "./Api";
import React from "react";
import Map from "../../Components/Map/Map";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

jest.mock("../../Components/Map/Map");

// const renderRelatedContentItem = () => render(<Api />);
const queryClient = new QueryClient();
const wrapper = ({ children }: React.PropsWithChildren) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("Api page tests", () => {
  it("SHOULD update the latitudeLongitude displayed to the user WHEN the map is clicked", async () => {
    //arrange
    const { getByTestId } = render(<Api />, { wrapper });

    //act
    const map = getByTestId("mock-map");
    fireEvent.click(map);
    const latLngDisplayed = getByTestId("lat-lng-display");

    //assert
    expect(latLngDisplayed).toHaveTextContent("Latitude: 57.56789, Longitude: 93.12345");
  });

  it("SHOULD enable the submit button WHEN a date and latlng are selected", async () => {
    //arrange
    const { getByTestId } = render(<Api />, { wrapper });
    const submitButton = getByTestId("submit-button");
    expect(submitButton).toBeDisabled();

    //act
    const map = getByTestId("mock-map");
    fireEvent.click(map);

    const datePicker = getByTestId("date-picker-month");
    fireEvent.change(datePicker, { target: { value: "2025-08" } });

    //assert
    expect(submitButton).not.toBeDisabled();
  });
});
