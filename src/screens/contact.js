import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, Linking, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import style from './style'

export default class Contact extends Component{
    static navigationOptions = {
        title: "Contact Us",
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
              <View style={{flex:1}}>
                  <View style={styles.ImageContainer}>
                    <Image style={styles.image} source={require('../assets/contact.png')}></Image>
                </View>
                     <View style={style.contactView}>
                         <Text style={[style.contactText,{marginVertical: wp('2%'),}]}>Do you have questions? We would love to hear from you.</Text>
                         <Text>
                             <Text style={style.contactText}>
                                 Email: </Text>
                             <Text style={[style.link,{fontSize: hp('2.5%'), textAlign: 'center', fontWeight: 'bold'}]}
                        onPress={() => Linking.openURL('info@unknown16.com')}>
                        info@unknown16.com
</Text>
                             </Text>
                         </View>          
              </View>
          )
      }
}

const styles = StyleSheet.create({

    ImageContainer: {
        height: hp('30%'),
        backgroundColor: color.BLACK,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: wp('30%'),
        height: hp('16%'),
    },
  });