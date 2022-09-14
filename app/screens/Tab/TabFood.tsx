import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";
import { styleTabFoodScreen } from "../../style/Tab/styleTabFood";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  Keyboard,
  Alert,
} from "react-native";
import { Observer } from "mobx-react";
import counter from "../../store/counter";

export default function TabFoodScreen({ navigation }: { navigation: any }) {
  const colorIcon = "#00FFFF";
  const [protein, setProtein] = useState(0);
  const [water, setWater] = useState(0);

  function validate() {
    if (
      counter.name !== 0 &&
      counter.growth !== 0 &&
      counter.weight !== 0 &&
      counter.age !== 0
    ) {
      return true;
    } else {
      return false;
    }
  }

  function viewAlert() {
    Alert.alert("Заполните данные для создания программы");
  }
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
              value={`${counter.name !== null ? counter.name : ""}`}
              autoFocus={counter.name === 0 && true}
              maxLength={14}
            />
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
                value={`${counter.growth !== 0 ? counter.growth : ""}`}
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
                value={`${counter.weight !== 0 ? counter.weight : ""}`}
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
                value={`${counter.age !== 0 ? counter.age : ""}`}
                maxLength={2}
              />
              <Text style={styleTabFoodScreen.dataTxt}> лет</Text>
            </TouchableOpacity>
          </View>

          <View style={styleTabFoodScreen.planFood}>
            <TouchableOpacity
              onPress={() =>
                validate()
                  ? navigation.navigate("GuideFood", {
                      headerTitle: "Сушка",
                    })
                  : viewAlert()
              }
              style={styleTabFoodScreen.planData}
            >
              <Text style={styleTabFoodScreen.planDataTxt}>Сушка</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                validate()
                  ? navigation.navigate("GuideFood", {
                      headerTitle: "Масса",
                    })
                  : viewAlert()
              }
              style={styleTabFoodScreen.planData}
            >
              <Text style={styleTabFoodScreen.planDataTxt}>Масса</Text>
            </TouchableOpacity>
          </View>

          <View style={styleTabFoodScreen.timetableFood}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("TimetableFood", {
                  headerTitle: "Расписание приема пищи",
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
              onPress={() =>
                validate()
                  ? protein > 0
                    ? setProtein((prev) => prev - 10)
                    : 0
                  : viewAlert()
              }
            />
            <Text style={styleTabFoodScreen.balanceTxt}>
              Баланс белка: {protein} г
            </Text>
            <AntDesign
              style={styleTabFoodScreen.balancePlus}
              name="pluscircle"
              size={24}
              color={colorIcon}
              onPress={() =>
                validate()
                  ? counter.weight * 1.6 > protein
                    ? setProtein((prev) => prev + 10)
                    : Alert.alert(
                        "Вы достаточно употребили белка в суточной норме"
                      )
                  : viewAlert()
              }
            />
          </View>

          <View style={styleTabFoodScreen.balanceLink}>
            <AntDesign
              style={styleTabFoodScreen.balanceMinus}
              name="minuscircle"
              size={24}
              color={colorIcon}
              onPress={() =>
                validate()
                  ? water > 0
                    ? setWater((prev) => prev - 0.25)
                    : 0
                  : viewAlert()
              }
            />
            <Text style={styleTabFoodScreen.balanceTxt}>
              Баланс воды: {water} л
            </Text>
            <AntDesign
              style={styleTabFoodScreen.balancePlus}
              name="pluscircle"
              size={24}
              color={colorIcon}
              onPress={() =>
                validate()
                  ? (counter.weight * 30) / 1000 > water
                    ? setWater((prev) => prev + 0.25)
                    : Alert.alert("Вы выпили достаточно воды на сегодня")
                  : viewAlert()
              }
            />
          </View>
        </View>
      )}
    </Observer>
  );
}
