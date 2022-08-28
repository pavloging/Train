import { View, Button, Text } from "react-native";
import { styleTabFoodScreen } from "../../style/Tab/styleTabFoodScreen";

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
    </View>
  );
}
