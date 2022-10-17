import { renderHook } from "@testing-library/react-hooks";
import useGeoLocation from "./useGeolocation";

import "expo-location";

jest.mock("expo-location", () => {
  return {
    requestForegroundPermissionsAsync: () => {
      return {
        status: "granted",
      };
    },
    getCurrentPositionAsync: () => {
      return {
        coords: { longitude: 1, latitude: -8 },
      };
    },
  };
});

describe("useGeoLocation", () => {
  test("return location object", () => {
    const {
      result: { current },
    } = renderHook(() => useGeoLocation());

    expect(current).toEqual({
      error: null,
      latitude: null,
      loading: true,
      longitude: null,
    });
  });
});
