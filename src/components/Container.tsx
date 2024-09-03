import React, { ReactNode } from "react";
import { SafeAreaView, StatusBar, ViewStyle } from "react-native";

interface ContainerProps {
  children: ReactNode;
  color?: string;
  style?: ViewStyle;
}

const Container: React.FC<ContainerProps> = ({ children, color, style }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: color ? color : "#ffffff",
        ...(style as object),
      }}
    >
      <StatusBar
        backgroundColor={color ? color : "#ffffff"}
        barStyle="dark-content"
      />
      {children}
    </SafeAreaView>
  );
};

export default Container;
