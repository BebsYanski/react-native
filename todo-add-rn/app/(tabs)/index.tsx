import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>Thank you guys</Text>
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
