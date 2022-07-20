import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from './navigationStrings';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import { AddPost, Alerts, EditProfile, MyProfile, Notifications, Profile, SearchScreen } from '../Screens';
import { moderateScale, moderateScaleVertical, width } from '../styles/responsiveSize';
import colors from '../styles/colors';
import imagePath from '../constants/imagePath';
const Tab = createBottomTabNavigator();
const TabStack = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: colors.bgColor,
                    height: moderateScaleVertical(60),
                    paddingBottom: moderateScale(14),
                    borderTopRadius: moderateScale(15),
                    borderTopStartRadius: moderateScale(3),
                    marginHorizontal: moderateScale(10),
                }
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <Image style={{ tintColor: focused ? colors.red : colors.black }}
                                source={imagePath.home_icon} />
                        )
                    }

                }}
                name={navigationStrings.HOMESCREEN}
                component={HomeScreen}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (

                            <Image style={{ tintColor: focused ? colors.red : colors.black }}
                                source={imagePath.search_icon} />
                        )
                    }

                }}
                name={navigationStrings.SEARCH_SCREEN}
                component={SearchScreen}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ marginBottom: 95 }}>
                                <Image
                                    style={{ 
                                        tintColor: focused ? colors.red : "grey",
                                        height: width / moderateScale(7),
                                        width: width / moderateScale(7),
                                        
                                    }}
                                    source={imagePath.add_icon} />
                            </View>
                        )
                    }
                }}
                name=" "
                component={AddPost} />


            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (

                            <Image style={{ tintColor: focused ? colors.red : colors.black }}
                                source={imagePath.notification_icon} />
                        )
                    }

                }}

                name={navigationStrings.ALERTS_SCREEN}
                component={Alerts}
            />

            <Tab.Screen
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (

                            <Image style={{
                                // tintColor: focused ? colors.red : colors.black ,
                                height: width / moderateScale(11),
                                width: width / moderateScale(11),
                                marginBottom: moderateScale(10),
                                borderRadius: width / moderateScale(2),
                            }}
                                source={imagePath.post_image2} />

                        )
                    }

                }}
                name={navigationStrings.MY_PROFILE}
                component={MyProfile}
            />

        </Tab.Navigator>
    )
}

export default TabStack

const styles = StyleSheet.create({})