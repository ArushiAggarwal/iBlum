import React, { Component } from 'react';
import firebase from 'firebase';
//import 'firebase/firestore';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import style from './style'
import * as color from '../common/constColor';

export default class MainScreen extends Component {
  static navigationOptions = {
    title: "iBlum",
    headerStyle: {
      backgroundColor: color.HeaderColor,
    },
    headerTintColor: color.BLACK,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: hp('2.5%')
    },
  };

  /*componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
        console.log('Login state true')
        if (user){
          this.props.navigation.navigate(user ? 'ConsumerDashboard' : 'MainScreen')
        } else {}
    })
  }*/
  render() {
    return (
      <View>
        <ImageBackground source={require('../assets/LoginBackground.jpg')} style={styles.backgroundImage}>
          <View style={style.buttonContainer}>
            <TouchableOpacity style={style.Button}
              onPress={() => this.props.navigation.navigate('Login')
              }
              activeOpacity={.8}>
              <Text style={style.buttonText}>Consumers</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.Button}
              onPress={() => this.props.navigation.navigate('BusinessLogin')
              }
              activeOpacity={.8}>
              <Text style={style.buttonText}>Business</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  backgroundImage: {
    resizeMode: 'cover',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});