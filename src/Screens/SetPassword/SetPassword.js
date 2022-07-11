import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import fontFamily from '../../styles/fontFamily'
import { textScale } from '../../styles/responsiveSize'
import TextInputComp from '../../Components/TextInputs'
import Button from '../../Components/Button'
import imagePath from '../../constants/imagePath'

const SetPassword = () => {
  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>
        <Image
          style={{ marginVertical: 50 }}
          source={imagePath.bgc} />
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontFamily: fontFamily.BarlowBold, fontSize: textScale(20) }}>SetPassword</Text>
          <TextInputComp
            inputview={{ marginTop: 10 }}
            placeHolder={"Create new Password"} />
          <TextInputComp
            inputview={{ marginTop: 10 }}
            placeHolder={"Repeat Password"} />
        </View>
      </View>

      <Button
        ButtonTxt={"Submit"} />
    </WrapperContainer>
  )
}

export default SetPassword

const styles = StyleSheet.create({})