import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export default function DetalisTimetableFood() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DetalisTimetableFood</Text>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
