import React from 'react'
import { useNavigation } from "@react-navigation/native";
import ProfileScreen from './ProfileScreen';
const ProfileContainer = () => {
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return <ProfileScreen navigate={navigate} />;
}

export default ProfileContainer