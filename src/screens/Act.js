import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as color from '../common/constColor';

export default class Act extends Component {
  static navigationOptions = {
    title: "Act",
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
      <View>
        <ImageBackground source={require('../assets/act.jpg')} style={styles.backgroundImage}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.Button}
              onPress={() => this.props.navigation.navigate('DonateReport')
              }
              activeOpacity={.8}>
              <Text style={styles.buttonText}>Donate Money</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}
              onPress={() => this.props.navigation.navigate('PlantUpload')
              }
              activeOpacity={.8}>
              <Text style={styles.buttonText}>Plant Trees</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}
              onPress={() =>  this.props.navigation.navigate('SustainableProductSearch')
                // Linking.openURL('https://www.yelp.com')
              }
              activeOpacity={.8}>
              <Text style={styles.buttonText}>Buy Sustainable Products</Text>
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
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: color.WHITE,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontSize: hp('3%'),
    padding: hp('2%'),
  },
  Button: {
    width: wp("80%"),
    backgroundColor: color.YELLOW,
    borderRadius: hp("2%"),
    marginVertical: hp('5%')
  },
});