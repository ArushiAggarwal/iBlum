import React, { Component } from 'react';
import { View, ScrollView, Linking, Image, Text, StyleSheet, TouchableOpacity, Share } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';

const shareOptions = {
    title: 'Post Title',
    message: 'Message to share',
    url: 'www.example.com',
    subject: 'Subject'
};
export default class DonateReport extends Component {
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
    onShare = () => { Share.share(shareOptions); }
    render() {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require('../assets/donate.jpg')} />
                    <View style={styles.content}>
                        <Text style={styles.link}
                            onPress={() => Linking.openURL('https://www.gofundme.com/f/iblum-climate-action')}>
                            https://www.gofundme.com/f/iblum-climate-action
                        </Text>
                    </View>

                    <View style={styles.donateContainer}>
                        <TouchableOpacity style={styles.donateButton}
                            onPress={() => Linking.openURL('https://www.gofundme.com/f/iblum-climate-action')
                            }
                            activeOpacity={.8}>
                            <Text style={styles.Text}>Donate Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.donateContainer}>
                        <TouchableOpacity style={styles.donateButton}
                            onPress={() => this.props.navigation.navigate('DonateImageUpload')
                            }
                            activeOpacity={.8}>
                            <Text style={styles.Text}>Upload Receipt Image</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.donateContainer}>
                        <TouchableOpacity style={styles.donateButton}
                            onPress={this.onShare}>
                            <Text style={styles.Text}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    link: {
        color: color.BLUE,
        fontSize: hp('2.2%'),
        textDecorationLine: 'underline',
        paddingVertical: hp('1%')
    },
    donateContainer: {
        // top: hp('12%'),
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: hp('1%')
    },
    Text: {
        color: color.WHITE,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        fontSize: hp('3%'),
        padding: hp('2%'),
    },
    donateButton: {
        width: wp("95%"),
        backgroundColor: color.YELLOW,
        borderRadius: hp("2%"),
        marginVertical: hp('1%')
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: hp('1%')
    }
});