import { renderHook } from "@testing-library/react-hooks";
import { useMediaQuery } from "hooks/useMediaQuery";

test("should return true if window width is greater than 768px", () => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  const { result } = renderHook(() => useMediaQuery("(min-width: 769px)"));

  expect(result.current).toBe(true);
});
