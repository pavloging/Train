import { View, Button, Text } from "react-native";
import { styles } from "../../style/main";

export default function TabSpiritScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <View style={styles.separator} />
      <Text>Дух</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
