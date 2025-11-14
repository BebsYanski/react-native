import AsyncStorage from "@react-native-async-storage/async-storage";

const NOTES_KEY = "NOTES";

export async function loadNotes() {
  const data = await AsyncStorage.getItem(NOTES_KEY);
  return data ? JSON.parse(data) : [];
}

export async function saveNotes(notes) {
  await AsyncStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

export async function deleteNotes() {
  await AsyncStorage.removeItem(NOTES_KEY);
}
