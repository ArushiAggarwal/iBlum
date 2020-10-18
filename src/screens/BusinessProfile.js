import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import style from './style'
import firebase from 'firebase';
import 'firebase/firestore';
import * as color from '../common/constColor';
import { Rating } from 'react-native-ratings';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class BusinessProfile extends Component {

    static navigationOptions = {
        title: "Business Profile",
        headerStyle: {
            backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: hp('2.5%')
        },
    };
    constructor(props){
        super(props);
        this.state = {
            businessName: '',
            userEmail: '',
            userPass: '',
            Address:'',
        };
    }
    componentDidMount() {
        var currentComponent = this
        var db = firebase.firestore();
        var user = firebase.auth().currentUser;
        var Email ='';
        var pass = "";
        var businessName = "";
        var Address="";
        var MobileNumber="";
        var WebAddress="";
        var TypeOfBusiness="";
        db.collection("BusinessUsers").get().then(function (querySnapshot)  {
            querySnapshot.forEach(function (doc) {
                //console.log(doc.id, " => ", doc.data().email);
                if(user.email == doc.data().email.toLowerCase())
                {
                    console.log('doc.data()',doc.data())
                    Email = doc.data().email;
                    pass = doc.data().password;
                    businessName= doc.data().businessname
                    Address=doc.data().address
                    MobileNumber=doc.data().contactnumber
                    WebAddress=doc.data().webaddress
                    TypeOfBusiness= doc.data().typeofbusiness
                    currentComponent.setState({userEmail: Email});
                    currentComponent.setState({userPass:pass});
                    currentComponent.setState({businessName:businessName});
                    currentComponent.setState({Address:Address});
                    currentComponent.setState({MobileNumber:MobileNumber});
                    currentComponent.setState({WebAddress:WebAddress});
                    currentComponent.setState({TypeOfBusiness:TypeOfBusiness});
                }
            });
        });
    }
    render() {
        return (
            <View style={style.ProfileView}>
                <View style={{ flexDirection: 'column', flex: 0.2 }}>
                    <Text style={style.ProfileName}>{this.state.businessName?this.state.businessName : "Not Available"}</Text>
                    <View style={{ flex: 1, flexDirection: 'row', width: '100%' }}>
                        <Rating
                            style={{ paddingVertical: hp('1%'), }}
                            type='custom'
                            readonly
                            startingValue={4}
                            ratingCount={5}
                            imageSize={20}
                        />
                        <Text
                            style={{
                                paddingVertical: hp('1%'),
                                paddingHorizontal: wp('2%'),
                                fontSize: hp('2.3%')
                            }}>
                            38 reviews
                            </Text>
                    </View>
                    <View style={{ flexDirection: 'row', width: '100%', }}>
                        <Text>
                            <Text>$$ - </Text>
                            <Text style={{ color: color.BLUE }}>{this.state.TypeOfBusiness?this.state.TypeOfBusiness : "Not Available"}</Text>
                        </Text>
                    </View>
                </View>
                {/* <View style={[style.ImageView, {flex: 1}]}>
            <Image style={[style.ImageView, {borderWidth: 1, borderColor: color.GREY}]}
            source={require('../assets/loction.png')} />
            </View> */}
                <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', marginVertical: hp('2%') }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginVertical: hp('1%') }}>
                        <Icon
                            name="location-on"
                            size={20}
                        />
                        <Text>{this.state.Address?this.state.Address : "Not Available"}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginVertical: hp('1%') }}>
                        <Icon
                            name="directions"
                            size={20}
                        />
                        <Text style={style.link}
                            onPress={() => Linking.openURL('https://www.google.com/maps')}> Get Direction
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginVertical: hp('1%'), }}>
                        <Icon
                            name="phone"
                            size={20}
                        />
                        <Text style={{
                            color: color.BLACK,
                            fontSize: hp('2%'),
                        }}>{this.state.MobileNumber?this.state.MobileNumber: "Not Available"}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginVertical: hp('1%') }}>
                        <Icon
                            name="link"
                            size={20}
                        />
                        <Text style = {style.link}
                            onPress={() => Linking.openURL('https://www.lushusa.com/')}>{this.state.WebAddress?this.state.WebAddress: "Not Available"}
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginVertical: hp('1%') }}>
                        <Icon
                            name="phone-iphone"
                            size={20}
                        />
                        <Text style={style.link}
                            onPress={() => Linking.openURL('https://www.lushusa.com/')}> Send to your phone
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginVertical: hp('1%'), }}>
                        <Icon
                            name="email"
                            size={20}
                        />
                        <Text style={{
                            color: color.BLACK,
                            fontSize: hp('2%'),
                        }}> {this.state.userEmail?this.state.userEmail: "Not Available"}</Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginVertical: hp('1%'), }}>
                        <Icon
                            name="security"
                            size={20}
                        />
                        <Text style={{
                            color: color.BLACK,
                            fontSize: hp('2%'),
                        }}> {this.state.userPass?this.state.userPass: "Not Available"}</Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton}
                        onPress={() => this.props.navigation.navigate('Coupon')}
                        activeOpacity={0.8}>
                        <Text style={styles.loginText}>View Coupons</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    buttonContainer: {
        marginVertical: hp('1%'),
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginText: {
        color: color.WHITE,
        textAlign: 'center',
        fontSize: hp('3%'),
    },
    loginButton: {
        width: wp('80%'),
        padding: hp('2%'),
        backgroundColor: color.YELLOW,
        borderRadius: hp('2%'),
    },


});