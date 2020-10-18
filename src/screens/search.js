import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import style from './style'
import Icon from 'react-native-vector-icons/Octicons'

export default class Search extends Component{
    static navigationOptions = {
        title: "Search",
        headerStyle: {
          backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: hp('2.5%')
        },
      };

      ComingSoon = () =>{
        Alert.alert(  
            'Message',  
            'Coming Soon!!',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        ); 
    }
      render(){
          return(
              <View style={{flex:1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column', margin: '23%',}}>
                  <Icon 
                  name = 'search'
                  size= {80}
                  /> 
                    <TextInput style={styles.inputs}
                    placeholder='Search the app'
          />
          <TouchableOpacity style={styles.checkButton}
            onPress={() => this.ComingSoon()
            }
            activeOpacity={.8}>
            <Text style={styles.checkText}>Search</Text>
          </TouchableOpacity>               
              </View>
          )
      }
}

const styles = StyleSheet.create({

    inputs: {
      width: wp('80%'),
      borderWidth: 1,
      fontSize: hp('3%'),
      borderColor: color.YELLOW,
      borderRadius: hp('2%'),
      marginVertical: hp('5%')

  
    },
    checkText: {
      color: color.WHITE,
      textAlign: 'center',
      fontSize: hp('3%'),
      padding: hp('2%'),
  },
  checkButton: {
      width: wp("70%"),
      backgroundColor: color.YELLOW,
      borderRadius: hp("2%"),
      marginVertical: hp('5%')
  },
  });