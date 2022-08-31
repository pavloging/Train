// import { StyleSheet } from "react-native";

// export const styleDetailsStrengthScreen = StyleSheet.create({
// img: {},
// img__box: {
// width: "100%",
// height: "100%",
// marginBottom: "-60%",
// },
// img__boxImg: {
// borderWidth: 3,
// borderLeftWidth: 0,
// borderColor: "#1F1F1F",
// width: "100%",
// height: "50%",
// },
// img__text: {
// flexDirection: "row",
// alignItems: "center",
// position: "relative",
// top: "-55%",
// marginLeft: 12,
// },
// img__title: {
// color: "#DDDDDD",
// marginRight: 5,
// },
// });

import { StyleSheet } from "react-native";

export const styleDetailsStrengthScreen = StyleSheet.create({
  img: {},
  img__box: {
    marginBottom: "-55%",
  },
  img__boxImg: {
    position: "relative",
    top: "-5%",
    width: "100%",
    maxHeight: "55%",
  },
  img__text: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
    top: "4%",
    zIndex: 10,
    marginLeft: 12,
  },
  img__title: {
    color: "#DDDDDD",
    fontSize: 14,
    marginRight: 5,
  },
});
