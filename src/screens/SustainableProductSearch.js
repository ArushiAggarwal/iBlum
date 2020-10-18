import React, { Component } from 'react';
import { View, ImageBackground, Text, StyleSheet, TextInput, TouchableOpacity, Linking, Image } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';
import 'firebase/firestore';

export default class SustainableProductCheck extends Component {
  static navigationOptions = {
    title: "Buy Sustainable Products",
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
        path: 'images',
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

  onSubmit = (response) => {
    const file = new Blob([path],{type: response.type});
    const { fileName } = response;
    const { path} = response;
    const storageRef = firebase.storage().ref('tutorials/images');
    var uploadTask = storageRef.put(file);



    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      function (snapshot) {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED:
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING:
            console.log('Upload is running');
            break;
        }
      }, function () {
        // To get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          console.log('File available at', downloadURL);
        });
      });
  }

  render() {
    return (
      <View>
        <View style={styles.ImageContainer}>
         
            <TouchableOpacity style={styles.galleryButton}
              onPress={() => this.chooseImage()}
              activeOpacity={.8}>
              {this.state.image ? <Image style={styles.image} source={this.state.image}
              /> : <Image style={styles.image} source={require('../assets/upload.jpg')}></Image>}
            </TouchableOpacity>
         
        </View>
        <View style={styles.scrollItems}>
          <TouchableOpacity style={styles.checkButton}
            onPress={() => Linking.openURL('https://www.yelp.com')
            }
            activeOpacity={.8}>
            <Text style={styles.checkText}>Products Buy Link</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.scrollItems}>
          <TouchableOpacity style={styles.checkButton}
            onPress={() => this.onSubmit()}
            activeOpacity={.8}>
            <Text style={styles.checkText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  ImageContainer: {
    height: hp('50%'),
    backgroundColor: color.BLACK,
    alignItems:'center',
    borderWidth:20,
    justifyContent:'space-around'
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

  scrollItems: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  checkText: {
    color: color.WHITE,
    textAlign: 'center',
    fontSize: hp('3%'),
    padding: hp('2%'),
  },
  checkButton: {
    width: wp("80%"),
    backgroundColor: color.YELLOW,
    borderRadius: hp("2%"),
    marginVertical: hp('2%')
  },
  image: {
    width: wp('90%'),
    height: hp('40%'),
    borderRadius:20
  },
});