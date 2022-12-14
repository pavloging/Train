import { StyleSheet } from "react-native";

export const styleTabFoodScreen = StyleSheet.create({
  food: {},
  name: {
    width: "100%",
    paddingVertical: 12,
    backgroundColor: "#2C2D31",
    borderWidth: 2,
    borderColor: "#1F1F1F",
  },
  nameInput: {
    paddingVertical: 6,
    textAlign: "center",
    color: "#DDD",
    fontSize: 14,
    minHeight: "5%",
  },

  humanData: {
    flexDirection: "row",
  },
  data: {
    width: "33.333%",
    minHeight: "25%",
    backgroundColor: "#2C2D31",
    borderWidth: 2,
    borderColor: "#1F1F1F",
  },
  dataInput: {
    position: "relative",
    top: "35%",
    textAlign: "center",
    color: "#DDD",
    fontSize: 14,
    backgroundColor: "#1F1F1F",
    minHeight: "5%",
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
    minHeight: "18%",
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

  timetableFood: {},
  timetableFoodLink: {
    display: "flex",
    justifyContent: "center",
    minHeight: "12%",
    backgroundColor: "#2C2D31",
    borderWidth: 2,
    borderColor: "#1F1F1F",
  },
  timetableFoodTxt: {
    textAlign: "center",
    color: "#DDD",
    fontSize: 14,
  },

  balanceLink: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "12%",
    backgroundColor: "#2C2D31",
    borderWidth: 2,
    borderColor: "#1F1F1F",
  },
  balanceMinus: {
    marginRight: 12,
  },
  balancePlus: {
    marginLeft: 12,
  },
  balanceTxt: {
    textAlign: "center",
    color: "#DDD",
    fontSize: 14,
  },
});
