import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from './navigationStrings';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import { AddPost } from '../Screens';
import { moderateScale, moderateScaleVertical } from '../styles/responsiveSize';
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
                    height: moderateScaleVertical(60),
                    paddingBottom: moderateScale(5),
                    borderTopRadius: moderateScale(15),
                    borderTopStartRadius: moderateScale(3),
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
                                source={imagePath.profile_icon} />
                        )
                    }

                }}
                name={navigationStrings.ADD_POST}
                component={AddPost}
            />
        </Tab.Navigator>
    )
}

export default TabStack

const styles = StyleSheet.create({})