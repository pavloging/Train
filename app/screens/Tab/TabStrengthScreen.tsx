import { View, Image, Text, ScrollView, TouchableOpacity } from "react-native";
import { styleTabImg } from "../../style/Tab/styleTabImg";

export default function TabStrengthScreen({ navigation }: { navigation: any }) {
  return (
    <ScrollView style={styleTabImg.img}>
      <View style={styleTabImg.img__line}>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Упражнения", {
              otherParam: "Бицепс",
              linkYouTube: "https://www.youtube.com/watch?v=ElaIKk8ba5g",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/biceps.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Бицепс</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Упражнения", {
              otherParam: "Трицепс",
              linkYouTube: "https://www.youtube.com/watch?v=ElaIKk8ba5g",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/triangularis.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Трицепс</Text>
        </TouchableOpacity>
      </View>
      {/*
       *
       ** Другой столбец
       *
       * */}
      <View style={styleTabImg.img__line}>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Упражнения", {
              otherParam: "Спина",
              linkYouTube: "https://www.youtube.com/watch?v=ElaIKk8ba5g",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/back.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Спина</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Упражнения", {
              otherParam: "Грудь",
              linkYouTube: "https://www.youtube.com/watch?v=ElaIKk8ba5g",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/breast.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Грудь</Text>
        </TouchableOpacity>
      </View>
      {/*
       *
       ** Другой столбец
       *
       * */}
      <View style={styleTabImg.img__line}>
        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Упражнения", {
              otherParam: "Пресс",
              linkYouTube: "https://www.youtube.com/watch?v=ElaIKk8ba5g",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/press.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Пресс</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styleTabImg.img__box}
          onPress={() => {
            navigation.navigate("Упражнения", {
              otherParam: "Ноги",
              linkYouTube: "https://www.youtube.com/watch?v=ElaIKk8ba5g",
            });
          }}
        >
          <Image
            style={styleTabImg.img__boxImg}
            source={require("../../assets/images/TabStrengthScreen/feet.jpg")}
          />
          <Text style={styleTabImg.img__boxTitle}>Ноги</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
