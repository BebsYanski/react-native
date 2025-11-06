import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../hooks/useTheme"; // ✅ correct hook import path

export default function Index() {
  const { toggleDarkMode, isDarkMode, colors } = useTheme();

  // Convex hooks
  const todos = useQuery(api.todos.getTodos);
  const addTodo = useMutation(api.todos.addTodo);
  const toggleTodo = useMutation(api.todos.toggleTodo);
  const deleteTodo = useMutation(api.todos.deleteTodo);

  const handleAddTodo = async () => {
    try {
      await addTodo({ text: "New task" });
    } catch (err) {
      console.error("Add todo failed:", err);
    }
  };

  const handleToggleTodo = async (todo: any) => {
    try {
      await toggleTodo({ id: todo._id, isCompleted: !todo.isCompleted });
    } catch (err) {
      console.error("Toggle todo failed:", err);
    }
  };

  const handleDeleteTodo = async (id: string) => {
    try {
      await deleteTodo({ id });
    } catch (err) {
      console.error("Delete todo failed:", err);
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.backgrounds.default },
      ]}
    >
      <Text
        style={[
          styles.header,
          { color: colors.text, borderColor: colors.border },
        ]}
      >
        Todo List
      </Text>

      <TouchableOpacity
        onPress={toggleDarkMode}
        style={[styles.toggleButton, { backgroundColor: colors.primary }]}
      >
        <Text style={{ color: "#fff" }}>
          Toggle {isDarkMode ? "Light" : "Dark"} Mode
        </Text>
      </TouchableOpacity>

      <View style={styles.todoContainer}>
        {todos ? (
          todos.length > 0 ? (
            todos.map((todo: any) => (
              <TouchableOpacity
                key={todo._id}
                onPress={() => handleToggleTodo(todo)}
                onLongPress={() => handleDeleteTodo(todo._id)}
              >
                <Text
                  style={{
                    fontSize: 18,
                    marginVertical: 4,
                    color: todo.isCompleted ? colors.success : colors.textMuted,
                    textDecorationLine: todo.isCompleted
                      ? "line-through"
                      : "none",
                  }}
                >
                  {todo.isCompleted ? "✅ " : "⭕ "} {todo.text}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={{ color: colors.textMuted }}>No todos yet</Text>
          )
        ) : (
          <Text style={{ color: colors.textMuted }}>Loading...</Text>
        )}
      </View>

      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    borderBottomWidth: 1,
  },
  toggleButton: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  todoContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
