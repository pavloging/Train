import { Text, View, Button } from "react-native";
import { styles } from "../../modal/main";

export default function TabFourScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Four</Text>
      <View style={styles.separator} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
