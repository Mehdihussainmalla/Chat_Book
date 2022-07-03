import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../navigation/navigationStrings'
import imagePath from '../../navigation/imagePath'
import TextInputComp from '../../Components/TextInputs'
import Button from '../../Components/Button'
import { styles } from './style'
const EmailLogin = ({ navigation }) => {
  return (
    <WrapperContainer>
      <View style={styles.bgcimg}>
        <Image source={imagePath.bgc} />
      </View>
      <View style={styles.loginheading}>
        <Text style={styles.logintxt}>Login</Text>
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
        inputview={styles.inputstyle}
        placeHolder={"Enter Phobe Number"} />
      <View style={styles.descstyle}>
        <Text style={styles.desctxt}>An OTP will be send to entered email address</Text>
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

export default EmailLogin

