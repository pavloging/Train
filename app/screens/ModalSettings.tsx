import { Feather, Ionicons, FontAwesome, AntDesign } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Platform, Touchable, TouchableOpacity } from "react-native";

import { useEffect } from "react";

import { Text, View } from "react-native";
import { StyleSheet } from "react-native";

export default function ModalSettingsScreen({
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

  const colorIcon = "#00FFFF";
  const colorArrow = "#b4b4b4";

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Feather style={styles.icon} name="user" size={24} color={colorIcon} />
        <Text style={styles.text}>Аккаунт</Text>
        <Feather
          style={styles.arrow}
          name="arrow-right-circle"
          size={24}
          color={colorArrow}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Ionicons
          style={{ marginLeft: 12 }}
          name="notifications-outline"
          size={24}
          color={colorIcon}
        />
        <Text style={styles.text}>Уведомления</Text>
        <Feather
          style={styles.arrow}
          name="arrow-right-circle"
          size={24}
          color={colorArrow}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <AntDesign
          style={{ marginLeft: 12 }}
          name="questioncircleo"
          size={24}
          color={colorIcon}
        />
        <Text style={styles.text}>О нас</Text>
        <Feather
          style={styles.arrow}
          name="arrow-right-circle"
          size={24}
          color={colorArrow}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <AntDesign
          style={{ marginLeft: 12 }}
          name="logout"
          size={24}
          color="red"
        />
        <Text style={{ color: "red", fontWeight: "600", fontSize: 16 }}>
          Выйти
        </Text>
        <Feather
          style={styles.arrow}
          name="arrow-right-circle"
          size={24}
          color="#2a2a2a"
        />
      </TouchableOpacity>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 48,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "80%",
    padding: "2%",
    borderRadius: 6,
    backgroundColor: "#2a2a2a",
    marginBottom: 12,
  },
  icon: {
    marginLeft: 12,
  },
  text: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  arrow: {
    marginRight: 12,
  },
});
