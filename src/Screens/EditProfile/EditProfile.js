import React, { Component, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Header from '../../Components/Header';
import TextInputComp from '../../Components/TextInputs';
import WrapperContainer from '../../Components/WrapperContainer';
import Button from '../../Components/Button'
import navigationStrings from '../../navigation/navigationStrings'
import ImagePicker from 'react-native-image-crop-picker';
import { styles } from './style';
import actions from "../../Redux/actions";
import { useSelector } from 'react-redux';
import { saveUserData } from '../../Redux/actions/auth';
import CountryCodePicker from '../../Components/CountryCodePicker';
import { RNS3 } from 'react-native-upload-aws-s3';
import { aws } from '../../config/keys';
import { textScale } from '../../styles/responsiveSize';
const EditProfile = ({ navigation }) => {
    const userData = useSelector(state => state?.auth?.userData?.data);
    const emailid = userData?.email;
    const dateOfBirth = userData?.dob;
    const image = userData?.profile;
    const phone = userData.phone_number;
    const user_name = userData.username;
    const aboutus = userData.about_us;
    const Name = userData.name;
    // console.log(userData, "userdata is")


    const [countryCode, setCountryCode] = useState('91');
    const [countryFlag, setCountryFlag] = useState('IN');
    const [state, setState] = useState({
        email: '',
        phone_number: '',
        country_code: countryCode,
        image_url: "",
        dob: '',
        username: '',
        gender: "male",
        about_us: "",
        name: "",
        country_flag: countryFlag,
        // profile: profile,
    })

    const { email, phone_number, country_code, image_url,
        dob, username, gender, about_us,
        name, country_flag, profile } = state;

    const updateState = (data) => setState(state => ({ ...state, ...data }));

    useEffect(() => {

        updateState({
            email: emailid,
            about_us: aboutus,
            username: user_name,
            phone_number: phone,
            image_url: image,
            dob: dateOfBirth,
            name: Name,
            country_code: countryCode,
            country_flag: country_flag,
            // profile: profile,
        }
        )
        //   console.log(image_url, "profile image")
    }, [userData])

    const profileUpdate = async () => {

        let formData = new FormData();
        formData.append('username', username),
            formData.append('dob', dob),
            formData.append('phone_number', phone_number),
            formData.append('email', email),
            formData.append('name', name),
            formData.append('about_us', about_us),
            formData.append('gender', gender),
            formData.append('country_code', country_code)
        formData.append('profile', image_url);
        // {
        //     uri: image_url,
        //     name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
        //     type: '1',
        // });
        // console.log(formData, "formdata >>>")

        let header = { "Content-Type": "multipart/form-data" }
        await actions.editProfile(formData, header).then((res) => {
            console.log(res, "res++++++")
            saveUserData(res)
            navigation.navigate(navigationStrings.HOMESCREEN)
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
            //console.log(imageUri, "imageuri is >>>");
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
    //.............upload image at amazom s3 ........//

    const galleryClick = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {
            // console.log(image,"image+++++++")
            const imageUri = Platform.OS === 'ios' ? image?.sourceURL : image?.path;
            // console.log(imageUri, "image++++++++")
            // updateState({ image_url: imageUri })
            // console.log(image_url, " image is")
            const file = {
                uri: imageUri,
                name: `${(Math.random() + 1).toString(36).substring(7)}.jpg`,
                type: "image/jpeg"
            }
            // console.log(file,"file")
            const options = {
                keyPrefix: aws.keyPrefix,
                bucket: aws.bucket,
                region: aws.region,
                accessKey: aws.accessKey,
                secretKey: aws.secretKey,
                successActionStatus: 201
            }
            //  console.log(options, "options areee+++++")

            RNS3.put(file, options)
                .then(response => {
                    const image = response.body.postResponse.location;
                    // console.log(response, "imageee+++++")
                    updateState({ image_url: image })
                }
                ).catch((err) => {
                    console.log(err)
                })
        });
    }
    // console.log(image_url, "image+++++profile++++++++")
    return (
        <WrapperContainer>
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            <View style={{ flex: 1 }}>

                <Header
                    isBackIcon={true} />
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


                <View style={styles.biolabel}>
                    <Text>NAME</Text>
                </View>
                <TextInputComp
                    value={name}
                    inputview={styles.aboutusinput}
                    onChangeText={(name) => updateState({ name })}
                    placeHolder="enter your name" />

                <View style={styles.doblabel}>
                    <Text style={styles.dobtxt}>D.O.B</Text>
                </View>
                <TextInputComp
                    value={dob}
                    onChangeText={(dob) => updateState({ dob })}
                    inputview={styles.dobinput}
                    placeHolder={"DD/MM/YY"} />

                <View style={styles.phonelabel}>
                    <Text style={styles.phonetxt}>GENDER</Text>
                </View>

                <TextInputComp
                    inputStyle={{ fontSize: textScale(14) }}
                    value={gender}
                    onChangeText={(gender) => updateState({ gender })}
                    inputview={styles.phoneinput}
                    placeHolder={"gender"} />
                <View style={styles.emaillabel}>
                    <Text style={styles.emailtxt}>EMAIL ADDRESS</Text>
                </View>
                <TextInputComp
                    value={email}
                    onChangeText={(email) => updateState({ email })}
                    inputview={styles.emailinput}
                    placeHolder={"forexample@gmail.com"} />


                <View style={styles.biolabel}>
                    <Text style={styles.emailtxt}>ABOUT US</Text>
                </View>
                <TextInputComp
                    value={about_us}
                    onChangeText={(about_us) => updateState({ about_us })}
                    inputview={styles.aboutusinput}
                    placeHolder={"about yourself"} />

            </View>
            {/* </ScrollView> */}
            <Button
                onPress={profileUpdate}
                ButtonTxt={"Proceed"} />

        </WrapperContainer >
    )
};
export default EditProfile;
