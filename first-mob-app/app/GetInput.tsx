import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function GetInput() {
  const [name, setName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.output}>Hello, {name || "Guest"} 👋</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  label: { fontSize: 18 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "80%",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  output: { fontSize: 20, marginTop: 10 },
});
