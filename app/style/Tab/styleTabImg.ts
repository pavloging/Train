import { StyleSheet } from "react-native";

export const styleTabImg = StyleSheet.create({
  img: {},
  img__line: {
    flexDirection: "row",
    width: "100%",
    marginBottom: "-60%",
  },
  img__box: {
    width: "50%",
  },
  img__boxTitle: {
    textAlign: "center",
    position: "relative",
    top: "-25%",
    color: "#DDD",
    fontSize: 18,
  },
  img__boxImg: {
    borderWidth: 3,
    borderColor: "#1F1F1F",
    width: "100%",
    maxHeight: "45%",
  },
});
