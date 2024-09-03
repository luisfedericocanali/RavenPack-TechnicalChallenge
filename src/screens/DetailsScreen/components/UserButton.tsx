import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

interface UserButtonProps {
  onPress: () => void;
}

const UserButton: React.FC<UserButtonProps> = ({ onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text>Ver usuario</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 20,
    marginHorizontal: 10,
  },
});

export default UserButton;
