import React, { memo } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Comment } from "../../../utils/type";

interface CommentItemProps {
  comment: Comment;
  onPress: () => void;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, onPress }) => {
  return (
    <View style={styles.commentContainer}>
      <Text style={styles.commentBody}>{comment.body}</Text>
      <Text style={styles.linkText} onPress={onPress}>
        Ir al post
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  commentBody: {
    fontSize: 14,
    color: "#555",
  },
  linkText: {
    color: "blue",
    marginTop: 5,
  },
});

export default memo(CommentItem);
