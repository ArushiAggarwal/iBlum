import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import Icon from 'react-native-vector-icons/Entypo'
import { SUCCESS_MSG, FILL_MESSAGE, VAILD_MESSAGE, WEAK_PASS } from '../common/constMessage';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      businessname: '',
      typeofbusiness: '',
      address: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
      username: '',
      contactnumber: '',
      webaddress: '',
      showPassword: true,
    };
  }

  static navigationOptions = {
    title: "Business Registration",
    headerStyle: {
      backgroundColor: color.HeaderColor,
    },
    headerTintColor: color.BLACK,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: hp('2.5%')
    },
  };

  handleRegisterUser = () => {
    const { email, password, firstname, lastname, address, city, state, country, zipcode, username, businessname, typeofbusiness, webaddress, contactnumber } = this.state;
    var ref = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var passref = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    if ((!email) || (!password) || (!email && !password)) {
      Alert.alert(FILL_MESSAGE)
    } else
      if (!ref.test(email) || (!passref.test(password)) || (!ref.test(email) && !passref.test(password))) {
        Alert.alert(VAILD_MESSAGE)
      }
      else {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then((user) => {
            const fbRootRefFS = firebase.firestore();
            const userID = user.user.uid;
            console.log('user id is:', userID);
            const userRef = fbRootRefFS.collection('BusinessUsers')
              .doc();
            userRef.set({
              email,
              password,
              firstname,
              lastname,
              businessname,
              typeofbusiness,
              webaddress,
              address,
              city,
              state,
              country,
              zipcode,
              username,
              contactnumber,
              TotalUser:0,
              OverAllRating:0,
              UserList: [],
              Labels: { Star_1:0, Star_2:0, Star_3:0, Star_4:0, Star_5:0 }
            });
            //Alert.alert(SUCCESS_MSG)
            this.props.navigation.replace('BusinessDrawer')
          }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
              Alert.alert(WEAK_PASS);
            } else {
              Alert.alert(errorMessage);
            }
          });
      }
  }

  showPasswordText = () => {
    this.setState({ showPassword: !this.state.showPassword });

  }

  render() {
    return (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.scrollContainer}>
            <View>
              <Text style={styles.textlabel}>Email* ( eg: xyz@gmail.com )</Text>
              <TextInput style={styles.inputs}
                onChangeText={(email) => this.setState({ email })} />
            </View>
            <View>
              <Text style={styles.textlabel}>Password*</Text>
              <View style={[styles.inputs, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                <TextInput style={{ fontSize: hp('2.5%'), width: wp('70%') }}
                  onChangeText={(password) => this.setState({ password })}
                  maxLength={20}
                  secureTextEntry={this.state.showPassword} />
                <TouchableOpacity onPress={() => this.showPasswordText()}>
                  <Text style={{ paddingRight: wp('3%'), justifyContent: 'center', alignItems: 'center' }}>{this.state.showPassword ? <Icon
                    name="eye"
                    size={25} /> : <Icon
                      name="eye-with-line"
                      size={25} />}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View>
              <Text style={styles.textlabel}>Business Owner: First Name</Text>
              <TextInput style={styles.inputs}
                maxLength={20}
                onChangeText={(firstname) => this.setState({ firstname })} />
            </View>
            <View>
              <Text style={styles.textlabel}>Business Owner: Last Name</Text>
              <TextInput style={styles.inputs}
                maxLength={20}
                onChangeText={(lastname) => this.setState({ lastname })} />
            </View>
            <View>
              <Text style={styles.textlabel}>Business Name</Text>
              <TextInput style={styles.inputs}
                maxLength={20}
                onChangeText={(businessname) => this.setState({ businessname })} />
            </View>
            <View>
              <Text style={styles.textlabel}>Contact Number</Text>
              <TextInput style={styles.inputs}
                keyboardType='numeric'
                maxLength={10}
                onChangeText={(contactnumber) => this.setState({ contactnumber })} />
            </View>
            <View>
              <Text style={styles.textlabel}>Type of Business</Text>
              <TextInput style={styles.inputs}
                maxLength={20}
                onChangeText={(typeofbusiness) => this.setState({ typeofbusiness })} />
            </View>
            <View>
              <Text style={styles.textlabel}>Address</Text>
              <TextInput style={styles.inputs}
                onChangeText={(address) => this.setState({ address })} />
            </View>
            <View style={styles.container}>
              <View style={styles.c_scrollItems}>
                <Text style={styles.textlabel}>City</Text>
                <TextInput style={styles.c_inputs}
                  maxLength={20}
                  onChangeText={(city) => this.setState({ city })} />
              </View>
              <View style={styles.c_scrollItems}>
                <Text style={styles.textlabel}>State</Text>
                <TextInput style={styles.c_inputs}
                  maxLength={20}
                  onChangeText={(state) => this.setState({ state })} />
              </View>
            </View>
            <View>
              <Text style={styles.textlabel}>Country</Text>
              <TextInput style={styles.inputs}
                maxLength={20}
                onChangeText={(country) => this.setState({ country })} />
            </View>
            <View>
              <Text style={styles.textlabel}>Zip Code</Text>
              <TextInput style={styles.inputs}
                keyboardType='numeric'
                maxLength={6}
                onChangeText={(zipcode) => this.setState({ zipcode })} />
            </View>
            <View>
              <Text style={styles.textlabel}>Web Address</Text>
              <TextInput style={styles.inputs}
                onChangeText={(webaddress) => this.setState({ webaddress })} />
            </View>

            <View>
              <Text style={styles.textlabel}>Username</Text>
              <TextInput style={styles.inputs}
                maxLength={16}
                onChangeText={(username) => this.setState({ username })} />
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.loginButton}
                onPress={this.handleRegisterUser}
                activeOpacity={.8}>
                <Text style={styles.submitText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>

        </ScrollView>
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
  scrollContainer: {
    padding: hp('2.5%'),

  },
  textlabel: {
    fontSize: hp('2.5%'),
    padding: hp('1%'),
    fontWeight: 'bold'
  },
  inputs: {
    width: '100%',
    borderWidth: 1,
    fontSize: hp('2.5%'),
    borderColor: color.YELLOW,
    borderRadius: hp("2%"),
    paddingLeft: wp('3%')
  },
  c_scrollItems: {
    flex: 1,
    flexDirection: "column",
    width: wp('60%'),
  },
  c_inputs: {
    width: '95%',
    borderWidth: 1,
    fontSize: hp('2.5%'),
    borderColor: color.YELLOW,
    borderRadius: hp("2%"),
    padding: wp('1.2%')
  },
  submitText: {
    color: color.WHITE,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontSize: hp('3%'),
    padding: hp('2%'),
  },
  container: {
    flex: 1,
    flexDirection: 'row'
  }
})