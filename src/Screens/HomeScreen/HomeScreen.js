import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'
import WrapperContainer from '../../Components/WrapperContainer'
import navigationStrings from '../../navigation/navigationStrings'
import { logout } from "../../Redux/actions/auth";
import Header from '../../Components/Header';
import imagePath from '../../constants/imagePath';
import fontFamily from '../../styles/fontFamily';
import { textScale } from '../../styles/responsiveSize';
let data = [{ key: 1, name: "All" }, { key: 2, name: "Hot" }, { key: 3, name: "Facts" }, { key: 4, name: "Bogus" },]

const homeData = [{
  key: 1, profileName: "Mehdi",
  description: "malla", time: "10sec ago",
  postHeader: "post header",
  postDescription: "postDescription",
  image: imagePath.bgc
},
{
  key: 1, profileName: "hussain",
  description: "@hussain", time: "10sec ago",
  postHeader: "post header",
  postDescription: "postDescription",
  image: imagePath.bgc
}]




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
          marginRight: 15, backgroundColor: "red",
          paddingHorizontal: 14, marginTop: 10, borderRadius: 0.9,
          borderRadius: 5
        }}>
          <Text style={{ fontSize: textScale(16), alignSelf: "center", padding: 4 }} >{item.name}</Text>
        </TouchableOpacity>

      </>
    )
  }
  //.........home render............//

  const homeRender = ({ item }) => {
    // console.log(item, "item>>>>")
    return(
      <View>
        
      </View>
    )

  }


  return (
    <WrapperContainer>

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity>
            <Image source={imagePath.Radio_icon} />
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

      <FlatList
        data={homeData}
        renderItem={homeRender}
      />

      <View>
        <Text>fiosdf</Text>
      </View>

      {/* <TouchableOpacity

        onPress={signOut}
        style={{ marginTop: 100, backgroundColor: "red" }}>
        <Text>HomeScreen</Text>
      </TouchableOpacity> */}
    </WrapperContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})