import { View, StyleSheet, Text } from "react-native";

import UserPostsData from "@/assets/datas/datas-post.json";
import PostItem from "./postItem";

const LastPublications = () => {
  return (
    <View style={styles.root}>
      {UserPostsData.map((post) => (
        <PostItem postData={post} key={post.id} />
      ))}
      <View style={{marginBottom:4}}>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root:{
    gap:20,

  }
});
export default LastPublications;
