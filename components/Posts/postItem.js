import { Image } from "react-native";
import { View, Text, Pressable, Alert, StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const PostItem = ({ postData }) => {
  const onclick = () => {
    //Alert.alert(title="Hello", message="Vous avez cliqué sur le post")
  };
  return (
    <Pressable onPress={onclick} style={styles.root}>
      <View style={{ marginHorizontal: 10, marginVertical: 10, gap: 18 }}>
        <View style={styles.user_profile_container}>
          <Image
            source={{ uri: postData.userPicture }}
            resizeMode="cover"
            style={styles.profile}
          />
          <View>
            <Text style={styles.name}>{postData.userName}</Text>
            <Text>Il y'a 15 min</Text>
          </View>
        </View>

        {postData.postPicture && (
          <Image
            style={styles.postPicture}
            resizeMode="cover"
            source={{ uri: postData.postPicture }}
          />
        )}

        <Text style={styles.post}>{postData.post}</Text>

        <View style={styles.footer_container}>
          <View style={styles.likes_container}>
            <AntDesign name="heart" size={24} color="#ff9e81" />
            <Text>{`${postData.totalLike} réactions`}</Text>
          </View>

          <View style={styles.likes_container}>
          <AntDesign name="wechat" size={24} color="gray" />
            <Text>{`${postData.totalComment} comments`}</Text>
          </View>
        </View>
      </View>
      
    </Pressable>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 12,
  },
  profile: {
    height: 40,
    width: 40,
    overflow: "hidden",
    borderRadius: 50,
  },
  user_profile_container: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  name: {
    fontSize: 15,
    fontWeight: "bold",
  },
  likes_container: {
    flexDirection: "row",
    gap: 10,
  },
  footer_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems:"center",
    borderTopColor:"#f2f2f2",
    borderTopWidth:1,
    paddingTop:10
  },
  post: {
    textAlign: "left",
    lineHeight:20
  },
  postPicture: {
    //height: 200,
    //width:"100%",
    aspectRatio:4/3,
    borderRadius:20,
  },
});

export default PostItem;
