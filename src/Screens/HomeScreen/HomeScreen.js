import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../navigation/navigationStrings'
import actions from '../../Redux/actions'

const HomeScreen = ({ navigation }) => {

  const logout = () => {
   actions.logout()
  }
  return (
    <WrapperContainer>
      <TouchableOpacity
        onPress={logout}
        style={{ marginTop: 100 }}>
        <Text>HomeScreen</Text>
      </TouchableOpacity>
    </WrapperContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})