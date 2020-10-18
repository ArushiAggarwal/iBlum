import React, { Component } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity,Alert, TextInput } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import * as color from '../common/constColor';
import firebase from 'firebase';
import 'firebase/firestore';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class userProfile extends Component {
    static navigationOptions = {
        title: "Consumer Profile",
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
        super(props);
        this.myInput = React.createRef();
        this.myPass = React.createRef();
        this.myName = React.createRef();
        this.myCountry = React.createRef();
        this.myZipCode = React.createRef();
        this.state = {
            email: '',
            userEmail: '',
            userPass: '',
            userCountry: '',
            userZip: '',
            userName: '',
            //fileData:'',
            image:'',
            Points:'',
        };
    }

    componentDidMount() {
        var currentComponent = this
        var db = firebase.firestore();
        var user = firebase.auth().currentUser;
        var Email = '';
        var pass = "";
        var Points="";
        db.collection("users").get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
                if (user.email == doc.data().email.toLowerCase()) {
                    var fname = doc.data().firstname;
                    var lname = doc.data().lastname;
                    var name = fname + " " + lname
                    Email = doc.data().email;
                    pass = doc.data().password;
                    Points= doc.data().points
                    currentComponent.setState({ userName: name })
                    currentComponent.setState({ userEmail: Email });
                    currentComponent.setState({ userPass: pass });
                    currentComponent.setState({ Points: Points });
                    currentComponent.setState({ userCountry: doc.data().country });
                    currentComponent.setState({ userZip: doc.data().zipcode });
                    console.log('Points=',Points)
                }
            });
        });

    }

    ComingSoon = () => {
        Alert.alert(
            'Message',
            'Coming Soon!!',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ]
        );
    }

    chooseImage = () => {
        let options = {
            noData: true,
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
                var metadata = {
                    contentType: 'image/jpeg'
                  };
                const { fileName } = response;
                //const { path} = response;
                const storageRef = firebase.storage().ref('fileName');
                console.log('this is source =',source)
                console.log('this is fileName =',fileName)
                console.log('this is path =',path)
                console.log('this is storageRef =',storageRef)   
                var file = new Blob([this.state.image],{type: response.type});
                var uploadTask = storageRef.put(file,metadata);
                console.log(uploadTask);
                console.log('this is file =',file)
            }
        });
    }

    emailChange = () => {
        this.myInput.current.focus();
    }

    passChange = () => {
        this.myPass.current.focus();
    }

    nameChange = () => {
        this.myName.current.focus();
    }

    countryChange = () => {
        this.myCountry.current.focus();
    }

    zipChange = () => {
        this.myZipCode.current.focus();
    }

    UpdateChanges = () => {
        //console.log("Updated Details", this.state.userEmail, this.state.userName, this.state.userPass, this.state.userCountry, this.state.userZip)
        var firstname= this.state.userName
        var lastname= this.state.userName
        //var email= this.state.userEmail
        //var password= this.state.userPass
        var country= this.state.userCountry
        var zipcode= this.state.userZip
        var userId = firebase.auth().currentUser.uid;
        const db = firebase.firestore();
        const userRef= db.collection("users")
        userRef.doc(userId).update({
                firstname,
                lastname,
                //email,
                //password,
                country,
                zipcode,
            }).catch((error) => {
                console.log(error)
              });
              Alert.alert('Profile Updated')
    }
    render() {
        return (
            <View>
                <View style={styles.ImageContainer}>
                    <View style={styles.TextContainer}>

                        <View>
                            <TouchableOpacity style={styles.galleryButton}
                                onPress={() => this.chooseImage()}
                                activeOpacity={.8}>
                                {this.state.image ? <Image style={styles.image} source={this.state.image}
                                /> : <Image style={styles.image} source={require('../assets/upload.jpg')}></Image>}
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'column' }}>
                            
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    ref={this.myInput}
                                    value={this.state.userEmail ? this.state.userEmail : "Cannot Change"}
                                    style={[styles.ImageText2]}
                                    onChangeText={(Email) => this.setState({
                                        userEmail: Email
                                    }, () => console.log("email", this.state.userEmail))} />
                                <TouchableOpacity onPress={() => this.emailChange()}>
                                    <Icon
                                        name="edit"
                                        size={15}
                                        style={{ color: color.WHITE }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    ref={this.myName}
                                    value={this.state.userName ? this.state.userName : ""}
                                    style={[styles.ImageText2]}
                                    onChangeText={(Name) => this.setState({
                                        userName: Name
                                    })} />
                                <TouchableOpacity onPress={() => this.nameChange()}>
                                    <Icon
                                        name="edit"
                                        size={15}
                                        style={{ color: color.WHITE }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    ref={this.myPass}
                                    value={this.state.userPass ? this.state.userPass : "Cannot Change"}
                                    style={[styles.ImageText2]}
                                    onChangeText={(Pass) => this.setState({
                                        userPass: Pass
                                    })} />
                                <TouchableOpacity onPress={() => this.passChange()}>
                                    <Icon
                                        name="edit"
                                        size={15}
                                        style={{ color: color.WHITE }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    value={this.state.userCountry ? this.state.userCountry : ""}
                                    ref={this.myCountry}
                                    style={[styles.ImageText2]}
                                    onChangeText={(Country) => this.setState({
                                        userCountry: Country
                                    })} />
                                <TouchableOpacity onPress={() => this.countryChange()}>
                                    <Icon
                                        name="edit"
                                        size={15}
                                        style={{ color: color.WHITE }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    value={this.state.userZip ? this.state.userZip : ""}
                                    ref={this.myZipCode}
                                    style={[styles.ImageText2]}
                                    maxLength={6}
                                    onChangeText={(zipCode) => this.setState({
                                        userZip: zipCode
                                    })} />
                                <TouchableOpacity onPress={() => this.zipChange()}>
                                    <Icon
                                        name="edit"
                                        size={15}
                                        style={{ color: color.WHITE }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <Text style={styles.ImageText2}>Points: {this.state.Points}</Text>

                            <View style={styles.donateContainer}>
                                <TouchableOpacity style={styles.updateButton}
                                    onPress={() => this.UpdateChanges()}
                                    activeOpacity={.8}>
                                    <Text style={styles.Text}>Update Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.donateContainer}>
                        <TouchableOpacity style={styles.donateButton}
                            onPress={() => this.props.navigation.navigate('EmissionLevelCheck')
                            }
                            activeOpacity={.8}>
                            <Text style={styles.Text}>Check emission level</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.donateContainer}>
                        <TouchableOpacity style={styles.donateButton}
                            onPress={() => this.props.navigation.navigate('Act')
                            }
                            activeOpacity={.8}>
                            <Text style={styles.Text}>Act</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.donateContainer}>
                        <TouchableOpacity style={styles.donateButton}
                            onPress={() => this.props.navigation.navigate('Leaderboard')
                            }
                            activeOpacity={.8}>
                            <Text style={styles.Text}>LeaderBoard</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.donateContainer}>
                        <TouchableOpacity style={styles.donateButton}
                            onPress={() => this.ComingSoon()
                            }
                            activeOpacity={.8}>
                            <Text style={styles.Text}>Redeem Points</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.donateContainer}>
                        <TouchableOpacity style={styles.donateButton}
                            onPress={() => this.props.navigation.navigate('PlantReport')
                            }
                            activeOpacity={.8}>
                            <Text style={styles.Text}>RateBusiness</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    image: {
        width: wp('32%'),
        height: hp('16.6%'),
        borderRadius:20
    },
    donateContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    Text: {
        color: color.WHITE,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
        fontSize: hp('3%'),
        padding: hp('1.4%'),
    },
    donateButton: {
        width: wp("95%"),
        backgroundColor: color.YELLOW,
        borderRadius: hp("5%"),
        marginVertical: hp('0.8%')
    },
    ImageContainer: {
        height: hp('45%'),
        backgroundColor: color.BLACK
    },
    TextContainer: {
        alignItems: 'center',
        justifyContent: 'space-around',
        flex: 1,
        flexDirection: 'row'
    },
    ImageText: {
        color: color.WHITE,
        fontSize: hp('2.2%'),
        textAlign: 'center',
        marginTop: hp('5%')
    },
    ImageText2: {
        color: color.WHITE,
        fontSize: hp('2.2%'),
        textAlign: 'center',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: wp("40%"),
        padding: 0,
    },
    updateButton: {
        width: wp("45%"),
        backgroundColor: color.YELLOW,
        borderRadius: hp("5%"),
        marginVertical: hp('0.8%')
    },
});