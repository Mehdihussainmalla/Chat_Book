import React, { useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import CountryPicker, { Flag } from 'react-native-country-picker-modal';
import imagePath from '../constants/imagePath';
import colors from '../styles/colors';
import {
  moderateScale,
  moderateScaleVertical,
  width,
} from '../styles/responsiveSize';

function CountryCodePicker({
  setCountryCode,
  setCountryFlag,
  countryCode,
  countryFlag
}) {


  const onSelect = country => {
    setCountryFlag(country.cca2);
    setCountryCode(country.callingCode[0])
  };
  return (
    <>
      <View
        style={{
          marginRight: moderateScale(5),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          height: moderateScaleVertical(49),
          marginTop: moderateScaleVertical(1),
          // marginLeft: moderateScale(16),
          borderRadius: 5,
          borderWidth: 0.9,


        }}>
        <CountryPicker
          onSelect={onSelect}
          visible={false}
          countryCode={countryFlag}
          withCallingCode={true}
          withCallingCodeButton={countryCode}
          theme={{ onBackgroundTextColor: colors?.black, backgroundColor: colors?.white }}
        />
        <Image
          source={imagePath.drop_down_icon}
          style={{
            height: moderateScale(width / 24),
            width: moderateScale(width / 24),
            resizeMode: 'contain',
            marginLeft: moderateScaleVertical(3),
            tintColor: colors.black,

          }}
        />
      </View>
    </>
  );
}
const style = StyleSheet.create({});

export default CountryCodePicker;
