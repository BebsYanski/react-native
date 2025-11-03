import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "./global.css";

// Keep the splash screen visible while fonts are loading
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
  });

  // Effect to hide the splash screen once fonts are loaded
  useEffect(() => {
    if (fontsLoaded) {
      // Hide the splash screen once fonts are ready
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // Return null while fonts are loading to keep the splash screen visible
    return null;
  }

  // Once fonts are loaded, render the rest of your app stack
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Configure your root stack screens here */}
      {/* <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> */}
      {/* The "+not-found" screen doesn't need to be explicitly listed */}
    </Stack>
  );
}
