import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import fontFamily from '../../styles/fontFamily'
import { textScale } from '../../styles/responsiveSize'
import TextInputComp from '../../Components/TextInputs'
import Button from '../../Components/Button'
import navigationStrings from '../../navigation/navigationStrings'
import imagePath from '../../constants/imagePath'
const ForgetPassword = ({navigation}) => {
  return (
    <WrapperContainer>
      <View style={{flex:1}}>
      <Image
        style={{ marginVertical: 20 }}
        source={imagePath.bgc}
      />
      <View style={{ marginTop: 10 }}>
        <Text style={{ fontFamily: fontFamily.BarlowBold, fontSize: textScale(20) }}>ForgetPassword</Text>
      </View>

      <TextInputComp 
      inputview={{marginTop:20}}
      placeHolder={"enter registered email"}/>

      <View style={{marginTop:30}}>
        <Text style={{ fontFamily: fontFamily.BarlowMedium, fontSize: textScale(16)}}>A link to reset your password will be sent to the entered email for verification</Text>
      </View>
      </View>
      <Button 
      onPress={()=>navigation.navigate(navigationStrings.SET_PASSWORD)}
      ButtonTxt={"Submit"}/>
    </WrapperContainer>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({})