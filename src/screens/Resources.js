import React, { Component } from 'react';
import { View, ImageBackground, Text, Linking, TextInput, TouchableOpacity, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import style from './style'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Resources extends Component{
    static navigationOptions = {
        title: "Resources",
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
              <View style={style.ResView}>
              <View style={style.subResView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.link}
                        onPress={() => Linking.openURL('https://sustainabledevelopment.un.org/')}>
                        https://sustainabledevelopment.un.org/
</Text>
              </View>

              <View style={style.subResView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.link}
                        onPress={() => Linking.openURL('https://www.globalgoals.org/')}>
                       https://www.globalgoals.org/
</Text>
              </View>

              <View style={style.subResView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.link}
                        onPress={() => Linking.openURL('https://until.un.org')}>
                        https://until.un.org
</Text>
              </View>

              <View style={style.subResView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.link}
                        onPress={() => Linking.openURL('https://www.greenbiz.com/')}>
                        https://www.greenbiz.com/
</Text>
              </View>


              <View style={style.subResView}>
              <Text style={style.bullet}>{'\u2022' + " "}</Text>
                  <Text style={style.link}
                        onPress={() => Linking.openURL('https://www.epa.gov/greenerproducts')}>
                        https://www.epa.gov/greenerproducts
</Text>
              </View>


              </View>
          )
      }
}
