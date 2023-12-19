import React, { useEffect } from "react";

import { ScaledSheet } from "react-native-size-matters";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { colors } from "../../utils/theme";
import { addVehicle } from "../../actions/addVehicleActions";
import Toast from 'react-native-toast-message'
import {
  GlobalButton,
  BackArrowHeader,
  VehicleDetails,
} from "../../components";

import { VehicleDetailLogo } from "../../assets/svgs";
import { Helpers } from "../../BaseUrl/Helper";

const VehicleDetailsScreen = ({ navigate }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.addVehicle.loading);
  const error = useSelector((state) => state.addVehicle.error);
  const success = useSelector((state) => state.addVehicle.success);
  useEffect(() => {
    if (success) {
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Vehicle add successfully',
        visibilityTime: 1000, // 3 seconds
        autoHide: true,
      });
      navigate("tabs")
    }
  }, [success, navigate]);
  const handleAddVehicle =  () => {
const brand = Helpers.CarBrandName;
const model = Helpers.SelectCarModel;
const fuelCapacity = Helpers.FuelCapacity

    const userData = { brand, model, fuelCapacity };
    
    dispatch(addVehicle(userData));
  };
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
          vehicleName={Helpers.CarBrandName}
          vehicleModel={Helpers.SelectCarModel}
          vehicleFuel={Helpers.FuelCapacity}
        />
        <GlobalButton title="Done"     onPress={()=>handleAddVehicle(navigate)} />
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
