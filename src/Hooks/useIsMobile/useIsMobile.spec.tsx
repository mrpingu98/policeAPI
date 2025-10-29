import { useIsMobile } from "./useIsMobile";
import { renderHook } from "@testing-library/react";

describe("useIsMobile tests", () => {
  const setInnerWidth = (width: number) => {
    return Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: width });
  };

  it("SHOULD return true WHEN width of screen is less than 450", async () => {
    //arrange + act
    setInnerWidth(300);
    const { result } = renderHook(() => useIsMobile());

    //assert
    expect(result.current).toBe(true);
  });

  it("SHOULD return true WHEN width of screen is equal to 450", async () => {
    //arrange + act
    setInnerWidth(450);
    const { result } = renderHook(() => useIsMobile());

    //assert
    expect(result.current).toBe(true);
  });

  it("SHOULD return false WHEN width of screen is greater than 450", async () => {
    //arrange + act
    setInnerWidth(500);
    const { result } = renderHook(() => useIsMobile());

    //assert
    expect(result.current).toBe(false);
  });
});
