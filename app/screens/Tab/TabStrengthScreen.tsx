import { View, Image, Text, ScrollView } from "react-native";
import { styleTabStrengthScreen } from "../../style/Tab/styleTabStrengthScreen";

export default function TabStrengthScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styleTabStrengthScreen.strength}>
      <View style={styleTabStrengthScreen.strength__pairImages}>
        <View style={styleTabStrengthScreen.strength__block}>
          <Image
            style={styleTabStrengthScreen.strength__blockImg}
            source={require("../../assets/images/TabStrengthScreen/biceps.jpg")}
          />
          <Text style={styleTabStrengthScreen.strength__blockTxt}>Бицепс</Text>
        </View>
        <View style={styleTabStrengthScreen.strength__block}>
          <Image
            style={styleTabStrengthScreen.strength__blockImg}
            source={require("../../assets/images/TabStrengthScreen/triangularis.jpg")}
          />
          <Text style={styleTabStrengthScreen.strength__blockTxt}>Трицепс</Text>
        </View>
      </View>

      <View style={styleTabStrengthScreen.strength__pairImages}>
        <View style={styleTabStrengthScreen.strength__block}>
          <Image
            style={styleTabStrengthScreen.strength__blockImg}
            source={require("../../assets/images/TabStrengthScreen/back.jpg")}
          />
          <Text style={styleTabStrengthScreen.strength__blockTxt}>Спина</Text>
        </View>
        <View style={styleTabStrengthScreen.strength__block}>
          <Image
            style={styleTabStrengthScreen.strength__blockImg}
            source={require("../../assets/images/TabStrengthScreen/breast.jpg")}
          />
          <Text style={styleTabStrengthScreen.strength__blockTxt}>Грудь</Text>
        </View>
      </View>

      <View style={styleTabStrengthScreen.strength__pairImages}>
        <View style={styleTabStrengthScreen.strength__block}>
          <Image
            style={styleTabStrengthScreen.strength__blockImg}
            source={require("../../assets/images/TabStrengthScreen/press.jpg")}
          />
          <Text style={styleTabStrengthScreen.strength__blockTxt}>Пресс</Text>
        </View>
        <View style={styleTabStrengthScreen.strength__block}>
          <Image
            style={styleTabStrengthScreen.strength__blockImg}
            source={require("../../assets/images/TabStrengthScreen/feet.jpg")}
          />
          <Text style={styleTabStrengthScreen.strength__blockTxt}>Ноги</Text>
        </View>
      </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </ScrollView>
  );
}
