import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";

const Persist = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const loadTasks = async () => {
      await AsyncStorage.setItem("username", "Yannick");
      const newName = await AsyncStorage.getItem("username");
      setName(newName);
    };
    loadTasks();
  }, []);

  return (
    <View>
      <Text>Persist</Text>
      <Text>{name}</Text>
    </View>
  );
};

export default Persist;
