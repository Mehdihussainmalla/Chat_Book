import { StyleSheet, Text, View ,Image} from 'react-native'
import React, { useState } from 'react';
import { moderateScale, textScale } from '../../styles/responsiveSize'
import fontFamily from '../../styles/fontFamily';
import colors from '../../styles/colors';
import imagePath from '../../constants/imagePath';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import Button from '../../Components/Button';
import WrapperContainer from '../../Components/WrapperContainer';
import navigationStrings from '../../navigation/navigationStrings';

const EmailOtp = ({ navigation, route }) => {
  const data = route?.params;
  console.log(data?.data?.data?.otp, "data aaa")
  const [code, setCode] = useState();
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
          <Text style={{ fontFamily: fontFamily.BarlowSemiBold, color: colors.red }}>Resend code</Text>
        </View>
      </View>

      <Button
        onPress={() => navigation.navigate(navigationStrings.PROFILE)}
        ButtonTxt={"Proceed"} />
    </WrapperContainer>
  )
}

export default EmailOtp

const styles = StyleSheet.create({})