import React, { memo } from "react";
import { FlatList } from "react-native";
import { Post } from "../../../utils/type";
import PostItem from "./PostItem";

interface PostListProps {
  posts: Post[];
  onPostPress: (post: Post) => void;
  onUserPress: (post: Post) => void;
  refreshing: boolean;
  onRefresh: () => void;
  ListEmptyComponent: React.ReactElement;
}

const PostList: React.FC<PostListProps> = ({
  posts,
  onPostPress,
  onUserPress,
  refreshing,
  onRefresh,
  ListEmptyComponent,
}) => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <PostItem
          post={item}
          onPress={() => onPostPress(item)}
          onUserPress={() => onUserPress(item)}
        />
      )}
      refreshing={refreshing}
      onRefresh={onRefresh}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

export default memo(PostList);
