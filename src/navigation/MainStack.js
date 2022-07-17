import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AccountCreated, HomeScreen, Profile } from '../Screens'
import navigationStrings from './navigationStrings'
import TabStack from './TabStack'

const MainStack = (Stack) => {
    return (
        <>
            <Stack.Navigator screenOptions={{headerShown:false,
            }}>

                <Stack.Screen component={TabStack}
                name={navigationStrings.TABSTACK}/>
                {/* <Stack.Screen
                    // options={{ headerShown: false }}
                    component={HomeScreen}
                    name={navigationStrings.HOMESCREEN} /> */}
                    
            </Stack.Navigator>
        </>
    )
}

export default MainStack

