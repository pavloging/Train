import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import { useState } from "react";
import { Switch } from "react-native-paper";

import { Text, View, Button } from "react-native";
import { styles } from "../modal/main";

export default function ModalSettingsScreen({
  navigation,
}: {
  navigation: any;
}) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Настройки</Text>
      <View style={styles.separator} />
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
      <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
