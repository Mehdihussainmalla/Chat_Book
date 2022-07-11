import { StyleSheet, Text, View, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import { textScale } from '../styles/responsiveSize'
import fontFamily from '../styles/fontFamily'
import colors from '../styles/colors'
import { useNavigation } from '@react-navigation/native'

const Header = ({
    headerStyle,
    headertxt,
    isBackIcon,
    title,
}) => {
    const navigation=useNavigation();
    return (
        <View style={{ ...styles.headerStyle, ...headerStyle }}>
            {!!isBackIcon && (
                <TouchableOpacity
                onPress={()=>navigation.goBack()}
                 activeOpacity={0.8}
                 >
                <Image
                style={{tintColor:colors.main_Color}}
                source={imagePath.BACK_ARROW} />
                </TouchableOpacity>
            )  }
            <View style={{ paddingRight: 140 }} >
                <Text style={{ ...styles.headertxt, ...headertxt }}>{title}</Text>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerStyle:
    {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    headertxt:
        { fontSize: textScale(15), fontFamily: fontFamily.BarlowBold }
})