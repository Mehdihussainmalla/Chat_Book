import { View, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { moderateScale } from '../styles/responsiveSize';
import colors from '../styles/colors';

const WrapperContainer = ({
    children,
    bgColor = colors.bgColor,
    statusBarColor = colors.white,
    barStyle = "dark-content"
}) => {
   
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: statusBarColor,

        }}>
            <StatusBar backgroundColor={statusBarColor} barStyle={barStyle} />
            <View style={{
                backgroundColor: bgColor,
                flex: 1,
                paddingVertical: moderateScale(10),
                paddingHorizontal: moderateScale(18)
            }}>{children}</View>
        </SafeAreaView>
    )
}

export default React.memo(WrapperContainer);