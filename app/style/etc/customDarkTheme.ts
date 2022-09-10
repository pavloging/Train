import { DarkTheme } from "@react-navigation/native";

export const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: "#1F1F1F",
    card: "#1F1F1F",
    text: "#DDDDDD",
  },
};

/**
 * Default topic
    primary: 'rgb(255, 45, 85)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
 *
**/
