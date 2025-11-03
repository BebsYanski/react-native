import React, { useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    const newItem = { id: Date.now().toString(), title: newTask };
    setTasks([...tasks, newItem]);
    setNewTask("");
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List 📝</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add new task..."
          value={newTask}
          onChangeText={setNewTask}
          style={styles.input}
        />
        <Button title="Add" onPress={addTask} />
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.title}</Text>
            <Pressable onPress={() => removeTask(item.id)}>
              <Text style={styles.delete}>❌</Text>
            </Pressable>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No tasks yet. Add one!</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f9f9f9" },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#e0f7fa",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskText: { fontSize: 16 },
  delete: { color: "red", fontSize: 18 },
  empty: { textAlign: "center", color: "#888" },
});
