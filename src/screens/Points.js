import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import style from './style'
import Icon from 'react-native-vector-icons/Octicons'

export default class Points extends Component{
    static navigationOptions = {
        title: "My Points",
        headerStyle: {
          backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: hp('2.5%')
        },
      };

      render(){
          return(
              <View style={{flex:1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', margin: '23%',}}>
                  <Image style = {style.ProfileImage} source={require('../assets/user.jpg')}/> 
                  <Text style = {style.PointsText}>Points: 300</Text>            
              </View>
          )
      }
}
