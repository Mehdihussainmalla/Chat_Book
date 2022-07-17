import React from "react";
import { StyleSheet, FlatList, View, Text, Image,TouchableOpacity } from "react-native";
import imagePath from "../constants/imagePath";
import fontFamily from "../styles/fontFamily";
import { moderateScale, width } from "../styles/responsiveSize";

const homeData = [{
    key: 1, profileName: "Mehdi",
    description: "(malla)", time: "10sec ago",
    postHeader: "post header",
    postDescription: `To simply describe a beautiful natural scenery you can use adjective words like Pristine, Stunning, Exquisite, Indescribable etc.`,
    image: imagePath.post_image
},
{
    key: 2, profileName: "hussain",
    description: "(@hussain)",
    time: "10sec ago",
    postHeader: "post header",
    postDescription: `To simply describe a beautiful natural scenery you can use adjective words like Pristine, Stunning, Exquisite, Indescribable etc.`,
    image: imagePath.post_image2
}]
const homeRender = ({ item }) => {
    // console.log(item, "item>>>>")
    return (
        <>

            <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 2, }}>
                    <Image
                        style={{
                            marginTop: 20, height: moderateScale(60), width: width / 6,
                            borderRadius: 15,
                            resizeMode: "stretch"
                        }}
                        source={imagePath.post_image2} />

                </View>
                <View style={{ flex: 8, }}>
                    <View style={{ flexDirection: "row",
                     justifyContent: "space-between" }}>
                       
                            <Text style={{
                                marginTop: 10,
                                fontFamily: fontFamily.BarlowBold
                            }}>{item.profileName}  <Text style={{
                                fontFamily: fontFamily.BarlowBold,
                                paddingLeft: 4
                            }}> {item?.description}</Text> </Text>
                        
                        <TouchableOpacity style={{marginTop:20 }}>
                            <Image source={imagePath.more_vert} />
                        </TouchableOpacity>
                    </View>
                    <Text>{item.time}</Text>
                    <Text style={{ padding: 5, fontFamily: fontFamily.BarlowBold }}>{item.postHeader}</Text>
                    <Text style={{ padding: 5, fontFamily: fontFamily.BarlowSemiBold }}>{item?.postDescription}</Text>
                    <View style={{ width: "100%" }}>
                        <Image
                            style={{ height: width / 1.5, width: "98%", borderRadius: 8 }}
                            source={item.image} />
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 20 }}>
                        <Image
                            style={{ marginLeft: 1 }}
                            source={imagePath.thumb_up} />
                        <Text style={{ paddingLeft: 10 }}>count</Text>

                        <Image
                            style={{ marginLeft: 5 }}
                            source={imagePath.thumb_up} />
                        <Text style={{ paddingLeft: 10 }}>count</Text>

                        <Image
                            style={{ marginLeft: 5 }}
                            source={imagePath.thumb_up} />
                        <Text style={{ paddingLeft: 10 }}>count</Text>

                        <Image
                            style={{ marginLeft: 5 }}
                            source={imagePath.share_icon} />
                    </View>
                </View>
            </View>
        </>
    )
}

const Card = () => {
    return (
        <FlatList
            data={homeData}
            renderItem={homeRender}

        />
    )
}

export default Card;