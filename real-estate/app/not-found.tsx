// app/+not-found.tsx

import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      {/* 1. Configure the Header */}
      <Stack.Screen options={{ title: "404 - Not Found" }} />

      <View style={styles.container}>
        <Text style={styles.title}>Oops! This page doesn't exist.</Text>
        <Text style={styles.subtitle}>
          The link you followed may be broken, or the page may have been
          removed.
        </Text>

        {/* 2. Provide a way back home */}
        <Link href="/" style={styles.link}>
          <Text style={styles.linkText}>Go to Home Screen</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#ffffff", // Match your splash screen background
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
    color: "#666",
  },
  link: {
    marginTop: 15,
    paddingVertical: 10,
  },
  linkText: {
    fontSize: 18,
    color: "#007AFF", // Standard blue for a link
    textDecorationLine: "underline",
  },
});
