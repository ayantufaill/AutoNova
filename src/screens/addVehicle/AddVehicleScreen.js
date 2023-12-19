import React from "react";

import { ScaledSheet } from "react-native-size-matters";
import { View, Text, ScrollView,StatusBar } from "react-native";

import { colors } from "../../utils/theme";
import { GlobalButton } from "../../components";

import { VehicleLogo } from "../../assets/svgs";

const AddVehicleScreen = ({ navigate }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrolWrapper}
        showsVerticalScrollIndicator={false}>
            <StatusBar
        backgroundColor={colors.whiteColor}
        barStyle="dark-content"
      />
        <Text style={styles.title}>
          Personalize your experience by adding a vehicle
        </Text>
        <Text style={styles.subTitle}>
          You vehicle is used to determine compatible Charging stations.
        </Text>
        <VehicleLogo />
        <GlobalButton
          title="Add Vehicle"
          onPress={() => navigate("selectVehicleBrand")}
        />
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
  },
  title: {
    fontSize: "28@s",
    lineHeight: "37@s",
    fontStyle: "normal",
    fontWeight: "700",
    color: colors.lightBlackColor,
  },
  subTitle: {
    fontSize: "14@s",
    lineHeight: "18@s",
    fontStyle: "normal",
    fontWeight: "400",
    marginTop: "7@s",
    color: colors.extraLightGreyColor,
  },
});

export default AddVehicleScreen;
