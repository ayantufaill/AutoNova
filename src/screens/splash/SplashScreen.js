import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image,StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet, scale, verticalScale } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
import AutoNovaLogo from '../../assets/pngs/AutoNovaLogo.png';
import halfSpark from '../../assets/pngs/halfSpark.png';
import { Helpers } from '../../BaseUrl/Helper';
import { colors } from '../../utils/theme';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      try {
        const authToken = await AsyncStorage.getItem('BrearTokken');
    Helpers.AuthTokken = authToken
        const Intro = await AsyncStorage.getItem('IntroOneTime');
        const targetScreen = authToken !== null && Intro === 'true' ? 'addVehicle' : authToken === null && Intro === null? 'intro': 'signUp';
        const timeoutId = setTimeout(() => {
          navigation.navigate(targetScreen);
        }, 3000);
        return () => clearTimeout(timeoutId);
      } catch (error) {
        console.error('Error checking token:', error);
      }
    };

    checkToken();
  }, [navigation]);

  return (
    <View style={styles.container}>
              <StatusBar backgroundColor={colors.primaryColor} barStyle="dark-content" />

      <Image source={halfSpark} style={styles.halfSpark} />
      <View style={styles.logoAutoNovaContainer}>
        <Image source={AutoNovaLogo} style={styles.logoStyling} />
        <Text style={styles.logoText}>Auto Nova</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#536BFC',
  },
  halfSpark: {
    left: 100,
  },
  logoAutoNovaContainer: {
    width: scale(273),
    height: verticalScale(27),
    top: 60,
    left: 51,
    gap: '20@s',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoStyling: {
    width: scale(93),
    height: verticalScale(107),
    transform: [{ rotate: '-15.43deg' }],
  },
  logoText: {
    width: scale(144),
    height: verticalScale(112),
    fontWeight: '700',
    fontSize: 56,
    lineHeight: 56,
    color: '#ffffff',
  },
});
