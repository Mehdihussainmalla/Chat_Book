import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Button from '../../Components/Button'
import fontFamily from '../../styles/fontFamily'
import TextInputComp from '../../Components/TextInputs'
import { moderateScale, textScale } from '../../styles/responsiveSize'
import colors from '../../styles/colors'
import imagePath from '../../navigation/imagePath'

const PhoneLogin = () => {
    return (
        <WrapperContainer>
            <View style={{ marginTop: 30 }}>
                <View style={{ paddingVertical: 40 }}>
                   <Image source={imagePath.bgc}/>
                </View>
            </View>
            <View style={{ marginVertical: moderateScale(10) }}>
                <Text style={{
                    fontSize: textScale(25),
                    paddingLeft: moderateScale(12),
                    padding: moderateScale(8),
                    color: colors.main_Color,
                    fontFamily: fontFamily.BarlowBold
                }}>Login</Text>
            </View>
            <View style={{ flexDirection: "row", borderWidth: 0.9 }}>
                <View style={{ flex: 0.5, paddingVertical: 10 }}>
                    <Text style={{ alignSelf: "center", fontFamily: fontFamily.BarlowBold }}>Email</Text>
                </View>
                <View style={{ flex: 0.5, paddingVertical: 10, backgroundColor: colors.main_Color }}>
                    <Text style={{ alignSelf: "center", fontFamily: fontFamily.BarlowBold, color: colors.white }}>Phone</Text>
                </View>
            </View>
            <TextInputComp
                inputview={{ marginVertical: moderateScale(30) }}
                placeHolder={"Enter Phobe Number"} />
            <View style={{ marginVertical: moderateScale(10) }}>
                <Text style={{
                    fontSize: textScale(12),
                    fontFamily: fontFamily.BarlowSemiBold
                }}>An OTP will be send to entered mobile number</Text>
            </View>
            <Button
                ButtonTxt={"Proceed"} />

            <View style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: moderateScale(10),


            }}>
                <Text style={{ fontFamily: fontFamily.BarlowBold, }}>Login With Social</Text>
            </View>
            <Button
                source={imagePath.facebook_icon}
                ButtonTxt={"Sign in with Facebook"}
            />

            <Button
                source={imagePath.google_icon}
                ButtonTxt={"Sign in with Google"} />

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ fontFamily: fontFamily.BarlowBold }}>Don't have an account?</Text>
                <Text style={{ fontSize: textScale(14), color: colors.red, fontFamily: fontFamily.BarlowMedium }}>Sign up</Text>
            </View>
        </WrapperContainer>

    )
}
const styles = StyleSheet.create({

})

export default PhoneLogin