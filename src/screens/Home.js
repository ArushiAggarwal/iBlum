import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
export default class Home extends Component {
  static navigationOptions = {
    title: "Consumer Profile",
    headerStyle: {
      backgroundColor: '#FFC34D',
    },
  };
  render() {
    return (
      <View>

        <ImageBackground source={require('../assets/home.png')} style={styles.backgroundImage}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.buttonText}>Check Emission Levels</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.buttonText}>Act</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.buttonText}>Leaderboard</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
              <Text style={styles.buttonText}>Redeem Points</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>

      </View>
    )
  }
}

const styles = StyleSheet.create({

  containers: {
    backgroundColor: '#FFD700',
    height: 70,
  },
  backgroundImage: {
    resizeMode: 'cover',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    bottom: 100,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    bottom: 8,
  },
  Button: {
    width: 300,
    padding: 20,
    margin: 10,
    backgroundColor: '#FFD700',
    height: 59,
    borderRadius: 20,
  },
});