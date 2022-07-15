import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import { moderateScale, textScale } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily'
import colors from '../../styles/colors'
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Button from '../../Components/Button'
import imagePath from '../../constants/imagePath'
import navigationStrings from '../../navigation/navigationStrings'
import actions from '../../Redux/actions'
const PhoneOtp = ({ navigation, route }) => {
  const data = route?.params?.data?.data;
  const otp = data?.otp;
  const id = data?.id;
  console.log(id, "dataa")
  const [code, setCode] = useState();

  const verifyOtp = async () => {
    let apiData = {
      otp: code,
      id: id
    }
    console.log(apiData, "apiData")
    try {
      const res = await actions.verifyOtp(apiData)
      console.log(res, "res>>>")
      navigation.navigate(navigationStrings.PROFILE, { data: res })

    } catch (error) {
      console.log(error, "error")
    }
  }


  const resendOtp = async () => {
    let apiData = {
      id: id,
    }
    const res = await actions.resendOtp(apiData)
    console.log(res)
    try {

    } catch (error) {
      console.log(error, "error")

    }

  }
  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>
        <View style={{ paddingVertical: 40 }}>
          <Image source={imagePath.bgc} />
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{
            fontSize: textScale(25),
            paddingLeft: moderateScale(12),
            padding: moderateScale(8),
            color: colors.main_Color,
            fontFamily: fontFamily.BarlowBold
          }}>Login</Text>
        </View>
        <View>
          <SmoothPinCodeInput
            value={code}
            onTextChange={code => setCode(code)}
            codeLength={6}
            cellStyle={{
              borderRadius: moderateScale(5),
              borderWidth: 2,
              borderColor: 'gray',
              // marginRight: 10,
            }}
            cellStyleFocused={{
              borderColor: 'lightseagreen',
              // backgroundColor: 'lightcyan',
              marginLeft: 35
            }}
            textStyle={{
              fontSize: 24,
              color: 'salmon'
            }}
          />
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontFamily: fontFamily.BarlowBold }}>We have sent you the one time password to your Phone Number</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 15 }}>
          <Text style={{ fontFamily: fontFamily.BarlowSemiBold, }}>Didn't received OTP code?</Text>
          <TouchableOpacity
            onPress={resendOtp}
            activeOpacity={0.5}>
            <Text style={{
              fontFamily: fontFamily.BarlowSemiBold,
              color: colors.red
            }}>Resend code</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button
        onPress={verifyOtp}
        ButtonTxt={"Proceed"} />
    </WrapperContainer>
  )
}
export default PhoneOtp

const styles = StyleSheet.create({})