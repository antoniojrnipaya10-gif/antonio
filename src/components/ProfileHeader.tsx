import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "@/constants/Colors";

type Props = { name: string; email: string; posts: number };

export default function ProfileHeader({ name, email, posts }: Props) {
  return (
    <View style={styles.wrap}>
      <Image
        source={{ uri: "https://picsum.photos/seed/profile/300/300" }}
        style={styles.avatar}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <View style={styles.stats}>
        <Stat label="Posts" value={posts} />
        <Stat label="Followers" value={128} />
        <Stat label="Following" value={86} />
      </View>
    </View>
  );
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <View style={styles.stat}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: { alignItems: "center", paddingVertical: 24 },
  avatar: { width: 96, height: 96, borderRadius: 48, marginBottom: 12 },
  name: { fontSize: 22, fontWeight: "800", color: Colors.text },
  email: { color: Colors.muted, marginTop: 2 },
  stats: { flexDirection: "row", marginTop: 20, gap: 32 },
  stat: { alignItems: "center" },
  statValue: { fontSize: 18, fontWeight: "700", color: Colors.text },
  statLabel: { color: Colors.muted, fontSize: 13 },
});