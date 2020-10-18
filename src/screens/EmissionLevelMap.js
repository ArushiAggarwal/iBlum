import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import { BarChart, LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

export default class EmissionLevelMap extends Component {
    static navigationOptions = {
        title: "Emission Levels",
        headerStyle: {
            backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: hp('2.5%')
    },
    };
    render() {
        return (
            <View style={style.emissionView}>
                <View style={style.subEmissionView}>
                <LineChart
    data={{
      labels: ["2005", "2010", "2018"],
      datasets: [
        {
          data: [
            19.3, 17.2, 16.2
          ]
        }
      ]
    }}
    width={screenWidth-30} // from react-native
    height={310}
    chartConfig={{
      backgroundColor: "#000",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff", 
      decimalPlaces: 1,
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      strokeWidth: 2,
      style: {
        borderRadius: 16
      }, }}
    style={{
        justifyContent: 'center',
        alignItems: 'center',

    }}
    fromZero={true}
  />

<Text style={style.emissionText}>CO2 emission estimatess (million tons/tons per capita)</Text>
  
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.Button}
                        onPress={() => this.props.navigation.navigate('Act')
                        }
                        activeOpacity={.8}>
                        <Text style={styles.buttonText}>Act</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: hp('10%'),
    },
    buttonText: {
        color: color.WHITE,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontSize: hp('3.3%'),
    padding: hp('2%'),
    },
    Button: {
        width: wp("80%"),
        backgroundColor: color.YELLOW,
        //height: hp('8%'),
        borderRadius: hp("2%")
    },
    imageContainer: {
         width: wp('100%'),
        resizeMode: 'cover',
         height: hp('60%'),
        
    }
});

const screenWidth = Dimensions.get("window").width;