import React from "react";

import { View, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { colors, fonts } from "../../utils/theme";

const VehicleDetails = ({ vehicleName, vehicleModel, vehicleFuel }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.vehicleDescription}>{vehicleName}</Text>
      <View style={styles.horizontalBorder} />
      <Text style={styles.vehicleDescription}>{vehicleModel}</Text>
      <View style={styles.horizontalBorder} />
      <Text style={styles.vehicleDescription}>{vehicleFuel}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.opacityColor,
    borderRadius: "17@s",
    padding: "15@s",
    gap: "20@s",
  },
  horizontalBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.opacityColor,
  },
  vehicleDescription: {
    fontSize: "16@s",
    lineHeight: "20@s",
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
    color: colors.blackColor,
  },
});

export default VehicleDetails;
