import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters';
import { BackArrowWhite } from '../../assets/svgs';
import { colors } from '../../utils/theme';

const NavigationHead = ({ text }) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    // Navigate back when the back arrow is pressed
    navigation.goBack();
  };

  return (
    <View style={styles.MainBackWithText}>
      <View style={styles.innerContainerForBack}>
        <View style={styles.backIconWithText}>
          <TouchableOpacity onPress={handleBackPress}>
            <BackArrowWhite />
          </TouchableOpacity>
          <View style={styles.textContainer}>
            <Text style={styles.MoreOptionsTxt}>{text}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default NavigationHead;

const styles = ScaledSheet.create({
  MainBackWithText: {
    width: scale(375),
    height: verticalScale(68),
    padding: 20,
    gap: '10@s',
    backgroundColor: colors.primaryColor,
    justifyContent: 'center',
  },
  innerContainerForBack: {
    width: scale(327),
    height: verticalScale(28),
    gap: '10@s',
  },
  backIconWithText: {
    width: scale(179),
    height: verticalScale(28),
    gap: '10@s',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    width: scale(145),
    height: verticalScale(28),
    gap: '10@s',
  },
  MoreOptionsTxt: {
    width: scale(145),
    height: verticalScale(28),
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 29,
    color: '#ffffff',
  },
});
