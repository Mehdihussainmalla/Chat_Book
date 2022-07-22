import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import imagePath from '../constants/imagePath'
import navigationStrings from '../navigation/navigationStrings'
import { useNavigation } from '@react-navigation/native'
import colors from '../styles/colors'
import fontFamily from '../styles/fontFamily'
import { moderateScale, width } from '../styles/responsiveSize'
import { useSelector } from 'react-redux'



const data = [{
    key: 1, profileName: "Mehdi Hussain",
    description: "(malla)", time: "10sec ago",
    crossImage: imagePath.delete_icon,
    image: imagePath.post_image2
}, {
    key: 2, profileName: "Mehdi Hussain",
    description: "(malla)", time: "10sec ago",
    crossImage: imagePath.delete_icon,
    image: imagePath.post_image
}, {
    key: 3, profileName: "Mehdi Hussain",
    description: "(malla)", time: "10sec ago",
    crossImage: imagePath.delete_icon,
    image: imagePath.post_image2
},]
const ProfileComp = () => {
    const userData = useSelector(state => state?.auth?.userData?.data);
    const profilePic = userData.profile;
    const email = userData.email;
    console.log(email, "userdata ffrom profile comp+++")
    const navigation = useNavigation();
    const profileRender = ({ item }) => {
        return (
            <View style={{
                marginTop: 20,
                borderWidth: 0.5, borderRadius: 5, padding: 5, marginHorizontal: 5
            }}>
                <View style={{ flex: 3, flexDirection: "row", justifyContent: "space-between" }}>
                    <Image
                        style={{
                            height: width / 4.2, width: width / 4.2,
                            marginTop: 4,
                            marginLeft: 10,
                            borderRadius: width / 2,
                        }}
                        source={{ uri: profilePic }} />
                    <Image
                        style={{ bottom: 5, tintColor: "black" }}
                        source={item.crossImage} />

                </View>

                <Text style={{ marginTop: 5, alignSelf: "center" }}>{email}</Text>
                <Text style={{ marginTop: 2, alignSelf: "center" }}>{item.description}</Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: colors.main_Color,
                        alignSelf: "center", marginTop: 4, borderWidth: 0.5, borderRadius: 5
                    }}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate(navigationStrings.MY_PROFILE)}
                >
                    <Text style={{
                        alignSelf: "center",
                        fontFamily: fontFamily.BarlowSemiBold,
                        padding: 4
                        , color: colors.white
                    }}>Observe</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View>
            <FlatList data={data}
                renderItem={profileRender}
                horizontal />
        </View>
    )
}

export default ProfileComp

const styles = StyleSheet.create({})