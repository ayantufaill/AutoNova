import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet, scale, verticalScale } from "react-native-size-matters";
import { colors } from '../../utils/theme';
import Svg, { Path, Circle } from 'react-native-svg';
import {BarChart, PieChart} from 'react-native-gifted-charts';

const ReportScreen = () => {
  const [activeButton, setActiveButton] = useState('General');

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
  };
 
    const barData = [
        {
          value: 40,
          label: 'Jan',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#5570F1',
        },
        {value: 0},
        {
          value: 50,
          label: 'Feb',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#5570F1',
        },
        {value: 0},
        {
          value: 75,
          label: 'Mar',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#5570F1',
        },
        {value: 0},
        {
          value: 30,
          label: 'Apr',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#5570F1',
        },
        {value: 0},
        {
          value: 60,
          label: 'May',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#5570F1',
        },
        {value: 0},
        {
          value: 65,
          label: 'Jun',
          spacing: 2,
          labelWidth: 30,
          labelTextStyle: {color: 'gray'},
          frontColor: '#5570F1',
        },
        {value: 0},
      ];
  
      const pieData = [
    
        {value: 70, color: '#5570F1', gradientCenterColor: '#5570F1'},
        {value: 50, color: '#FFCC91', gradientCenterColor: '#FFCC91'},
      ];
  const getContentView = () => {
    switch (activeButton) {
      case 'General':
        return (
            <ScrollView > 
          <View style={styles.GraphContainer}>
      <View style={styles.innerContainerOfGraph}>
        <View style={styles.TopContentView}>
<View style={styles.headingContainer}>
    <Text style={{fontSize:16,fontWeight:'500',lineHeight:20,color:'#1F2336'}}>Cost</Text>
</View>
<View style={styles.keyContainer}>
    <View style={styles.key}>
        <Text style={{fontWeight:'400',fontSize:11,lineHeight:14,color:'#484F61'}}>Total Cost: $0.00</Text>
    </View>
    <View style={styles.figureContainer}>
        <View style={styles.ByDay}>
            <View style={styles.Rectangle}></View>
            <Text style={styles.ByDayText}>By Day: $0.00</Text>
            
        </View>
        <View style={styles.ByKm}>
        <View style={styles.RectangleKm}></View>
            <Text style={styles.ByKmText}>By km: $0.00</Text>
        </View>
    </View>
</View>
<View style={styles.graphchartTop}>
<PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={90}
          innerRadius={60}
        
     
        />
</View>
        </View>
      </View>
          </View>
          <View style={styles.BottomGraph}>
            <View style={styles.bottomChatViews}>
                <View style={styles.summaryHeading}>
                    <View style={styles.summaryHeadingContainer}>
                        <Text style={styles.HeadingOfTheBottomGraph}>
Distance
                        </Text>
                    </View>
                </View>
                <View style={styles.contentOfbottomchart}>
                    <View style={styles.content}>
<Text style={styles.TextOfContentContainer}>Total Distance: 10 km</Text>
                    </View>
                    <View style={styles.content}>
                    <Text style={styles.TextOfContentContainer}>Daily Average: 20 km</Text>

</View>
                </View>
                <View style={styles.graphBar}>
                <BarChart
          data={barData}
          barWidth={8}
          spacing={24}
          roundedTop
          roundedBottom
          hideRules
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{color: 'gray'}}
          noOfSections={3}
          maxValue={75}
        />
                </View>
            </View>
          </View>
          </ScrollView>
        );
      case 'Refueling':
        return (
            <View style={styles.GraphContainer}>
      <View style={styles.innerContainerOfGraph}>
        <View style={styles.TopContentView}>
<View style={styles.headingContainer}>
    <Text style={{fontSize:16,fontWeight:'500',lineHeight:20,color:'#1F2336'}}>Cost</Text>
</View>
<View style={styles.keyContainer}>
    <View style={styles.key}>
        <Text style={{fontWeight:'400',fontSize:11,lineHeight:14,color:'#484F61'}}>Total Cost: $0.00</Text>
    </View>
    <View style={styles.figureContainer}>
        <View style={styles.ByDay}>
            <View style={styles.Rectangle}></View>
            <Text style={styles.ByDayText}>By Day: $0.00</Text>
            
        </View>
        <View style={styles.ByKm}>
        <View style={styles.RectangleKm}></View>
            <Text style={styles.ByKmText}>By km: $0.00</Text>
        </View>
    </View>
</View>
<View style={styles.graphchartTop}>
<PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={90}
          innerRadius={60}
        
     
        />
</View>
        </View>
      </View>
          </View>
        );
      case 'Expense':
        return (
            <View style={styles.GraphContainer}>
      <View style={styles.innerContainerOfGraph}>
        <View style={styles.TopContentView}>
<View style={styles.headingContainer}>
    <Text style={{fontSize:16,fontWeight:'500',lineHeight:20,color:'#1F2336'}}>Cost</Text>
</View>
<View style={styles.keyContainer}>
    <View style={styles.key}>
        <Text style={{fontWeight:'400',fontSize:11,lineHeight:14,color:'#484F61'}}>Total Cost: $0.00</Text>
    </View>
    <View style={styles.figureContainer}>
        <View style={styles.ByDay}>
            <View style={styles.Rectangle}></View>
            <Text style={styles.ByDayText}>By Day: $0.00</Text>
            
        </View>
        <View style={styles.ByKm}>
        <View style={styles.RectangleKm}></View>
            <Text style={styles.ByKmText}>By km: $0.00</Text>
        </View>
    </View>
</View>
<View style={styles.graphchartTop}>
<PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={90}
          innerRadius={60}
        
     
        />
</View>
        </View>
      </View>
          </View>
        );
      case 'Service':
        return (
            <View style={styles.GraphContainer}>
      <View style={styles.innerContainerOfGraph}>
        <View style={styles.TopContentView}>
<View style={styles.headingContainer}>
    <Text style={{fontSize:16,fontWeight:'500',lineHeight:20,color:'#1F2336'}}>Cost</Text>
</View>
<View style={styles.keyContainer}>
    <View style={styles.key}>
        <Text style={{fontWeight:'400',fontSize:11,lineHeight:14,color:'#484F61'}}>Total Cost: $0.00</Text>
    </View>
    <View style={styles.figureContainer}>
        <View style={styles.ByDay}>
            <View style={styles.Rectangle}></View>
            <Text style={styles.ByDayText}>By Day: $0.00</Text>
            
        </View>
        <View style={styles.ByKm}>
        <View style={styles.RectangleKm}></View>
            <Text style={styles.ByKmText}>By km: $0.00</Text>
        </View>
    </View>
</View>
<View style={styles.graphchartTop}>
<PieChart
          data={pieData}
          donut
          showGradient
          sectionAutoFocus
          radius={90}
          innerRadius={60}
        
     
        />
</View>
        </View>
      </View>
          </View>
        );
      default:
        return null;
    }
  };

  const renderButtons = () => {
    const buttonNames = ['General', 'Refueling', 'Expense', 'Service'];

    return buttonNames.map((buttonName, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.button, activeButton === buttonName && styles.activeButton]}
        onPress={() => handleButtonPress(buttonName)}
      >
        <Text
          style={[
            styles.buttonText,
            activeButton === buttonName && styles.activeButtonText,
          ]}
        >
          {buttonName}
        </Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <View>
    <ScrollView style={styles.buttonMainContainer} horizontal={true} showsHorizontalScrollIndicator={false}>
        {renderButtons()}
    </ScrollView>
      </View>
      {getContentView()}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    
  },
  buttonMainContainer: {
    flexDirection: 'row',
    gap: '6@s',
    marginTop: 20,
    padding:'13@s'
  },
  
  button: {
    padding: 5,
    borderWidth: 1,
    borderColor: colors.primaryColor,
    borderRadius: 69,
    gap: '10@s',
    height: verticalScale(30),
    width: scale(105),
    alignItems: 'center',
    marginRight:6
  },
  activeButton: {
    backgroundColor: colors.primaryColor,
    borderColor: colors.primaryColor,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: colors.primaryColor,
  },
  activeButtonText: {
    color: '#ffff',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    lineHeight: 20,
  },
  contentText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkGreyColor,
  },
  GraphContainer: {
    width: scale(321),
    height: verticalScale(345),
    top: 16,
    left: 20,
    paddingTop: 20,
    paddingBottom: 45,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 12,
    backgroundColor: '#ffff',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4, 
    },
    shadowOpacity: 0.3, 
    shadowRadius: 6, 
    elevation: 5,
  },
  
  innerContainerOfGraph: {
    width: scale(287), // Fill width
    height: verticalScale(291),
    gap: '24@s',
  },
  TopContentView:{
    width:scale(287),
    height:verticalScale(84),
    gap:'12@s',
  },
  headingContainer:{
    width:scale(287),
    height:verticalScale(21),
    gap:'12@s',
  },
  keyContainer:{
    width:scale(287),
    height:verticalScale(51),
    gap:'23@s'
  },
  key:{
    width:scale(87),
    height:verticalScale(14),
    gap:'8@s'
  },
  figureContainer:{
    width:scale(194),
    height:verticalScale(14),
    gap:'20@s',
    flexDirection:'row'
  },
  ByDay:{
    width:scale(87),
    height:verticalScale(14),
    gap:'8@s',
    flexDirection:'row',
    alignItems:'center'
  },
  Rectangle:{
    width:scale(8),
    height:verticalScale(8),
    borderRadius:6,
    backgroundColor:'#5570F1',
  },
  ByDayText:{
    width:scale(71),
 height:verticalScale(14),
 fontSize:13,
 fontWeight:'400',
 lineHeight:14,
 color:'#94A3B8'
  },
  ByKm:{
    width:scale(87),
    height:verticalScale(14),
    gap:'8@s',
    flexDirection:'row',
    alignItems:'center'
  },
  RectangleKm:{
    width:scale(8),
    height:verticalScale(8),
    borderRadius:6,
    backgroundColor:'#FFCC91',
  },
  ByKmText:{
    width:scale(71),
    height:verticalScale(14),
    fontSize:13,
    fontWeight:'400',
    lineHeight:14,
    color:'#94A3B8'
  },
  graphchartTop:{
    width:scale(205),
    height:verticalScale(205),
    alignItems:'center',
    justifyContent:'center',
    left:40
  },

  BottomGraph:{
    width:scale(327),
    height:verticalScale(424),
    top: 16,
    left: 20,
    paddingTop: 20,
    paddingBottom: 45,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 12,
    backgroundColor: '#ffff',
    marginVertical: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4, 
    },
    shadowOpacity: 0.3,
    shadowRadius: 6, 
    elevation: 5,
  },
  bottomChatViews:{
    width:scale(287),
    height:verticalScale(381),
    gap:'36@s',
  },
  summaryHeading:{
    width:scale(287),
    height:verticalScale(21),
    gap:'290@s',
  },
  summaryHeadingContainer:{
    width:scale(67),
    height:verticalScale(21),
    gap:'21@s'
  },
  HeadingOfTheBottomGraph:{
    width:scale(67),
    height:verticalScale(21),
    fontWeight:'500',
    lineHeight:21,
    fontSize:16
  }
  ,
  contentOfbottomchart:{
    width:scale(194),
    height:verticalScale(14),
    gap:'20@s',
    flexDirection:'row'
  },
  content:{
    width:scale(106),
    height:verticalScale(14),
    gap:'8@s'
  },
  TextOfContentContainer:{
    width:scale(106),
    height:verticalScale(14),
    fontSize:11,
    lineHeight:13,
    fontWeight:'400',
    color:'#484F61'
  },
  graphBar:{
    width:scale(287),
    height:verticalScale(274),
    
  },
  
 
});

export default ReportScreen;
