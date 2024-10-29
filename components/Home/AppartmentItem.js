import AntDesign from "@expo/vector-icons/AntDesign";
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { router } from "expo-router";

const page = ({ item }) => {

  const handleTouchImage = () =>{
    router.replace("/houses")
    router.replace({
      pathname: "/houses/[id]",
      params:{id: item.id}
    })
    
  }
  return (
    <TouchableOpacity onPress={handleTouchImage} >
      <View style={styles.imageBlock}>
        <ImageBackground
          source={{ uri: item.cover_image_url }}
          resizeMode="cover"
          style={styles.imageBackground}
          borderRadius={30}
        >
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.register}>Enregistrer nouvellement</Text>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.location}>
        <Text style={{ fontSize: 20, color: "grey" }}>
          {item.location_city}
        </Text>

        <View style={styles.common}>
          <AntDesign name="star" size={24} color="#ff9e81" />
          <Text style={styles.whiteText}>5.0</Text>
        </View>
      </View>

      <View style={styles.location}>
        <Text style={{ color: "grey" }}>{`${item.month_price}$ \ / mois`}</Text>

        <View style={[styles.common, styles.space]}>
          <AntDesign name="user" size={24} color="#ff9e81" />
          <Text style={styles.whiteText}>3 visiteurs</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 200,
    overflow: "hidden",
  },
  imageBlock: {
    width: 320,
  },
 
  register: {
    color: "white",
    backgroundColor: "#4e5ac8",
    padding: 8,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 20,
    textAlign: "center",
    opacity: 0.9,
  },
  location: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    alignItems: "center",
  },
  common: {
    flexDirection: "row",
    gap: 8,
    backgroundColor: "#b9bec4",
    padding: 5,
    borderRadius: 10,
  },
  whiteText: {
    fontSize: 14,
  },
  space:{
    marginBottom:15
  }
});

export default page;
