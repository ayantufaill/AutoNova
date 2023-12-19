import React from "react";

import AppIntroSlider from "react-native-app-intro-slider";
import { ScaledSheet } from "react-native-size-matters";
import { useNavigation } from '@react-navigation/native';
import { View, Text, StatusBar, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { colors } from "../../utils/theme";

const IntroScreen = () => {
  const navigation = useNavigation();
  const onDoneAction = async()=>{
    await AsyncStorage.setItem('IntroOneTime', 'true');
    navigation.navigate('signUp');
    
  }
  const slides = [
    {
      key: 1,
      text: "Now you can more quickly and easily track the expenses of your vehicle.",
      image: require("../../assets/pngs/intro_car.png"),
      backgroundColor: "#59b2ab",
    },
    {
      key: 2,
      text: "For tracking your daily costs",
      image: require("../../assets/pngs/intro_car.png"),
      backgroundColor: "#febe29",
    },
    {
      key: 3,
      text: "Your work expenses",
      image: require("../../assets/pngs/intro_car.png"),
      backgroundColor: "#22bcb5",
    },
  ];

  const renderSlide = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image style={styles.introImage} source={item.image} />
        <Text style={styles.description}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={colors.primaryColor}
        barStyle="dark-content"
      />
      <AppIntroSlider
        data={slides}
        renderItem={renderSlide}
        showSkipButton={true}
        onDone={onDoneAction}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    padding: "15@s",
  },
  slide: {
    flex: 1,
    alignItems: "center",
  },
  introImage: {
    marginTop: "80@s",
  },
  description: {
    fontSize: "24@s",
    lineHeight: "37@s",
    marginTop: "50@s",
    textAlign: "center",
    fontWeight: "400",
    color: colors.whiteColor,
  },
});

export default IntroScreen;
