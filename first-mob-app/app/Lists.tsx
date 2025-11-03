import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Lists() {
  return (
    <ScrollView horizontal style={styles.container}>
      {Array.from({ length: 20 }).map((_, i) => (
        <Text key={i} style={styles.item}>
          Item {i + 1}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 50 },
  item: {
    backgroundColor: "#ddd",
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
});
