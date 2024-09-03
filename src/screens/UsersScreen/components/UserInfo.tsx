import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface UserInfoProps {
  name: string;
  email: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ name, email }) => {
  return (
    <View style={styles.view}>
      <Text style={styles.userName}>{name}</Text>
      <Text style={styles.userEmail}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 5,
  },
  userEmail: {
    fontSize: 18,
    marginBottom: 20,
  },
  view: {
    alignItems: "center",
    padding: 10,
  },
});

export default UserInfo;
