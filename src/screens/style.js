import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
//import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as color from '../common/constColor';
const style = StyleSheet.create({
  buttonContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: color.WHITE,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: hp("3.5%"),
    alignItems: 'center',
    paddingVertical: hp('2%')
  },
  Button: {
    width: wp("80%"),
    backgroundColor: color.YELLOW,
    justifyContent: 'center',
    marginVertical: hp('6%'),
    alignItems: 'center',
    borderRadius: hp("2%")
  },
  ImageContainer: {
    flex: 1,
    flexDirection: 'column',
    marginVertical: hp('5%'),
    marginHorizontal: wp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image1: {
    width: wp('85%'),
    height: hp('26.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('2%')
  },
  Image2: {
    width: wp('80%'),
    height: hp('50%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('2%')
  },
  Image: {
    width: wp('95%'),
    height: hp('28.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp('5%')
  },
  TextContent: {
    margin: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boldContent: {
    fontSize: hp("2.5%"),
    fontWeight: 'bold',
    marginTop: hp('3%')
  },
  normalContent: {
    fontSize: hp("2.5%"),
    textAlign: 'justify'
  },
  PerViewstyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    width: '100%'
  },
  PerSubViewstyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  PerViewText: {
    color: color.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: hp('2%'),
    padding: hp('2%')
  },
  PerView: {
    backgroundColor: color.BLACK,
    width: wp('45%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  PerSubViewText: {
    fontSize: hp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    padding: hp('2%'),
  },
  PerViewRedeem: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // width: wp('100%')
  },
  PerSubRedeem: {
    width: wp('95%'),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.BLACK,
  },
  ProfileView: {
    margin: "2%",
    flex: 1,
     //justifyContent: 'flex-start',
    // alignItems: 'center',
  },
  ProfileName: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
  },
  NameView: {
    flex: 1,
    padding: '2%'
  },
  ImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: hp('28%'),
    padding: "2%",
  },
  link: {
    color: color.BLUE,
    fontSize: hp('2.4%'),
  },
  RateView: {
    margin: '4%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  RateText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: hp('2.4%')
  },
  TextView: {
    paddingTop: hp('2%W'),
    paddingBottom: hp('5%'),
  },
  rateMonth: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: color.GREY,
    paddingVertical: hp('1%'),
    marginBottom: hp('2%'),
  },
  textMonth: {
    fontWeight: 'bold',
    fontSize: hp('2%')
  },
  setting: {
    flex: 1,
    margin: '2%',
  },
  setView: {
    flex: 1,
    flexDirection: 'column',
    padding: '2%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  AppImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageApp: {
    width: wp('20%'),
    height: hp('20%'),
    marginHorizontal: wp('10%')
  },
  headingText: {
    fontSize: hp('2.5%'),
    fontWeight: 'bold'
  },

  heading: {
    marginVertical: hp('2%')
  },

  normalText: {
    fontSize: hp('2.5%'),
    textAlign: 'justify',
    width: '97%'
  },
  subViewSet: {
    flexDirection: 'row-reverse', 
    width: '100%', 
    justifyContent: 'space-between',
    marginVertical: hp('2%'), 
    paddingVertical: hp('2%')
  },
  ResView: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    margin: '8%'
  },
subResView:{ justifyContent: 'flex-start', 
alignItems: 'flex-start',
flexDirection: 'row',
marginVertical: hp('3%')
},
FaqView:{justifyContent: 'flex-start', 
alignItems: 'flex-start',
margin: '5%'
},
subFaqView:{flexDirection: 'row', 
marginVertical: hp('2%')
},

ProfileImage:{
  width: wp('60%'),
  height: hp('40%')
},
PointsText:{
  marginVertical: hp('5%'),
  fontSize: hp('3.5%'),
  fontWeight: 'bold'
},
setFont:{
  fontSize: hp('3%')
},
bullet:{
  fontSize: hp("2.5%")
},
aboutLink:{
  marginVertical: hp('1%'), 
  fontSize: hp('3%'), 
  textDecorationLine: 'underline', 
  color: color.BLUE,
},
aboutImage:{ 
  width: wp('38%'), 
  height: hp('30%') 
},
contactView:{
  flex:1, 
  justifyContent: 'center', 
  alignItems: 'center', 
  flexDirection: 'column',
  marginHorizontal: wp('2%'),
},
contactText:{
  fontSize: hp('2.5%'), 
  textAlign: 'center', 
  fontWeight: 'bold'
},
emissionView:{
  justifyContent: 'center', 
  alignItems: 'center', 
  margin: '2%', 
  flex: 1, 
  flexDirection: 'column'
},
subEmissionView:{
  justifyContent: 'center',
  alignItems: 'center', 
  marginTop: hp('3%')
},
emissionText:{
  fontSize: hp('2.5%'), 
  fontWeight: 'bold',
  textAlign: 'center',  
  marginVertical: hp('1%')
},
});

export default style;