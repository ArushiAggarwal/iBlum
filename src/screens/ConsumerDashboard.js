import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';

export default class ConsumerDashboard extends Component {
    static navigationOptions = {
        title: "Dashboard",
        headerStyle: {
            backgroundColor: color.HeaderColor,
            headerLeft: null,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: hp('2.5%')
        },
    };

    ComingSoon = () =>{
        Alert.alert(  
            'Message',  
            'Coming Soon!!',  
            [  
                {  
                    text: 'Cancel',  
                    onPress: () => console.log('Cancel Pressed'),  
                    style: 'cancel',  
                },  
                {text: 'OK', onPress: () => console.log('OK Pressed')},  
            ]  
        ); 
    }
    render() {
        return (
            <View style={styles.Viewcontainer}>
                <View style={styles.container1}>
                    <View style={styles.subContainer1}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('userProfile')
                            }
                            activeOpacity={.8}>
                            <View style={styles.Viewimage}>
                                <Image style={styles.image} source={require('../assets/profile.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View}>
                            <View style={styles.subView}>
                                <Text style={styles.TextStyle}>Profile</Text>
                            </View>
                        </View>

                    </View>
                    <View style={styles.subContainer1}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('EmissionLevelCheck')
                            }
                            activeOpacity={.8}>
                            <View style={styles.Viewimage}>
                                <Image style={styles.imageEmission} source={require('../assets/emissionLogo.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View}>
                            <View style={styles.subView}>
                                <Text style={styles.TextStyle}>Emission Levels</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.container1}>
                    <View style={styles.subContainer1}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Act')
                            }
                            activeOpacity={.8}>
                            <View style={styles.Viewimage}>
                                <Image style={styles.imageact} source={require('../assets/actLogo.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View}>
                            <View style={styles.subView}>
                                <Text style={styles.TextStyle}>Act</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subContainer1}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('Leaderboard')
                            }
                            activeOpacity={.8}>
                            <View style={styles.Viewimage}>
                                <Image style={styles.imagelead} source={require('../assets/leaderboard.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View}>
                            <View style={styles.subView}>
                                <Text style={styles.TextStyle}>Leaderboard</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.container1}>
                    <View style={styles.subContainer1}>
                        <TouchableOpacity
                            onPress={() => this.ComingSoon()
                            }
                            activeOpacity={.8}>
                            <View style={styles.Viewimage}>
                                <Image style={styles.image} source={require('../assets/redeem.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View}>
                            <View style={styles.subView}>
                                <Text style={styles.TextStyle}>Redeem</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.subContainer1}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('PlantReport')
                            }
                            activeOpacity={.8}>
                            <View style={styles.Viewimage}>
                                <Image style={styles.image} source={require('../assets/rate.png')} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.View}>
                            <View style={styles.subView}>
                                <Text style={styles.TextStyle}>Rate Business</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container1: {
        flex: 1,
        flexDirection: "row"
    },
    container2: {
        flex: 1,
        flexDirection: "row"
    },
    container3: {
        flex: 1,
        flexDirection: "row"
    },
    subContainer1: {
        flex: 1,
        height: hp('25%'),
        backgroundColor: color.YELLOW,
        marginVertical: hp('2%'),
        marginHorizontal: wp('2%'),
    },
    subContainer2: {
        flex: 1,
        height: hp('4%'),
        backgroundColor: color.YELLOW,
    },
    subContainer3: {
        flex: 1,
        backgroundColor: color.YELLOW,
        height: hp('2%'),
    },
    subView: {

        backgroundColor: color.BLACK,
        flexDirection: 'column'
    },
    image: {
        width: wp('26.5%'),
        height: hp('16%'),
    },
    imageact: {
        width: wp('22%'),
        height: hp('16%'),
    },
    imagelead: {
        width: wp('31%'),
        height: hp('14%'),
    },
    imageEmission:{
        width: wp('26%'),
        height: hp('16%'),
    },
    View: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    Viewimage: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "12%"
    },
    TextStyle: {
        fontSize: hp('3%'),
        color: color.WHITE,
        textAlign: 'center'
    },
    Viewcontainer: {
        flex: 1,
        flexDirection: 'column'
    }
});