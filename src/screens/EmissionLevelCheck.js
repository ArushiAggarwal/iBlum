import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity,Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { ZIP_MSG } from '../common/constMessage';
import * as color from '../common/constColor';
export default class EmissionLevelCheck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode:'',
        };
    }
    static navigationOptions = {
        title: "Emission Levels",
        headerStyle: {
            backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: hp('2.5%')
        },
    };
    handleEmissionCheck = () => {
        const { zipcode } = this.state;
        if(!zipcode){
            Alert.alert(ZIP_MSG)
        } else if(zipcode.length<5){
            Alert.alert('zipcode is not valid')
        }
        else{
        this.props.navigation.navigate('EmissionLevelMap',{zipcode:this.state.zipcode})
        }
    }
    render() {
        return (
            <View>
                <View style={styles.scrollItems}>
                    <Text style={styles.textlabel}>Enter Zip Code</Text>
                    <TextInput style={styles.inputs}
                        keyboardType='numeric'
                        maxLength={6}
                        onChangeText={(zipcode) => this.setState({ zipcode })}
                    />
                    <TouchableOpacity style={styles.checkButton}
                        onPress={this.handleEmissionCheck}
                        activeOpacity={.8}>
                        <Text style={styles.checkText}>Check</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    scrollItems: {
        marginTop: hp('20%'),
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
});