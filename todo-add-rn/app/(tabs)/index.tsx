import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../hooks/useTheme";

export default function Index() {
  const { toggleDarkMode } = useTheme();
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Thank you </Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Togle the mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00a0f0",
  },
  content: {
    fontSize: 20,
    textDecorationLine: "underline",
    fontWeight: "700",
  },
});
