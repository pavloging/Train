import { View, Image, Text, ScrollView } from "react-native";
import { styleTabSpiritScreen } from "../../style/Tab/styleTabSpiritScreen";

export default function TabSpiritScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styleTabSpiritScreen.spirit}>
      <View style={styleTabSpiritScreen.spirit__pairImages}>
        <View style={styleTabSpiritScreen.spirit__block}>
          <Image
            style={styleTabSpiritScreen.spirit__blockImg}
            source={require("../../assets/images/TabSpiritScreen/morning.jpg")}
          />
          <Text style={styleTabSpiritScreen.spirit__blockTxt}>Утро</Text>
        </View>
        <View style={styleTabSpiritScreen.spirit__block}>
          <Image
            style={styleTabSpiritScreen.spirit__blockImg}
            source={require("../../assets/images/TabSpiritScreen/book.jpg")}
          />
          <Text style={styleTabSpiritScreen.spirit__blockTxt}>Книги</Text>
        </View>
      </View>

      <View style={styleTabSpiritScreen.spirit__pairImages}>
        <View style={styleTabSpiritScreen.spirit__block}>
          <Image
            style={styleTabSpiritScreen.spirit__blockImg}
            source={require("../../assets/images/TabSpiritScreen/motivation.jpg")}
          />
          <Text style={styleTabSpiritScreen.spirit__blockTxt}>Мотивация</Text>
        </View>
        <View style={styleTabSpiritScreen.spirit__block}>
          <Image
            style={styleTabSpiritScreen.spirit__blockImg}
            source={require("../../assets/images/TabSpiritScreen/recovery.jpg")}
          />
          <Text style={styleTabSpiritScreen.spirit__blockTxt}>
            Восстоновление
          </Text>
        </View>
      </View>

      <View style={styleTabSpiritScreen.spirit__pairImages}>
        <View style={styleTabSpiritScreen.spirit__block}>
          <Image
            style={styleTabSpiritScreen.spirit__blockImg}
            source={require("../../assets/images/TabSpiritScreen/sleep.jpg")}
          />
          <Text style={styleTabSpiritScreen.spirit__blockTxt}>Сон</Text>
        </View>
        <View style={styleTabSpiritScreen.spirit__block}>
          <Image
            style={styleTabSpiritScreen.spirit__blockImg}
            source={require("../../assets/images/TabSpiritScreen/target.jpg")}
          />
          <Text style={styleTabSpiritScreen.spirit__blockTxt}>Цели</Text>
        </View>
      </View>

      <View style={styleTabSpiritScreen.spirit__pairImages}>
        <View style={styleTabSpiritScreen.spirit__block}>
          <Image
            style={styleTabSpiritScreen.spirit__blockImg}
            source={require("../../assets/images/TabSpiritScreen/burnout.jpg")}
          />
          <Text style={styleTabSpiritScreen.spirit__blockTxt}>Выгорание</Text>
        </View>
        <View style={styleTabSpiritScreen.spirit__block}>
          <Image
            style={styleTabSpiritScreen.spirit__blockImg}
            source={require("../../assets/images/TabSpiritScreen/game.jpg")}
          />
          <Text style={styleTabSpiritScreen.spirit__blockTxt}>Игры</Text>
        </View>
      </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </ScrollView>
  );
}
