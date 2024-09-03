import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Comment } from "../../../utils/type";

interface CommentListProps {
  comments: Comment[];
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.commentTitle}>Comentarios del post:</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentContainer}>
            <Text style={styles.commentBody}>{item.body}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  commentTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  view: {
    padding: 10,
    flex: 1,
  },
  commentContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  commentBody: {
    fontSize: 14,
    color: "#555",
  },
});

export default CommentList;
