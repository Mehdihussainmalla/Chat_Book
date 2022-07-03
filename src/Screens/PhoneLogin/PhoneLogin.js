import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Button from '../../Components/Button'
import TextInputComp from '../../Components/TextInputs'
import imagePath from '../../navigation/imagePath'
import { styles } from './style'

const PhoneLogin = () => {
    return (
        <WrapperContainer>
            <View style={styles.bgcimg}>
                <Image source={imagePath.bgc} />
            </View>
            <View style={styles.loginheading}>
                <Text style={styles.logintxt}>Login</Text>
            </View>
            <View style={styles.emailphone}>
                <View style={styles.emailview}>
                    <Text style={styles.emailtxt}>Email</Text>
                </View>
                <View style={styles.phoneview}>
                    <Text style={styles.phonetxt}>Phone</Text>
                </View>
            </View>
            <TextInputComp
                inputview={styles.inputstyle}
                placeHolder={"Enter Phobe Number"} />
            <View style={styles.descstyle}>
                <Text style={styles.desctxt}>An OTP will be send to entered mobile number</Text>
            </View>
            <Button
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