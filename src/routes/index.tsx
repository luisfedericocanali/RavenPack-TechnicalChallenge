import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen/DetailsScreen";
import { RootStackParamList } from "../utils/type";
import UsersScreen from "../screens/UsersScreen/UsersScreen";

const AppStack = createNativeStackNavigator<RootStackParamList>();

const AppStackNavigator = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTitleAlign: "center",
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <AppStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "INICIO" }}
        />
        <AppStack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ title: "DETALLES" }}
        />
        <AppStack.Screen
          name="UsersScreen"
          component={UsersScreen}
          options={{ title: "USUARIO" }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppStackNavigator;
