import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect } from "react";

export default function DetalisTimetableFood({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { headerTitle } = route.params;

  // Rerender after headerTitle change
  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [headerTitle, navigation]);
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
