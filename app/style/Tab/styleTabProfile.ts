import { StyleSheet } from "react-native";

export const styleTabProfileScreen = StyleSheet.create({
  profile__data: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    marginHorizontal: 16,
    marginTop: 12,
  },
  profile__avatar: {},
  profile__text: {
    justifyContent: "center",
    marginTop: 12,
    marginRight: 6,
  },
  profile__title: {
    color: "#DDDDDD",
    marginBottom: 12,
  },
  profile__divider: {
    backgroundColor: "#DDDDDD",
    margin: 24,
  },
});
