import React, { Component } from 'react';
import { View,Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import style from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class AboutApp extends Component {
  static navigationOptions = {
    title: "About App",
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
      <View style={{ flex: 1, alignItems: 'center', }}>
        <Text style={{ fontSize: hp('5%'), marginVertical: hp('3%') }}>
          About iBlum
                </Text>
        <Image style={style.aboutImage} source={require('../assets/iblumLogo.png')} />
        <Text style={{ fontSize: hp('3%'), marginVertical: hp('1%') }}>
          iBlum 1.1.0
                  </Text>
        <View style={{ flexDirection: 'row', marginVertical: hp('3%') }}>
          <Icon
            style={{ fontSize: hp('3.5%') }}
            name="copyright"
          />
          <Text style={style.setFont}> iBlum.</Text>
        </View>
        <Text style={style.aboutLink}
          onPress={() => Linking.openURL('')}>
          Terms of Use
        </Text>
        <Text style={style.aboutLink}
          onPress={() => Linking.openURL('')}>
          Privacy Statement
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton}
            onPress={this.handleRegisterUser}
            activeOpacity={.8}>
            <Text style={styles.submitText}>Give Feedback</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  loginButton: {
    width: wp("80%"),
    backgroundColor: color.YELLOW,
    borderRadius: hp("2%")
  },
  buttonContainer: {
    padding: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  submitText: {
    color: color.WHITE,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontSize: hp('3%'),
    padding: hp('2%'),
  },
})