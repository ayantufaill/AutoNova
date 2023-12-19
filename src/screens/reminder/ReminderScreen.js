import React,{useState} from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import { colors } from '../../utils/theme';
import { GlobalButton,SearchInput } from '../../components';
import { ReminderBills } from '../../assets/svgs';
import { ScaledSheet } from "react-native-size-matters";
import { CheckBox } from 'react-native-elements';

const ReminderScreen = ({ navigation }) => {
    const [isChecked, setIsChecked] = useState(false);

  return (
    <ScrollView>
    <View style={styles.mainContainer}>
      {/* Main Container */}
      <View style={styles.centeredContainer}>
        {/* Horizontally Centered Container */}
        <View style={styles.IconContainer}>
        <ReminderBills/>
        </View>
        <View style={styles.buttonContainer}>
        <GlobalButton
          title="Expenses"
          customClass={styles.primaryButton}
          customTextStyle={{ fontSize:12 ,
    fontWeight:'700',
    lineHeight:16,
}}
          onPress={() => {
            navigation.navigate("Types of expenses")
          }}
        />

        <GlobalButton
          title="Services"
          customClass={styles.whiteButton}
          customTextStyle={{ color: colors.primaryColor,fontSize:12,
lineHeight:16,fontWeight:'700'
}}
          onPress={() => {
          }}
        />
      </View>
      <SearchInput
          customStyle={styles.Expenses}
          placeholder="Type of Expenses"
          inputMode="numeric"
          placeholderTextColor={colors.darkGreyColor}
        />
      </View>

      <View style={styles.IconContainerBell}>
        <ReminderBills/>
        </View>
        <View style={styles.buttonContainer}>
        <GlobalButton
          title="Just one time"
          customClass={styles.primaryButton}
          customTextStyle={{ fontSize:12 ,
    fontWeight:'700',
    lineHeight:16,
}}
          onPress={() => {
          }}
        />

        <GlobalButton
          title="Repeat every"
          customClass={styles.whiteButton}
          customTextStyle={{ color: colors.primaryColor,fontSize:12,
lineHeight:16,fontWeight:'700'
}}
          onPress={() => {
          }}
        />
      </View>
      <View style={styles.checkAndInput}>
        <CheckBox
          checked={isChecked}
          onPress={() => setIsChecked(!isChecked)}
          title="km"
          containerStyle={{ backgroundColor: 'white', borderWidth: 0,marginTop:13,marginRight:10 }}
          uncheckedColor={colors.primaryColor}
          checkedColor={colors.primaryColor}
        />


      <SearchInput
        customStyle={styles.odometer}
        placeholder="Odometer"
        inputMode="numeric"
        placeholderTextColor={colors.darkGreyColor}
      />
    </View>
    <View style={styles.checkAndInput}>
      <CheckBox
        checked={isChecked}
        onPress={() => setIsChecked(!isChecked)}
        title="Date"
        uncheckedColor={colors.primaryColor}
        containerStyle={{ backgroundColor: 'white', borderWidth: 0,marginTop:13 ,marginRight:10}}
        checkedColor={colors.primaryColor}
      />

      <SearchInput
        customStyle={styles.odometer}
        placeholder="Date"
        inputMode="numeric"
        placeholderTextColor={colors.darkGreyColor}
      />
    </View>
    <SearchInput
          customStyle={styles.NoteInput}
          placeholder="Note..."
          inputMode="numeric"
          placeholderTextColor={colors.darkGreyColor}
        />
    <GlobalButton
          title="Confirm"
          customClass={styles.confirm}
        
          onPress={() => {
          }}
        />
    </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  mainContainer: {
      backgroundColor: colors.whiteColor,
      padding: "15@s",
      alignItems:'center'
  },
  centeredContainer: {
    alignItems: 'center',
    marginTop:30
  },
  IconContainer: {
    backgroundColor: colors.primaryColor, 
    height: 103,
    width: 103,
    borderRadius: 12, 
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    height:27,
    gap: "12@s",
  },
  primaryButton: {
    backgroundColor: colors.blueColor,
    width:'139@s',
    height:'27@s',
    borderRadius:'6@s',
    gap: "10@s",
alignItems:'center',
justifyContent:'center',
    
    
  },
  whiteButton: {
    backgroundColor: 'white',
    borderColor: colors.primaryColor,
    borderWidth: 1,
    width:'139@s',
    height:'27@s',
    borderRadius:'6@s',
  },
  Expenses: {
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderColor: colors.greyColor,
    width:330,
    gap:'30@s',
    borderRadius:12
  },
  IconContainerBell:{
    backgroundColor: colors.primaryColor, 
    height: 103,
    width: 103,
    borderRadius: 12, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:40
  },

  checkAndInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  odometer:{
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderColor: colors.greyColor,
    width:220,
    gap:'30@s',
    borderRadius:12
  },
  NoteInput:{
height:'126@s',
backgroundColor: colors.whiteColor,
borderWidth: 1,
borderColor: colors.greyColor,
borderRadius:12,
marginBottom:25,
paddingHorizontal: "12@s",
marginTop:50

  },
  confirm:{
    width:'90%',
    marginBottom:15
  }
})

export default ReminderScreen;


