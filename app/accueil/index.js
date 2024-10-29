import { StyleSheet, View, Text, ScrollView } from "react-native";

import AppartmentList from "@/components/Home/AppartmentList";
import GreetingUser from "@/components/UI/GreetingUser";
import LastPublications from "../../components/Posts/PostList";

import Users from "../../components/Home/Users";

const page = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.appContainer}>
        <GreetingUser />

        <AppartmentList />

        <View style={{ marginHorizontal: 20, gap: 15 }}>
          <Text style={styles.owner_title}>Nos meilleurs propriétaires</Text>
          <Users />
        </View>

        <View style={{ marginHorizontal: 20, gap: 15, marginTop: 15 }}>
          <Text style={styles.owner_title}>Dernières publications</Text>
          <LastPublications />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  owner_title: {
    fontSize: 18,
    fontWeight: "semibold",
  },
});

export default page;
