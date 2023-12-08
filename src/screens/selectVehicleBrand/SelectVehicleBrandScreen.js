import React from "react";

import { ScaledSheet } from "react-native-size-matters";
import { View, FlatList, ScrollView } from "react-native";

import {
  BackArrowHeader,
  SearchInput,
  SelectArrowButton,
} from "../../components";
import { colors } from "../../utils/theme";

const SelectVehicleBrandScreen = ({ vehicleBrands }) => {
  return (
    <View style={styles.container}>
      <BackArrowHeader title="Select Brand" />

      <SearchInput />
      <FlatList
        data={vehicleBrands}
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

export default SelectVehicleBrandScreen;
