import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HomeScreen } from '../Screens'
import navigationStrings from './navigationStrings'

const MainStack = (Stack) => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    component={HomeScreen}
                    name={navigationStrings.HOMESCREEN} />
            </Stack.Navigator>
        </>
    )
}

export default MainStack

