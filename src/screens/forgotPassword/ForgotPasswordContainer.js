import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import ForgotPasswordScreen from "./ForgotPasswordScreen";

const ForgotPasswordContainer = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLogin, setLogin] = useState(true);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();
  const navigate = (route) => {
    navigation.navigate(route);
  };

  return (
    <ForgotPasswordScreen
      isModalVisible={isModalVisible}
      toggleModal={toggleModal}
      navigation={navigation}
      navigate={navigate}
      isLogin={isLogin}
    />
  );
};

export default ForgotPasswordContainer;
