import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import firebase from 'firebase';
import 'firebase/firestore';
import { FILL_MESSAGE, VAILD_MESSAGE } from '../common/constMessage';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';

export default class SustainableProductCheck extends Component {
    static navigationOptions = {
        title: "Forgot Password",
        headerStyle: {
            backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: hp('2.5%')
        },
    };
    state = {
        email: '',
    }
    onSubmit = () => {
        const { email } = this.state;
        console.log('successfully')
        var ref = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if ((!email)) {
            Alert.alert(FILL_MESSAGE)
        } else if (!ref.test(email)) {
                Alert.alert(VAILD_MESSAGE)
            } else {
                //var auth = firebase.auth();
                firebase.auth().sendPasswordResetEmail(email).then(function (user) {
                    console.log(email)
                    //this.props.navigation.navigate('Login')
                }).catch(function (error) {
                    var errorMessage = error.message;
                    Alert.alert(errorMessage);
                });
            }
    }
    render() {
        return (
            <View>
                <View style={styles.scrollItems}>
                    <Text style={styles.textlabel}>Email</Text>
                    <TextInput style={styles.inputs}
                        placeholder="Enter Valid Email ID"
                        autoCapitalize='none'
                        onChangeText={(email) => this.setState({ email })} 
                    />
                    <TouchableOpacity style={styles.checkButton}
                        onPress={this.onSubmit}
                        activeOpacity={.8}>
                        <Text style={styles.checkText}>Submit</Text>
                    </TouchableOpacity>
                </View>
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
    textlabel: {
        fontSize: hp('2.5%'),
        padding: hp('1%'),
        fontWeight: 'bold'
    },
});