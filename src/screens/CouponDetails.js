import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import style from './style'
import * as color from '../common/constColor';

export default class CouponDetails extends Component {
    static navigationOptions = {
        title: "Coupon Details",
        headerStyle: {
            backgroundColor: color.HeaderColor,
        },
        headerTintColor:color.BLACK,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: hp('2.5%')
        },
    };
    render() {
        console.log("image",this.props.navigation.state.params.data_image);
        return (
            <ScrollView showsVerticalScrollIndicator = {false}>
            <View>
                    <View style={styles.ImageContainer}>
                        <View style={styles.TextContainer}>
                            <Image style={styles.image} source={require("../assets/coupon1.jpg")}></Image>
                        </View>
                    </View>
                    <View style={style.TextContent}>
                        <Text style = {style.boldContent}>Condition for using lush cosmetics coupons.</Text>
                        <Text style = {style.normalContent}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </Text>
                    </View>
                    <View style={styles.donateContainer}>
                        <TouchableOpacity style={styles.donateButton}
                            onPress={() => this.props.navigation.navigate('Redeem')
                            }
                            activeOpacity={.8}>
                            <Text style={styles.Text}>Redeem</Text>
                        </TouchableOpacity>

                    </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: wp('80%'),
        height: hp('26.6%'),
    },
    donateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        color: color.WHITE,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        fontSize: hp('3%'),
        padding: hp('1.4%'),
    },
    donateButton: {
        width: wp("95%"),

        backgroundColor: color.YELLOW,
        borderRadius: hp("5%")
    },
    ImageContainer: {
        height: hp('40%'),
        backgroundColor: color.BLACK
    },
    TextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
});