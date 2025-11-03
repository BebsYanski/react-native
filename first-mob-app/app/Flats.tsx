import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const fruits = [
  { id: "1", name: "Apple" },
  { id: "2", name: "Mango" },
  { id: "3", name: "Banana" },
];

export default function Flats() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={fruits}
        renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        keyExtractor={(item) => item.id}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 50, padding: 20 },
  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#d0ebff",
    borderRadius: 8,
    fontSize: 18,
  },
});
