import apiClient from "./api";
import { Post, Comment, User } from "../utils/type";

export const getPosts = async (): Promise<Post[]> => {
  const response = await apiClient.get("/posts");
  return response.data;
};

export const getPost = async (id: number): Promise<Post> => {
  const response = await apiClient.get(`/posts/${id}`);
  return response.data;
};

export const getComments = async (postId: number): Promise<Comment[]> => {
  const response = await apiClient.get(`/posts/${postId}/comments`);
  return response.data;
};

export const getUserPosts = async (userId: number): Promise<Post[]> => {
  const response = await apiClient.get(`/users/${userId}/posts`);
  return response.data;
};
export const getUser = async (userId: number): Promise<User> => {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
};
