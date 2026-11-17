import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function UnauthenticatedLayout() {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: { backgroundColor: Colors.background },
        headerTintColor: Colors.text,
        contentStyle: { backgroundColor: Colors.background },
      }}
    >
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ title: "", headerBackTitle: "Back" }} />
    </Stack>
  );
}