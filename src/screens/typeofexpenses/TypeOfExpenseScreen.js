import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../utils/theme";
import { SearchIcon } from "../../assets/svgs";
import {
    SearchInput,
  } from "../../components";
const TypeOfExpenseScreen = () => {
  return (
    <View style={styles.container}>
        <SearchInput
        placeholder="Serach"
        icon={<SearchIcon />}
        inputMode="text"
      />
   
    </View>
  )
}

export default TypeOfExpenseScreen

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
        padding: "15@s",
      },
    
})