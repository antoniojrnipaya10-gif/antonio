import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { Colors } from "@/constants/Colors";

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    setError("");
    if (!name.trim()) return setError("Enter your name.");
    if (!email.includes("@")) return setError("Enter a valid email.");
    if (password.length < 6) return setError("Password needs 6+ characters.");

    setLoading(true);
    // TODO: replace with your real sign-up request.
    await new Promise((r) => setTimeout(r, 600));
    setLoading(false);
    router.replace("/home");
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : undefined}>
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Create your account</Text>
        <Text style={styles.subtitle}>It takes less than a minute.</Text>

        <CustomInput
          label="Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
          placeholder="Your name"
        />
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

        <CustomButton title="Create account" onPress={onSubmit} loading={loading} />

        <View style={styles.row}>
          <Text style={styles.muted}>Already have an account? </Text>
          <Link href="/login" style={styles.link}>
            Log in
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 24 },
  title: { fontSize: 28, fontWeight: "800", color: Colors.text },
  subtitle: { color: Colors.muted, marginTop: 4, marginBottom: 28 },
  error: { color: Colors.danger, marginBottom: 12 },
  row: { flexDirection: "row", justifyContent: "center", marginTop: 20 },
  muted: { color: Colors.muted },
  link: { color: Colors.primary, fontWeight: "700" },
});