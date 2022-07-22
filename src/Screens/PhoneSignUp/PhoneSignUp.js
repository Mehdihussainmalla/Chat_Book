import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Button from '../../Components/Button'
import TextInputComp from '../../Components/TextInputs'
import { styles } from './style'
import navigationStrings from '../../navigation/navigationStrings'
import imagePath from '../../constants/imagePath'
import actions from '../../Redux/actions'
import CountryCodePicker from '../../Components/CountryCodePicker'
import { moderateScale } from '../../styles/responsiveSize'


const PhoneLogin = ({ navigation }) => {

    const [countryCode, setCountryCode] = useState('91');
    const [countryFlag, setCountryFlag] = useState('IN');
    const [state, setState] = useState({

        phone_number: "",
        device_token: "",
        country_code: countryCode,
        country_Flag: countryFlag
    })

    const { phone_number, device_token, country_code, country_Flag } = state;
    const updateState = (data) => setState(state => ({ ...state, ...data }));

    const register = async () => {
        let apiData = {
            country_code: country_code,
            phone_number: phone_number,
            country_Flag: country_Flag,
            device_token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NjliZjhiYy0wNjE0LTQ5YzktOGVlNy03ODViY2E4ODg4ZTIiLCJqdGkiOiIxMTRlNGNiZGMwYTE5NGM2MjA2OWVmZTk1NTJlYTkwYjU5ZDNhNTZiZWIwY2IwNzkxYmY4Yz"
        }
        console.log(apiData, "api data phone login is")
        try {
            const res = await actions.register(apiData);
             console.log(res, "res>>>")
            navigation.navigate(navigationStrings.PHONE_OTP, { data: res })
        } catch (error) {
            console.log(error, "error occurred")
        }
    }


    return (
        <WrapperContainer>
            <View style={styles.bgcimg}>
                <Image source={imagePath.bgc} />
            </View>
            <View style={styles.loginheading}>
                <Text style={styles.logintxt}>SignUp with Phone Number</Text>
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
            <View style={{flexDirection: 'row',marginTop:moderateScale(18)}}>
                <View style={{flex: 0.38,}}>
                    <CountryCodePicker
                        countryCode={countryCode}
                        countryFlag={countryFlag}
                        setCountryCode={setCountryCode}
                        setCountryFlag={setCountryFlag}
                    />
                    </View>
                    <View style={{ flex: 0.8}}>
                    <TextInputComp
                        value={phone_number}
                        onChangeText={(phone_number) => updateState({ phone_number })}
                        inputview={styles.inputstyle}
                        placeHolder={"Enter Phone Number"} />
                        </View>

                </View>
                <View style={styles.descstyle}>
                    <Text style={styles.desctxt}>An OTP will be send to entered mobile number</Text>

                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate(navigationStrings.EMAIL_SIGNUP)}
                    activeOpacity={0.8}>
                    <Text style={styles.emailsignup}>SignUp using Email</Text>
                </TouchableOpacity>

                <Button
                    onPress={register}
                    ButtonTxt={"Proceed"} />

                <View style={styles.socialstyle}>
                    <Text style={styles.socialtxt}>SignUp With Social</Text>
                </View>
                <Button
                    source={imagePath.facebook_icon}
                    ButtonTxt={"Sign in with Facebook"}
                />

                <Button
                    source={imagePath.google_icon}
                    ButtonTxt={"Sign in with Google"} />

                <View style={styles.accountstyle}>
                    <Text style={styles.accountxt}>Already have an account?</Text>

                    <TouchableOpacity
                        onPress={() => navigation.navigate(navigationStrings.PHONE_LOGIN)}
                        activeOpacity={0.5}>
                        <Text style={styles.signuptxt}>Login</Text>
                    </TouchableOpacity>
                </View>
        </WrapperContainer>

    )
}


export default PhoneLogin