import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { styleTabImg } from "../../style/Tab/styleTabImg";

export default function TabSpiritScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styleTabImg.img}>
      <View style={styleTabImg.img__line}>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Знания", {
              otherParam: "Утро",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/morning.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Утро</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Знания", {
              otherParam: "Книги",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/book.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Книги</Text>
        </TouchableOpacity>
      </View>

      <View style={styleTabImg.img__line}>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Знания", {
              otherParam: "Мотивация",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/motivation.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Мотивация</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Знания", {
              otherParam: "Восстоновление",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/recovery.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Восстоновление</Text>
        </TouchableOpacity>
      </View>

      <View style={styleTabImg.img__line}>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Знания", {
              otherParam: "Сон",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/sleep.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Сон</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Знания", {
              otherParam: "Цели",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/target.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Цели</Text>
        </TouchableOpacity>
      </View>

      <View style={styleTabImg.img__line}>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Знания", {
              otherParam: "Выгорание",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/burnout.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Выгорание</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Знания", {
              otherParam: "Игры",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabSpiritScreen/game.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Игры</Text>
        </TouchableOpacity>
      </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </ScrollView>
  );
}
