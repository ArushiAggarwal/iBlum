import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import style from './style'
import { BarChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default class Performance extends Component{
   
    static navigationOptions = {
        title: "Business Performance",
        headerStyle: {
          backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: hp('2.5%')
        },
      };

    render()
    
    {
        const screenWidth = Dimensions.get("window").width - wp('2%');
        return(
            <View style ={{flex: 1,flexDirection:'column'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.PerViewstyle}>
                    <View style={style.PerSubViewstyle}>
                    <View style={style.PerView}>
                        <Text style={style.PerViewText}>Coupon Created</Text>
                    </View>
                    <View>
                        <Text style={style.PerSubViewText}>178</Text>
                    </View>
                    </View>
                    <View style={style.PerSubViewstyle}>
                    <View style={style.PerView}>
                        <Text style={style.PerViewText}>Coupon Redeem</Text>
                    </View>
                    <View >
                        <Text style={style.PerSubViewText}>156</Text>
                    </View>
                    </View>
                </View>
                <View style={style.PerViewRedeem}>
                <View style={style.PerSubRedeem}>
                        <Text style={style.PerViewText}>Redemptions Trend</Text>
                    </View>
                    </View>

                    {/* BarChart */}
                    <View>
                    <BarChart
                    style={{marginTop: hp('4%')}} 
                    data={data} 
                    width={screenWidth} 
                    height={hp('46%')}
                    yAxisLabel={''} 
                    chartConfig={{
                    backgroundColor: color.WHITE,
                    backgroundGradientFrom: color.WHITE,
                    backgroundGradientTo:color.WHITE,
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,}} />
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'center'}}><Text style={{alignItems: 'center', justifyContent: 'center', fontSize: hp('2.4%')}}>Last 7 Days</Text>
                    </View>
                    </ScrollView>
                </View>
        )
    }
}
const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: [8,4,12,12,4,15,17]
      }
    ]
  };