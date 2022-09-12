import { Text, ScrollView } from "react-native";
import { StyleSheet } from "react-native";
import { useEffect } from "react";

export default function DetalisTimetableFood({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { headerTitle } = route.params;

  // Rerender after headerTitle change
  useEffect(() => {
    navigation.setOptions({
      title: headerTitle,
    });
  }, [headerTitle, navigation]);
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        TrainX поможет разобраться, как правильно разработать режим питания, для
        грамотного усвоения пищи в организме!
      </Text>
      <Text style={styles.text}>
        В расписание приема пищи входит завтрак, обед и ужин. В среднем, рабочий
        день человека длится 14–15 часов, поэтому нужно включить в рацион второй
        завтрак и полдник.
      </Text>
      <Text style={styles.text}>
        8:00. Не забывайте про завтрак! Это важная процедура во всем дне, так
        как от первого приема пищи зависит весь рабочий день. Поэтому на завтрак
        рекомендуется использовать блюда, богатые клетчаткой и углеводами,
        которые обогащают энергией и калориями на весь день. Лучше всего
        начинать день с 8–9 утра, где за полчаса до завтрака можно выпить стакан
        воды или съесть яблоко.
      </Text>
      <Text style={styles.text}>
        12:00. Второй завтрак – это здоровый перекус, который может состоять из
        фруктов и овощей, а также легкого бутерброда, стакана сока. Это позволит
        вам не «срываться» на вредные продукты, такие как чипсы, фастфуд.
      </Text>
      <Text style={styles.text}>
        15:00. На обед необходимо употреблять белки, можно смешивать их с
        клетчаткой. Обычно к этому времени человек ощущает усталость. Нередко
        его клонит в сон, теряется работоспособность. Клетчатка поможет снова
        насытить организм энергией и продлить бодрость до вечера.
      </Text>
      <Text style={styles.text}>
        17:00. Полдник выполняет ту же функцию, что и второй завтрак. На полдник
        можно съесть горстку орехов, выпить зеленый чай. В Англии, например,
        пять часов вечера – это время чаепития, где даже Королева отказывается
        от всех дел и наслаждается ароматным чаем. На самом деле полдник может
        состоять из легких салатов как фруктовых, так и овощных.
      </Text>
      <Text style={styles.text}>
        19:00. Ужин должен быть легким, богатым жирами, белками и углеводами.
        Лучше всего готовить блюда из овощей на пару, нежирного мяса,
        приправленного кокосовым или оливковым маслом.
      </Text>
    </ScrollView>
  );
}

export const styles = StyleSheet.create({
  container: {
    marginBottom: "5%",
  },
  title: {
    color: "#DDD",
    fontSize: 12,
    margin: "5%",
    marginTop: "10%",
    marginBottom: "2%",
  },
  text: {
    fontSize: 14,
    color: "#FFF",
    margin: "5%",
    marginBottom: "1%",
  },
});
