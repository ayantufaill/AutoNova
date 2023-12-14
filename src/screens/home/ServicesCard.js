import React from "react";

import { View, Text, TouchableOpacity, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import { colors } from "../../utils/theme";

import {
  RightArrow,
  ClockIcon,
  DistanceSmallIcon,
  ServicesIcon,
} from "../../assets/svgs";

const ServicesCard = ({ title, icon }) => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.cardWrapper}>
      <View style={styles.servicesWrapper}>
        <View style={styles.direction}>
          {icon}
          <Text style={styles.services}>{title}</Text>
        </View>
        <RightArrow />
      </View>
      <View style={styles.horizontalBorder} />
      <View style={styles.servicesWrapper}>
        <Text style={[styles.services, styles.name]}>Name</Text>
        <Text style={styles.date}>17 Nov</Text>
      </View>
      <View style={styles.servicesWrapper}>
        <View style={[styles.direction, styles.padding]}>
          <DistanceSmallIcon />
          <Text style={styles.date}>53 km</Text>
        </View>
        <View style={styles.direction}>
          <ClockIcon />
          <Text style={[styles.date, styles.days]}>Tomorrow</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  cardWrapper: {
    backgroundColor: colors.whiteColor,
    borderRadius: "12@s",
    padding: "15@s",
    marginTop: "15@s",
    borderWidth: 1,
    borderColor: colors.greyColor,
  },
  servicesWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "3@s",
  },
  direction: {
    flexDirection: "row",
    alignItems: "center",
    gap: "10@s",
  },
  services: {
    fontSize: "14@s",
    lineHeight: "22@s",
    fontStyle: "normal",
    fontWeight: "400",
    color: colors.lightBlackColor,
  },
  horizontalBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.greyColor,
    marginVertical: "15@s",
  },
  name: {
    color: colors.lightGreyColor,
    paddingLeft: "30@s",
  },
  date: {
    fontSize: "10@s",
    lineHeight: "16@s",
    fontStyle: "normal",
    fontWeight: "400",
    color: colors.darkGreyColor,
  },
  days: {
    color: colors.pinkColor,
    marginLeft: "-3@s",
  },
  padding: {
    paddingLeft: "30@s",
    gap: "5@s",
  },
});

export default ServicesCard;
