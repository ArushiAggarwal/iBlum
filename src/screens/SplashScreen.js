import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/firestore';
import { ImageBackground, Image, AsyncStorage, Text, View } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
/**Class Name - SplashScreen
 * Description - Splash screen will be the first screen to be displayed, which will show the app branding page. */
class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.launchApp = this.launchApp.bind(this);
    }
    UNSAFE_componentWillMount() {
        //Splash screen will last of 1000 msec
        setTimeout(() => this.launchApp(), 1000);
    }
    /**Launch App is a function to check if the session is already present in storage,
     *  If yes then redirect user to Drawer screen, if not take user to login screen */
    launchApp() {
        this.props.navigation.replace('MainScreen')
    }
    render() {
        return (
            <ImageBackground style={styles.imageStyle}
                source={require('../assets/LoginBackground.jpg')}
            >
                <View style={styles.ImageContainer}>
                    <Image source={require('../assets/iblumLogo.png')} />
                </View>
            </ImageBackground>
        )
    }


}


const styles = {
    imageStyle: {
        width: '100%', height: '100%',
    },
 
    ImageContainer:
    {
        justifyContent: 'center',
        alignItems: 'center',
        height: "100%"
    }
};
export default SplashScreen;