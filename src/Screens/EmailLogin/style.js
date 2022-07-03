import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScale, textScale } from "../../styles/responsiveSize";

export const styles = StyleSheet.create({

    bgcimg:
    {
        paddingVertical: 40
    },
    loginheading:
    {
        marginVertical: moderateScale(10)
    },
    logintxt:
    {
        fontSize: textScale(25),
        paddingLeft: moderateScale(12),
        padding: moderateScale(8),
        color: colors.main_Color,
        fontFamily: fontFamily.BarlowBold
    },
    emailphone:
    {
        flexDirection: "row",
        borderWidth: 0.9
    },
    emailview:
    {
        flex: 0.5,
        paddingVertical: 10,
        backgroundColor: colors.main_Color
    },
    emailtxt:
    {
        alignSelf: "center",
        fontFamily: fontFamily.BarlowBold,
        color:colors.white
    },
    phoneview:
    {
        flex: 0.5,
        paddingVertical: moderateScale(10),
     
    },
    phonetxt:
    {
        alignSelf: "center",
        fontFamily: fontFamily.BarlowBold,
        // color: colors.white
    },
    inputstyle:
    {
        marginVertical: moderateScale(30)
    },
    descstyle:
    {
        marginVertical: moderateScale(10)
    },
    desctxt:
    {
        fontSize: textScale(12),
        fontFamily: fontFamily.BarlowSemiBold
    },
    socialstyle:
    {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: moderateScale(10),


    },
    socialtxt:
    {
        fontFamily: fontFamily.BarlowBold,
    },
    accountstyle:
    {
        flexDirection: "row",
        justifyContent: "center"
    },
    accountxt:
    {
        fontFamily: fontFamily.BarlowBold

    },
    signuptxt:
    {
        fontSize: textScale(14),
        color: colors.red,
        fontFamily: fontFamily.BarlowSemiBold,
        paddingLeft: moderateScale(5)
    }






})