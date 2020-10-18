import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { View, ScrollView, Image, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import ImagePicker from 'react-native-image-picker';

export default class PlantUpload extends Component {

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

  state = {
    image: '',
  }

  chooseImage = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        // path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri }
        this.setState({
          image: source
        })
      }
    });
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: false,
        // path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        const source = { uri: response.uri }
        this.setState({
          image: source
        })
      }
    });
  }

  onSubmit = (response) => {
    var metadata = {
      contentType: 'image/jpeg'
    };
    const { fileName } = response;
    //const { path} = response;
    const storageRef = firebase.storage().ref(fileName);
    console.log('this is source =', source)
    console.log('this is fileName =', fileName)
    console.log('this is storageRef =', storageRef)
    var file = new File([source.uri], { type: response.type })
    var uploadTask = storageRef.put(file, metadata);
    console.log(uploadTask);

    Alert.alert(
      'Message',
      'Receipt is successfully uploaded',
      [
        {
          text: 'Cancel', onPress: () => {
            this.props.navigation.goBack()
          }
        },
        {
          text: 'Confirm', onPress: () => {
            this.props.navigation.navigate('DonateReport')
          }
        },
      ],
      { cancelable: false }
    )
  }


  render() {
    return (
      <View>
        <View style={styles.ImageContainer}>
          <View style={styles.TextContainer}>
            <Image source={this.state.image}
              style={styles.images}
            />
            <Text style={styles.ImageText}>Upload your{"\n"}GoFundme Donation Image</Text>
          </View>
        </View>
        <View style={styles.cameraButtonContainer}>
          <TouchableOpacity style={styles.cameraButton}
            onPress={() => this.launchCamera()
            }
            activeOpacity={.8}
          >
            <Text style={styles.cameraButtonText}>Use Camera</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.separator}>Or</Text>
        <View style={styles.galleryContainer}>
          <TouchableOpacity style={styles.galleryButton}
            onPress={() => this.chooseImage()
            }
            activeOpacity={.8}>
            <Text style={styles.galleryText}>Choose from gallery</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.galleryContainer}>
          <TouchableOpacity style={styles.galleryButton}
            onPress={() => this.onSubmit()}
            activeOpacity={.8}>
            <Text style={styles.galleryText}>Submit</Text>
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
const styles = StyleSheet.create({

  ImageContainer: {
    height: hp('50%'),
    backgroundColor: color.BLACK
  },
  TextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  images: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 1,
    marginHorizontal: 3
  },
  ImageText: {
    color: color.WHITE,
    fontSize: hp('2.8%'),
    textAlign: 'center'
  },
  cameraButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraButtonText: {
    color: color.WHITE,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontSize: hp('3%'),
    padding: hp('2%'),
  },
  cameraButton: {
    width: wp("80%"),
    backgroundColor: color.YELLOW,
    height: hp('8%'),
    borderRadius: hp("5%"),
    marginVertical: hp('1%')
  },
  separator: {
    fontSize: hp('2.8%'),
    textAlign: 'center',
    top: hp('8%')
  },
  galleryContainer: {
    top: hp('12%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  galleryText: {
    color: color.WHITE,
    textAlign: 'center',
    alignItems: "center",
    justifyContent: "center",
    fontSize: hp('3%'),
    padding: hp('2%'),
  },
  galleryButton: {
    width: wp("80%"),
    backgroundColor: color.YELLOW,
    // height: hp('8%'),
    borderRadius: hp("5%"),
    marginVertical: hp('1%')
  },
});