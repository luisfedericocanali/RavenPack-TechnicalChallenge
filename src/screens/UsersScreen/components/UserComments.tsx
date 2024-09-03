import React, { memo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Comment } from "../../../utils/type";
import CommentItem from "./CommentItem"; // Import the new CommentItem component

interface UserCommentsProps {
  comments: Comment[];
  onPostPress: (postId: number) => void;
}

const UserComments: React.FC<UserCommentsProps> = ({
  comments,
  onPostPress,
}) => {
  const renderItem = ({ item }: { item: Comment }) => (
    <CommentItem comment={item} onPress={() => onPostPress(item.postId)} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Comentarios del usuario</Text>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
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
    paddingHorizontal: 10,
  },
});

export default memo(UserComments);
