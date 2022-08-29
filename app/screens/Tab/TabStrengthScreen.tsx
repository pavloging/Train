import { View, Image, Text, ScrollView } from "react-native";
import { styleTabImg } from "../../style/Tab/styleTabImg";

export default function TabStrengthScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styleTabImg.img}>
      <View style={styleTabImg.img__line}>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/biceps.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Бицепс</Text>
        </View>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/triangularis.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Трицепс</Text>
        </View>
      </View>

      <View style={styleTabImg.img__line}>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/back.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Спина</Text>
        </View>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/breast.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Грудь</Text>
        </View>
      </View>

      <View style={styleTabImg.img__line}>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/press.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Пресс</Text>
        </View>
        <View style={styleTabImg.img__box}>
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/feet.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Ноги</Text>
        </View>
      </View>
      {/* <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      /> */}
    </ScrollView>
  );
}
