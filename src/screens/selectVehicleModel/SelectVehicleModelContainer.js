import React from 'react';
import SelectVehicleModelScreen from './SelectVehicleModelScreen';
import { vehicleModels } from '../../utils/mock';

const SelectVehicleModelContainer = ({ navigation, route }) => {
  const navigate = (route) => {
    navigation.navigate(route);
  };
  const { selectedId } = route.params;

  const filteredModals = vehicleModels.filter(
    (vehicle) => vehicle.brandId === selectedId
  );

  return (
    <SelectVehicleModelScreen
      vehicleModels={filteredModals}
      navigate={navigate}
    />
  );
};

export default SelectVehicleModelContainer;
