import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScale, textScale } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({

    imgstyle:
    {
        // marginVertical:15,
        backgroundColor: 'red'
    },
    img:
    {
        height: "15%",
        justifyContent: 'center',
        alignSelf: "center",
        width: "40%"
    },
    editstyle:
    {
        alignSelf: "center", borderWidth: 1.2,
        borderRadius: 8,
        borderColor: colors.red,
        marginTop: 5,
    },
    profiletxt:
    {
        color: colors.red,
        fontFamily: fontFamily.BarlowSemiBold,
        padding: 5
    },
    usernamelabel:
        { marginTop: 5 },
    usertxt:
        { fontFamily: fontFamily.BarlowSemiBold },
    userinput:
        { marginTop: 5 },
    doblabel:
        { marginTop: 5 },
    dobinput:
        { marginTop: 5 },
    dobtxt:
        { fontFamily: fontFamily.BarlowSemiBold },

    phonelabel:
        { marginTop: 5 },

    phonetxt:
        { fontFamily: fontFamily.BarlowSemiBold },
    phoneinput:
        { marginTop: 5},
    emaillabel:
        { marginTop: 5 },
        biolabel:{
            marginTop:5
        },
    emailtxt:
        { fontFamily: fontFamily.BarlowSemiBold },
    emailinput:
        { marginTop: 8 },
    profilelabel:
        { marginTop: 5 },
    profiletxt2:
        { fontFamily: fontFamily.BarlowSemiBold },

    aboutusinput:

    {
        marginTop: 7

    },
    codeview: {
        flexDirection: 'row',
        justifyContent:"space-between",
        marginVertical:moderateScale(10),
    },  

    
})