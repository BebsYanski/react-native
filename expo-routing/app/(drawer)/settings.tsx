import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Settings = () => {
  const { name } = useLocalSearchParams();
  return (
    <View>
      <Text>Settings of {name}</Text>
    </View>
  );
};

export default Settings;
