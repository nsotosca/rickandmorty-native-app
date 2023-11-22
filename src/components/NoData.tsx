import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../utils/enums";

const NoData = ({ message = "Not found", fullHeight = false }) => {
  return (
    <View style={[styles.container, fullHeight && { flex: 1 }]}>
      <Text style={[styles.message]}>{message}</Text>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  message: {
    color: COLORS.light.accent,
    fontSize: 30,
    fontWeight: "bold",
  },
});
