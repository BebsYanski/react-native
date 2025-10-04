import { database } from "./appwrite";

const databaseService = {
  // List Documents
  async listDocuments(dbid, collectionid) {
    try {
      const response = await database.listDocuments(dbid, collectionid);
      return response.documents || [];
    } catch (error) {
      console.error("Error listing documents:", error.message);
      return { error: error.message };
    }
  },

  // Create Documents
  async createDocument(dbid, collectionid, data, id = "null") {
    try {
      const response = await database.createDocument(
        dbid,
        collectionid,
        id || undefined,
        data
      );
      return response;
    } catch (error) {
      console.error("Error creating document:", error.message);
      return { error: error.message };
    }
  },

  // Update Documents
  async updateDocument(dbid, collectionid, documentid, data) {
    try {
      const response = await database.updateDocument(
        dbid,
        collectionid,
        documentid,
        data
      );
      return response;
    } catch (error) {
      console.error("Error updating document:", error.message);
      return { error: error.message };
    }
  },

  // Delete Documents
  async deleteDocument(dbid, collectionid, documentid) {
    try {
      const response = await database.deleteDocument(
        dbid,
        collectionid,
        documentid
      );
      return { success: true, ...response };
    } catch (error) {
      console.error("Error deleting document:", error.message);
      return { error: error.message };
    }
  },
};
export default databaseService;
