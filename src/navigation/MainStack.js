import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AccountCreated, EditProfile, HomeScreen, MyProfile, Profile } from '../Screens'
import navigationStrings from './navigationStrings'
import TabStack from './TabStack'

const MainStack = (Stack) => {
    return (
        <>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>

                <Stack.Screen component={TabStack}
                    name={navigationStrings.TABSTACK} />
              

            </Stack.Navigator>
        </>
    )
}

export default MainStack

