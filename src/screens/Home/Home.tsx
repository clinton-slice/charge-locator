import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
  Linking,
  ActivityIndicator,
} from "react-native";
import {
  OPEN_CHARGE_API_URL,
  OPEN_CHARGE_API_KEY,
  EV_ENERGY_CHARGE,
  MAX_RESULTS,
} from "../../constants";
import Card from "../../components/Card";
import useGeolocation from "../../hooks";

const Home = () => {
  const [data, setData] = useState<any>([]);
  const [error, setError] = useState(null);

  const {
    latitude,
    longitude,
    loading,
    error: locationError,
  } = useGeolocation();

  useEffect(() => {
    if (longitude === null || latitude === null) {
      return;
    }
    axios
      .request({
        method: "GET",
        url: OPEN_CHARGE_API_URL,
        params: {
          maxresults: MAX_RESULTS,
          latitude,
          longitude,
          camelcase: true,
          key: OPEN_CHARGE_API_KEY,
        },
        headers: { "Content-Type": "application/json" },
      })
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        setError(error);
      });
  }, [latitude, longitude]);

  const handleCharge = useCallback(
    (id: number) => async () => {
      try {
        await axios.post(EV_ENERGY_CHARGE, {
          user: 1,
          car_id: 1,
          charger_id: id,
        });
      } catch (_error) {
        console.log(_error);
      }
    },
    []
  );

  const handleOnNavigate = useCallback(
    ({ latitude, longitude }: { latitude: number; longitude: number }) =>
      () => {
        var scheme = Platform.OS === "ios" ? "maps:" : "geo:";
        var url = scheme + `${latitude},${longitude}`;
        Linking.openURL(url);
      },
    [latitude, longitude]
  );

  if (loading) return <ActivityIndicator size="large" />;

  const renderItem = ({ item }: typeof data) => (
    <Card
      title={item.addressInfo.title}
      address={item.addressInfo.addressLine1}
      town={item.addressInfo.town}
      stateOrProvince={item.addressInfo.stateOrProvince}
      postcode={item.addressInfo.postcode}
      ocmNumber={item.id}
      onStartCharge={handleCharge(item.id)}
      onNavigate={handleOnNavigate({
        latitude: item.addressInfo.latitude,
        longitude: item.addressInfo.longitude,
      })}
    />
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 8,
  },
});

export default Home;
