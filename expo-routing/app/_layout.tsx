import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <>
      <Stack
      /* screenOptions={{ headerShown: false }} */
      >
        <Stack.Screen
          name="index"
          options={{ title: "GitHub User Explorer" }}
        />
        <Stack.Screen
          name="user/[username]"
          options={{ title: "User Details" }}
        />
        <Stack.Screen name="settings" options={{ headerShown: true }} />
        <Stack.Screen name="login" options={{ title: "Login Page" }} />
        <Stack.Screen name="(tabs)/_layout" options={{ headerShown: false }} />
        <Stack.Screen name="(drawer)/_layout" />
        <Stack.Screen name="profile/[id]" />
        <Stack.Screen name="profile/index" />
        <Stack.Screen name="profiles" />
      </Stack>
      {/* <StatusBar style="auto" /> */}
    </>
  );
}
