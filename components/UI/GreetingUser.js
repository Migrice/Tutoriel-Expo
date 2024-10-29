import { Text, StyleSheet, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const greetingUser = () => {
  return (
    <View style={styles.greetingContainer}>
      <Text style={styles.greetingText}>Decouvrir</Text>
      <FontAwesome name="search" size={25} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  greetingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "center",
    marginTop: 50,
  },
  greetingText: {
    fontSize: 20,
    fontWeight: "semibold",
  },
});

export default greetingUser;
