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
  postDescription: `To simply describe a beautiful natural scenery you can use adjective words like Pristine, Stunning, Exquisite, Indescribable etc.`,
  image: imagePath.post_image
},
{
  key: 2, profileName: "hussain",
  description: "@hussain", time: "10sec ago",
  postHeader: "post header",
  postDescription: `To simply describe a beautiful natural scenery you can use adjective words like Pristine, Stunning, Exquisite, Indescribable etc.`,
  image: imagePath.post_image2
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

  const homeRender = ({ item }) => {
    // console.log(item, "item>>>>")
    return (
      <View>
        <Image
          style={{}}
          source={item?.image} />
      </View>

      // <View style={{ flexDirection:"column", justifyContent: "space-between", marginTop: 20 }}>
      //   <View>
      //     <View style={{ flexDirection: "row" }}>
      //       <Image style={{ marginTop: 10 }}
      //         source={imagePath.Radio_icon} />
      //       <View style={{ flexDirection: "column", marginLeft: 10 }}>
      //         <Text style={{ marginTop: 20, }}>{item.profileName}<Text>
      //           {item?.description}</Text></Text>
      //         <Text style={{}}>{item?.time}</Text>
      //         <Text style={{ paddingTop: 30, fontWeight: "700" }}>{item?.postHeader}</Text>
      //         <View style={{ marginHorizontal: 10, flexDirection: "column", backgroundColor: "red" }}>
      //           <Text style={{ padding: 5, fontWeight: "500" }}>{item?.postDescription}</Text>

      //           <Image
      //             style={{}}
      //             source={item?.image} />
      //         </View>
      //       </View>

      //     </View>
      //     <View style={{ marginLeft: 50 }}>
      //       <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 10 }}>
      //         <View style={{ flexDirection: "row" }}>
      //           <Image source={imagePath.thumb_up} />
      //           <Text style={{ paddingLeft: 10 }}>count</Text>
      //         </View>
      //         <View style={{ flexDirection: "row" }}>
      //           <Image
      //             style={{ marginLeft: 10 }}
      //             source={imagePath.thumb_up} />
      //           <Text style={{ paddingLeft: 15 }}>count</Text>
      //         </View>
      //         <View style={{ flexDirection: "row" }}>
      //           <Image
      //             style={{ marginLeft: 10 }}
      //             source={imagePath.comment} />
      //           <Text style={{ paddingLeft: 10 }}>count</Text>
      //         </View>
      //         <Image
      //           style={{ marginLeft: 10 }}
      //           source={imagePath.share_icon} />
      //       </View>
      //       </View>
      //   </View>
      //   <Image style={{ tintColor: "green", height: "10%" }} source={imagePath.more_vert} />
      //  </View>

    )
  }
  return (
    <WrapperContainer>
      <View style={{ flex: 1 }}>
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
        <View>
          <FlatList
            data={homeData}
            renderItem={homeRender}
          />
        </View>

        <TouchableOpacity

          onPress={signOut}
          style={{ marginTop: 100 }}
        >
          <Text>HomeScreen</Text>
        </TouchableOpacity>
      </View>
    </WrapperContainer>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})