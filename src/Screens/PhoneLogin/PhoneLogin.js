import { View, Text, Image, TouchableOpacity,Platform } from 'react-native'
import React, { useState, useEffect } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Button from '../../Components/Button'
import TextInputComp from '../../Components/TextInputs'
import { styles } from './style'
import navigationStrings from '../../navigation/navigationStrings'
import imagePath from '../../constants/imagePath'
import actions from '../../Redux/actions'
import { LoginManager, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import { saveUserData } from '../../Redux/actions/auth'
import { moderateScale } from '../../styles/responsiveSize';
import CountryCodePicker from '../../Components/CountryCodePicker'

const PhoneLogin = ({ navigation }) => {
    const [countryCode, setCountryCode] = useState('91');
    const [countryFlag, setCountryFlag] = useState('IN');

    const [state, setState] = useState({

        phone_number: "",
        country_code: countryCode,
        country_flag: countryFlag,
    })

    const { phone_number, country_code, country_flag } = state;
    const updateState = (data) => setState(state => ({ ...state, ...data }));

    const PhoneLogin = async () => {
        let apiData = {
            phone_number: phone_number,
            country_code: country_code,
            country_flag: country_flag,
        }
        try {
            const res = await actions.Login(apiData).then((res) => {
                navigation.navigate(navigationStrings.PHONE_OTP, { data: res, login: "login" })
            })

        } catch (error) {
            console.log(error, "error")

        }
    }

    const fbLogin = (resCallBack) => {
        LoginManager.logOut();
        return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
            result => {
                console.log("FB_LOGIN_RESULT =====>", result);
                if (result.declinedPermissions && result.declinedPermissions.includes('email')) {
                    resCallBack({ message: "email is required" })
                }
                if (result.isCancelled) {
                    console.log("error")
                } else {
                    const infoResquest = new GraphRequest(
                        '/me?fields = email, name, picture',
                        null,
                        resCallBack
                    );
                    new GraphRequestManager().addRequest(infoResquest).start()
                }
            },
            function (error) {
                console.log("login failed with error", error)
            }
        )
    }

    const onFbLogin = async () => {
        try {
            await fbLogin(resInfoCallBack)

        } catch (error) {
            console.log("error", error)
        }
    }

    const resInfoCallBack = async (error, result) => {
        if (error) {
            console.log("Login Error", error)
        } else {
            const userData = result;
            console.log(userData)
            saveUserData(userData)

        }
    }

    return (
        <WrapperContainer>
            <View style={styles.bgcimg}>
                <Image source={imagePath.bgc} />
            </View>
            <View style={styles.loginheading}>
                <Text style={styles.logintxt}>Login</Text>
            </View>
            <View style={styles.emailphone}>


                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationStrings.EMAIL_LOGIN)}
                    activeOpacity={0.5}
                    style={styles.emailview}>
                    <Text style={styles.emailtxt}>Email</Text>
                </TouchableOpacity>

                <View style={styles.phoneview}>
                    <Text style={styles.phonetxt}>Phone</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginVertical: moderateScale(18) }}>
                <View style={{ flex: 0.38, }}>
                    <CountryCodePicker
                        countryCode={countryCode}
                        countryFlag={countryFlag}
                        setCountryCode={setCountryCode}
                        setCountryFlag={setCountryFlag}
                    />
                </View>
                <View style={{ flex: 0.8 }}>
                   
                    <TextInputComp
                        inputStyle={{padding: Platform.OS === 'ios' ? 16.5 : null }}
                        value={phone_number}
                        onChangeText={(phone_number) => updateState({ phone_number })}
                        inputview={styles.inputstyle}
                        placeHolder={"Enter Phone Number"} />
                </View>

            </View>
            <View style={styles.descstyle}>
                <Text style={styles.desctxt}>An OTP will be send to entered mobile number</Text>
            </View>
            <Button
                onPress={PhoneLogin}
                ButtonTxt={"Proceed"} />

            <View style={styles.socialstyle}>
                <Text style={styles.socialtxt}>Login With Social</Text>
            </View>
            <Button
                onPress={onFbLogin}
                source={imagePath.facebook_icon}
                ButtonTxt={"Sign in with Facebook"}
            />

            <Button
                source={imagePath.google_icon}
                ButtonTxt={"Sign in with Google"} />

            <View style={styles.accountstyle}>
                <Text style={styles.accountxt}>Don't have an account?</Text>

                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationStrings.PHONE_SIGNUP)}
                    activeOpacity={0.5}>
                    <Text style={styles.signuptxt}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </WrapperContainer>

    )
}


export default PhoneLogin