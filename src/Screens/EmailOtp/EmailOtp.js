import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const EmailOtp = () => {
  const userData = useSelector((state) => state)
  console.log(userData,"userDataaaa")
  return (
    <View>
      <Text>EmailOtp</Text>
    </View>
  )
}

export default EmailOtp

const styles = StyleSheet.create({})