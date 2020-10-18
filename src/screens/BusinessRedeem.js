import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import style from './style'
import * as color from '../common/constColor';

//import { ScrollView } from 'react-native-gesture-handler';
export default class BusinessRedeem extends Component{

    static navigationOptions = {
        title: "Redeem Points",
        headerStyle: {
          backgroundColor:color.HeaderColor,
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
            <ScrollView showsVerticalScrollIndicator = {false}>
            <View style = {style.ImageContainer}>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BusinessCouponDetails',{data_image: '../assets/coupon1.jpg'})
        }
        activeOpacity={.8}>
            <Image  style = {style.Image} source={require('../assets/coupon1.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BusinessCouponDetails',{data_image: '../assets/coupon3.jpg'})
        }
        activeOpacity={.8}>
            <Image style = {style.Image} source={require('../assets/coupon3.jpg')}/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BusinessCouponDetails',{data_image: '../assets/coupon4.jpg'})
        }
        activeOpacity={.8}>
            <Image style = {style.Image} source={require('../assets/coupon4.png')}/>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => this.props.navigation.navigate('BusinessCouponDetails',{data_image: '../assets/coupon5.jpg'})
        }
        activeOpacity={.8}>
            <Image style = {style.Image} source={require('../assets/coupon5.jpg')}/>
            </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}