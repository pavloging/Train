import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
} from "react-native";

export default function DetailsSpiritScreen({ route }: { route: any }) {
  const { otherParam } = route.params;
  return (
    <View>
      <Text
        style={{
          color: "#DDD",
          fontSize: 18,
          textAlign: "center",
          marginTop: 24,
        }}
      >
        {otherParam}
      </Text>
    </View>
  );
}
