import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Keyboard,
} from "react-native";
import { styleTabFoodScreen } from "../../style/Tab/styleTabFood";
import { Observer } from "mobx-react";
import counter from "../../store/counter";

export default function TabFoodScreen({ navigation }: { navigation: any }) {
  return (
    <Observer>
      {() => (
        <View style={styleTabFoodScreen.food}>
          <TouchableOpacity
            onPress={() => {
              Keyboard.dismiss();
            }}
            style={styleTabFoodScreen.name}
          >
            <TextInput
              style={styleTabFoodScreen.nameInput}
              onChangeText={(text) => counter.changeName(text)}
              placeholder="Моё имя"
              value={`${counter.name}`}
              autoFocus={true}
              maxLength={14}
            />
            {/* <Text style={styleTabFoodScreen.dataTxt}>идет к цели</Text> */}
          </TouchableOpacity>

          <View style={styleTabFoodScreen.humanData}>
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
              }}
              style={styleTabFoodScreen.data}
            >
              <TextInput
                style={styleTabFoodScreen.dataInput}
                keyboardType="numeric"
                onChangeText={(text) => counter.changeGrowth(text)}
                placeholder="160"
                value={`${counter.growth}`}
                maxLength={3}
              />
              <Text style={styleTabFoodScreen.dataTxt}>см</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
              }}
              style={styleTabFoodScreen.data}
            >
              <TextInput
                style={styleTabFoodScreen.dataInput}
                keyboardType="numeric"
                onChangeText={(text) => counter.changeWeight(text)}
                placeholder="80"
                value={`${counter.weight}`}
                maxLength={3}
              />
              <Text style={styleTabFoodScreen.dataTxt}>кг</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                Keyboard.dismiss();
              }}
              style={styleTabFoodScreen.data}
            >
              <TextInput
                style={styleTabFoodScreen.dataInput}
                keyboardType="numeric"
                placeholder="50"
                onChangeText={(text) => counter.changeAge(text)}
                value={`${counter.age}`}
                maxLength={2}
              />
              <Text style={styleTabFoodScreen.dataTxt}> лет</Text>
            </TouchableOpacity>
          </View>

          <View style={styleTabFoodScreen.planFood}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("GuideFood", {
                  headerTitle: "Сушка",
                });
              }}
              style={styleTabFoodScreen.planData}
            >
              <Text style={styleTabFoodScreen.planDataTxt}>Сушка</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("GuideFood", {
                  headerTitle: "Масса",
                });
              }}
              style={styleTabFoodScreen.planData}
            >
              <Text style={styleTabFoodScreen.planDataTxt}>Масса</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Observer>
  );
}
