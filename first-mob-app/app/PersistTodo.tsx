import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function PersistTodo() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load saved tasks on app start
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const storedTasks = await AsyncStorage.getItem("tasks");
        if (storedTasks) setTasks(JSON.parse(storedTasks));
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    };
    loadTasks();
  }, []);

  // Save tasks to storage whenever they change
  useEffect(() => {
    const saveTasks = async () => {
      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      } catch (error) {
        console.error("Error saving tasks:", error);
      }
    };
    saveTasks();
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;
    const newItem = { id: Date.now().toString(), title: newTask, done: false };
    setTasks([...tasks, newItem]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Persistent Todo List 📱</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add a new task..."
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
          <View
            style={[
              styles.taskItem,
              item.done && { backgroundColor: "#c8e6c9" },
            ]}
          >
            <Pressable onPress={() => toggleTask(item.id)} style={{ flex: 1 }}>
              <Text
                style={[
                  styles.taskText,
                  item.done && { textDecorationLine: "line-through" },
                ]}
              >
                {item.title}
              </Text>
            </Pressable>
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
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  taskItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f1f8e9",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  taskText: { fontSize: 16 },
  delete: { color: "red", fontSize: 18 },
  empty: { textAlign: "center", color: "#888", marginTop: 20 },
});
