import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          color: "#fff",
          fontSize: 20,
        },
        headerTintColor: "#fff",
        contentStyle: {
          backgroundColor: "#fff",
          paddingHorizontal: 10,
          paddingVertical: 10,
        },
        animation: "fade",
        animationDuration: 200,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          //  headerShown: false,
          title: "Notes",
        }}
      />
      <Stack.Screen
        name="AddNoteScreen"
        options={{
          title: "Add Note",
          headerBackButtonDisplayMode: "minimal",
          presentation: "formSheet",
          sheetAllowedDetents: [0.3, 0.5, 0.7],
          sheetGrabberVisible: true,
          // headerShown: false,
        }}
      />
      {/*  <Stack.Screen name="Edit" options={{ title: "Edit Note" }} /> */}
      <Stack.Screen name="ViewNoteScreen" options={{ title: "View Note" }} />
    </Stack>
  );
}
