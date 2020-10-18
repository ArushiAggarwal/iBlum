import React, { Component } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';

export default class PlantReport extends Component {
    static navigationOptions = {
        title: "Donate",
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
        console.log(this.props.navigation.state.params.data_image)
        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>

                <Image source={{ uri: 'data:image/jpeg;base64,' + this.props.navigation.state.params.data_image }}
                    style={styles.images}
                />
                <View style={styles.minusButton}>
                    <Text style={styles.Text}>0</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.buttonText}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    minusButton: {
        flexDirection: 'row',
        marginVertical: hp('5%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontSize: hp('5%'),
        fontWeight: 'bold',
        textAlign: 'center'
    },
    images: {
        width: '100%',
        height: hp('50%'),
        resizeMode: 'contain',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: color.WHITE,
        textAlign: 'center',
        fontSize: hp('3%'),
    },
    Button: {
        width: wp('80%'),
        padding: hp('2%'),
        backgroundColor: color.YELLOW,
        borderRadius: hp('2%'),
    },
});