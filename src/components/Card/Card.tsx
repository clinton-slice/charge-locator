import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Button from "../Button";

interface Props {
  title: string;
  address: string;
  town: string;
  stateOrProvince: string;
  ocmNumber: string;
  postcode: string;
  onNavigate: () => void;
  onStartCharge: () => Promise<void>;
}

export const Card = ({
  ocmNumber,
  title,
  address,
  stateOrProvince,
  town,
  postcode,
  onNavigate,
  onStartCharge,
}: Props) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <View style={styles.contentContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text>OCM-{ocmNumber}</Text>
        <Text>{address}</Text>
        <Text>
          {town}, {stateOrProvince} {postcode}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          onPress={onNavigate}
          label="Navigate"
          style={styles.navButton}
        />
        <Button onPress={onStartCharge} label="Start Charging" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#bfbfbf",
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "white",
    width: "100%",
    marginVertical: 10,
  },
  contentContainer: {
    padding: 16,
    borderBottomColor: "#bfbfbf",
    borderBottomWidth: 1,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
  },
  navButton: {
    borderRightWidth: 1,
    borderRightColor: "#bfbfbf",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  header: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
