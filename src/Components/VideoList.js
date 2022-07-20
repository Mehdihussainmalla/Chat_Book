//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import imagePath from '../constants/imagePath';
import { moderateScale } from '../styles/responsiveSize';

const data = [{ key: 1, file: "wildlife", image: imagePath.post_image },
{ key: 2, file: "my uploads on habitual", image: imagePath.post_image2 },
{ key: 3, file: "my uploads on ", image: imagePath.post_image },
{ key: 4, file: "wildlife", image: imagePath.post_image },
{ key: 5, file: "my uploads on habitual", image: imagePath.post_image2 },
{ key: 6, file: "my uploads on ", image: imagePath.post_image },
{ key: 7, file: "wildlife", image: imagePath.post_image },
{ key: 8, file: "my uploads on habitual", image: imagePath.post_image2 },
{ key: 9, file: "my uploads on ", image: imagePath.bgc },]

const VideoList = () => {
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={{
                    marginTop: moderateScale(10),
                    marginLeft: moderateScale(10),
                    borderWidth: moderateScale(0.5),
                }}>

                <Image
                    style={{ height: 110, width: 110 }}
                    source={item.image} />
            </TouchableOpacity>
        )
    }
    return (
        <View >
            <FlatList
                renderItem={renderItem}
                data={data}
                numColumns={3} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default VideoList;
