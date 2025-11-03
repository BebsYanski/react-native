import React from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Greeting = () => {
  const name: string = "Yannick";
  return (
    <View>
      <Text style={styles.headerText}>Greeting</Text>
      <Button title="Tap Me" onPress={() => Alert.alert(`Hello, ${name}!`)} />
      <TouchableOpacity
        onPress={() => Alert.alert(`Hello, ${name}!`)}
        style={{ marginTop: 10, padding: 10, backgroundColor: "#ccc" }}
      >
        <Text>Hello</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#333",
    textDecorationLine: "underline",
    margin: 10,
    /*  marginHorizontal: 20,
    marginVertical: 10, */
  },
  greetingText: {},
});
