import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
const Icon = ({iconUrl, width, height, size, color}) => {
  return (
    <View>
      {/* <TouchableOpacity> */}
      <Image
        source={{uri: iconUrl}}
        size={size}
        style={{width: width, height: height, tintColor: color}}
      />
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default Icon;
