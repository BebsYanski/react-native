import React from "react";
import { Pressable, Text, View } from "react-native";

const Pressables = () => {
  return (
    <View>
      <Pressable
        onPress={() => alert("Button pressed!")}
        style={{ backgroundColor: "blue", padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: "white" }}>Tap Me</Text>
      </Pressable>
    </View>
  );
};

export default Pressables;
