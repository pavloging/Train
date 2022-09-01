import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
} from "react-native";
import { styleDetailsStrengthScreen } from "../../style/Detalis/styleDetailsStrengthScreen";
import { AntDesign } from "@expo/vector-icons";
import { useEffect } from "react";

export default function DetailsStrengthScreen({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { headerTitle, linkEasy, linkDifficult, linkHard } = route.params;

  // Rerender after headerTitle change
  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [headerTitle, navigation]);

  return (
    <ScrollView style={styleDetailsStrengthScreen.img}>
      <TouchableOpacity
        style={styleDetailsStrengthScreen.img__box}
        onPress={() => {
          Linking.openURL(linkEasy).catch((err) =>
            console.error("An error occurred", err)
          );
        }}
      >
        <View style={styleDetailsStrengthScreen.img__text}>
          <Text style={styleDetailsStrengthScreen.img__title}>
            Уровень сложности
          </Text>
          <AntDesign name="star" size={24} color="#00FFFF" />
          <AntDesign name="staro" size={24} color="#00FFFF" />
          <AntDesign name="staro" size={24} color="#00FFFF" />
        </View>
        <Image
          style={styleDetailsStrengthScreen.img__boxImg}
          source={require("../../assets/images/TabStrengthScreen/lvl/easy.jpg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styleDetailsStrengthScreen.img__box}
        onPress={() => {
          Linking.openURL(linkDifficult).catch((err) =>
            console.error("An error occurred", err)
          );
        }}
      >
        <View style={styleDetailsStrengthScreen.img__text}>
          <Text style={styleDetailsStrengthScreen.img__title}>
            Уровень сложности
          </Text>
          <AntDesign name="star" size={24} color="#00FFFF" />
          <AntDesign name="star" size={24} color="#00FFFF" />
          <AntDesign name="staro" size={24} color="#00FFFF" />
        </View>
        <Image
          style={styleDetailsStrengthScreen.img__boxImg}
          source={require("../../assets/images/TabStrengthScreen/lvl/difficult.jpg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styleDetailsStrengthScreen.img__box}
        onPress={() => {
          Linking.openURL(linkHard).catch((err) =>
            console.error("An error occurred", err)
          );
        }}
      >
        <View style={styleDetailsStrengthScreen.img__text}>
          <Text style={styleDetailsStrengthScreen.img__title}>
            Уровень сложности
          </Text>
          <AntDesign name="star" size={24} color="#00FFFF" />
          <AntDesign name="star" size={24} color="#00FFFF" />
          <AntDesign name="star" size={24} color="#00FFFF" />
        </View>
        <Image
          style={styleDetailsStrengthScreen.img__boxImg}
          source={require("../../assets/images/TabStrengthScreen/lvl/hard.jpg")}
        />
      </TouchableOpacity>
    </ScrollView>
  );
}
