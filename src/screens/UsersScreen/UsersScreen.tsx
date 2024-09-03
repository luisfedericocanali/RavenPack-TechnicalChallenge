import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser, getUserPosts, getComments } from "../../services/posts";
import { UsersProps } from "../../utils/type";
import UserInfo from "./components/UserInfo";
import UserPosts from "./components/UserPosts";
import UserComments from "./components/UserComments";
import { Loading } from "../../components/Loading";
import Container from "../../components/Container";

const UsersScreen: React.FC<UsersProps> = ({ route, navigation }) => {
  const { userId } = route.params;

  const { data: user, isLoading: userLoading } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => getUser(userId),
  });

  const { data: posts, isLoading: postsLoading } = useQuery({
    queryKey: ["userPosts", userId],
    queryFn: () => getUserPosts(userId),
  });

  const { data: comments, isLoading: commentsLoading } = useQuery({
    queryKey: ["userComments", userId],
    queryFn: () => getComments(userId),
  });

  if (userLoading || postsLoading || commentsLoading) {
    return <Loading />;
  }

  return (
    <Container>
      {user && <UserInfo name={user.name} email={user.email} />}
      {posts && (
        <UserPosts
          posts={posts}
          onPostPress={(postId) =>
            navigation.navigate("DetailsScreen", { postId })
          }
        />
      )}
      {comments && (
        <UserComments
          comments={comments}
          onPostPress={(postId) =>
            navigation.navigate("DetailsScreen", { postId })
          }
        />
      )}
    </Container>
  );
};
export default UsersScreen;
