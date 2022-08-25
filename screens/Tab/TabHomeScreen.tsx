import { Text, View } from "react-native";
import { styles } from "../../modal/main";

export default function TabHomesScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Home</Text>
      <View style={styles.separator} />
    </View>
  );
}
