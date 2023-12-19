import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { View, Text, StatusBar, ScrollView, ActivityIndicator } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import Header from "./Header";
import VehicleDescriptionCard from "./VehicleDescriptionCard";
import ServicesCard from "./ServicesCard";
import { colors } from "../../utils/theme";
import { PickExpenseIcon, ServicesIcon } from "../../assets/svgs";
import { getCarDetials } from "../../actions/getCarDetails";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.getCarDetails.loading);
  const error = useSelector((state) => state.getCarDetails.error);
  const success = useSelector((state) => state.getCarDetails.success);
  const carDetails = useSelector((state) => state.getCarDetails.carDetails);

  useEffect(() => {
    dispatch(getCarDetials());
  }, []); 

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.blueColor} barStyle="light-content" />
      <Header />
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.blueColor} />
        </View>
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.contentContainer}>
            {carDetails && carDetails.car && carDetails.car.length > 0 && (
              <VehicleDescriptionCard
                brand={carDetails.car[0].brand}
                model={carDetails.car[0].model}
              />
            )}
            <ServicesCard title="Service" icon={<ServicesIcon />} />
            <ServicesCard title="Service" icon={<ServicesIcon />} />
            <ServicesCard title="Expense" icon={<PickExpenseIcon />} />
          </View>
        </ScrollView>
      )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
