import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScaledSheet } from "react-native-size-matters";
import { colors } from '../../utils/theme';
import { SearchInput,GlobalButton } from '../../components';
const NameOfExpensesScreen = () => {
  return (
    <View style={styles.container}>
      <SearchInput
          customStyle={styles.Expenses}
          placeholder="Enter Name"
          inputMode="text"
          placeholderTextColor={colors.darkGreyColor}
        />
           <GlobalButton
          title="Confirm"
          customClass={styles.confirm}
        
          onPress={() => {
          }}
        />
    </View>
  )
}

export default NameOfExpensesScreen

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: "15@s",
  },
  confirm:{
    width:'100%',
    marginTop:30
  }
})