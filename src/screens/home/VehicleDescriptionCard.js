import React from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { colors } from "../../utils/theme";

import vehicleImg from "../../assets/pngs/vehicle_img.png";
import {
  CarIcon,
  RightArrow,
  DistanceIcon,
  ExpenseIcon,
} from "../../assets/svgs";

const VehicleDescriptionCard = ({brand, model}) => {
  return (
    <View style={styles.cardWrapper}>
      <Image
        resizeMode="contain"
        style={styles.vehicleImg}
        source={vehicleImg}
      />
      <View style={styles.carWrapper}>
        <View style={styles.direction}>
          <CarIcon />
          <Text style={styles.carName}>Your Car:</Text>
        </View>
        <TouchableOpacity style={styles.carModelWrapper}>
          <Text style={styles.carModel}>{brand} {model}</Text>
          <RightArrow fill={colors.whiteColor} />
        </TouchableOpacity>
      </View>
      <View style={styles.borderHorizontal} />
      <View style={styles.carWrapper}>
        <View style={styles.direction}>
          <DistanceIcon />
          <Text style={styles.carDistance}>Total Distance Travelled:</Text>
        </View>
        <Text style={styles.carDistance}>1050 km</Text>
      </View>
      <View style={styles.carWrapper}>
        <View style={styles.direction}>
          <ExpenseIcon />
          <Text style={styles.carDistance}>Total Expense</Text>
        </View>
        <Text style={styles.carDistance}>$12,000</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  cardWrapper: {
    backgroundColor: colors.whiteColor,
    borderRadius: "12@s",
    padding: "15@s",
    marginTop: "15@s",
  },
  vehicleImg: {
    width: "190@s",
    height: "75@s",
  },
  carWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "15@s",
  },
  direction: {
    flexDirection: "row",
    alignItems: "center",
    gap: "10@s",
  },
  carModelWrapper: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.blueColor,
    gap: "10@s",
    paddingVertical: "8@s",
    paddingHorizontal: "15@s",
    borderRadius: "10@s",
  },
  carModel: {
    fontSize: "12@s",
    lineHeight: "19@s",
    fontStyle: "normal",
    fontWeight: "400",
    color: colors.whiteColor,
  },
  borderHorizontal: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greyColor,
    marginTop: "17@s",
  },
  carName: {
    fontSize: "14@s",
    lineHeight: "22@s",
    fontStyle: "normal",
    fontWeight: "400",
    color: colors.lightBlackColor,
  },
  carDistance: {
    fontSize: "14@s",
    lineHeight: "22@s",
    fontStyle: "normal",
    fontWeight: "400",
    color: colors.darkGreyColor,
  },
});

export default VehicleDescriptionCard;
