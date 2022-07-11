import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale, textScale } from '../styles/responsiveSize'
import fontFamily from '../styles/fontFamily'

const Button = ({
    ButtonTxt,
    btnStyle = {},
    txtStyle = {},
    source,
    onPress=()=>{}
}) => {
    return (
        <TouchableOpacity onPress={onPress}
            activeOpacity={0.8}
            style={{ ...styles.btnStyle, ...btnStyle }}>
            {source ?
                <Image style={{}} source={source} /> : null}
            <Text style={{ ...styles.txtStyle, ...txtStyle }}>{ButtonTxt}</Text>

        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: colors.main_Color,
        marginVertical: moderateScale(15),
        // marginHorizontal:moderateScale(10),
        paddingVertical: moderateScale(9),
        borderRadius: moderateScale(7),
        flexDirection: "row",
        justifyContent: "center"


    },
    txtStyle: {
        color: colors.white,
        fontSize: textScale(14),
        alignSelf: "center",
        fontFamily: fontFamily.BarlowBold,
        paddingLeft: moderateScale(12)


    }
})

export default Button