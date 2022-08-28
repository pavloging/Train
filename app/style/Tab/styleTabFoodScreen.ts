import { StyleSheet } from "react-native";

export const styleTabFoodScreen = StyleSheet.create({
  food: {},
  humanData: {
    flexDirection: "row",
    width: "100%",
    marginBottom: -24,
  },
  data: {
    width: "33.333%",
    height: "600%",
    backgroundColor: "#2C2D31",
    borderWidth: 2,
    borderColor: "#1F1F1F",
  },
  dataTxt: {
    textAlign: "center",
    position: "relative",
    top: "45%",
    // alignSelf: "auto",
    color: "#DDD",
    fontSize: 14,
  },
});
