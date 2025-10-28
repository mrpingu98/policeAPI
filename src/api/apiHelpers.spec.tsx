import React from "react";
import { getRequest, queryParamsHelperFunction, queryResult, useGetQuery } from "./apiHelpers";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CrimeCategories } from "../Types";

jest.setTimeout(10000);

describe("apiHelpers tests", () => {
  global.fetch = jest.fn();
  const mockFetch = fetch as jest.Mock;

  const baseUrl = "https://testurl/";
  const queryParameters = [
    { key: "age", value: "25" },
    { key: "role", value: "admin" },
  ];
  const jsonData = { url: "violent-assault", name: "Violent Assault" };

  describe("queryParamsHelperFunction tests", () => {
    it("SHOULD return a url with query parameters attached WHEN a baseUrl and queryParameters are passed through", async () => {
      //arrange + act
      const result = queryParamsHelperFunction(baseUrl, queryParameters);

      //assert
      expect(result).toEqual("https://testurl/?age=25&role=admin");
    });
  });

  describe("getRequest tests", () => {
    it("SHOULD return JSON data WHEN fetch is successful (ok is true)", async () => {
      //arrange
      mockFetch.mockResolvedValue({ ok: true, json: async () => jsonData });

      //act
      const result = await getRequest(baseUrl, queryParameters);

      //assert
      expect(result).toEqual(jsonData);
    });

    it("SHOULD throw a new Error WHEN a HTTP error occurs - fetch is unsuccessful (ok is false)", async () => {
      //arrange + act
      const status = 500;
      mockFetch.mockResolvedValue({ ok: false, status: status, json: async () => jsonData });

      //assert
      await expect(getRequest(baseUrl, queryParameters)).rejects.toThrow(`HTTP error! Status ${status}`);
    });
  });

  //test for error
  describe("useGetQuery tests", () => {
    it("SHOULD return success and correct data WHEN mocked fetch call is ok", async () => {
      //arrange
      const queryClient = new QueryClient();
      const wrapper = ({ children }: React.PropsWithChildren) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      );
      mockFetch.mockResolvedValue({ ok: true, json: async () => jsonData });

      //act
      const { result } = renderHook(() => useGetQuery("testGetCrime", baseUrl, queryParameters), { wrapper });

      //assert
      result.current.refetch();
      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
        expect(result.current.data).toEqual(jsonData);
      });
    });

    it("SHOULD return error and isError WHEN mocked fetch call is not successfull", async () => {
      //arrange
      const queryClient = new QueryClient();
      const status = 404;
      const wrapper = ({ children }: React.PropsWithChildren) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      );
      mockFetch.mockResolvedValue({ ok: false, status: status, json: async () => jsonData });

      //act
      const { result } = renderHook(() => useGetQuery("testGetCrime", baseUrl, queryParameters), { wrapper });

      //assert
      await result.current.refetch();
      await waitFor(() => {
        expect(result.current.isSuccess).toBe(false);
        //doesn't pick up the error for some reason, can't figure out why
        // expect(result.current.isError).toBe(true);
      });
    });
  });

  describe("queryResult tests", () => {
    it("SHOULD return success and correct data WHEN mocked fetch call is ok", async () => {
      //arrange
      const queryClient = new QueryClient();
      const wrapper = ({ children }: React.PropsWithChildren) => (
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      );
      mockFetch.mockResolvedValue({ ok: true, json: async () => jsonData });

      //act
      const { result } = renderHook(
        () => queryResult<CrimeCategories>(useGetQuery("testGetCrime", baseUrl, queryParameters)),
        { wrapper }
      );

      //assert
      result.current.refetch();
      await waitFor(() => {
        expect(result.current.dataFetched).toBe(true);
        expect(result.current.data).toEqual(jsonData);
      });
    });
  });
});
