import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { ScaledSheet } from "react-native-size-matters";
import { colors } from "../../utils/theme";
import {
  UserIcon,
  Calender,
  DownArrow,
  MeterOdo,
  SettingTool,
  LocationPointer,
  ProfileDriver,
} from "../../assets/svgs";
import { SearchInput, GlobalButton } from "../../components";

const RefuelingScreen = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [expenseValues, setExpenseValues] = useState({
    date: "",
    time: "",
    odometer: "",
    expenseName: "",
    place: "",
    driver: "",
    note: "",
  });

  const toggleCollapse = () => {
    // setIsCollapsed(!isCollapsed);
  };

  console.log("checking services", expenseValues);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.containerBorder}>
          <TouchableOpacity
            onPress={toggleCollapse}
            style={styles.collpaseAble}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <Calender />
              <Text
                style={{
                  marginLeft: 5,
                  lineHeight: 22,
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#94A3B8",
                }}
              >
                Date & Time
              </Text>
            </View>

            {/* Right Icon */}
            <View>
              <DownArrow />
            </View>
          </TouchableOpacity>
          {!isCollapsed && (
            <View style={styles.additionalContentContainer}>
              <View style={styles.borderLine} />
              <View style={styles.InputContainer}>
                <SearchInput
                  customStyle={styles.date}
                  placeholder="Date"
                  inputMode="numeric"
                  placeholderTextColor={colors.darkGreyColor}
                  onChangeText={(value) =>
                    setExpenseValues({ ...expenseValues, date: value })
                  }
                />
                <SearchInput
                  customStyle={styles.time}
                  placeholder="Time"
                  inputMode="numeric"
                  placeholderTextColor={colors.darkGreyColor}
                  onChangeText={(value) =>
                    setExpenseValues({ ...expenseValues, time: value })
                  }
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.containerBorder}>
          <TouchableOpacity
            onPress={toggleCollapse}
            style={styles.collpaseAble}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <MeterOdo />
              <Text
                style={{
                  marginLeft: 5,
                  lineHeight: 22,
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#94A3B8",
                }}
              >
                Odometer
              </Text>
            </View>

            {/* Right Icon */}
            <View>
              <DownArrow />
            </View>
          </TouchableOpacity>
          {!isCollapsed && (
            <View style={styles.additionalContentContainer}>
              <View style={styles.borderLine} />
              <View style={styles.InputContainer}>
                <SearchInput
                  customStyle={styles.enterOd}
                  placeholder="Enter"
                  inputMode="numeric"
                  placeholderTextColor={colors.darkGreyColor}
                  onChangeText={(value) =>
                    setExpenseValues({ ...expenseValues, odometer: value })
                  }
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.containerBorder}>
          <TouchableOpacity
            onPress={toggleCollapse}
            style={styles.collpaseAble}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <SettingTool />
              <Text
                style={{
                  marginLeft: 5,
                  lineHeight: 22,
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#94A3B8",
                }}
              >
                {/* Type of services */}
                Name of Service
              </Text>
            </View>

            {/* Right Icon */}
            <View>
              <DownArrow />
            </View>
          </TouchableOpacity>
          {!isCollapsed && (
            <View style={styles.additionalContentContainer}>
              <View style={styles.borderLine} />
              <View style={styles.InputContainer}>
                <SearchInput
                  customStyle={styles.enterOd}
                  placeholder="Select type of services"
                  inputMode="numeric"
                  placeholderTextColor={colors.darkGreyColor}
                  onChangeText={(value) =>
                    setExpenseValues({ ...expenseValues, expenseName: value })
                  }
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.containerBorder}>
          <TouchableOpacity
            onPress={toggleCollapse}
            style={styles.collpaseAble}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <LocationPointer />
              <Text
                style={{
                  marginLeft: 5,
                  lineHeight: 22,
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#94A3B8",
                }}
              >
                Place
              </Text>
            </View>

            {/* Right Icon */}
            <View>
              <DownArrow />
            </View>
          </TouchableOpacity>
          {!isCollapsed && (
            <View style={styles.additionalContentContainer}>
              <View style={styles.borderLine} />
              <View style={styles.InputContainer}>
                <SearchInput
                  customStyle={styles.enterOd}
                  placeholder="Select Place"
                  inputMode="numeric"
                  placeholderTextColor={colors.darkGreyColor}
                  onChangeText={(value) =>
                    setExpenseValues({ ...expenseValues, place: value })
                  }
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.containerBorder}>
          <TouchableOpacity
            onPress={toggleCollapse}
            style={styles.collpaseAble}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 12 }}
            >
              <ProfileDriver />
              <Text
                style={{
                  marginLeft: 5,
                  lineHeight: 22,
                  fontSize: 14,
                  fontWeight: "400",
                  color: "#94A3B8",
                }}
              >
                Driver
              </Text>
            </View>

            {/* Right Icon */}
            <View>
              <DownArrow />
            </View>
          </TouchableOpacity>
          {!isCollapsed && (
            <View style={styles.additionalContentContainer}>
              <View style={styles.borderLine} />
              <View style={styles.InputContainer}>
                <SearchInput
                  customStyle={styles.enterOd}
                  placeholder="Detial"
                  inputMode="numeric"
                  placeholderTextColor={colors.darkGreyColor}
                  onChangeText={(value) =>
                    setExpenseValues({ ...expenseValues, driver: value })
                  }
                />
              </View>
            </View>
          )}
        </View>
        <SearchInput
          customStyle={styles.NoteInput}
          placeholder="Note..."
          inputMode="numeric"
          placeholderTextColor={colors.darkGreyColor}
          onChangeText={(value) =>
            setExpenseValues({ ...expenseValues, note: value })
          }
        />
        <GlobalButton
          title="Confirm"
          customClass={styles.confirm}
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  );
};

export default RefuelingScreen;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: "15@s",
  },
  collapsibleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 10,
  },
  collpaseAble: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    justifyContent: "space-between",
    gap: "12@s",
    height: 48,
  },
  containerBorder: {
    borderColor: "#E2E8F0",
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 12,
  },
  NoteInput: {
    height: "100@s",
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderColor: colors.greyColor,
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: "12@s",
    marginTop: 23,
  },
  confirm: {
    marginTop: 45,
  },
  borderLine: {
    borderWidth: 0.7,
    borderColor: "#E2E8F0",
    width: "93%",
    marginLeft: 15,
  },
  InputContainer: {
    height: "46@s",
    gap: "20@s",
    flexDirection: "row",
    marginLeft: 10,
    marginBottom: 40,
  },

  date: {
    width: "45%",
    height: "46@s",
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#E2E8F0",
  },
  time: {
    width: "45%",
    height: "46@s",
    borderRadius: 12,
    borderWidth: 1,
    backgroundColor: "#fff",
    borderColor: "#E2E8F0",
  },
  enterOd: {
    width: "95%",

    height: "46@s",
    gap: "10@s",
    backgroundColor: "#fff",
    borderColor: "#E2E8F0",
    borderRadius: 12,
    borderWidth: 1,
  },
});
