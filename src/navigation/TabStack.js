import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import navigationStrings from './navigationStrings';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import { AddPost, Alerts, Notifications, Profile, SearchScreen } from '../Screens';
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
                    backgroundColor: colors.bgColor,
                    height: moderateScaleVertical(60),
                    paddingBottom: moderateScale(8),
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
                            <View style={{ marginBottom: 60 }}>
                                <Image
                                    style={{ tintColor: focused ? colors.red : colors.black }}
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
                                source={imagePath.profile_icon} />

                        )
                    }

                }}
                name={navigationStrings.PROFILE}
                component={Profile}
            />
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

        </Tab.Navigator>
    )
}

export default TabStack

const styles = StyleSheet.create({})