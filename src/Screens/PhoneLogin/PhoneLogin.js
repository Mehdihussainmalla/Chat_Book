import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Button from '../../Components/Button'
import TextInputComp from '../../Components/TextInputs'
import { styles } from './style'
import navigationStrings from '../../navigation/navigationStrings'
import imagePath from '../../constants/imagePath'
import actions from '../../Redux/actions'

const PhoneLogin = ({ navigation }) => {

    const [state, setState] = useState({

        phone_number: "",
        device_token: ""
    })

    const { phone_number, device_token } = state;
    const updateState = (data) => setState(state => ({ ...state, ...data }));

    const register = async () => {
        let apiData = {
            phone_number: phone_number,
            device_token: "abcgde"
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
                <Text style={styles.logintxt}>Login</Text>
            </View>
            <View style={styles.emailphone}>


                <TouchableOpacity
                    // onPress={Login}
                    activeOpacity={0.5}
                    style={styles.emailview}>
                    <Text style={styles.emailtxt}>Email</Text>
                </TouchableOpacity>

                <View style={styles.phoneview}>
                    <Text style={styles.phonetxt}>Phone</Text>
                </View>
            </View>
            <TextInputComp
                value={phone_number}
                onChangeText={(phone_number) => updateState({ phone_number })}
                inputview={styles.inputstyle}
                placeHolder={"Enter Phone Number"} />
            <View style={styles.descstyle}>
                <Text style={styles.desctxt}>An OTP will be send to entered mobile number</Text>
            </View>
            <Button
                onPress={register}
                ButtonTxt={"Proceed"} />

            <View style={styles.socialstyle}>
                <Text style={styles.socialtxt}>Login With Social</Text>
            </View>
            <Button
                source={imagePath.facebook_icon}
                ButtonTxt={"Sign in with Facebook"}
            />

            <Button
                source={imagePath.google_icon}
                ButtonTxt={"Sign in with Google"} />

            <View style={styles.accountstyle}>
                <Text style={styles.accountxt}>Don't have an account?</Text>

                <TouchableOpacity activeOpacity={0.5}>
                    <Text style={styles.signuptxt}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </WrapperContainer>

    )
}


export default PhoneLogin