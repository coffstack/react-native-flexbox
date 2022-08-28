import React from "react";
import { StyleSheet, View } from "react-native";
import { Background } from "./Background";

function YellowBox() {
  return <View style={[styles.box, { backgroundColor: "yellow" }]} />;
}

function BlueBox() {
  return <View style={[styles.box, { backgroundColor: "blue" }]} />;
}

function GreenBox() {
  return <View style={[styles.box, { backgroundColor: "green" }]} />;
}

export default function App() {
  return (
    <Background>
      <View style={styles.container}>
        <YellowBox />
        <BlueBox />
        <GreenBox />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 100,
    height: 100,
    opacity: 0.6,
  },
});
