import { View, Text, Button } from "react-native";
import { styleTabProfileScreen } from "../../style/Tab/styleTabProfileScreen";
import { Avatar, Divider } from "react-native-paper";
import { Feather } from "@expo/vector-icons";

export default function TabProfileScreen({ navigation }: { navigation: any }) {
  return (
    <View>
      <View style={styleTabProfileScreen.profile__data}>
        <View style={styleTabProfileScreen.profile__avatar}>
          <Avatar.Icon
            style={{ backgroundColor: "#2C2D31" }}
            size={144}
            icon={() => <Feather name="user" size={80} color="#DDDDDD" />}
          />
        </View>
        <Divider />

        <View style={styleTabProfileScreen.profile__text}>
          <Text style={styleTabProfileScreen.profile__title}>
            Имя: Егор Павлов
          </Text>
          <Text style={styleTabProfileScreen.profile__title}>Рост: 182 см</Text>
          <Text style={styleTabProfileScreen.profile__title}>Вес: 65 кг</Text>
          <Text style={styleTabProfileScreen.profile__title}>
            Возраст: 17 лет
          </Text>
        </View>
      </View>
      <Divider style={styleTabProfileScreen.profile__divider} />
    </View>
  );
}
