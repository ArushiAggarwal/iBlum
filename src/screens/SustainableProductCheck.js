import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';

export default class SustainableProductCheck extends Component {
  static navigationOptions = {
    title: "Buy Sustainable Products",
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
      <View style={styles.scrollItems}>
        <View style={styles.container}>
          <Text style={styles.textlabel}>Search by Zip Code</Text>
          <TextInput style={styles.inputs}
            keyboardType='numeric'
            maxLength={6}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.textlabel}>Search by Product</Text>
          <TextInput style={styles.inputs}
          />
        </View>
        <TouchableOpacity style={styles.checkButton}
          onPress={() => this.props.navigation.navigate('SustainableProductSearch')
          }
          activeOpacity={.8}>
          <Text style={styles.checkText}>Search</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scrollItems: {
    marginTop: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  textlabel: {
    fontSize: hp('3%'),
    padding: hp('2%'),
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontWeight: 'bold'
  },
  inputs: {
    width: wp('90%'),
    borderWidth: 1,
    fontSize: hp('3%'),
    borderColor: color.YELLOW,
    borderRadius: hp('2%'),

  },
  checkText: {
    color: color.WHITE,
    textAlign: 'center',
    fontSize: hp('3%'),
    padding: hp('2%'),
  },
  checkButton: {
    width: wp("80%"),
    backgroundColor: color.YELLOW,
    borderRadius: hp("2%"),
    marginVertical: hp('10%')
  },
  container: {
    marginVertical: hp('3%'),
  },
  scrollItems: {
    marginTop: hp('10%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
});