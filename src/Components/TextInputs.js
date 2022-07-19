import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { moderateScale } from '../styles/responsiveSize'
import fontFamily from '../styles/fontFamily'

const TextInputComp = ({
    placeHolder,
    value,
    inputStyle,
    inputview,
    onChangeText
}) => {
    return (
        <SafeAreaView style={{ ...styles.inputview, ...inputview }}>
            <TextInput style={{ ...styles.inputStyle, ...inputStyle }}
                placeholder={placeHolder}
                onChangeText={onChangeText}
                value={value}

            />
        </SafeAreaView>
    )
}

export default TextInputComp

const styles = StyleSheet.create({

    inputview:
    {
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(0.9),
        // marginHorizontal: moderateScale(10)
    },
    inputStyle: {
        padding: moderateScale(10),
        color: colors.black,
        fontFamily: fontFamily.BarlowMedium
    }
})