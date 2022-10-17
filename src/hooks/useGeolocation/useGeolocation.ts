import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from "expo-location";

const useGeolocation = () => {
  const [loading, setLoading] = useState(true);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setLoading(false);
        setError("Permission to access location was denied");
        return;
      }

      let location = await getCurrentPositionAsync({});
      setLoading(false);
      setLongitude(location.coords.longitude);
      setLatitude(location.coords.latitude);
    })();
  }, []);

  return { loading, latitude, longitude, error };
};

export default useGeolocation;
