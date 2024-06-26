import React, { useEffect, useState } from 'react';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { colors } from '../../utils/theme';
import { RightArrow } from '../../assets/svgs';

import userImage from '../../assets/pngs/user_img.png';

const Header = () => {
  const [user, setUser] = useState(null);

  const getUser = async () => {
    const user = await AsyncStorage.getItem('user');
    return JSON.parse(user);
  };

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, []);

  return (
    <View style={styles.headerWrapper}>
      <Text style={styles.welcomeTitle}>Welcome!</Text>
      <TouchableOpacity activeOpacity={1} style={styles.profileWrapper}>
        {/* <View style={styles.imageWrapper}>
          <Image style={styles.userImage} source={userImage} />
        </View> */}
        <Text style={styles.name}>{user.userName}</Text>
        {/* <RightArrow fill={colors.whiteColor} /> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  headerWrapper: {
    backgroundColor: colors.blueColor,
    padding: '15@s',
  },
  welcomeTitle: {
    fontSize: '22@s',
    lineHeight: '27@s',
    fontWeight: '400',
    fontStyle: 'normal',
    color: colors.whiteColor,
  },
  profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '15@s',
    marginTop: '15@s',
  },
  name: {
    fontSize: '24@s',
    lineHeight: '30@s',
    fontWeight: '700',
    fontStyle: 'normal',
    color: colors.whiteColor,
  },
  imageWrapper: {
    backgroundColor: colors.opacityColor,
    width: '40@s',
    height: '40@s',
    borderRadius: '50@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  userImage: {
    width: '40@s',
    height: '40@s',
    borderRadius: '50@s',
  },
});

export default Header;
