import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
      {/*  <Stack.Screen name="About" options={{ title: "About" }} /> */}
    </Stack>
  );
}
