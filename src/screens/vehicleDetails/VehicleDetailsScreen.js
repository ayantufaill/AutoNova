import React from "react";

import { ScaledSheet } from "react-native-size-matters";
import { View, Text, ScrollView } from "react-native";

import { colors } from "../../utils/theme";
import {
  GlobalButton,
  BackArrowHeader,
  VehicleDetails,
} from "../../components";

import { VehicleDetailLogo } from "../../assets/svgs";

const VehicleDetailsScreen = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <BackArrowHeader title="Vehicle Details" />
      <ScrollView
        contentContainerStyle={styles.scrolWrapper}
        showsVerticalScrollIndicator={false}>
        <View style={styles.logoWrapper}>
          <VehicleDetailLogo />
        </View>
        <VehicleDetails
          vehicleName="Tesla"
          vehicleModel="Model S"
          vehicleFuel="40"
        />
        <GlobalButton title="Done" onPress={() => navigate("tabs")} />
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: "20@s",
  },
  scrolWrapper: {
    flex: 1,
    justifyContent: "space-between",
  },

  logoWrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: "260@s",
    paddingRight: "20@s",
  },
});

export default VehicleDetailsScreen;
