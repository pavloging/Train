import { View, Image, Text, ScrollView } from "react-native";
import { styleTabImg } from "../../style/Tab/styleTabImg";

export default function TabSpiritScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styleTabImg.img}>
      <View style={styleTabImg.img__line}>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/morning.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Утро</Text>
        </View>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/book.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Книги</Text>
        </View>
      </View>

      <View style={styleTabImg.img__line}>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/motivation.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Мотивация</Text>
        </View>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/recovery.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Восстоновление</Text>
        </View>
      </View>

      <View style={styleTabImg.img__line}>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/sleep.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Сон</Text>
        </View>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/target.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Цели</Text>
        </View>
      </View>

      <View style={styleTabImg.img__line}>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/burnout.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Выгорание</Text>
        </View>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/game.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Игры</Text>
        </View>
      </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </ScrollView>
  );
}
