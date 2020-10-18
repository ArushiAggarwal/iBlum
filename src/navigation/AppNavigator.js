import React, { Component } from 'react'
import {TouchableOpacity,View, SafeAreaView, ScrollView } from 'react-native'
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import Icon from 'react-native-vector-icons/Ionicons'
import * as color from '../common/constColor';
import Headertitle from '../screens/HeaderTitle'
import Login from '../screens/Login';
import ForgotPassword from '../screens/ForgotPassword';
import Register from '../screens/Register';
import Act from '../screens/Act';
import DonateImageUpload from '../screens/DonateImageUpload';
import EmissionLevelCheck from '../screens/EmissionLevelCheck'
import EmissionLevelMap from '../screens/EmissionLevelMap'
import DonateReport from '../screens/DonateReport'
import Home from '../screens/Home'
import PlantReport from '../screens/PlantReport'
import PlantUpload from '../screens/PlantUpload'
import RateBusiness from '../screens/RateBusiness'
import SustainableProductCheck from "../screens/SustainableProductCheck";
import SustainableProductReport from "../screens/SustainableProductReport";
import SustainableProductSearch from "../screens/SustainableProductSearch";
import SustainableProductUpload from "../screens/SustainableProductUpload";
import BusinessLogin from '../screens/BusinessLogin';
import BusinessAccount from '../screens/BusinessAccount'
import MainScreen from '../screens/main'
import SplashScreen from '../screens/SplashScreen'
import ConsumerDashboard from '../screens/ConsumerDashboard'
import BusinessDashboard from '../screens/BusinessDashboard'
import userProfile from '../screens/userProfile'
import Leaderboard from '../screens/Leaderboard'
import Redeem from '../screens/redeem'
import BusinessRedeem from '../screens/BusinessRedeem'
import CouponDetails from '../screens/CouponDetails'
import BusinessCouponDetails from '../screens/BusinessCouponDetails'
import Performance from '../screens/Performance'
import Settings from '../screens/settings'
import AboutApp from '../screens/AboutApp'
import Resources from '../screens/Resources'
import FAQ from '../screens/FAQ'
import Search from '../screens/search'
import Contact from '../screens/contact'
import BusinessProfile from '../screens/BusinessProfile'
import BusinessRating from '../screens/BusinessRating'
import Logout from '../screens/Logout'
import Points from '../screens/Points'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class DrawerNavigate extends Component {
  toggleDrawer = () => {

    console.log('Drawer', this.props.navigationProps);

    this.props.navigationProps.toggleDrawer();

  }

  render() {

    return (

      <View style={{ flexDirection: 'row' }}>

        <TouchableOpacity style={{ marginLeft: wp('5%') }} onPress={this.toggleDrawer.bind(this)} >

          <Icon
            name="md-menu"
            size={30}
          />

        </TouchableOpacity>

      </View>

    );


  }
}

const Stack = createStackNavigator({
  ConsumerDashboard: { screen: ConsumerDashboard },
  userProfile: { screen: userProfile },
  EmissionLevelCheck: { screen: EmissionLevelCheck },
  EmissionLevelMap: { screen: EmissionLevelMap },
  RateBusiness:{screen: RateBusiness},
  Redeem:{screen: Redeem},
  PlantReport: {screen: PlantReport}
},


  {
    headerMode: 'none'
  }
)

const StackBusiness = createStackNavigator({
  BusinessDashboard: { screen: BusinessDashboard },
  BusinessProfile: { screen: BusinessProfile },
  Performance: { screen: Performance },
  Coupon: { screen: BusinessRedeem },
  BusinessRating: { screen: BusinessRating },
},


  {
    headerMode: 'none'
  }
)

const ActStack = createStackNavigator({
  Act: { screen: Act },
  DonateImageUpload: { screen: DonateImageUpload },
  DonateReport: { screen: DonateReport },
  PlantUpload: { screen: PlantUpload },
  SustainableProductCheck: { screen: SustainableProductCheck },
  SustainableProductReport: { screen: SustainableProductReport },
  SustainableProductSearch: { screen: SustainableProductSearch },
  SustainableProductUpload: { screen: SustainableProductUpload },
},


  {
    headerMode: 'none'
  }
)

const CustomDrawerContentComponent = props => (

  <SafeAreaView style={{
    flex: 1,
    backgroundColor: color.YELLOW,
    fontSize: hp('2.5%'),
    alignItems: 'center',
    width: '100%'
  }}
    forceInset={{ top: 'always', horizontal: 'never' }}>

    <ScrollView
      showsVerticalScrollIndicator={false}>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const Drawer = createDrawerNavigator({
  Dashboard: {
    headerLeft: <Headertitle />,
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{justifyContent:'center'}}>
    //   </View>
    //   ),

    // },

    screen: Stack
  },



  Leaderboard: {
    headerLeft: <Headertitle />,
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),

    // },

    screen: Leaderboard
  },
  Act: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: ActStack
  },
  Rate_Business: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: PlantReport
  },

  Resources: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: Resources
  },

  FAQ: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: FAQ
  },

  Settings: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: Settings
  },

  Search: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: Search
  },

  Contact_Us: {
    // navigationOptions: {
    //   title: 'Contact Us',
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: Contact
  },

  Logout: {

    // navigationOptions: {
    //   title: 'Logout',
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: Logout
  },

},




  {
    navigationOptions: ({ navigation }) => ({
      title: 'iBlum',
      headerTitleStyle: {
        width: '100%',
        textAlign: 'center',
        fontSize: hp('2.5%'),
        fontWeight: 'bold'

      },
      headerTintColor: color.BLACK,
      headerStyle: {
        backgroundColor: color.YELLOW,
        height: hp('9%'),
        width: '100%'
      },
      headerLeft: <DrawerNavigate navigationProps={navigation} />,
      //   headerRight:<Image
      // source={require('../images/notifications.png')}
      //         style={{ width: 25, height: 25,marginRight:15}}
      // />,
      headerRight: <View />,

      headerTintColor: color.BLACK,
    }),
    contentOptions: {
      labelStyle: {
        fontSize: hp("2.5%"),
        color: color.BLACK,
        justifyContent: 'center',
        alignItems: 'center',
      },
      itemsContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
      },
      activeBackgroundColor: color.YELLOW,
      width: '100%'



    },
    contentComponent: CustomDrawerContentComponent,
    drawerWidth: wp('100%')
  },

)

//  BusinessDrawer

const BusinessDrawer = createDrawerNavigator({
  Dashboard: {
    headerLeft: <Headertitle />,

    screen: StackBusiness
  },



  Leaderboard: {
    headerLeft: <Headertitle />,
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),

    // },

    screen: Performance

  },
  Rate_Business: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: BusinessRating
  },

  Resources: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: Resources
  },

  FAQ: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: FAQ
  },

  Settings: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: Settings
  },

  Search: {
    // navigationOptions: {
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: Search
  },

  Contact_Us: {
    // navigationOptions: {
    //   title: 'Contact Us',
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: Contact
  },

  Logout: {

    // navigationOptions: {
    //   title: 'Logout',
    //   drawerIcon: () => (
    //     <View style={{height:hp('8%'),justifyContent:'center'}}>
    //     <Image
    //     source={require("../assets/rate.png")}
    //     resizeMode="contain"
    //     style={{ width: hp('3%'), height: hp('3%'),  }}
    //   />
    //   </View>
    //   ),
    // },
    screen: Logout
  },

},




  {
    navigationOptions: ({ navigation }) => ({
      title: 'iBlum',
      headerTitleStyle: {
        width: '100%',
        textAlign: 'center',
        fontSize: hp('2.5%'),
        fontWeight: 'bold'

      },
      headerTintColor: color.BLACK,
      headerStyle: {
        backgroundColor: color.YELLOW,
        height: hp('9%'),
        width: '100%'
      },
      headerLeft: <DrawerNavigate navigationProps={navigation} />,
      //   headerRight:<Image
      // source={require('../images/notifications.png')}
      //         style={{ width: 25, height: 25,marginRight:15}}
      // />,
      headerRight: <View />,

      headerTintColor: color.BLACK,
    }),
    contentOptions: {
      labelStyle: {
        fontSize: hp("2.5%"),
        color: color.BLACK,
        justifyContent: 'center',
        alignItems: 'center',
      },
      itemsContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
      },
      activeBackgroundColor: color.YELLOW,
      width: '100%'



    },
    contentComponent: CustomDrawerContentComponent,
    drawerWidth: wp('100%')
  },

)




const MainNavigator = createStackNavigator({
  SplashScreen: { screen: SplashScreen },
  Drawer: { screen: Drawer },
  BusinessDrawer: { screen: BusinessDrawer },
  Points: {screen: Points},
  MainScreen: { screen: MainScreen },
  Login: { screen: Login },
  BusinessDashboard: { screen: BusinessDashboard },
  ConsumerDashboard: { screen: ConsumerDashboard },
  Account: { screen: Register },
  BusinessLogin: { screen: BusinessLogin },
  BusinessAccount: { screen: BusinessAccount },
  BusinessProfile: { screen: BusinessProfile },
  BusinessRating: { screen: BusinessRating },
  Act: { screen: Act },
  DonateImageUpload: { screen: DonateImageUpload },
  EmissionLevelCheck: { screen: EmissionLevelCheck },
  EmissionLevelMap: { screen: EmissionLevelMap },
  DonateReport: { screen: DonateReport },
  Home: { screen: Home },
  Redeem: { screen: Redeem },
  Coupon: { screen: BusinessRedeem },
  CouponDetails: { screen: CouponDetails },
  BusinessCouponDetails: { screen: BusinessCouponDetails },
  userProfile: { screen: userProfile },
  Leaderboard: { screen: Leaderboard },
  FAQ: { screen: FAQ },
  Search: { screen: Search },
  Contact: { screen: Contact },
  Resources: { screen: Resources },
  AboutApp: { screen: AboutApp },
  Settings: { screen: Settings },
  Performance: { screen: Performance },
  PlantReport: { screen: PlantReport },
  PlantUpload: { screen: PlantUpload },
  RateBusiness: { screen: RateBusiness },
  SustainableProductCheck: { screen: SustainableProductCheck },
  SustainableProductReport: { screen: SustainableProductReport },
  SustainableProductSearch: { screen: SustainableProductSearch },
  SustainableProductUpload: { screen: SustainableProductUpload },
  ForgotPassword: {screen: ForgotPassword},
},
  {
    headerLayoutPreset: 'center'
  }

)


const AppNavigator = createAppContainer(MainNavigator);


export default AppNavigator;