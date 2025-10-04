import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NoteItem = ({ note, onDelete }) => {
  return (
    <View style={styles.noteItem}>
      <Text style={styles.noteText}>
        {note?.text?.trim() || "Untitled Note"}
      </Text>
      <TouchableOpacity onPress={() => onDelete(note.$id)}>
        <Text style={styles.delete}>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  noteItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#f6f6f6",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    elevation: 2, // Android shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5, // iOS shadow
  },

  noteText: {
    fontSize: 18,
  },
  delete: {
    fontSize: 18,
    color: "red",
  },
});

export default NoteItem;
