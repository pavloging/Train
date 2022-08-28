import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { customDarkTheme } from "../style/customDarkTheme";

import TabTargetScreen from "../screens/Tab/TabTargetScreen";
import TabFoodScreen from "../screens/Tab/TabFoodScreen";
import TabStrengthScreen from "../screens/Tab/TabStrengthScreen";
import TabSpiritScreen from "../screens/Tab/TabSpiritScreen";
import TabProfileScreen from "../screens/Tab/TabProfileScreen";

import DetailsScreen from "../screens/DetailsScreen";
import ModalSettingsScreen from "../screens/ModalSettingsScreen";

export default function Navigation() {
  return (
    <NavigationContainer theme={customDarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Настройки" component={ModalSettingsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabTargetScreen"
      screenOptions={{
        tabBarActiveTintColor: "#00FFFF",
      }}
    >
      <BottomTab.Screen
        name="Цели"
        component={TabTargetScreen}
        options={{
          title: "Цели",
          tabBarIcon: ({ color }) => (
            <Feather name="check-circle" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Питание"
        component={TabFoodScreen}
        options={{
          title: "Питание",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Сила"
        component={TabStrengthScreen}
        options={{
          title: "Сила",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="lightning-bolt-circle"
              size={24}
              color={color}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Дух"
        component={TabSpiritScreen}
        options={{
          title: "Дух",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="diamond" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Профиль"
        component={TabProfileScreen}
        options={({ navigation }: { navigation: any }) => ({
          title: "Профиль",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Настройки")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Feather
                name="settings"
                size={24}
                color="#00FFFF"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
