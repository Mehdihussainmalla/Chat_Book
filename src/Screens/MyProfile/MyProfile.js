//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../../Components/Header';
import MyProfileUploads from '../../Components/MyProfileUploads';
import VideoList from '../../Components/VideoList';
import WrapperContainer from '../../Components/WrapperContainer';
import imagePath from '../../constants/imagePath';
import colors from '../../styles/colors';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, width } from '../../styles/responsiveSize';
import { Divider } from 'react-native-elements/dist/divider/Divider'
// create a component
const MyProfile = () => {

    const [posts, setPosts] = useState(true);
    return (
        <WrapperContainer>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ flex: 2, }}>
                    <Header
                        headerStyle={{ marginTop: 5, }}
                        headertxt={{ fontSize: 16 }}
                        isBackIcon={true}
                        title={"Mehdi Hussain"}
                    />
                </View>
                <View style={{ flex: 0.1 }}>
                    <Image
                        source={imagePath.Radio_icon} />
                </View>
            </View>
            <View style={{
                marginVertical: 25,
                height: moderateScale(100),
                width: moderateScale(100),
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: 'center',
                // backgroundColor: "red",
                // borderWidth: 0.9,
                // borderRadius: 10
            }}>
                <Image
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        alignSelf: 'center',
                        height: width/3.8,
                        width: width/3.8,
                        borderRadius: width/2,
                        borderWidth:2
                    }}
                    source={imagePath.post_image} />
            </View>
            <View style={{
                flexDirection: "row", justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text style={{ fontFamily: fontFamily.BarlowMedium, color: "black" }}>MuntazirMehdi</Text>
                <Text style={{ paddingLeft: 5 }}>(malla)</Text>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center', marginTop: 5
            }}>
                <Text>aboutme</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{
                    flex: 0.5,

                    alignItems: "center"
                }}>
                    <Text style={{ fontFamily: fontFamily.BarlowBold }}>369</Text>
                    <Text>Posts</Text>
                </View>
                <View style={{
                    flex: 0.5,
                    alignItems: "center"
                }}>
                    <Text style={{ fontFamily: fontFamily.BarlowBold }}>126k</Text>
                    <Text>Observers</Text>
                </View>
                <View style={{
                    flex: 0.5,
                    alignItems: "center"
                }}>
                    <Text style={{ fontFamily: fontFamily.BarlowBold }}>374</Text>
                    <Text>Observing</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'row', marginTop: moderateScale(20) }}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setPosts(true)}
                    style={{ flex: 1, borderBottomWidth: (posts ? 1.0 : 0), 
                    justifyContent: "center", alignItems: 'center', height:moderateScale(45) }}>
                    <Image
                        style={{ tintColor: colors.red }}
                        source={imagePath.all_icon} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setPosts(false)}
                    style={{ flex: 1, borderBottomWidth: (posts ? 0 : 1.0), 
                    justifyContent: "center", alignItems: 'center', height:moderateScale(45) }}>
                    <Image
                        style={{ tintColor: colors.red }}
                        source={imagePath.video_icon} />
                </TouchableOpacity>
            </View>

            {posts ? <MyProfileUploads /> :
                <VideoList />}


        </WrapperContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    divider: {
        marginTop: moderateScaleVertical(18),
        color: colors.black,
        width: moderateScaleVertical(460)

    },
});

//make this component available to the app
export default MyProfile;
