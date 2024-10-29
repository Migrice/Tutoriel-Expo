import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ImageBackground,
  FlatList,
  Button,
  Alert,
} from "react-native";

import { useLocalSearchParams } from "expo-router";
import houseList from "@/assets/datas/datas-appartements.json";
import { TouchableOpacity } from "react-native";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const House = () => {
  const { id } = useLocalSearchParams();

  const house = houseList.find((houseItem) => houseItem.id === parseInt(id));
  const commodities = house.commodities;

  const back_home = () => {
    router.push("");
  };

  const onLocate = () => {
    Alert.alert("Bravoo! Vous avez loué la maison!");
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <ImageBackground
          source={{ uri: house.cover_image_url }}
          resizeMode="cover"
          style={styles.imageBackground}
        >
          <TouchableOpacity
            onPress={back_home}
            style={{ marginTop: 20, marginLeft: 20 }}
          >
            <View
              style={{
                width: 40,
                height: 40,
                backgroundColor: "#2885E2",
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <AntDesign name="arrowleft" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.box}>
          <Text style={styles.housename}> {house.name}</Text>
          <Text style={{ color: "gray" }}>Abidjan</Text>
          <View style={styles.line}>
            <Text style={{ fontSize: 20 }}>{`${house.month_price} $`}</Text>
            <View style={styles.common}>
              <AntDesign name="star" size={24} color="#ff9e81" />
              <Text>5.0</Text>
            </View>
          </View>

          <FlatList
            data={commodities}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{ gap: 15 }}
            keyExtractor={(commodities) =>
              commodities[0].toLowerCase().toString() +
              Math.floor(Math.random() * 1000)
            }
            renderItem={({ item }) => (
              <View style={styles.commodity}>
                <Text style={{ paddingHorizontal: 8, paddingVertical: 10 }}>
                  {item}
                </Text>
              </View>
            )}
          />
          <Text style={styles.description}>
            Découvrez cette magnifique maison située dans un quartier paisible,
            offrant une vue imprenable sur la campagne environnante. Avec ses 3
            chambres spacieuses, 2 salles de bain modernes, un salon lumineux et
            une cuisine entièrement équipée, elle allie confort et élégance.
            Profitez de son jardin arboré et de sa terrasse, idéale pour des
            moments de détente en plein air. À proximité des commerces et des
            transports, cette maison est parfaite pour un séjour en famille ou
            entre amis.
          </Text>
        </View>

        <TouchableOpacity style={styles.locate_button} onPress={onLocate}>
          <Text style={styles.label_button}>Louer cette maison</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    aspectRatio: 4 / 3,
    overflow: "hidden",
  },
  box: {
    marginHorizontal: 15,
    marginVertical: 20,
    gap: 15,
  },
  housename: {
    fontSize: 20,
  },
  line: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  common: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#b9bec4",
    padding: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  commodity: {
    backgroundColor: "#b9bec4",
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
    lineHeight:20
  },
  locate_button: {
    marginTop: 30,
    marginBottom: 25,
    marginHorizontal: 15,
    textTransform: "lowercase",
    borderRadius: 15,
    backgroundColor: "#2885E2",
    alignItems: "center",
  },
  label_button: {
    paddingVertical: 14,
    color: "white",
    fontSize: 15,
  },
});

export default House;
