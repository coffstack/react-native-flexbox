import React from "react";
import { StyleSheet, View } from "react-native";
import { Background } from "./Background";

function YellowBox() {
  return <View style={[styles.box, { backgroundColor: "yellow" }]} />;
}

function BlueBox() {
  return <View style={[styles.box, { backgroundColor: "blue" }]} />;
}

function PinkBox() {
  return <View style={[styles.box, { backgroundColor: "green" }]} />;
}

function PurpleBox() {
  return <View style={[styles.box, { backgroundColor: "purple" }]} />;
}

export default function App() {
  return (
    <Background>
      <View style={styles.container}>
        <YellowBox />
        <BlueBox />
        <PinkBox />
        <PurpleBox />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#CCC",
    // opacity: 0.5,
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: "yellow",
    opacity: 0.6,
  },
});
