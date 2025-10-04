import databaseService from "./databaseService";
import { ID } from "react-native-appwrite";

// Appwrite database and collection id
const dbid = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const colid = process.env.EXPO_PUBLIC_APPWRITE_NOTES_COLLECTION_ID;

const noteService = {
  // List all notes
  async getNotes() {
    try {
      const notes = await databaseService.listDocuments(dbid, colid);
      /*  if (notes.error) {
        console.error("Error listing notes:", notes.error);
        return { error: notes.error };
      } */
      return { data: notes };
    } catch (error) {
      console.error("Error listing notes:", error.message);
      return { error: error.message || "Error listing notes" };
    }
  },
  // Create a new note
  async createNote(text) {
    if (!text) {
      return { error: "Note text is required" };
    }
    const data = {
      text: text,
      $createdAt: new Date().toISOString(),
    };
    const response = await databaseService.createDocument(
      dbid,
      colid,
      data,
      ID.unique()
    );
    if (response?.error) {
      return { error: response.error };
    }
    return { data: response };
  },
  // Update a note
  async updateNote(note) {
    if (!note || !note.$id) {
      return { error: "Note ID is required for update" };
    }
    const data = {
      text: note.text,
      $updatedAt: new Date().toISOString(),
    };
    try {
      const response = await databaseService.updateDocument(
        dbid,
        colid,
        note.$id,
        data
      );
      return response;
    } catch (error) {
      console.error("Error updating note:", error.message);
      return { error: error.message };
    }
  },
  // Delete a note
  async deleteNote(id) {
    try {
      const response = await databaseService.deleteDocument(dbid, colid, id);
      return { success: true, ...response };
    } catch (error) {
      console.error("Error deleting note:", error.message);
      return { error: error.message };
    }
  },
};

export default noteService;
