import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { styleTabFoodScreen } from "../../style/Tab/styleTabFood";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Keyboard,
} from "react-native";
import { Observer } from "mobx-react";
import counter from "../../store/counter";

export default function TabFoodScreen({ navigation }: { navigation: any }) {
  const colorIcon = "#00FFFF";
  const [protein, setProtein] = useState(0);
  const [water, setWater] = useState(0);
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

          <View style={styleTabFoodScreen.timetableFood}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TimetableFood", {
                  headerTitle: "Сушка",
                });
              }}
              style={styleTabFoodScreen.timetableFoodLink}
            >
              <Text style={styleTabFoodScreen.timetableFoodTxt}>
                Расписание приема пищи
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styleTabFoodScreen.balanceLink}>
            <AntDesign
              style={styleTabFoodScreen.balanceMinus}
              name="minuscircle"
              size={24}
              color={colorIcon}
              onPress={() => setProtein((prev) => prev - 5)}
            />
            <Text style={styleTabFoodScreen.balanceTxt}>
              Баланс белка: {protein} г
            </Text>
            <AntDesign
              style={styleTabFoodScreen.balancePlus}
              name="pluscircle"
              size={24}
              color={colorIcon}
              onPress={() => setProtein((prev) => prev + 5)}
            />
          </View>

          <View style={styleTabFoodScreen.balanceLink}>
            <AntDesign
              style={styleTabFoodScreen.balanceMinus}
              name="minuscircle"
              size={24}
              color={colorIcon}
              onPress={() => setWater((prev) => prev + 0.5)}
            />
            <Text style={styleTabFoodScreen.balanceTxt}>
              Баланс воды: {water} л
            </Text>
            <AntDesign
              style={styleTabFoodScreen.balancePlus}
              name="pluscircle"
              size={24}
              color={colorIcon}
              onPress={() => setWater((prev) => prev + 0.5)}
            />
          </View>
        </View>
      )}
    </Observer>
  );
}
