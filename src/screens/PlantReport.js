import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity, FlatList,RefreshControl } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';



function Item({ title }) {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default class PlantReport extends Component {
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
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            businessName: [],
            //BusinessId:'',
        }
    }
    componentDidMount() {
        var currentComponent = this
        var db = firebase.firestore();
        var user = firebase.auth().currentUser;
        var businessName = [];
        db.collection("BusinessUsers").get().then(function (snapshot) {
            snapshot.forEach(function (doc) {
                if (user) {
                    businessName.push({
                        businessName: doc.data().businessname,
                        email: doc.data().email,
                        //BusinessId:doc.data().uid
                    });
                    currentComponent.setState({ businessName: businessName })
                }
            });
        });
    }
    render() {
        console.log("this.state.businessName ", this.state.businessName)
        return (
            <View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, flexDirection: 'column' }}>
                        <FlatList
                            data={this.state.businessName}
                            renderItem={({ item }) =>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('RateBusiness',{bName:item.businessName,bEmail:item.email})
                                    }
                                    activeOpacity={.8}>
                                    <Item title={item.businessName} />
                                </TouchableOpacity>}
                            keyExtractor={item => item.email}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: color.YELLOW,
        padding: "4%",
        marginVertical: hp('2%'),
        marginHorizontal: wp('4%'),
        alignItems: 'center'
    },
    title: {
        fontSize: hp('2.3%'),
    },
});