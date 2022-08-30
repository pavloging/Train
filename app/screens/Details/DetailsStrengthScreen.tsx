import { View, Text } from "react-native";
import { styles } from "../../style/main";

export default function DetailsStrengthScreen({ route }: { route: any }) {
  const { otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{otherParam}</Text>
    </View>
  );
}
