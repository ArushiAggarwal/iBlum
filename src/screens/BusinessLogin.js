import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import firebase from 'firebase';
import 'firebase/firestore';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import Icon from 'react-native-vector-icons/Entypo'
import { SUCCESS_MSG, FILL_MESSAGE, VAILD_MESSAGE, PASSWORD_INVALID, NOT_REGITERED } from '../common/constMessage';

export default class BusinessLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            login: false,
            isButtonDisabled: false,
            showPassword: true
        };
    }
    static navigationOptions = {
        title: "Business",
        headerStyle: {
            backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: hp('2.5%')
        },
    };

    // API FIREBASE

    handleRegisterUser = () => {
        const { email, password } = this.state;
        var ref = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var passref = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/; 
        if ((!email) || (!password) || (!email && !password)) {
            Alert.alert(FILL_MESSAGE)
        } else
            if (!ref.test(email) || (!passref.test(password)) || (!ref.test(email) && !passref.test(password))) {
                Alert.alert(VAILD_MESSAGE)
            }
            else
            {
                firebase.auth().signInWithEmailAndPassword(email, password)
                    .then((user) => {
                        this.setState({
                            login: true,
                            isButtonDisabled: true,
                        });
                        this.props.navigation.replace('BusinessDrawer')
                    }).catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        if (errorCode = "There is no user record corresponding to this identifier. The user may have been deleted.") {
                            Alert.alert(NOT_REGITERED);
                        } else if (errorCode = "The password is invalid or the user does not have a password") {
                            Alert.alert(PASSWORD_INVALID);
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
            <View >
                <ImageBackground source={require('../assets/LoginBackground.jpg')} style={styles.backgroundImage}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={styles.containers}>
                            <View style={styles.inputsContainer}>
                                <TextInput style={[styles.inputs, { paddingLeft: wp('10%') }]}
                                    placeholder="Email ID"
                                    placeholderTextColor={color.WHITE}
                                    autoCapitalize='none'
                                    onChangeText={(email) => this.setState({ email })} />
                                <View style={[styles.inputs, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }]}>
                                    <TextInput style={{ fontSize: hp('3%'), textAlign: 'center', paddingLeft: wp('10%') }}
                                        secureTextEntry={this.state.showPassword}
                                        placeholder="Password"
                                        maxLength = {20}
                                        autoCapitalize='none'
                                        placeholderTextColor={color.WHITE}
                                        onChangeText={(password) => this.setState({ password })} />
                                    <TouchableOpacity onPress={() => this.showPasswordText()}>
                                        <Text style={{ paddingRight: wp('3%'), color: color.WHITE, justifyContent: 'center', alignItems: 'center' }}>
                                            {this.state.showPassword ? <Icon name="eye" size={25} /> : <Icon name="eye-with-line" size={25} />}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.loginButton}
                                    onPress={this.handleRegisterUser}
                                    disabled={this.state.isButtonDisabled}
                                    activeOpacity={.8}
                                >
                                    <Text style={styles.loginText}>Login</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('ForgotPassword')}
                                    activeOpacity={.8}
                                >
                                    <Text style={styles.forgotPassword} >Forgot Password?</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('BusinessAccount')}
                                    activeOpacity={.8}
                                >
                                    <Text style={styles.register}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    containers: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: hp('10%')
    },
    inputsContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputs: {
        width: wp('80%'),
        textAlign: 'left',
        fontSize: hp('3%'),
        backgroundColor: color.GREY,
        borderWidth: 1,
        margin: hp('4%'),
        borderRadius: hp('2%')
    },
    backgroundImage: {
        resizeMode: 'cover',
        height: hp('100%'),
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {
        marginVertical: hp('7%')
    },
    loginText: {
        color: color.WHITE,
        textAlign: 'center',
        fontSize: hp('3%'),
        padding: hp('2%'),
    },
    loginButton: {
        width: wp('80%'),
        backgroundColor: color.YELLOW,
        borderRadius: hp('2%'),
    },
    forgotPassword: {
        fontSize: hp('3%'),
        color: color.WHITE,
        textAlign: 'center',
        marginBottom: hp('2.5%')
    },
    register: {
        fontSize: hp('3%'),
        color: color.WHITE,
        textAlign: 'center',
    }

});