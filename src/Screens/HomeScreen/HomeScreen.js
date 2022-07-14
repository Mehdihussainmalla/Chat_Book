import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../navigation/navigationStrings'
import { logout } from "../../Redux/actions/auth";

const HomeScreen = ({ navigation }) => {

  const signOut = () => {
    try {
      logout()
    } catch (error) {
      console.log(error, "error ")

    }

  }
  return (
    <WrapperContainer>
      <TouchableOpacity
        onPress={signOut}
        style={{ marginTop: 100 }}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </WrapperContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})