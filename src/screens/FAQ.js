import React, { Component } from 'react';
import { View, ImageBackground, Text, Linking, TextInput, TouchableOpacity, Image, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import style from './style'

export default class FAQ extends Component{
    static navigationOptions = {
        title: "FAQs",
        headerStyle: {
          backgroundColor: color.HeaderColor,
        },
        headerTintColor: color.BLACK,
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: hp('2.5%')
        },
      };

      render(){
          return(
              <ScrollView showsVerticalScrollIndicator={false}>
              <View style={style.FaqView}>
              <Text style={[style.headingText, {marginBottom: hp('2%')}]}>What is sustainability and why is it important?</Text>
              <Text style={style.normalText}>Sustainability : It is an ecosystem, a lifestyle, or a community that is sustainable is one which supports itself and its surroundings.</Text>
           <Text style={style.normalText}>Sustainability itself can be defined by three core elements, each of which must be carefully considered in relation to the others:</Text>
           <View style={style.subFaqView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.normalText}>
                  Environmental Protection
                    </Text>
              </View>
              <View style={style.subFaqView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.normalText}>
                  Social Development
                    </Text>
              </View>
              <View style={style.subFaqView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.normalText}>
                  Economic Development
                    </Text>
              </View>


                  <Text style={[style.headingText, {marginVertical: hp('2%')}]}>How do you make a product sustainable?</Text>
                  <Text style={style.normalText}>Here are a just a few of the ideas to make products sustainable:</Text>

                  <View style={style.subFaqView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.normalText}>
                  Source materials more locally to decrease transportation emissions and costs.
                    </Text>
              </View>
              <View style={style.subFaqView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.normalText}>
                  Use reclaimed, postindustrial grades of plastic instead of virgin materials when possible.
                    </Text>
              </View>
              <View style={style.subFaqView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.normalText}>
                  Reduce the amount of material needed through part design.
                    </Text>
              </View>
              <View style={{ flexDirection: 'row',}}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.normalText}>
                  Fill it up!! Natural fillers such as wood, starch, flax, switch grass, etc. can add great aesthetics to the product, increase biocontent, and reduce the amount of plastic by up to 50%.
                    </Text>
              </View>
              <View style={style.subFaqView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.normalText}>
                  When possible, select a compostable plastic.
                    </Text>
              </View>

              <View style={style.subFaqView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.normalText}>
                  Select minimalistic packaging made from material that can be or have already been recycled or reclaimed.
                    </Text>
              </View>

              
                  <Text style={[style.headingText, {marginVertical: hp('2%')}]}>What are some examples of sustainable materials?</Text>
                  <Text style={style.normalText}>Example of sustainable materials are bamboo; wood; hemp; wool; linen; straw; clay, stone, sand; beeswax; and coconut.</Text>
           
           </View>
           </ScrollView>
          )
      }
}
