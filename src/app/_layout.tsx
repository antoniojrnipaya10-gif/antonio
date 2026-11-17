import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export const unstable_settings = {
  initialRouteName: "(unauthenticated)",
};

export default function RootLayout() {
  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(unauthenticated)" />
        <Stack.Screen name="(authenticated)" options={{ gestureEnabled: false }} />
      </Stack>
    </>
  );
}
