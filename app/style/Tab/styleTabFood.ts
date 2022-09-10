// import { StyleSheet } from "react-native";

// export const styleTabFoodScreen = StyleSheet.create({
//   food: {},
//   humanData: {
//     flexDirection: "row",
//     width: "100%",
//     marginBottom: -24,
//   },
//   data: {
//     width: "33.333%",
//     height: "600%",
//     backgroundColor: "#2C2D31",
//     borderWidth: 2,
//     borderColor: "#1F1F1F",
//   },
//   dataTxt: {
//     textAlign: "center",
//     position: "relative",
//     top: "45%",
//     // alignSelf: "auto",
//     color: "#DDD",
//     fontSize: 14,
//   },
// });

import { StyleSheet } from "react-native";

export const styleTabFoodScreen = StyleSheet.create({
  food: {},

  humanData: {
    flexDirection: "row",
  },
  data: {
    width: "33.333%",
    minHeight: "35%",
    backgroundColor: "#2C2D31",
    borderWidth: 2,
    borderColor: "#1F1F1F",
  },
  dataTxt: {
    position: "relative",
    top: "40%",
    textAlign: "center",
    color: "#DDD",
    fontSize: 14,
  },

  planFood: {
    flexDirection: "row",
  },
  planData: {
    width: "50%",
    minHeight: "25%",
    backgroundColor: "#2C2D31",
    borderWidth: 2,
    borderColor: "#1F1F1F",
  },
  planDataTxt: {
    position: "relative",
    top: "40%",
    textAlign: "center",
    color: "#DDD",
    fontSize: 14,
  },
});