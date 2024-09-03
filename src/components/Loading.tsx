import React from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";

import Separator from "./Separator";

export const Loading = () => {
  return (
    <View style={styles.viewCenter}>
      <View style={styles.view}>
        <ActivityIndicator color="#0077E6" />
        <Separator width x={1} />
        <Text style={styles.text}>Cargando</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  viewCenter: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  text: { color: "#0077E6", fontSize: 18, fontWeight: "bold" },
  view: {
    flexDirection: "row",
    justifyContent: "center",
    padding: widthPercentageToDP(2),
  },
});
