import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../navigation/navigationStrings'
import TextInputComp from '../../Components/TextInputs'
import Button from '../../Components/Button'
import { styles } from './style'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
import imagePath from '../../constants/imagePath'
import Header from '../../Components/Header'
import actions from '../../Redux/actions'

const EmailLogin = ({ navigation }) => {

  const [state, setState] = useState({

    email: "",
    password: "",
    device_token: ""
  })

  const { email, password, device_token } = state;

  const updateState = (data) => setState(state => ({ ...state, ...data }));

  const register = async () => {
    let apiData = {
      // country_code:"91",
      email: email,
      password: password,
      device_token: "abfhgfhgfgc"
    }

    // console.log(apiData, "api data is>>>")  
    try {
      const res = await actions.register(apiData)
      // console.log(res,"res+++++")
      const data = res;
      navigation.navigate(navigationStrings.PHONE_OTP, { data: data })
    } catch (error) {
      console.log(error, "error occurred")

    }
  }
  return (
    <WrapperContainer>

      <Header
        isBackIcon={true}
        title={"header"}
      />
      <View style={styles.bgcimg}>
        <Image source={imagePath.bgc} />
      </View>
      <View style={styles.loginheading}>
        <Text style={styles.logintxt}>Sign Up using email</Text>
      </View>
      <View style={styles.emailphone}>


        <View
          activeOpacity={0.5}
          style={styles.emailview}>
          <Text style={styles.emailtxt}>Email</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.PHONE_LOGIN)}
          style={styles.phoneview}>
          <Text style={styles.phonetxt}>Phone</Text>
        </TouchableOpacity>
      </View>
      <TextInputComp

        value={email}
        onChangeText={(email) => updateState({ email })}
        inputview={styles.inputstyle}
        placeHolder={"Enter your email"} />
      <TextInputComp

        value={password}
        onChangeText={(password) => updateState({ password })}
        inputview={styles.inputstyle}
        placeHolder={"enter your password"} />

      <TouchableOpacity
        onPress={() => navigation.navigate(navigationStrings.PHONE_SIGNUP)}
        activeOpacity={0.5}
        style={{ marginTop: 5 }}>
        <Text style={{
          color: colors.red,
          fontFamily: fontFamily.BarlowSemiBold
        }}>Signup using Phone NUmber</Text>
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
          onPress={() => navigation.navigate(navigationStrings.EMAIL_LOGIN)}
          activeOpacity={0.5}>
          <Text style={styles.signuptxt}>Login</Text>
        </TouchableOpacity>
      </View>
    </WrapperContainer>

  )
}

export default EmailLogin

