import { View, TouchableOpacity, Text } from "react-native";
import { styleTabFoodScreen } from "../../style/Tab/styleTabFood";

export default function TabFoodScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styleTabFoodScreen.food}>
      <View style={styleTabFoodScreen.humanData}>
        <View style={styleTabFoodScreen.data}>
          <Text style={styleTabFoodScreen.dataTxt}>182 см</Text>
        </View>
        <View style={styleTabFoodScreen.data}>
          <Text style={styleTabFoodScreen.dataTxt}>65 кг</Text>
        </View>
        <View style={styleTabFoodScreen.data}>
          <Text style={styleTabFoodScreen.dataTxt}>17 лет</Text>
        </View>
      </View>

      <View style={styleTabFoodScreen.planFood}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Знания", {
              headerTitle: "Сушка",
            });
          }}
          style={styleTabFoodScreen.planData}
        >
          <Text style={styleTabFoodScreen.planDataTxt}>Сушка</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Знания", {
              headerTitle: "Масса",
            });
          }}
          style={styleTabFoodScreen.planData}
        >
          <Text style={styleTabFoodScreen.planDataTxt}>Масса</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
