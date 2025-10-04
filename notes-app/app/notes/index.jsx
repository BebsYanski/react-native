import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import NoteList from "@/components/NoteList";
import AddNoteModal from "@/components/AddNoteModal";
import noteService from "@/services/noteService";

const NoteScreen = () => {
  const [notes, setNotes] = useState([
    /*   { id: "1", text: "Note One" },
    { id: "2", text: "Note Two" },
    { id: "3", text: "Note Three" }, */
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newNote, setNewNote] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Fetch notes
  const fetchNotes = async () => {
    try {
      setLoading(true);
      const response = await noteService.getNotes();
      setNotes(response.data);
      setError(null);
    } catch (error) {
      Alert.alert("Error fetching notes:", error.message);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Add new note
  const addNote = async () => {
    if (newNote.trim() === "") {
      Alert.alert("input cannot be empty");
      return;
    }

    /*  setNotes((prevNotes) => [
      ...prevNotes,
      { id: Date.now.toString(), text: newNote },
    ]); */

    const response = await noteService.createNote(newNote);
    if (response.error) {
      Alert.alert("Error adding note:", response.error);
    } else {
      setNotes([...notes, response.data]);
      // setNotes((prevNotes) => [...prevNotes, response.data]);
    }

    setNewNote("");
    setModalVisible(false);
  };

  const deleteNote = async (id) => {
    Alert.alert(
      "Delete Note",
      "Are you sure you want to delete this note?",
      [
        {
          text: "Yes",
          style: "destructive",
          onPress: async () => {
            const response = await noteService.deleteNote(id);
            if (response.error) {
              Alert.alert("Error deleting note:", response.error);
            } else {
              setNotes(notes.filter((note) => note.$id !== id));
            }
          },
        },
        {
          text: "No",
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };
  return (
    <View style={styles.container}>
      {/* Note List */}
      {loading ? (
        <ActivityIndicator size="large" color="#007bff" />
      ) : error ? (
        <Text
          style={{
            color: "red",
            textAlign: "center",
            marginTop: 20,
            fontSize: 16,
          }}
        >
          {error}
        </Text>
      ) : (
        <NoteList onDelete={deleteNote} notes={notes} setNotes={setNotes} />
      )}

      {/* Add Note Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Note</Text>
      </TouchableOpacity>

      {/* Add Note Modal */}
      <AddNoteModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        newNote={newNote}
        setNewNote={setNewNote}
        addNote={addNote}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 16,
    backgroundColor: "#fff",
  },
  addButton: {
    // backgroundColor: "#f4511e",
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
    position: "absolute",
    bottom: 25,
    right: 20,
    left: 20,
    // elevation: 5,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default NoteScreen;
