import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  Image,
  ScrollView,
} from "react-native";
import { styleDetailsStrengthScreen } from "../../style/Detalis/styleDetailsStrengthScreen";

export default function DetailsStrengthScreen({ route }: { route: any }) {
  const { otherParam, linkYouTube } = route.params;
  return (
    <View style={styleDetailsStrengthScreen.img}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(linkYouTube).catch((err) =>
            console.error("An error occurred", err)
          );
        }}
      >
        <Image
          style={styleDetailsStrengthScreen.img__boxImg}
          source={require("../../assets/images/TabStrengthScreen/lvl/easy.jpg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(linkYouTube).catch((err) =>
            console.error("An error occurred", err)
          );
        }}
      >
        <Image
          style={styleDetailsStrengthScreen.img__boxImg}
          source={require("../../assets/images/TabStrengthScreen/lvl/difficult.jpg")}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          Linking.openURL(linkYouTube).catch((err) =>
            console.error("An error occurred", err)
          );
        }}
      >
        <Image
          style={styleDetailsStrengthScreen.img__boxImg}
          source={require("../../assets/images/TabStrengthScreen/lvl/hard.jpg")}
        />
      </TouchableOpacity>

      <Text style={styleDetailsStrengthScreen.img__title}>{otherParam}</Text>
    </View>
  );
}
