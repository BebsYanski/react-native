import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <>
      <Stack
      //  screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="index" options={{ title: "Dashboard" }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)/_layout" />
        <Stack.Screen name="profile/[id]" />
        <Stack.Screen name="profile/index" />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
