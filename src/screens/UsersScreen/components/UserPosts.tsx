import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import PostItem from "../../HomeScreen/components/PostItem";
import { Post } from "../../../utils/type";

interface UserPostsProps {
  posts: Post[];
  onPostPress: (postId: number) => void;
}

const UserPosts: React.FC<UserPostsProps> = ({ posts, onPostPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Posteos del usuario</Text>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PostItem
            user
            post={item}
            onPress={() => onPostPress(item.id)}
            onUserPress={() => {}}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10, // Optional, for consistent padding with FlatList items
  },
});

export default UserPosts;
