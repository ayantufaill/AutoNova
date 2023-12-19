import { StyleSheet, Text, View ,Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { ScaledSheet,scale,verticalScale } from "react-native-size-matters";
import { colors } from '../../utils/theme';
import { AboutIcon, BackArrowWhite, CalculationIcon, CarIcon, ExpenseMoneyIcon, LanguageIcon, LocationPointer, MultipleUserIcon, MyPlaceIcon, PaymentMoneyIcon, ReasonIcon, RefuelIcon, RightArrow, SearchIcon, SettingIcon, SettingTool, UserIcon, VehicleOrUserIcon, WalletIcon } from '../../assets/svgs';
import { IconWithArrow, NavigationHead, SearchInput } from '../../components';
import profile from '../../assets/pngs/profile.png'
import FormIcon from '../../assets/svgs/FormIcon';
const MoreOptionsScreen = ({navigate}) => {
  return (
    <View style={styles.container}>
  <NavigationHead text={"More Options"}/>
  <View style={styles.innerContainer}>
  <SearchInput
   placeholder="Serach"
   icon={<SearchIcon />}
   inputMode="text"
 />
 <ScrollView showsVerticalScrollIndicator={false} style={{height:495}} >
 <TouchableOpacity onPress={()=>navigate("My Profile")} style={styles.ProfileContainer}>
<View style={styles.ImageWithText}>
    <Image source={profile} style={styles.profileStyling}/>
    <View style={styles.profileDetail}>
        <Text style={styles.personName}>John Doe</Text>
        <Text style={styles.personEmail}>johndoe01@gmail.com</Text>
    </View>
</View>
<RightArrow/>
 </TouchableOpacity>
 <View style={styles.BorderLine}/>
 <View style={styles.IconsContainer}>
<IconWithArrow title={"Vehicles"} icon={<CarIcon/>} navigationText={"signUp"} />
<IconWithArrow title={"Users"} icon={<MultipleUserIcon/>} />
<IconWithArrow title={"Vehicles / Users"} icon={<VehicleOrUserIcon/>} />
 </View>
 <View style={styles.BorderLine}/>
 <View style={styles.IconsContainer2}>
 <IconWithArrow title={"Gas Stations"} icon={<MultipleUserIcon/>} />
<IconWithArrow title={"Places"} icon={<LocationPointer/>} />
<IconWithArrow title={"Types of Services"} icon={<SettingTool/>} />
<IconWithArrow title={"Types of Expense"} icon={<ExpenseMoneyIcon/>} />
<IconWithArrow title={"Types of Income"} icon={<WalletIcon/>} />
<IconWithArrow title={"Payment Methods"} icon={<PaymentMoneyIcon/>} />
<IconWithArrow title={"Reasons"} icon={<ReasonIcon/>} />
<IconWithArrow title={"Forms"} icon={<FormIcon/>} />
 </View>
 <View style={styles.BorderLine}/>
 <View style={styles.IconsContainer}>
<IconWithArrow title={"Where to Refuel"} icon={<RefuelIcon/>} />
<IconWithArrow title={"My Place"} icon={<MyPlaceIcon/>} />
<IconWithArrow title={"Flex Calculator"} icon={<CalculationIcon/>} />
 </View>
 <View style={styles.BorderLine}/>
 <View style={styles.IconsContainer}>
<IconWithArrow title={"Settings"} icon={<SettingIcon/>} />
<IconWithArrow title={"Translation"} icon={<LanguageIcon/>} />
 </View>
 <View style={styles.BorderLine}/>
 <View style={styles.IconsContainer}>
<IconWithArrow title={"About"} icon={<AboutIcon/>} />
 </View>
 
 </ScrollView>
 </View>
    </View>
  )
}

export default MoreOptionsScreen

const styles = ScaledSheet.create({
    container:{
        flex:1,
        backgroundColor:'#ffffff',
    },
    innerContainer:{
        gap:'31@s',
padding:'15@s'
    },
    ProfileContainer:{
        width:scale(320),
        height:verticalScale(52),
        gap:'120@s',
        flexDirection:'row',
        alignItems:'center',
    },
    ImageWithText:{
        width:scale(190),
        height:verticalScale(52),
        gap:'12@s',
        flexDirection:'row',
        alignItems:'center'
    },
    profileStyling:{

    },
    profileDetail:{
        width:scale(126),
        height:verticalScale(40),
    },
    personName:{
        width:scale(71),
        height:verticalScale(21),
        fontSize:16,
        fontWeight:'500',
        lineHeight:21
    },
    personEmail:{
        width:scale(126),
        height:verticalScale(19),
        fontSize:12,
        fontWeight:'400',
        lineHeight:19,
        color:'#94A3B8'
    },
    BorderLine:{
        width:scale(323),
        borderWidth:1,
        borderColor:'#94A3B8',
        alignItems:'center',
        marginTop:20
    },
    IconsContainer:{
        width:scale(320),
        gap:'30@s',
        marginTop:20,
        marginBottom:30
    },
    IconsContainer2:{
        width:scale(320),
        gap:'30@s',
        marginTop:20 
    }
  

})