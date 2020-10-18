import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { View, ScrollView, Image, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Alert, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { CANNCEL_MSG } from '../common/constMessage';
import * as color from '../common/constColor';
import ImagePicker from 'react-native-image-picker';

export default class PlantUpload extends Component {

  state = {
      filePath: {
        data: '',
        uri: ''
      },
      fileData: '',
      fileUri: ''
    }
  

  static navigationOptions = {
    title: "Plant Trees",
    headerStyle: {
      backgroundColor: color.HeaderColor,
    },
    headerTintColor: color.BLACK,
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: hp('2.5%')
    },
  };

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
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
        // this.props.navigation.navigate('PlantReport',{data_image: this.state.fileData})
      }
    });
  }

  launchCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: false,
        path: 'images',
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
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri
        });
        //this.props.navigation.navigate('PlantReport',{data_image: this.state.fileData})
      }
    });

  }
  onSubmit = () => {
    const { fileData } = this.state
    var metadata = {
      contentType: 'image/jpeg'
    };
    const file =  decodeURI(fileData)
    const storageRef = firebase.storage().ref('tutorials/images');
    var uploadTask = storageRef.child('tutorials/images/' + file.name).putString(file,metadata);

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
      }, function (error) {
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;

          case 'storage/canceled':
            // User canceled the upload
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
          <View style={styles.TextContainer}>
            <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
              style={styles.images}
            />
            <Text style={styles.ImageText}>Upload your{"\n"}Plant Image</Text>
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
            //onPress={() => this.onSubmit()}
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