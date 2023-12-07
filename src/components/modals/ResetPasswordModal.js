import React, { useState } from "react";

import Modal from "react-native-modal";
import { View, Text, Button } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

import GlobalButton from "../buttons/GlobalButton";

import { colors } from "../../utils/theme";

const ResetPasswordModal = ({ isModalVisible, handleClick, toggleModal }) => {
  return (
    <View style={{ flex: 1 }}>
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        hasBackdrop={true}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Reset Password</Text>
          <Text style={styles.subTitle}>
            We’ve sent you an email with a password.
          </Text>
          <GlobalButton
            title="Login"
            customClass={styles.loginButton}
            onPress={handleClick}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = ScaledSheet.create({
  modalContainer: {
    backgroundColor: colors.whiteColor,
    padding: "30@s",
    borderRadius: "16@s",
  },
  title: {
    fontSize: "32@s",
    lineHeight: "40@s",
    fontStyle: "normal",
    fontWeight: "500",
    textAlign: "center",
    color: colors.lightBlackColor,
  },
  subTitle: {
    fontSize: "14@s",
    lineHeight: "22@s",
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "center",
    marginTop: "20@s",
    color: colors.lightGreyColor,
  },
  loginButton: {
    height: "50@s",
    marginTop: "40@s",
    borderRadius: "12@s",
  },
});

export default ResetPasswordModal;
