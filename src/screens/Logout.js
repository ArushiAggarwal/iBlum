import React from 'react';
import { Alert, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import firebase from 'firebase';
import 'firebase/firestore';
import style from './style'
import * as color from '../common/constColor';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Logout extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: "Logout",
    headerStyle: {
      backgroundColor: color.HeaderColor,
    },
    headerTintColor: color.BLACK,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: hp('2.5%')
    },
  };

  logout() {
    this.props.navigation.navigate('MainScreen')
  }

  launchApp = () => {
    Alert.alert(
      'Logout',
      'Do you want to logout?',
      [
        {
          text: 'Cancel', onPress: () => {
            this.props.navigation.goBack()
          }
        },
        {
          text: 'Confirm', onPress: () => {
            firebase.auth().signOut().then((user) => {
              this.logout()
            }).catch((error) => {
                Alert.alert(error);
            });
          }
        },
      ],
      { cancelable: false }
    )
  }
  render() {
    return (
      <View>
        <NavigationEvents
          onDidFocus={() => {
            //Call whatever logic or dispatch redux actions and update the screen!
            this.launchApp()
          }}
        />
      </View>
    )
  }

}

