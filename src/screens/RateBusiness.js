import React, { Component } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Rating } from 'react-native-ratings';
import firebase from 'firebase';
import 'firebase/firestore';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import { THANKS_MSG } from '../common/constMessage';

export default class RateBusiness extends Component {
    static navigationOptions = {
        title: "Rate Business",
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
        rating1: '',
        rating2: '',
        rating3: '',
        rating4: '',
        rating5: '',
        rating6: '',
        PreviousUserCount: '',
        PreviousUserCount: '',
        Labels: '',
    }

    componentDidMount() {
        var db = firebase.firestore();
        var currentComponent = this
        var Labels = '';
        var PreviousUserCount = '';
        var PreviousRating = '';
        const BusiName = this.props.navigation.state.params.bName
        db.collection("BusinessUsers").get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                if (BusiName == doc.data().businessname) {
                    PreviousUserCount = doc.data().TotalUser
                    PreviousRating = doc.data().OverAllRating
                    Labels = doc.data().Labels,
                    currentComponent.setState({ PreviousRating: PreviousRating });
                    currentComponent.setState({ PreviousUserCount: PreviousUserCount });
                    currentComponent.setState({ Labels: Labels });
                    console.log("PreviousRating", PreviousRating)
                    console.log("PreviousUserCount", PreviousUserCount)
                    console.log("Labels", Labels)
                } 
            });
        });

    }

    /*
        componentDidMount() {
            var db = firebase.firestore();
            var currentComponent = this
            var Labels='';
            var PreviousUserCount = '';
            var PreviousRating = '';
            const BusiName = this.props.navigation.state.params.bName
            db.collection("StarRating").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    if (BusiName == doc.data().BusinessName){
                          PreviousUserCount = doc.data().TotalUser
                          PreviousRating = doc.data().OverAllRating
                          Labels = doc.data().Labels,
                          currentComponent.setState({ PreviousRating: PreviousRating});
                          currentComponent.setState({ PreviousUserCount: PreviousUserCount });
                          currentComponent.setState({Labels:Labels});
                          console.log("PreviousRating",PreviousRating)
                          console.log("PreviousUserCount",PreviousUserCount)
                          console.log("Labels",Labels)
                    }
                });
            });
            
        }
    
    */
    
    userCountStar_0 = (NewRating) => {
        if (NewRating == 0){
            Alert.alert('Please Submit Rating')
        }
    }
    
    userCountStar_1 = (NewRating) => {
        var value1 = this.state.Labels.Star_1
        if (NewRating == 1) {
            value1 = this.state.Labels.Star_1 + 1
            console.log("Value1=", value1)
        }
        return value1;
    }
    userCountStar_2 = (NewRating) => {
        var value2 = this.state.Labels.Star_2
        if (NewRating == 2) {
            value2 = this.state.Labels.Star_2 + 1
            console.log("Value2=", value2)
        }
        return value2;
    }
    userCountStar_3 = (NewRating) => {
        var value3 = this.state.Labels.Star_3
        if (NewRating == 3) {
            value3 = this.state.Labels.Star_3 + 1
            console.log("Value3=", value3)
        }
        return value3;
    }
    userCountStar_4 = (NewRating) => {
        var value4 = this.state.Labels.Star_4
        if (NewRating == 4) {
            value4 = this.state.Labels.Star_4 + 1
            console.log("Value4=", value4)
        }
        return value4;
    }
    userCountStar_5 = (NewRating) => {
        var value5 = this.state.Labels.Star_5
        if (NewRating == 5) {
            value5 = this.state.Labels.Star_5 + 1
            console.log("Value5=", value5)
        }
        return value5;
    }

    onSubmit = () => {
        const { rating1, rating2, rating3, rating4, rating5, rating6 } = this.state;
        const db = firebase.firestore();
        var user = firebase.auth().currentUser;
        console.log("rating1=", rating1)
        console.log("rating2=", rating2)
        console.log("rating3=", rating3)
        console.log("rating4=", rating4)
        console.log("rating=5", rating5)
        console.log("rating=6", rating6)
        if (rating1 == "" || rating2 == "" || rating3 == "" || rating4 == "" || rating5 == "" || rating6 == "") {
            Alert.alert("Please Rate First")
        }
        else {
            const TotalRating = (rating1 + rating2 + rating3 + rating4 + rating5 + rating6);
            const NewRating = Math.round(TotalRating / 6);
            console.log('NewRating=', NewRating);
            if (NewRating == 0) {
                Alert.alert("Please Rate First")
            }
            else {
                const Star_1 = this.userCountStar_1(NewRating);
                const Star_2 = this.userCountStar_2(NewRating);
                const Star_3 = this.userCountStar_3(NewRating);
                const Star_4 = this.userCountStar_4(NewRating);
                const Star_5 = this.userCountStar_5(NewRating);
                console.log("Star_1", Star_1)
                console.log("Star_2", Star_2)
                console.log("Star_3", Star_3)
                console.log("Star_4", Star_4)
                console.log("Star_5", Star_5)


                const Total_User_Sum = (Star_1 + Star_2 + Star_3 + Star_4 + Star_5)
                console.log('TotalUser=', Total_User_Sum)
                console.log("PreviousRating", this.state.PreviousRating)
                console.log("PreviousUserCount", this.state.PreviousUserCount)
                const AvgOverAllRating = Math.round(((this.state.PreviousRating * this.state.PreviousUserCount) + NewRating) / ++this.state.PreviousUserCount)
                console.log("AvgOverAllRating", AvgOverAllRating);
                const BusiName = this.props.navigation.state.params.bName
                //const BusiEmail = this.props.navigation.state.params.bEmail

                db.collection("BusinessUsers").get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        if (BusiName == doc.data().businessname) {
                            const userRating = db.collection("BusinessUsers");
                            userRating.doc(doc.id).update({
                                OverAllRating: AvgOverAllRating,
                                TotalUser: Total_User_Sum,
                                UserList: [user.email],
                                Labels: { Star_1, Star_2, Star_3, Star_4, Star_5 },
                            })
                        }
                    });
                });
                Alert.alert(THANKS_MSG)
            }
        }

    }

    /*
        onSubmit = () => {
            const db = firebase.firestore();
            const { rating1, rating2, rating3, rating4, rating5, rating6} = this.state;
            var user = firebase.auth().currentUser;
            var userRating = db.collection("StarRating");
            userRating.get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) { 
                    if (user.email == doc.data().UserList) {
                        console.log('You Have Rated Already', doc.data())
                        Alert.alert('You Have Rated Already')
                    }else{
                        //const db = firebase.firestore();
                        //var userRating = db.collection("StarRating");
                        console.log("rating1", rating1)
                        console.log("rating2", rating2)
                        console.log("rating3", rating3)
                        console.log("rating4", rating4)
                        console.log("rating5", rating5)
                        const TotalRating = (rating1 + rating2 + rating3 + rating4 + rating5 + rating6);
                        const NewRating = Math.round(TotalRating / 6);
                        console.log('NewRating=',NewRating);
                        //var Count = this.userCount_0(NewRating);
                    
                        const Star_1 = this.userCountStar_1(NewRating);
                        const Star_2 = this.userCountStar_2(NewRating);
                        const Star_3 = this.userCountStar_3(NewRating);
                        const Star_4 = this.userCountStar_4(NewRating);
                        const Star_5 = this.userCountStar_5(NewRating);
                        console.log("Star_1", Star_1)
                        console.log("Star_2", Star_2)
                        console.log("Star_3", Star_3)
                        console.log("Star_4", Star_4)
                        console.log("Star_5", Star_5)
                      
                       
                        const Total_User_Sum = (Star_1 + Star_2 + Star_3 + Star_4 + Star_5)
                        console.log('TotalUser=',Total_User_Sum)
                        console.log("PreviousRating",this.state.PreviousRating)
                        console.log("PreviousUserCount",this.state.PreviousUserCount)
                        const AvgOverAllRating = Math.round(((this.state.PreviousRating * this.state.PreviousUserCount)+NewRating) /(++this.state.PreviousUserCount))
                        console.log("AvgOverAllRating",AvgOverAllRating);
                        const BusiName = this.props.navigation.state.params.bName
                        const BusiEmail = this.props.navigation.state.params.bEmail
                    
                        db.collection("StarRating").get().then(function (querySnapshot) {
                            querySnapshot.forEach(function (doc) {
                                if (doc.BusiName == doc.data().BusinessName) {
                                    const userRating = db.collection("StarRating");
                                    userRating.doc().update({
                                        OverAllRating: AvgOverAllRating,
                                        TotalUser: Total_User_Sum,
                                        UserList: [{ UserEmail: user.email }],
                                        Labels: { Star_1, Star_2, Star_3, Star_4, Star_5},
                                    }).catch((error) => {
                                        console.log(error)
                                    });
                                } else {
                                    db.collection('StarRating')
                                    userRating.doc(BusiName).set({
                                        BusinessName: BusiName,
                                        Email:BusiEmail,
                                        TotalUser: Total_User_Sum,
                                        OverAllRating: AvgOverAllRating ,
                                        UserList: [{ UserEmail: user.email }],
                                        Labels: { Star_1, Star_2, Star_3, Star_4, Star_5},
                                    }).catch((error) => {
                                        console.log(error)
                                    });
                                }
                            });
                        });
    
                    }
                });
            });
        }
    */

    render() {
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Image source={require('../assets/rateBusiness.png')} style={styles.backgroundImage} />
                    <View style={styles.scrollViewContainer}>
                        <View style={styles.scrollItems}>
                            <Text style={styles.textContent}>Use renewable Energy</Text>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={30}
                                startingValue={0}
                                onFinishRating={(rating1) => this.setState({ rating1 })}
                                style={styles.rating}
                            />
                        </View>
                        <View style={styles.scrollItems}>
                            <Text style={styles.textContent}>Stock organic products</Text>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={30}
                                startingValue={0}
                                onFinishRating={(rating2) => this.setState({ rating2 })}
                                style={styles.rating}
                            />
                        </View>
                        <View style={styles.scrollItems}>
                            <Text style={styles.textContent}>Have Cycle Stand</Text>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={30}
                                startingValue={0}
                                onFinishRating={(rating3) => this.setState({ rating3 })}
                                style={styles.rating}
                            />
                        </View>
                        <View style={styles.scrollItems}>
                            <Text style={styles.textContent}>Furniture with sustainable harvested wood</Text>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={30}
                                startingValue={0}
                                onFinishRating={(rating4) => this.setState({ rating4 })}
                                style={styles.rating}
                            />
                        </View>
                        <View style={styles.scrollItems}>
                            <Text style={styles.textContent}>Source from Local farmers</Text>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={30}
                                startingValue={0}
                                onFinishRating={(rating5) => this.setState({ rating5 })}
                                style={styles.rating}
                            />
                        </View>
                        <View style={styles.scrollItems}>
                            <Text style={styles.textContent}>Contribute to Climate Action</Text>
                            <Rating
                                type='star'
                                ratingCount={5}
                                imageSize={30}
                                startingValue={0}
                                onFinishRating={(rating6) => this.setState({ rating6 })}
                                style={styles.rating}
                            />
                        </View>
                        <View style={styles.submitButtonScroll}>
                            <TouchableOpacity style={styles.submitButton}
                                onPress={this.onSubmit}
                            >
                                <Text style={styles.submitText}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({

    backgroundImage: {
        resizeMode: 'cover',
        height: hp('40%'),
        width: wp('100%')
    },
    scrollViewContainer: {
        paddingTop: hp('5%'),
        margin: '2%'
    },
    scrollItems: {
        padding: hp('1%'),
        alignItems: 'center',
    },
    textContent: {
        fontSize: hp('2.5%'),
        textAlign: 'justify'
    },
    rating: {
        padding: hp('3%'),
    },
    submitButtonScroll: {
        padding: hp('4%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    submitButton: {
        width: wp("80%"),
        padding: hp('2.5%'),
        backgroundColor: color.YELLOW,
        height: hp('8%'),
        borderRadius: hp("5%")
    },
    submitText: {
        color: color.WHITE,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        fontSize: hp('3.3%'),
        bottom: hp('1.2%')
    }

});
