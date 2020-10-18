import React, { Component } from 'react';
import { View, ImageBackground, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import ToggleSwitch from 'toggle-switch-react-native'
import style from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Settings extends Component {

    constructor() {
        super();
        this.state = {
            isOnDefaultToggleSwitch1: true,
            isOnDefaultToggleSwitch2: false,
            isOnDefaultToggleSwitch3: true,
        }
    }
    static navigationOptions = {
        title: "Settings",
        headerStyle: {
            backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: hp('2.5%')
        },
    };

    ComingSoon = () => {
        Alert.alert(
            'Message',
            'Coming Soon!!',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        );
    }

    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.setting}>
                    <View style={style.setView}>

                        {/* Notifications */}


                        <View style={style.subViewSet}>

                            <ToggleSwitch
                                isOn={this.state.isOnDefaultToggleSwitch1}
                                onColor={color.GREEN}
                                offColor={color.GREY}
                                size="small"
                                onToggle={isOnDefaultToggleSwitch1 => {
                                    this.state.isOnDefaultToggleSwitch1 === false ? 0 : 1
                                    console.log(this.state.isOnDefaultToggleSwitch1)
                                    this.setState({ isOnDefaultToggleSwitch1 });
                                }}
                            />

                            <Text style={style.setFont}>Notifications</Text>

                        </View>

                        {/* Privacy */}


                        <View style={style.subViewSet}>
                            <TouchableOpacity
                                onPress={() => this.ComingSoon()
                                }
                                activeOpacity={.8}>
                                <Icon
                                    name="keyboard-arrow-right"
                                    size={hp('4.2%')}
                                    style={{ justifyContent: 'center' }} />

                            </TouchableOpacity>

                            <Text style={{ fontSize: hp('3%') }}>Privacy</Text>

                        </View>

                        {/* Share Information */}

                        <View style={style.subViewSet}>

                            <ToggleSwitch
                                isOn={this.state.isOnDefaultToggleSwitch2}
                                onColor={color.GREEN}
                                offColor={color.GREY}
                                size="small"
                                onToggle={isOnDefaultToggleSwitch2 => {
                                    this.state.isOnDefaultToggleSwitch2 === false ? 0 : 1
                                    console.log(this.state.isOnDefaultToggleSwitch2)
                                    this.setState({ isOnDefaultToggleSwitch2 });
                                }}
                            />

                            <Text style={{ fontSize: hp('3%') }}>Share Information</Text>

                        </View>

                        <View style={style.subViewSet}>

                            <ToggleSwitch
                                isOn={this.state.isOnDefaultToggleSwitch3}
                                onColor={color.GREEN}
                                offColor={color.GREY}
                                size="small"
                                onToggle={isOnDefaultToggleSwitch3 => {
                                    this.state.isOnDefaultToggleSwitch33 === false ? 0 : 1
                                    console.log(this.state.isOnDefaultToggleSwitch3)
                                    this.setState({ isOnDefaultToggleSwitch3 });
                                }}
                            />

                            <Text style={{ fontSize: hp('3%') }}>Automatic Updates</Text>

                        </View>

                        <View style={style.subViewSet}>
                            <TouchableOpacity
                                onPress={() => this.ComingSoon()
                                }
                                activeOpacity={.8}>
                                <Icon
                                    name="keyboard-arrow-right"
                                    size={hp('4.2%')}
                                    style={{ justifyContent: 'center' }} />
                            </TouchableOpacity>


                            <Text style={{ fontSize: hp('3%') }}>History</Text>

                        </View>

                        <View style={style.subViewSet}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('AboutApp')
                                }
                                activeOpacity={.8}>
                                <Icon
                                    name="keyboard-arrow-right"
                                    size={hp('4.2%')}
                                    style={{ justifyContent: 'center' }} />
                            </TouchableOpacity>

                            <Text style={{ fontSize: hp('3%') }}>About iBlum</Text>

                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}