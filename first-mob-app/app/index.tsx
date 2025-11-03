import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Hello React Native</Text>
      {/* Image Component */}
      <Image
        source={require("../assets/images/react-logo.png")}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },
  headText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
});
