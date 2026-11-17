import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Link, useRouter } from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { Colors } from "@/constants/Colors";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setError("");
    if (!email.includes("@") || password.length < 6) {
      setError("Wrong email or password.");
      return;
    }
    setLoading(true);
    // TODO: replace with your real login request.
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    router.replace("/home");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Image source={{ uri: "https://picsum.photos/seed/logo/200/200" }} style={styles.logo} />
        <Text style={styles.title}>Welcome back</Text>
        <Text style={styles.subtitle}>Log in to see your feed.</Text>

        <CustomInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          placeholder="you@example.com"
        />
        <CustomInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          placeholder="At least 6 characters"
        />

        {!!error && <Text style={styles.error}>{error}</Text>}

        <CustomButton title="Log in" onPress={onSubmit} loading={loading} />

        <View style={styles.row}>
          <Text style={styles.muted}>New here? </Text>
          <Link href="/register" style={styles.link}>
            Create an account
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, justifyContent: "center", padding: 24 },
  logo: { width: 72, height: 72, borderRadius: 18, marginBottom: 20 },
  title: { fontSize: 28, fontWeight: "800", color: Colors.text },
  subtitle: { color: Colors.muted, marginTop: 4, marginBottom: 28 },
  error: { color: Colors.danger, marginBottom: 12 },
  row: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  muted: { color: Colors.muted },
  link: { color: Colors.primary, fontWeight: "700" },
});