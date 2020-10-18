import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import style from './style'
import * as color from '../common/constColor';

export default class Redeem extends Component{

    static navigationOptions = {
        title: "Redeem Points",
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
        return(
            <View style = {style.ImageContainer}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('CouponDetails',{data_image: '../assets/coupon1.jpg'})
        }
        activeOpacity={.8}>
            <Image  style = {style.Image1} source={require('../assets/coupon1.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style = {style.Image2} source={require('../assets/coupon2.png')}/>
            </TouchableOpacity>
            </View>
        )
    }
}