import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import BottomTabs from '../../utils/BottomTabs';
import {
  PlusActiveIcon,
  PlusInactiveIcon,
  ExpenseIcon,
  ServicesIcon,
  RefuelIcon,
} from '../../assets/svgs';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../../utils/theme';

const AddNew = ({ navigation }) => (
  <View style={styles.add}>
    <TouchableOpacity
      onPress={() => navigation.navigate('Expense')}
      style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
    >
      <ExpenseIcon />
      <Text>Expense</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('Service')}
      style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
    >
      <ServicesIcon />
      <Text>Service</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => navigation.navigate('Refueling')}
      style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}
    >
      <RefuelIcon />
      <Text>Refueling</Text>
    </TouchableOpacity>
  </View>
);

const DashboardScreen = ({ navigation }) => {
  const [add, toggleAdd] = useState(false);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      {add && <AddNew navigation={navigation} />}

      <TouchableOpacity
        style={styles.btnCircle}
        onPress={() => toggleAdd(!add)}
      >
        {add ? <PlusInactiveIcon /> : <PlusActiveIcon />}
      </TouchableOpacity>
      <BottomTabs />
    </View>
  );
};

export default DashboardScreen;

const styles = ScaledSheet.create({
  add: {
    width: 150,
    padding: 25,
    gap: 20,
    borderRadius: 20,
    position: 'absolute',
    zIndex: 2,
    bottom: 110,
    right: '30%',
    backgroundColor: 'white',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  btnCircle: {
    height: '52@s',
    width: '52@s',
    borderRadius: 70 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.whiteColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    position: 'absolute',
    zIndex: 2,
    bottom: 40,
    right: '43%',
  },
});
