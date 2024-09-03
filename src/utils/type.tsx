import type { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: { postId: number };
  UsersScreen: { userId: number };
};
export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}
export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
export interface Geo {
  lat: string;
  lng: string;
}
export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}
export type HomeProps = NativeStackScreenProps<
  RootStackParamList,
  "HomeScreen"
>;
export type UsersProps = NativeStackScreenProps<
  RootStackParamList,
  "UsersScreen"
>;
export type DetailsProps = NativeStackScreenProps<
  RootStackParamList,
  "DetailsScreen"
>;
