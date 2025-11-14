import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, TouchableOpacity, View } from "react-native";
import { loadNotes } from "../storage/notesStorage";

export default function HomeScreen() {
  const [notes, setNotes] = useState([]);

  const navigation = useRouter();

  useEffect(() => {
    async function load() {
      const notes = await loadNotes();
      setNotes(notes);
    }
    load();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Button
        title="Add Note"
        onPress={() => navigation.navigate("/AddNoteScreen")}
      />

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddNote", { note: item, editing: true })
            }
            style={{ paddingVertical: 15 }}
          >
            <Text style={{ fontSize: 18 }}>{item.title}</Text>
            <Text style={{ color: "#555" }}>
              {item.content.substring(0, 40)}...
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
