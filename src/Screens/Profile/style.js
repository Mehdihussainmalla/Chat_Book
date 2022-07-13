import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fontFamily from "../../styles/fontFamily";
import { moderateScale, textScale } from "../../styles/responsiveSize";
export const styles = StyleSheet.create({

    imgstyle:
    {
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 90,
        marginTop: 1,
        // backgroundColor: "red"
    },
    img:
        { height: "20%", width: "40%" },
    editstyle:
    {
        alignSelf: "center", borderWidth: 1.2,
        borderRadius: 8,
        borderColor: colors.red,
        marginTop: 10,
    },
    profiletxt:
    {
        color: colors.red,
        fontFamily: fontFamily.BarlowSemiBold,
        padding: 5
    },
    usernamelabel:
        { marginTop: 10 },
    usertxt:
        { fontFamily: fontFamily.BarlowSemiBold },
    userinput:
        { marginTop: 10 },
    doblabel:
        { marginTop: 10 },
    dobinput:
        { marginTop: 10 },
    dobtxt:
        { fontFamily: fontFamily.BarlowSemiBold },

    phonelabel:
        { marginTop: 10 },

    phonetxt:
        { fontFamily: fontFamily.BarlowSemiBold },
    phoneinput:
        { marginTop: 10 },
    emaillabel:
        { marginTop: 10 },
    emailtxt:
        { fontFamily: fontFamily.BarlowSemiBold },
    emailinput:
        { marginTop: 10 },
    profilelabel:
        { marginTop: 10 },
    profiletxt2:
        { fontFamily: fontFamily.BarlowSemiBold },
    privatepublicview:
        { flexDirection: "row", justifyContent: "flex-start", marginTop: 10 },
    radiostyle:
        { flexDirection: "row", justifyContent: "flex-start" },
    radiotxt:
        { paddingLeft: 10, fontFamily: fontFamily.BarlowBold },

    publicstyle:
        { flexDirection: "row", justifyContent: "flex-start", marginLeft: 10 },
    publictxt:
        { paddingLeft: 10, fontFamily: fontFamily.BarlowBold },

    biolabel: {
        marginRight: 10
    },
    aboutusinput:
        { paddingTop: 1, padding: 10 }




})