import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet,scale,verticalScale } from "react-native-size-matters";
import { RightArrow } from '../../assets/svgs';
import { useNavigation } from "@react-navigation/native";

const IconWithArrow = ({title,icon,navigationText}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=>{
        navigation.navigate(navigationText)
    }} style={styles.IconWithTextContainer}>
    <View style={styles.IconWithText}>
        {icon}
        <Text style={styles.GeneralText}>{title}</Text>
    </View>
    <RightArrow/>
    </TouchableOpacity>
  )
}

export default IconWithArrow

const styles = ScaledSheet.create({
    IconWithTextContainer:{
        width:scale(320),
        height:verticalScale(14),
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    IconWithText:{
        width:scale(128),
        height:verticalScale(24),
        gap:'12@s',
        flexDirection:'row',
        alignItems:'center'
    },
    GeneralText:{
        fontSize:16,
        fontWeight:'400',
        lineHeight:21
    }
})