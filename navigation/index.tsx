import { Feather, FontAwesome } from "@expo/vector-icons";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabOneScreen from "../screens/Tab/TabOneScreen";
import TabTwoScreen from "../screens/Tab/TabTwoScreen";
import TabThreeScreen from "../screens/Tab/TabThreeScreen";
import TabFourScreen from "../screens/Tab/TabFourScreen";
import TabHomesScreen from "../screens/Tab/TabHomeScreen";

import DetailsScreen from "../screens/DetailsScreen";
import ModalScreen from "../screens/ModalScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */

//Icon set - https://icons.expo.fyi/

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
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="TabOne">
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeScreen}
        options={{
          title: "Tab Three",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabFourScreen}
        options={{
          title: "Tab Four",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabHomeScreen"
        component={TabHomesScreen}
        options={({ navigation }: { navigation: any }) => ({
          title: "Tab Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <Feather
                name="settings"
                size={24}
                color="black"
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
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
