import React from "react";

import { View, Text, StatusBar, ScrollView } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import Header from "./Header";
import VehicleDescriptionCard from "./VehicleDescriptionCard";
import ServicesCard from "./ServicesCard";
import { colors } from "../../utils/theme";
import { PickExpenseIcon, ServicesIcon } from "../../assets/svgs";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.blueColor} barStyle="light-content" />
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <VehicleDescriptionCard />
          <ServicesCard title="Service" icon={<ServicesIcon />} />
          <ServicesCard title="Service" icon={<ServicesIcon />} />
          <ServicesCard title="Expense" icon={<PickExpenseIcon />} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    padding: "15@s",
  },
});

export default HomeScreen;
