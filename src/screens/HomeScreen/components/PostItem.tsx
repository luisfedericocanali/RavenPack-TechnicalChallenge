import React, { memo } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Post } from "../../../utils/type";

interface PostItemProps {
  post: Post;
  onPress: () => void;
  onUserPress: () => void;
  user?: boolean;
}

const PostItem: React.FC<PostItemProps> = ({
  post,
  onPress,
  onUserPress,
  user,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
        {!user && (
          <TouchableOpacity onPress={onUserPress}>
            <Text style={styles.viewUserButton}>Ver usuario</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  body: {
    fontSize: 14,
    color: "#555",
  },
  viewUserButton: {
    color: "blue",
    marginTop: 5,
    fontSize: 14,
  },
});

export default memo(PostItem);
