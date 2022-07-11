import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import Header from '../../Components/Header'
import imagePath from '../../constants/imagePath'
import colors from '../../styles/colors'
import fontFamily from '../../styles/fontFamily'
import TextInputComp from '../../Components/TextInputs'
import Button from '../../Components/Button'
import navigationStrings from '../../navigation/navigationStrings'

const Profile = ({ navigation }) => {
    return (
        <WrapperContainer>
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Header
                        isBackIcon={true} />
                    <View style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginHorizontal: 90,
                        marginTop: 10,
                        // backgroundColor: "red"
                    }}>
                        <Image source={imagePath.bgc} />
                    </View>
                    <View style={{
                        alignSelf: "center", borderWidth: 1.2,
                        borderRadius: 8,
                        borderColor: colors.red,
                        marginTop: 10,
                    }}>
                        <Text style={{ color: colors.red, fontFamily: fontFamily.BarlowSemiBold, padding: 5 }}>Edit Profile</Text>
                    </View>

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fontFamily.BarlowSemiBold }}>USERNAME</Text>
                    </View>
                    <TextInputComp
                        inputview={{ marginTop: 10 }}
                        placeHolder={"Full Name"} />

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fontFamily.BarlowSemiBold }}>D.O.B</Text>
                    </View>
                    <TextInputComp
                        inputview={{ marginTop: 10 }}
                        placeHolder={"DD/MM/YY"} />

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fontFamily.BarlowSemiBold }}>PHONE NUMBER</Text>
                    </View>
                    <TextInputComp
                        inputview={{ marginTop: 10 }}
                        placeHolder={"+916005927575"} />

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fontFamily.BarlowSemiBold }}>EMAIL ADDRESS</Text>
                    </View>
                    <TextInputComp
                        inputview={{ marginTop: 10 }}
                        placeHolder={"forexample@gmail.com"} />

                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontFamily: fontFamily.BarlowSemiBold }}>PROFILE</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "flex-start", marginTop: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                            <Image source={imagePath.Radio_icon} />
                            <Text style={{ paddingLeft: 10, fontFamily: fontFamily.BarlowBold }}>Public</Text>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "flex-start", marginLeft: 10 }}>
                            <Image source={imagePath.Radio_icon} />
                            <Text style={{ paddingLeft: 10, fontFamily: fontFamily.BarlowBold }}>Private</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text>BIO</Text>
                    </View>
                    <TextInputComp
                        inputview={{ paddingTop: 10, padding: 10 }}
                        placeHolder={"about yourself"} />
                </ScrollView>
            </View>
            <Button
                onPress={() => navigation.navigate(navigationStrings.ACCOUNT_CREATED)}
                ButtonTxt={"Proceed"} />
        </WrapperContainer>
    )
}

export default Profile

const styles = StyleSheet.create({})