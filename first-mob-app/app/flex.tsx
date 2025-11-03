import React from "react";
import { StyleSheet, View } from "react-native";

const Flex = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </View>
  );
};

export default Flex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 500,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  box1: { width: 50, height: 50, backgroundColor: "red" },
  box2: { width: 50, height: 50, backgroundColor: "green" },
  box3: { width: 50, height: 50, backgroundColor: "blue" },
});
