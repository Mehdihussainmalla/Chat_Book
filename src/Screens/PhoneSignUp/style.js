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
        fontSize: textScale(15),
        paddingLeft: moderateScale(12),
        padding: moderateScale(8),
        color: colors.main_Color,
        fontFamily: fontFamily.BarlowBold
    },
    emailphone:
    {
        flexDirection: "row",
        borderWidth: 0.9,
        // borderRadius:10,
    },
    emailview:
    {
        flex: 0.5,
        paddingVertical: 10
    },
    emailtxt:
    {
        alignSelf: "center",
        fontFamily: fontFamily.BarlowBold
    },
    phoneview:
    {
        flex: 0.5,
        paddingVertical: moderateScale(10),
        backgroundColor: colors.main_Color
    },
    phonetxt:
    {
        alignSelf: "center",
        fontFamily: fontFamily.BarlowBold,
        color: colors.white
    },
    inputstyle:
    {
    //    marginTop: moderateScale(20)
    },
    descstyle:
    {
        marginVertical: moderateScale(10)
    },
    desctxt:
    {
        fontSize: textScale(12),
        fontFamily: fontFamily.BarlowSemiBold,
       
    },
    emailsignup:
    {   marginTop:10,
        fontSize: textScale(12),
        fontFamily: fontFamily.BarlowSemiBold,
        color:colors.red
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