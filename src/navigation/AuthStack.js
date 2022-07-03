import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { EmailLogin, EmailOtp, ForgetPassword, PhoneLogin, PhoneOtp, SetPassword } from '../Screens'
import navigationStrings from './navigationStrings'

const AuthStack = (Stack) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    component={PhoneLogin}
                    name={navigationStrings.PHONE_LOGIN} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    component={EmailLogin}
                    name={navigationStrings.EMAIL_LOGIN} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    component={SetPassword}
                    name={navigationStrings.SET_PASSWORD} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    component={PhoneOtp}
                    name={navigationStrings.PHONE_OTP} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    component={EmailOtp}
                    name={navigationStrings.EMAIL_OTP} />
                       <Stack.Screen
                    options={{ headerShown: false }}
                    component={ForgetPassword}
                    name={navigationStrings.FORGET_PASSWORD} />
            </Stack.Navigator>
        </>
    )
}

export default AuthStack

const styles = StyleSheet.create({})