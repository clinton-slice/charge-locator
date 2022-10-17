import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  StyleProp,
} from "react-native";

interface Props {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  label: string;
}

export const Button = ({ onPress, style, label }: Props) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 16,
    fontSize: 14,
    flex: 1,
    alignItems: "center",
  },
  navButton: {
    borderRightWidth: 1,
    borderRightColor: "#bfbfbf",
  },
  text: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
