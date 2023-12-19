import React, { useState } from "react";

import { ScaledSheet } from "react-native-size-matters";
import { View, Text, ScrollView, Image } from "react-native";

import { colors } from "../../utils/theme";
import { GlobalButton, SearchInput } from "../../components";

import fuelLogo from "../../assets/pngs/fuel_logo.png";
import { Helpers } from "../../BaseUrl/Helper";

const VehicleFuelCapacityScreen = ({ navigate }) => {
  const [fuelCapacity, setFuelCapacity] = useState('')
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.title}>Add Fuel Capacity</Text>
          <Text style={styles.subTitle}>Enter your vehicle fuel capacity</Text>
        </View>
        <View style={styles.fuelLogoWrapper}>
          <Image source={fuelLogo} />
        </View>
        <SearchInput
          customStyle={styles.fuelInput}
          placeholder="Fuel Capacity (L)"
          inputMode="numeric"
          placeholderTextColor={colors.darkGreyColor}
          onChangeText={(text)=>setFuelCapacity(text)}
        />
        <View style={styles.buttonWrapper}>
          <GlobalButton
            title="Continue"
            onPress={() =>{
              Helpers.FuelCapacity = fuelCapacity
              console.log(Helpers.FuelCapacity)
              navigate("vehicleDetails")
            } }
          />
        </View>
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
  title: {
    fontSize: "28@s",
    lineHeight: "33@s",
    fontStyle: "normal",
    fontWeight: "700",
    marginTop: "10@s",
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
  fuelInput: {
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderColor: colors.greyColor,
  },
  fuelLogoWrapper: {
    marginVertical: "20@s",
  },
  buttonWrapper: {
    marginTop: "30@s",
  },
});

export default VehicleFuelCapacityScreen;
