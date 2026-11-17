import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import ProfileHeader from "@/components/ProfileHeader";
import CustomButton from "@/components/CustomButton";
import { POSTS } from "./home";

export default function Profile() {
  const router = useRouter();

  return (
    <FlatList
      data={POSTS}
      numColumns={3}
      keyExtractor={(p) => p.id}
      ListHeaderComponent={
        <View>
          <ProfileHeader name="Your Name" email="you@example.com" posts={POSTS.length} />
          <CustomButton
            title="Log out"
            variant="outline"
            onPress={() => router.replace("/login")}
            style={styles.logout}
          />
        </View>
      }
      renderItem={({ item }) => <Image source={item.image} style={styles.tile} />}
      columnWrapperStyle={{ gap: 2 }}
      ItemSeparatorComponent={() => <View style={{ height: 2 }} />}
    />
  );
}

const styles = StyleSheet.create({
  logout: { marginHorizontal: 24, marginBottom: 20 },
  tile: { flex: 1 / 3, aspectRatio: 1 },
});