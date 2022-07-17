import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../navigation/navigationStrings'
import { logout } from "../../Redux/actions/auth";
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../styles/fontFamily';
import { moderateScale, moderateScaleVertical, textScale, width } from '../../styles/responsiveSize';
import Card from '../../Components/Card';
import colors from '../../styles/colors';
import ProfileComp from '../../Components/ProfileComp';


let data = [{ key: 1, name: "All" },
{ key: 2, name: "Hot" },
{ key: 3, name: "Facts" }, { key: 4, name: "Bogus" },]

const HomeScreen = ({ navigation }) => {

  const signOut = () => {
    try {
      logout()
    } catch (error) {
      console.log(error, "error ")

    }
  }

  const renderItem = ({ item }) => {
    // console.log(item,"item>>>")
    return (
      <>
        <TouchableOpacity style={{
          marginRight: 15,
          backgroundColor: "red",
          paddingHorizontal: 14,
          marginTop: 10,
          borderRadius: 0.9,
          borderRadius: 5
        }}>
          <Text style={{
            fontSize: textScale(16),
            alignSelf: "center",
            padding: 4
          }} >{item.name}</Text>
        </TouchableOpacity>

      </>
    )
  }
  //.........home render............//

  return (
    <WrapperContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <TouchableOpacity>
              <Image
                style={{ marginTop: 5 }}
                source={imagePath.HamBurger} />
            </TouchableOpacity>
            <Text style={{ fontSize: 16, paddingLeft: 100, marginTop: 8, fontFamily: fontFamily.BarlowSemiBold }}>Home</Text>
          </View>
          <TouchableOpacity style={{ marginTop: 10 }} >
            <Image source={imagePath.Radio_icon} />
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={renderItem}
          />
        </View>

        <Card />

        <View style={{ marginRight: 10, marginVertical: 10, flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ marginRight: 50, fontSize: textScale(15), alignSelf: "center", fontWeight: "600" }}>Suggested for you</Text>
          <Text style={{ fontSize: textScale(15), color: colors.red }}>SeeAll</Text>
        </View>
        
        <ProfileComp />

        <TouchableOpacity
          // onPress={signOut}
          style={{ marginTop: 5 }}
        >
          <Text>HomeScreen</Text>
        </TouchableOpacity>
      </ScrollView>
    </WrapperContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})