import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PostCard, { Post } from "@/components/PostCard";

export const POSTS: Post[] = [
  {
    id: "1",
    author: "maya",
    caption: "Morning light on the ridge.",
    image: { uri: "https://picsum.photos/seed/post1/800/600" },
    likes: 24,
  },
  {
    id: "2",
    author: "jon",
    caption: "Finally finished the garden bench.",
    image: { uri: "https://picsum.photos/seed/post2/800/600" },
    likes: 13,
  },
  {
    id: "3",
    author: "ana",
    caption: "Quiet evening by the water.",
    image: { uri: "https://picsum.photos/seed/post3/800/600" },
    likes: 41,
  },
];

export default function Home() {
  return (
    <FlatList
      data={POSTS}
      keyExtractor={(p) => p.id}
      renderItem={({ item }) => <PostCard post={item} />}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: { padding: 16 },
});