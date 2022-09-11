import { View, Text, Button } from "react-native";
import { styleTabProfileScreen } from "../../style/Tab/styleTabProfile";
import { Avatar, Divider } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import { Observer } from "mobx-react";
import counter from "../../store/counter";

export default function TabProfileScreen() {
  return (
    <Observer>
      {() => (
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
                Имя: {counter.name}
              </Text>
              <Text style={styleTabProfileScreen.profile__title}>
                Рост: {counter.growth} см
              </Text>
              <Text style={styleTabProfileScreen.profile__title}>
                Вес: {counter.weight} кг
              </Text>
              <Text style={styleTabProfileScreen.profile__title}>
                Возраст: {counter.age} лет
              </Text>
            </View>
          </View>
          <Divider style={styleTabProfileScreen.profile__divider} />
        </View>
      )}
    </Observer>
  );
}
