//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../Components/Header';
import SearchComp from '../../Components/SearchComp';
import TextInputComp from '../../Components/TextInputs';
import WrapperContainer from '../../Components/WrapperContainer';
import fontFamily from '../../styles/fontFamily';
import { moderateScale } from '../../styles/responsiveSize';

const SearchScreen = () => {
    return (
        <WrapperContainer>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
                <View style={{ flex: 1, marginTop: 10 }}>
                    <Header isBackIcon={true} />
                </View>
                <View style={{ flex: 8 }}>
                    <TextInputComp
                        inputview={{
                            borderRadius: 0,
                            borderWidth: 0.4,
                            backgroundColor: "white"
                        }}
                        inputStyle={{ padding: 5, }}
                        placeHolder={"search here..."} />
                </View>
            </View>
            <View style={{
                marginRight: 15,
                paddingHorizontal: 1,
                marginTop: 10,
                borderBottomWidth: 0.9,
                borderRadius: 5,
                justifyContent: "space-evenly",
                flexDirection: "row",

            }}>
                
                    <Text style={{
                        padding: 8,
                        fontSize: 16,
                        fontFamily: fontFamily.BarlowSemiBold

                    }}>Top</Text>
            
                <Text style={{ padding: 8, fontSize: 16, fontFamily: fontFamily.BarlowSemiBold }}>Accounts</Text>
                <Text style={{ padding: 8, fontSize: 16, fontFamily: fontFamily.BarlowSemiBold }}>tags</Text>
                <Text style={{ padding: 8, fontSize: 16, fontFamily: fontFamily.BarlowSemiBold }}>Mehtions</Text>
            </View>
            <View style={{ marginTop: 10 }}>
                <SearchComp />
            </View>
        </WrapperContainer>

    );
};


const styles = StyleSheet.create({

});


export default SearchScreen;
