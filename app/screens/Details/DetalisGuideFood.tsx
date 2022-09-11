import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { Divider } from "react-native-paper";

export default function DetalisGuideFood({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { headerTitle } = route.params;

  //Какая вкладка: Масса/Сушка
  function whichTab() {
    // headerTitle === "Сушка" ? true : false;
    if (headerTitle === "Сушка") {
      return true;
    } else {
      return false;
    }
  }

  // Rerender after headerTitle change
  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [headerTitle, navigation]);
  return (
    <ScrollView>
      {whichTab() ? (
        <Image
          style={styles.image}
          source={require("../../assets/images/DetalisGuideFood/drying.jpg")}
        />
      ) : (
        <Image
          style={styles.image}
          source={require("../../assets/images/DetalisGuideFood/weight.jpg")}
        />
      )}
      {whichTab() ? (
        <View style={styles.clac}>
          <Text style={styles.clacTitle}>Калькулятор каллорий</Text>
          <Text style={styles.clacText}>Норма в день: 2458 ккал</Text>
          <Text style={styles.clacText}>Норма в день для сушки: 1966 ккал</Text>
          <Text style={styles.clacText}>
            Норма в день для быстрой сушки: 1475 ккал
          </Text>
        </View>
      ) : (
        <View style={styles.clac}>
          <Text style={styles.clacTitle}>Калькулятор каллорий</Text>
          <Text style={styles.clacText}>Норма в день: 3012 ккал</Text>
          <Text style={styles.clacText}>Норма в день для массы: 3392 ккал</Text>
          <Text style={styles.clacText}>
            Норма в день для быстрой массы: 3773 ккал
          </Text>
        </View>
      )}
      <Divider style={styles.divider} />

      <View style={styles.meal}>
        <View>
          <Text style={styles.mealTitle}>Выберете прием пищи:</Text>
        </View>
        <View style={styles.mealDish}>
          <View style={styles.mealDishСolumn}>
            <TouchableOpacity>
              <Image
                style={styles.mealImage}
                source={require("../../assets/images/DetalisGuideFood/dish/breakfast.jpg")}
              />
              <Text style={styles.mealText}>Завтрак</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.mealImage}
                source={require("../../assets/images/DetalisGuideFood/dish/first-snack.jpg")}
              />
              <Text style={styles.mealText}>Перекус</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mealDishСolumn}>
            <TouchableOpacity>
              <Image
                style={styles.mealImage}
                source={require("../../assets/images/DetalisGuideFood/dish/lunch.jpg")}
              />
              <Text style={styles.mealText}>Обед</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Image
                style={styles.mealImage}
                source={require("../../assets/images/DetalisGuideFood/dish/last-snack.jpg")}
              />
              <Text style={styles.mealText}>Перекус</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mealDishСolumnLast}>
            <TouchableOpacity>
              <Image
                style={styles.mealImageLast}
                source={require("../../assets/images/DetalisGuideFood/dish/dinner.jpg")}
              />
              <Text style={styles.mealText}>Ужин</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  image: {
    width: "100%",
    maxHeight: "25%",
  },
  clac: {
    display: "flex",
    alignItems: "center",
    marginVertical: 36,
  },
  clacTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 18,
    color: "#DDDDDD",
  },
  clacText: {
    fontSize: 14,
    marginBottom: 12,
    color: "#DDDDDD",
  },
  divider: {
    width: "100%",
    marginBottom: 24,
    backgroundColor: "#2C2D31",
  },
  meal: {},
  mealTitle: {
    fontSize: 16,
    marginLeft: 16,
    marginBottom: 24,
    color: "#DDDDDD",
  },
  mealDish: {},
  mealDishСolumn: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 24,
  },
  mealDishСolumnLast: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  mealImage: {
    maxWidth: "62%",
    maxHeight: "70%",
    borderRadius: 6,
  },
  mealImageLast: {
    maxWidth: "100%",
    maxHeight: "70%",
    borderRadius: 6,
  },
  mealText: {
    position: "relative",
    top: -24,
    left: 12,
    fontSize: 12,
    color: "#DDDDDD",
  },
});
