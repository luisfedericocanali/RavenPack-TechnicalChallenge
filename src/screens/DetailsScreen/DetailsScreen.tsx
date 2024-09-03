import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getPost, getComments } from "../../services/posts";
import { DetailsProps } from "../../utils/type";
import PostDetails from "./components/PostDetails";
import CommentList from "./components/CommentList";
import UserButton from "./components/UserButton";
import Container from "../../components/Container";
import { Loading } from "../../components/Loading";

const DetailsScreen: React.FC<DetailsProps> = ({ route, navigation }) => {
  const { postId } = route.params;

  const { data: post, isLoading: postLoading } = useQuery({
    queryKey: ["post", postId],
    queryFn: () => getPost(postId),
  });

  const { data: comments, isLoading: commentsLoading } = useQuery({
    queryKey: ["comments", postId],
    queryFn: () => getComments(postId),
  });

  if (postLoading || commentsLoading) {
    return <Loading />;
  }

  return (
    <Container>
      {post && (
        <>
          <PostDetails post={post} />
          <UserButton
            onPress={() =>
              navigation.navigate("UsersScreen", { userId: post.userId })
            }
          />
        </>
      )}
      {comments && <CommentList comments={comments} />}
    </Container>
  );
};

export default DetailsScreen;
