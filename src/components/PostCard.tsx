import React, { useState } from "react";
import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

export type Post = {
  id: string;
  author: string;
  caption: string;
  image: ImageSourcePropType;
  likes: number;
};

export default function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false);
  const likes = post.likes + (liked ? 1 : 0);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={{ uri: `https://picsum.photos/seed/${post.author}/100/100` }}
          style={styles.avatar}
        />
        <Text style={styles.author}>{post.author}</Text>
      </View>

      <Image source={post.image} style={styles.image} resizeMode="cover" />

      <View style={styles.footer}>
        <Pressable onPress={() => setLiked((v) => !v)} hitSlop={10} style={styles.likeRow}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={24}
            color={liked ? Colors.danger : Colors.text}
          />
          <Text style={styles.likes}>{likes}</Text>
        </Pressable>
        <Text style={styles.caption}>
          <Text style={styles.author}>{post.author} </Text>
          {post.caption}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 14,
    marginBottom: 18,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  header: { flexDirection: "row", alignItems: "center", padding: 12 },
  avatar: { width: 34, height: 34, borderRadius: 17, marginRight: 10 },
  author: { fontWeight: "700", color: Colors.text },
  image: { width: "100%", height: 260 },
  footer: { padding: 12 },
  likeRow: { flexDirection: "row", alignItems: "center", marginBottom: 8 },
  likes: { marginLeft: 8, fontWeight: "600", color: Colors.text },
  caption: { color: Colors.text, lineHeight: 20 },
});