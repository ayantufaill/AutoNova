import React from "react";

import { ScaledSheet } from "react-native-size-matters";
import { View, FlatList } from "react-native";

import { BackArrowHeader, SelectArrowButton } from "../../components";
import { colors } from "../../utils/theme";

const SelectVehicleModelScreen = ({ vehicleModels }) => {
  return (
    <View style={styles.container}>
      <BackArrowHeader title="Select Model" />
      <FlatList
        data={vehicleModels}
        renderItem={({ item }) => <SelectArrowButton title={item.title} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatlist}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: "15@s",
  },
  scrolWrapper: {
    flex: 1,
  },
  flatlist: {
    marginTop: "15@s",
  },
});

export default SelectVehicleModelScreen;
