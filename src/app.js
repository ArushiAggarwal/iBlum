import React, { Component } from 'react';
import firebase from 'firebase';
import AppNavigator from './navigation/AppNavigator';


var firebaseConfig = {
  apiKey: "AIzaSyANcL8VyCYXSde4m1hzwwWa9_loKCviZ1s",
  authDomain: "iblumproject.firebaseapp.com",
  databaseURL: "https://iblumproject.firebaseio.com",
  projectId: "iblumproject",
  storageBucket: "iblumproject.appspot.com",
  messagingSenderId: "1048951670988",
  appId: "1:1048951670988:web:53c5cc646d0da92a041a69",
  measurementId: "G-WDWTSNNEJ0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}