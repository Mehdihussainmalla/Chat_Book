import { StyleSheet, Text, View, Image, ScrollView, Alert, TouchableOpacity, } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
import imagePath from '../../constants/imagePath'
import TextInputComp from '../../Components/TextInputs'
import Button from '../../Components/Button'
import navigationStrings from '../../navigation/navigationStrings'
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from './style';
import actions from "../../Redux/actions";
const Profile = ({ navigation ,route}) => {
const data = route?.params?.data?.data;
const id=data?.id;
    const [state, setState] = useState({
        email: "",
        phone_number: "",
        country_code: "+91",
        image_url: "",
        dob: "",
        username: "",
        gender: "male",
        about_us: "",
        name: ""
    })

    const { email, phone_number, country_code, image_url,
        dob, username, gender, about_us,
        name } = state;

    const updateState = (data) => setState(state => ({ ...state, ...data }));


    const onChangeTextResult = (key, value) => {
        //  console.log(key, value, "key");
         updateState({ [key]: value })
    }

    const profileUpdate = async () => {

        let formData = new FormData();
            formData.append('id',id),
            formData.append('username', username),
            formData.append('dob', dob),
            formData.append('phone_number', phone_number),
            formData.append('email', email),
            formData.append('name', name),
            formData.append('about_us', about_us),
            formData.append('gender', gender),
            formData.append('country_code', country_code)
            formData.append('image_url', image_url);
        // {
        //     uri: image_url,
        //     name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
        //     type: 'image/jpeg',
        // });
        console.log(formData, "formdata >>>")
         let header = { "Content-Type": "multipart/form-data" }
        await actions.editProfile(formData, header).then((res) => {
            console.log("response after actions>>>>", res)
            navigation.navigate(navigationStrings.ACCOUNT_CREATED)

        }).catch((error) => {
            console.log(error, "error occurred")
        })


    }

    //........image picker...........//
    const cameraClick = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
        }).then(image => {
            console.log(image);
            const imageUri = Platform.OS === "ios" ? image?.sourceURL : image?.path;
            console.log(imageUri, "imageuri is >>>");
            // onChangeTextResult("image_url", imageUri);
            // updateState({ image_url: imageUri });
        });

    }
   
    const onSelectImage = () => {

        Alert.alert(
            "accessory picture",
            "choose an option",
            [{
                text: "Camera",
                onPress: cameraClick
            },
            {
                text: "Gallery",
                onPress: galleryClick
            },

            { text: "Cancel", onPress: () => console.log("OK Pressed"), style: "cancel" }
            ])
    }
    const galleryClick = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            console.log(image);
            const imageUri = Platform.OS === 'ios' ? image?.sourceURL : image?.path;
            onChangeTextResult("image_url", imageUri);
            // updateState({ image_url: imageUri })
            console.log(image_url, " image is")
        });
    }
    return (
            <WrapperContainer>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={{ flex: 1 }}>

                <Header
                    isBackIcon={true} />
                {/* <View style={styles.imgstyle}> */}

                <Image
                    style={styles.img}
                    source={{ uri: image_url }} />
                {/* </View> */}
                <TouchableOpacity
                   onPress={onSelectImage}
                    style={styles.editstyle}>
                    <Text style={styles.profiletxt}>Edit Profile</Text>
                </TouchableOpacity>

                <View style={styles.usernamelabel}>
                    <Text style={styles.usertxt}>USERNAME</Text>
                </View>
                <TextInputComp
                    value={username}
                    onChangeText={(username) => updateState({ username })}
                    inputview={styles.userinput}
                    placeHolder={"Full Name"} />

                <View style={styles.doblabel}>
                    <Text style={styles.dobtxt}>D.O.B</Text>
                </View>
                <TextInputComp
                    value={dob}
                    onChangeText={(dob) => updateState({ dob })}
                    inputview={styles.dobinput}
                    placeHolder={"DD/MM/YY"} />

                <View style={styles.phonelabel}>
                    <Text style={styles.phonetxt}>PHONE NUMBER</Text>
                </View>
                <TextInputComp

                    value={phone_number}
                    onChangeText={(phone_number) => updateState({ phone_number })}
                    inputview={styles.phoneinput}
                    placeHolder={"+916005927575"} />

                <View style={styles.emaillabel}>
                    <Text style={styles.emailtxt}>EMAIL ADDRESS</Text>
                </View>
                <TextInputComp
                    value={email}
                    onChangeText={(email) => updateState({ email })}
                    inputview={styles.emailinput}
                    placeHolder={"forexample@gmail.com"} />

                <View style={styles.biolabel}>
                    <Text>ABOUT YOURSELF</Text>
                </View>
                <TextInputComp
                    value={about_us}
                    onChangeText={(about_us) => updateState({ about_us })}
                    inputview={styles.aboutusinput}
                    placeHolder={"about yourself"} />
                <View style={styles.biolabel}>
                    <Text>NAME</Text>
                </View>
                <TextInputComp
                    value={name}
                    inputview={styles.aboutusinput}
                    onChangeText={(name) => updateState({ name })}
                    placeHolder="enter your name" />

            </View>
            {/* </ScrollView> */}
            <Button
                onPress={profileUpdate}
                ButtonTxt={"Proceed"} />

        </WrapperContainer>
    )
}

export default Profile

