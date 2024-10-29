
import AntDesign from "@expo/vector-icons/AntDesign";

import UserData from "@/assets/datas/datas-user.json";

import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    
  } from "react-native";

const Users = () =>{
    return(
        <View style={{alignItems:"center"}}>
               <FlatList
        data={UserData}
        horizontal
        contentContainerStyle={{ gap: 30 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>

            <View style={styles.userContainer}>
                <TouchableOpacity style={styles.opacity}>

              <View style={{ gap: 10 }}>
                <View>
                  <ImageBackground
                    source={{ uri: item.image }}
                    resizeMode="cover"
                    borderRadius={10}
                    style={styles.user_profile}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      gap: 3,
                      marginTop: 5,
                      marginLeft: 10,
                    }}
                  >
                    <AntDesign name="star" size={10} color="#ff9e81" />
                    <AntDesign name="star" size={10} color="#ff9e81" />
                    <AntDesign name="star" size={10} color="white" />
                    <AntDesign name="star" size={10} color="white" />
                  </View>
                </View>

                <Text
                  style={[styles.username, styles.white_color]}
                >{`${item.lastname} ${item.firstname} `}</Text>
                <View
                  style={{
                    flexDirection: "row",
                    marginHorizontal: 10,
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.white_color}>+40</Text>
                  <AntDesign name="arrowright" size={24} color="white" />
                </View>
              </View>
              </TouchableOpacity>

            </View>
          </View>
        )}
      />

        </View>
     

    )
}


const styles = StyleSheet.create({

    userContainer: {
      backgroundColor: "#4e5ac8",
      height: 170,
      width: 150,
      borderRadius: 20,
    },
    user_profile: {
      height: 50,
      width: 50,
      marginTop: 10,
      marginLeft: 10,
      marginBottom: 8,
    },
    white_color: {
      color: "white",
    },
    username: {
      marginLeft: 10,
      fontSize:15,
      fontWeight:"bold"
    },
  });
  

export default Users