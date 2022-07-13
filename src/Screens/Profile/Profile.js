import { StyleSheet, Text, View, Image, ScrollView, Alert, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
import TextInputComp from '../../Components/TextInputs'
import Button from '../../Components/Button'
import navigationStrings from '../../navigation/navigationStrings'
import ImagePicker from 'react-native-image-crop-picker';
const Profile = ({ navigation }) => {

    const [state, setState] = useState({
        email: "",
        phone_number: "",
        country_code: "",
        image_url: "",
        dob: "",
        username: "",
        gender: "",
        about_us: "",
        name: ""
    })

    const { email, phone_number, country_code, image_url,
        dob, username, gender, about_us,
        name } = state;

    const updateState = (data) => setState(state => ({ ...state, ...data }));

    const profileUpdate = async () => {
        let apiData = {
            email: email,
            phone_number: phone_number,
            country_code: country_code,
            image_url: image_url,
            dob: dob,
            username: username,
            gender: gender,
            about_us: about_us,
            name: name
        }
        console.log(apiData)
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
            updateState({ image_url: imageUri });
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
            // console.log(imageUri, "image is")
            updateState({ image_url: imageUri })
            // console.log(accoryImage, "accessory image is")
        });
    }

    
    return (
        <WrapperContainer>
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header
                        isBackIcon={true} />
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 90,
                        marginTop: 1,
                        // backgroundColor: "red"
                    }}>
                        <Image 
                        style={{height:"20%",width:"40%"}}
                        source={{uri:image_url}} />
                    </View>
                    <TouchableOpacity
                        onPress={onSelectImage}
                        style={{
                            alignSelf: "center", borderWidth: 1.2,
                            borderRadius: 8,
                            borderColor: colors.red,
                            marginTop: 10,
                        }}>
                        <Text style={{
                            color: colors.red,
                            fontFamily: fontFamily.BarlowSemiBold,
                            padding: 5
                        }}>Edit Profile</Text>
                    </TouchableOpacity>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fontFamily.BarlowSemiBold }}>USERNAME</Text>
                    </View>
                    <TextInputComp
                        value={username}
                        onChangeText={(username) => updateState({ username })}
                        inputview={{ marginTop: 10 }}
                        placeHolder={"Full Name"} />

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fontFamily.BarlowSemiBold }}>D.O.B</Text>
                    </View>
                    <TextInputComp
                        value={dob}
                        onChangeText={(dob) => updateState({ dob })}
                        inputview={{ marginTop: 10 }}
                        placeHolder={"DD/MM/YY"} />

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fontFamily.BarlowSemiBold }}>PHONE NUMBER</Text>
                    </View>
                    <TextInputComp
                        value={phone_number}
                        onChangeText={(phone_number) => updateState({ phone_number })}
                        inputview={{ marginTop: 10 }}
                        placeHolder={"+916005927575"} />

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fontFamily.BarlowSemiBold }}>EMAIL ADDRESS</Text>
                    </View>
                    <TextInputComp
                        value={email}
                        onChangeText={(email) => updateState({ email })}
                        inputview={{ marginTop: 10 }}
                        placeHolder={"forexample@gmail.com"} />

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fontFamily.BarlowSemiBold }}>PROFILE</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image source={imagePath.Radio_icon} />
                            <Text style={{ paddingLeft: 10, fontFamily: fontFamily.BarlowBold }}>Public</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginLeft: 10 }}>
                            <Image source={imagePath.Radio_icon} />
                            <Text style={{ paddingLeft: 10, fontFamily: fontFamily.BarlowBold }}>Private</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 1 }}>
                        <Text>BIO</Text>
                    </View>
                    <TextInputComp
                        value={about_us}
                        onChangeText={(about_us) => updateState({ about_us })}
                        inputview={{ paddingTop: 1, padding: 10 }}
                        placeHolder={"about yourself"} />

                    <TextInputComp
                        value={name}
                        onChangeText={(name) => updateState({ name })}
                        placeHolder="eneter your name" />
                </ScrollView>
            </View>
            <Button
                onPress={profileUpdate}
                ButtonTxt={"Proceed"} />
        </WrapperContainer>
    )
}

export default Profile

const styles = StyleSheet.create({})