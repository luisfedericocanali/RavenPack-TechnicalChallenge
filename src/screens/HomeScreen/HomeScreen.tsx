import React, { useState, useCallback } from "react";
import { Text, StyleSheet, Alert } from "react-native";
import Container from "../../components/Container";
import { HomeProps, Post } from "../../utils/type";
import PostList from "./components/PostList";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/posts";
import { Loading } from "../../components/Loading";
import SearchBar from "./components/SearchBar";

const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const {
    data = [],
    error,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(),
  });

  const filteredPosts = data.filter(
    (post: Post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch().finally(() => setRefreshing(false));
  }, [refetch]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    Alert.alert("Error", "Error cargando los posts", [{ text: "OK" }]);
  }

  return (
    <Container>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <PostList
        posts={filteredPosts}
        onPostPress={(post) =>
          navigation.navigate("DetailsScreen", { postId: post.id })
        }
        onUserPress={(post) =>
          navigation.navigate("UsersScreen", { userId: post.userId })
        }
        refreshing={refreshing}
        onRefresh={onRefresh}
        ListEmptyComponent={
          <Text style={styles.emptyListText}>No se encontraron posts.</Text>
        }
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  emptyListText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#555",
  },
});

export default HomeScreen;
