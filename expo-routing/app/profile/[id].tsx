import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const Profile = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile ID: {id}</Text>
    </View>
  );
};

export default Profile;
