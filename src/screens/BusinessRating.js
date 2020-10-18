import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import firebase from 'firebase';
import 'firebase/firestore';
import style from './style'
//import { BarChart, Grid} from 'react-native-svg-charts'
import { BarChart } from "react-native-chart-kit";
import { Rating } from 'react-native-ratings';
import { Dimensions } from "react-native";

export default class BusinessRating extends Component {

  static navigationOptions = {
    title: "Business Rating",
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
    Labels: '',
}
     
  componentDidMount() {
    var currentComponent = this
    var db = firebase.firestore();
    var user = firebase.auth().currentUser;
    var TotalUser = "";
    var OverAllRating = "";
    //var Labels=[];
    db.collection("BusinessUsers").get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        if (user.email == doc.data().email.toLowerCase()) {
          console.log("Hello")
          TotalUser = doc.data().TotalUser
          OverAllRating = doc.data().OverAllRating
          currentComponent.setState({ TotalUser: TotalUser });
          currentComponent.setState({ OverAllRating: OverAllRating });
          currentComponent.setState({ Labels: doc.data().Labels });
        }
      });
    });
  };

  render() {
    const data = {
      labels: ["1 star", "2 star", "3 star", "4 star", "5 star",],
      datasets: [
        {
          data: [this.state.Labels.Star_1 ? this.state.Labels.Star_1 : 0,
          this.state.Labels.Star_2 ? this.state.Labels.Star_2 : 0,
          this.state.Labels.Star_3 ? this.state.Labels.Star_3 : 0,
          this.state.Labels.Star_4 ? this.state.Labels.Star_4 : 0,
          this.state.Labels.Star_5 ? this.state.Labels.Star_5 : 0,
          ]
        }
      ]
    };
    return (
      <ScrollView>
        <View style={style.RateView}>
          <View style={style.TextView}>
            <Text style={style.RateText}>Review Summary</Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'column', flex: 1, alignItems: 'center' }}>
              <Text style={{ color: color.YELLOW, fontSize: hp('6.8%'), justifyContent: 'center', alignItems: 'center' }}>
                {this.state.OverAllRating ? this.state.OverAllRating : "Not Available"}
              </Text>
              <Rating
                style={{ paddingVertical: hp('1%'), }}
                type='custom'
                readonly={'false'}
                //showRating={'true'}
                startingValue={this.state.OverAllRating }
                ratingCount={5}
                imageSize={25}
              />
              <Text style={{ fontSize: hp('2.4%') }}>
                Reviews {this.state.TotalUser}
              </Text>
            </View>
            <View style={{ flex: 1, marginRight: wp('8%'), }}>
              <BarChart
                style={{ marginTop: hp('4%') }}
                data={data}
                    data={data} 
                data={data}
                width={screenWidth - 50}
                withHorizontalLabels={true}
                height={hp('46%')}
                withInnerLines={false}
                horizontal={true}
                yAxisSuffix={' users'}
                    yAxisSuffix={' users'} 
                yAxisSuffix={' users'}
                chartConfig={{
                  backgroundColor: color.WHITE,
                  backgroundGradientFrom: color.WHITE,
                  backgroundGradientTo: color.WHITE,
                  decimalPlaces: 0, // optional, defaults to 2dp
                  color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }} />
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const screenWidth = Dimensions.get("window").width;

