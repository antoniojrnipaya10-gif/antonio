import React from "react";
import { FlatList, StyleSheet } from "react-native";
import PostCard, { Post } from "@/components/PostCard";

export const POSTS: Post[] = [
  {
    id: "1",
    author: "maya",
    caption: "MAMAAAAA........",
    image: require("@/assets/images/rene.jpg"),
    avatar: require("@/assets/images/rene.jpg"),
    likes: 24,
  },
  {
    id: "2",
    author: "jon",
    caption: "Finally finished the garden bench.",
    image: require("@/assets/images/anklerene.jpg"),
    avatar: require("@/assets/images/anklerene.jpg"),
    likes: 13,
  },
  {
    id: "3",
    author: "ana",
    caption: "Quiet evening by the water.",
    image: require("@/assets/images/rene.jpg"),
    avatar: require("@/assets/images/anklerene.jpg"),
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