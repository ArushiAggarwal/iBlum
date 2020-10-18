import React, { Component } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import firebase from 'firebase';
import 'firebase/firestore';

function Item({fname}) {
    return (
        
        <View >
            {console.log("name",fname)}
            <Text >{fname}</Text>
        </View>
    );
}
export default class Leaderboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userDetail: [],
            Points:'',
        }
    }
    static navigationOptions = {
        title: "Leaderboard",
        headerStyle: {
            backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: hp('2.5%')
        },
    };


    componentDidMount() {
        var currentComponent = this
        var db = firebase.firestore();
        var user = firebase.auth().currentUser;
        var User = [];
        var Points='';
        db.collection("users").get().then(function (snapshot){
            snapshot.forEach(function (doc) {
                if (user) {
                    User.push({
                        Name: doc.data().firstname,
                        email: doc.data().email,
                        Points: doc.data().points,
                    });
                    currentComponent.setState({ userDetail: User })
                    currentComponent.setState({ Points: Points })
                    console.log("User=",User)

                }
            });
        });
    }


    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.Viewcontainer}>
                    <View style={styles.container}>
                        <TouchableOpacity style={styles.Current}
                            onPress={() => this.props.navigation.navigate('Leaderboard')
                            }
                            activeOpacity={.8}>
                            <Text style={styles.TextCurrent}>Current Rankings</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Points}
                            onPress={() => this.props.navigation.navigate('Points')
                            }
                            activeOpacity={.8}>
                            <Text style={styles.TextPoints}>My Points</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.search_container}>
                        <View style={styles.searchContainer}>
                            <Text style={styles.TextStyle}>Search by Zip Code</Text>
                            <View style={styles.s_container}>
                                <TextInput style={styles.inputsSearch}
                                    keyboardType='numeric'
                                    maxLength={6} />
                                <TouchableOpacity
                                    activeOpacity={.8}>
                                    <Image style={styles.images}
                                        source={require('../assets/search.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.searchContainer}>
                            <Text style={styles.TextStyle}>Search by Country </Text>
                            <View style={styles.s_container}>
                                <TextInput style={styles.inputsSearch} />
                                <TouchableOpacity
                                    activeOpacity={.8}>
                                    <Image style={styles.images}
                                        source={require('../assets/search.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.TextHead}></Text>
                        <Image style={[styles.userimage, {height: 0}]} />
                        <Text style={styles.TextHead}>Name</Text>
                        <Text style={styles.TextHead}>Points</Text>
                        <Text style={styles.TextHead}>Level</Text>
                    </View>
                    <View style={styles.Viewcontainer1}>
                            <FlatList
                                data={this.state.userDetail}
                                keyExtractor={item => item.email}
                                renderItem={({ item,index }) =>
                                    <View style={styles.Viewcontainer2}>
                                        <Text style = {styles.TextContainer}>{index+1}</Text>
                            <Image style = {styles.userimage} source={require('../assets/user.jpg')} />
                                        <Text style = {[styles.TextContainer,{width: wp('25%')}]}>{item.Name? item.Name : " "}</Text>
                                        <Text style = {[styles.TextContainer,{width: wp('18%')}]}>{item.Points}</Text>
                                        <Text style = {[styles.TextContainer,{width: wp('23%')}]}>Platinum</Text>
                                    </View>
                                }
                            />
                    </View>

                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    Viewcontainer: { flex: 1 },
    Viewcontainer1: {
        flex: 1,
        flexDirection: 'column',
    },
    Viewcontainer2: {
        flex: 1,
        flexDirection: 'row',
        marginVertical : hp('2%'),
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        margin: 0,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    search_container: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: hp('2%'),
        marginHorizontal: wp('2%')
    },
    s_container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        margin: wp('2%'),

    },
    inputsSearch: {
        width: wp('37%'),
        borderWidth: 1,
        height: hp('5%')
    },
    Current: {
        borderWidth: 1,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: hp('2.5%'),
        alignItems: 'center',
        width: wp('50%')
    },
    TextCurrent: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: hp('2.5%'),
        paddingVertical: hp('1%'),
        alignItems: 'center',
        width: wp('50%'),

    },
    TextPoints: {
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: hp('2.5%'),
        paddingVertical: hp('1%'),
        alignItems: 'center',
        width: wp('50%'),
        color: color.WHITE,
    },
    Points: {
        borderWidth: 1,
        backgroundColor: color.BLACK,
        textAlign: 'center',
        justifyContent: 'center',
        fontSize: hp('2.5%'),
        alignItems: 'center',
        color: color.WHITE,
        width: wp('50%'),
        // height: hp('6%')
    },
    images: {
        width: wp('8%'),
        height: hp('5%')
    },
    userimage: {
        width: wp('23%'),
        height: hp('12%'),
    },
    TextStyle: {
        fontWeight: 'bold',
        fontSize: hp('2.2%')
    },
    TextContainer: {
        paddingHorizontal: wp('2.5%'),
        fontWeight: 'bold',
        fontSize: hp('2.3%'),
        textAlign: 'center',
        alignItems: 'center'
    },
    TextHead: {
        paddingHorizontal: wp('3.6%'),
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        color: color.YELLOW,
        fontWeight: 'bold',
        fontSize: hp('3.2%')
    },

});