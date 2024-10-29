import houseList from "@/assets/datas/datas-appartements.json";
import {
  View,
  FlatList,
  StyleSheet,
} from "react-native";
import AppartmentItem from "./AppartmentItem";

const page = () => {
  return (
    <View>
      <FlatList
        style={styles.flatlist}
        data={houseList}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 20 }}
        keyExtractor={(item) =>
          item.cover_image_url.toLowerCase().toString() +
          Math.floor(Math.random() * 1000)
        }
        renderItem={({ item }) => <AppartmentItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    marginHorizontal: 15,
    marginVertical: 20,
  },
});

export default page;
