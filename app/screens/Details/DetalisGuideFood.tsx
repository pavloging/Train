import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect } from "react";
import { Divider } from "react-native-paper";
import counter from "../../store/counter";

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

  console.log("Формула для похудения:");

  function caloriesDrying(x: number) {
    if (counter.gender === "male") {
      const calories =
        (10 * counter.weight + 6.25 * counter.growth - 5 * counter.age + 5) *
        1.55;
      if (x === 1) return Math.round(calories / 1.15);
      if (x === 2) return Math.round(calories / 1.3);
      if (x === 3) return Math.round(calories / 1.6);
    } else {
      const calories =
        (10 * counter.weight + 6.25 * counter.growth - 5 * counter.age - 161) *
        1.55;
      if (x === 1) return Math.round(calories / 1.15);
      if (x === 2) return Math.round(calories / 1.3);
      if (x === 3) return Math.round(calories / 1.6);
    }
  }

  console.log(caloriesDrying(1));

  console.log(caloriesDrying(2));

  console.log(caloriesDrying(3));

  function caloriesWeight(x: number) {
    if (counter.gender === "male") {
      const calories =
        (10 * counter.weight + 6.25 * counter.growth - 5 * counter.age + 5) *
        1.55;
      if (x === 1) return Math.round(calories * 1.1);
      if (x === 2) return Math.round(calories * 1.25);
      if (x === 3) return Math.round(calories * 1.4);
    } else {
      const calories =
        (10 * counter.weight + 6.25 * counter.growth - 5 * counter.age - 161) *
        1.55;
      if (x === 1) return Math.round(calories * 1.1);
      if (x === 2) return Math.round(calories * 1.25);
      if (x === 3) return Math.round(calories * 1.4);
    }
  }

  console.log(caloriesWeight(1));

  console.log(caloriesWeight(2));

  console.log(caloriesWeight(3));

  return (
    <ScrollView style={styles.guideFood}>
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
          <Text style={styles.clacText}>
            Норма в день: {caloriesDrying(1)} ккал
          </Text>
          <Text style={styles.clacText}>
            Норма в день для сушки: {caloriesDrying(2)} ккал
          </Text>
          <Text style={styles.clacText}>
            Норма в день для быстрой сушки: {caloriesDrying(3)} ккал
          </Text>
        </View>
      ) : (
        <View style={styles.clac}>
          <Text style={styles.clacTitle}>Калькулятор каллорий</Text>
          <Text style={styles.clacText}>
            Норма в день: {caloriesWeight(1)} ккал
          </Text>
          <Text style={styles.clacText}>
            Норма в день для массы: {caloriesWeight(2)} ккал
          </Text>
          <Text style={styles.clacText}>
            Норма в день для быстрой массы: {caloriesWeight(3)} ккал
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
                style={styles.mealImage}
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
  guideFood: {
    marginBottom: "-45%",
  },
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
    justifyContent: "space-between",
    marginHorizontal: "5%",
  },
  mealDishСolumnLast: {
    display: "flex",
    alignItems: "center",
  },
  mealImage: {
    width: 160,
    height: 160,
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
