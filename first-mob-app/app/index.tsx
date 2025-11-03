import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Combo from "./Combo";
import Flats from "./Flats";
import Flex from "./flex";
import GetInput from "./GetInput";
import Greeting from "./greeting";
import Lists from "./Lists";
import Persist from "./Persist";
import Pressables from "./Pressables";
import ProfileCard from "./ProfileCard";
import States from "./States";

export default function Home() {
  const [name, setName] = useState("");
  useEffect(() => {
    const loadTasks = async () => {
      const newName = await AsyncStorage.getItem("username");
      setName(newName);
    };
    loadTasks();
  }, []);
  return (
    <View>
      <Link href={"/TodoList"}>Todo List</Link>
      <Link href={"/PersistTodo"}>PersistTodo</Link>

      <View style={styles.newContainer}>
        <Flats />
        <Text>{name}</Text>
        <Persist />
      </View>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.headText}>Hello React Native</Text>
          {/* Image Component */}
          <Image
            source={require("../assets/images/react-logo.png")}
            style={{ width: 200, height: 200 }}
          />
          <Image
            source={{ uri: "https://picsum.photos/200" }}
            style={{ width: 200, height: 200 }}
          />
          <Link href="/greeting">Go to Greeting page</Link>
          <Greeting />
          <Flex />
          <ProfileCard
            name="Yannick Bebongnchu"
            role="React Native Developer"
            image="https://i.pravatar.cc/150?img=3"
          />

          <States />
          <GetInput />
          <Pressables />
          <Combo />
          <Lists />
          {/* <Flats /> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
    gap: 100,
    marginBottom: 20,
  },
  headText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  newContainer: {},
});
