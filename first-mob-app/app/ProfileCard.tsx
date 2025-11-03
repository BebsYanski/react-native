import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

function ProfileCard({ name, role, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.role}>{role}</Text>
    </View>
  );
}

export default ProfileCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  role: {
    color: "#888",
    marginTop: 5,
  },
});
