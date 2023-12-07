import React, { useState } from "react";

import { useNavigation } from "@react-navigation/native";

import ForgotPasswordScreen from "./ForgotPasswordScreen";

const ForgotPasswordContainer = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigation = useNavigation();

  return (
    <ForgotPasswordScreen
      isModalVisible={isModalVisible}
      toggleModal={toggleModal}
      navigation={navigation}
    />
  );
};

export default ForgotPasswordContainer;
