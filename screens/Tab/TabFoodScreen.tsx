import { View, Button } from "react-native";
import { styles } from "../../style/main";

export default function TabFoodScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
