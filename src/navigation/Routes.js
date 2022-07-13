import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from "react-redux"
const Stack = createNativeStackNavigator();
const routes = () => {
    const userData = useSelector((state) => state?.auth?.userData);
    //console.log(userData , "userData>>>>>>>>>>>>>>>>>>>>>>>>>>")
    return (
        <>
            <NavigationContainer>
                {userData  ? MainStack(Stack) : AuthStack(Stack)}
            </NavigationContainer>
        </>
    )
}

export default routes