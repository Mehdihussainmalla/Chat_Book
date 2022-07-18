import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import imagePath from '../../constants/imagePath'
import fontFamily from '../../styles/fontFamily'
import { textScale } from '../../styles/responsiveSize'
import Button from '../../Components/Button'
import navigationStrings from '../../navigation/navigationStrings'
import actions from '../../Redux/actions'

const AccountCreated = ({ navigation, route }) => {
    const response = route?.params?.data;
    // console.log(response, "response");

    const changeState = () => {
        actions.changeState(response)
    }
    return (
        <WrapperContainer>
            <View style={{ flex: 1 }}>
                <View style={{ justifyContent: "center", alignItems: "center", flex: 0.5 }}>
                    <Image source={imagePath.bgc} />
                </View>
                <View style={{ alignSelf: "center" }}>
                    <Text style={{ fontFamily: fontFamily.BarlowBold, fontSize: textScale(25) }}>Your Account has been created Sucessfully!!</Text>
                </View>
            </View>
            <Button
                 onPress={changeState}
                ButtonTxt={"Done"} />

        </WrapperContainer>
    )
}

export default AccountCreated

const styles = StyleSheet.create({})