import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();
const routes = () => {
    return (
        <>
            <NavigationContainer>
                {false ? MainStack(Stack) : AuthStack(Stack)}
            </NavigationContainer>
        </>
    )
}

export default routes