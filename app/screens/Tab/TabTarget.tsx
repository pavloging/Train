import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
// import List from "../../components/List";
import { AntDesign } from "@expo/vector-icons";

import { TabTargetScreenListsType } from "../../../types";

export default function TabTargetScreen({ navigation }: { navigation: any }) {
  const [lists, setLists] = useState<Array<TabTargetScreenListsType>>([
    {
      id: 1,
      name: "Ввести данные в приложение TrainX",
      goals: [
        { id: 1, name: "Сходить подстричься" },
        { id: 2, name: "Убраться" },
      ],
    },
    {
      id: 2,
      name: "Потренироваться по прогрограмме TrainX",
      goals: [
        { id: 1, name: "Сходить подстричься" },
        { id: 2, name: "Убраться" },
      ],
    },
    {
      id: 3,
      name: "Выбрать план питания Сушка/Масса",
      goals: [
        { id: 1, name: "Сходить подстричься" },
        { id: 2, name: "Убраться" },
      ],
    },
    {
      id: 4,
      name: "Создать новую цель в приложении",
      goals: [
        { id: 1, name: "Сходить подстричься" },
        { id: 2, name: "Убраться" },
      ],
    },
  ]);
  const [value, setValue] = useState("");
  const [click, setClick] = useState(false);

  const addList = () => {
    setLists((prev) => [...prev, { id: Date.now(), name: value }]);
  };

  const onAddList = () => {
    if (click && value) {
      addList();
    }
    if (click && !value) {
      Alert.alert("Значение поля не должно быть пустым");
    }
    setValue("");
    setClick(!click);
  };

  const removeList = (id: number) => {
    setLists((prev) => prev.filter((todo) => todo.id !== id));
  };

  //   const editList = (id: number, name: string) => {
  //     const edit = lists;
  //     edit[id - 1].name = name;
  //     setLists(edit);
  //   };
  const showAlert = (el: number) => {
    Alert.alert("Удалить список", "", [
      { text: "Cancel" },
      { text: "OK", onPress: () => removeList(el) },
    ]);
  };
  return (
    <SafeAreaView style={{ backgroundColor: "#1F1F1F", minHeight: "100%" }}>
      <TouchableOpacity style={styles.list} onPress={onAddList}>
        {click ? (
          <View style={styles.addListTitle}>
            <TextInput
              style={styles.list__input}
              autoFocus={true}
              enablesReturnKeyAutomatically={true}
              maxLength={32}
              onChangeText={setValue}
              value={click ? value : "Новый список"}
              placeholder={"Название цели..."}
              placeholderTextColor={"#CDCDCD"}
              autoCorrect={true}
              autoCapitalize={"sentences"}
            />
            <AntDesign name="plus" size={24} color="#DDD" />
          </View>
        ) : (
          <Text style={styles.list__input}>Создать новую цель</Text>
        )}
      </TouchableOpacity>
      <FlatList
        style={styles.FlatList}
        data={lists}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.list}
            onLongPress={() => showAlert(item.id)}
            onPress={() => console.log(item.id)}
          >
            <TextInput
              style={styles.list__name}
              value={item.name}
              maxLength={32}
              // onChangeText={editChange}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addListTitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  list: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    color: "#DDDDDD",
    backgroundColor: "#2C2D31",
    marginBottom: 8,
  },
  list__name: {
    color: "#DDDDDD",
  },
  list__input: {
    padding: 5,
    color: "#DDDDDD",
  },
  FlatList: {
    marginBottom: "17%",
  },
});
