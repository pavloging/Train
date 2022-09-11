import {
  Feather,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { customDarkTheme } from "../style/etc/customDarkTheme";

import TabTarget from "../screens/Tab/TabTarget";
import TabFood from "../screens/Tab/TabFood";
import TabStrength from "../screens/Tab/TabStrength";
import TabSpirit from "../screens/Tab/TabSpirit";
import TabProfile from "../screens/Tab/TabProfile";

import DetalisGuideFood from "../screens/Details/DetalisGuideFood";
import DetalisTimetableFood from "../screens/Details/DetalisTimetableFood";
import DetailsStrength from "../screens/Details/DetailsStrength";
import DetailsSpirit from "../screens/Details/DetailsSpirit";

import ModalSettings from "../screens/ModalSettings";

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
        name="Назад"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="GuideFood" component={DetalisGuideFood} />
      <Stack.Screen name="TimetableFood" component={DetalisTimetableFood} />
      <Stack.Screen name="Strength" component={DetailsStrength} />
      <Stack.Screen name="Spirit" component={DetailsSpirit} />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Settings" component={ModalSettings} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="TabTarget"
      screenOptions={{
        tabBarActiveTintColor: "#00FFFF",
      }}
    >
      <BottomTab.Screen
        name="Цели"
        component={TabTarget}
        options={{
          title: "Цели",
          tabBarIcon: ({ color }) => (
            <Feather name="check-circle" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Питание"
        component={TabFood}
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
        component={TabStrength}
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
        component={TabSpirit}
        options={{
          title: "Дух",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="diamond" size={24} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Профиль"
        component={TabProfile}
        options={({ navigation }: { navigation: any }) => ({
          title: "Профиль",
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() =>
                navigation.navigate("Settings", {
                  headerTitle: "Настройки",
                })
              }
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
