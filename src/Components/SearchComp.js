//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import imagePath from '../constants/imagePath';

const data = [{
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
},
{
    key: 3, profileName: "hussain",
    description: "(@hussain)",
    time: "10sec ago",
    postHeader: "post header",
    postDescription: `To simply describe a beautiful natural scenery you can use adjective words like Pristine, Stunning, Exquisite, Indescribable etc.`,
    image: imagePath.post_image
},
{
    key: 4, profileName: "hussain",
    description: "(@hussain)",
    time: "10sec ago",
    postHeader: "post header",
    postDescription: `To simply describe a beautiful natural scenery you can use adjective words like Pristine, Stunning, Exquisite, Indescribable etc.`,
    image: imagePath.post_image2
},]
const SearchComp = () => {


    const renderItem = ({ item }) => {
        return (
            <>
                <View style={{ flex: 1, flexDirection: "row", marginTop: 15, }}>
                    <View style={{ flex: 1.5, }}>
                        <Image
                            style={{ height: 50, width: 50, borderRadius: 10, }}
                            source={item?.image} />

                    </View>
                    <View style={{ flex: 7, marginLeft: 10 }}>
                        <Text style={{ fontWeight: "500", fontSize: 16 }}>{item?.profileName}</Text>
                        <Text>{item?.profileName}</Text>

                    </View>
                    <View style={{ flex: 1.5, marginTop: 4 }}>
                        <Image
                            style={{ marginLeft: 20 }}
                            source={imagePath.delete_icon} />
                    </View>
                </View>

            </>
        )
    }
    return (
        <View>
            <FlatList
                renderItem={renderItem}
                data={data}
                extraData={data}
            />
        </View>

    );
};


const styles = StyleSheet.create({

});


export default SearchComp;
