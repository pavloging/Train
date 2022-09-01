import { useEffect } from "react";
import { View, Text, ScrollView } from "react-native";

export default function DetailsSpiritScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { headerTitle, title, text } = route.params;
  // Rerender after headerTitle change
  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [headerTitle, navigation]);
  return (
    <ScrollView>
      <View
        style={{
          marginHorizontal: "5%",
        }}
      >
        <Text
          style={{
            color: "#DDD",
            fontSize: 12,
            marginTop: 24,
          }}
        >
          {title}
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: "5%",
          paddingBottom: "10%",
        }}
      >
        <Text
          style={{
            color: "#FFF",
            fontSize: 14,
            marginTop: 24,
          }}
        >
          {text}
        </Text>
      </View>
    </ScrollView>
  );
}
