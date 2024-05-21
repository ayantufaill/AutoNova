import React from 'react';

import { useNavigation } from '@react-navigation/native';

import SelectVehicleBrandScreen from './SelectVehicleBrandScreen';
import { vehicleBrands } from '../../utils/mock';

const SelectVehicleBrandContainer = () => {
  const navigation = useNavigation();

  return (
    <SelectVehicleBrandScreen
      vehicleBrands={vehicleBrands}
      navigation={navigation}
    />
  );
};

export default SelectVehicleBrandContainer;
