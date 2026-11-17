import React from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { Colors } from "@/constants/Colors";

type Props = {
  title: string;
  onPress: () => void;
  loading?: boolean;
  variant?: "primary" | "outline";
  style?: ViewStyle;
};

export default function CustomButton({ title, onPress, loading, variant = "primary", style }: Props) {
  const outline = variant === "outline";
  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={({ pressed }) => [
        styles.base,
        outline ? styles.outline : styles.primary,
        pressed && { opacity: 0.85 },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={outline ? Colors.primary : Colors.white} />
      ) : (
        <Text style={[styles.text, outline && { color: Colors.primary }]}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: { height: 50, borderRadius: 10, alignItems: "center", justifyContent: "center" },
  primary: { backgroundColor: Colors.primary },
  outline: { borderWidth: 1.5, borderColor: Colors.primary, backgroundColor: "transparent" },
  text: { color: Colors.white, fontSize: 16, fontWeight: "700" },
});