import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AccountCreated, EmailLogin, EmailOtp, EmailSignUp, ForgetPassword, PhoneLogin, PhoneOtp, PhoneSignUp, Profile, SetPassword } from '../Screens'
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
                    component={EmailSignUp}
                    name={navigationStrings.EMAIL_SIGNUP} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={PhoneSignUp}
                    name={navigationStrings.PHONE_SIGNUP} />
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

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={Profile}
                    name={navigationStrings.PROFILE} />
                <Stack.Screen
                    options={{ headerShown: false }}
                    component={AccountCreated}
                    name={navigationStrings.ACCOUNT_CREATED} />
                    
            </Stack.Navigator>
        </>
    )
}

export default AuthStack

const styles = StyleSheet.create({})