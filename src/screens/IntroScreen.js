import React from "react";

import AppIntroSlider from "react-native-app-intro-slider";

import { View, Text, StyleSheet, Image } from "react-native";

import { colors } from "../utils/theme";

const IntroScreen = () => {
  const slides = [
    {
      key: 1,
      title: "Title 1",
      text: "Description.\nSay something cool",
      image: require("../assets/pngs/intro_car.png"),
      backgroundColor: "#59b2ab",
    },
    {
      key: 2,
      title: "Title 2",
      text: "Other cool stuff",
      image: require("../assets/pngs/intro_car.png"),
      backgroundColor: "#febe29",
    },
    {
      key: 3,
      title: "Rocket guy",
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require("../assets/pngs/intro_car.png"),
      backgroundColor: "#22bcb5",
    },
  ];

  const renderSlide = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <AppIntroSlider
        data={slides}
        renderItem={renderSlide}
        showSkipButton={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  slide: {
    flex: 1,
  },
});

export default IntroScreen;
